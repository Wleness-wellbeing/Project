import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { SINGLE_BLOG_URI } from "../../data/api";

export default function BlogDetails() {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState({});
  const [blogCategories, setBlogCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(SINGLE_BLOG_URI + "/" + slug)
      .then((response) => {
        // Handle the successful response
        setBlogDetails(response.data.blog_details);
        setBlogCategories(response.data.categories);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        setLoading(false);
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <>
      <main className="container mx-auto lg:flex">
        <article className="pb-5 lg:w-[70%]">
          <div className="mb-3">
            <img
              src={blogDetails.header_image}
              alt=""
              className="w-full rounded-3xl object-cover object-top"
            />
          </div>
          <h1 className="subheading">{blogDetails.title}</h1>

          <p className="mb-4 font-medium">{blogDetails.desc}</p>
          <div
            id="blog-content"
            className="space-y-6"
            dangerouslySetInnerHTML={{ __html: blogDetails.content }}
          />
        </article>

        <section className="px-5 lg:w-[30%]">
          <form
            action=""
            method="get"
            className="mx-auto flex w-full rounded-3xl border-2"
          >
            <label htmlFor="search" className="w-full">
              <input
                type="search"
                name="search"
                id="search"
                className="w-full rounded-3xl px-4 py-2 outline-none"
                placeholder="Search"
              />
            </label>

            <button className="rounded-3xl bg-primary-300 px-3 py-2 text-white transition-all hover:bg-primary-400">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          <ul className="mt-4 space-y-3">
            <li className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-semibold">
              All Categories
            </li>
            {blogCategories.map((value, i) => {
              return (
                <li className="flex justify-between px-4 font-medium hover:text-slate-900">
                  <span>{value.category}</span>
                  <span>{value.total_blogs}</span>
                </li>
              );
            })}
            <Link to="/blogs" className="block pt-4">
              <li className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-semibold transition-all hover:bg-primary-50">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-4" />
                <span>Back</span>
              </li>
            </Link>
          </ul>
        </section>
      </main>
    </>
  );
}
