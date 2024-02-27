import axios from "axios";
import React, { useEffect, useState } from "react";
import { BLOGS_URI } from "../../data/api";
import { Link } from "react-router-dom";

function HomeBlogs() {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch blogs data
  useEffect(() => {
    axios
      .get(BLOGS_URI)
      .then((response) => {
        setBlogs(response.data.blogs);
        setLoading(false);
        console.log(response.data.blogs);
      })
      .catch((error) => console.error(error));
    return () => {};
  }, []);

  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <section className="container mx-auto py-12 lg:py-14">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="subheading">Blogs</h2>
        <Link to="/blogs" className="btn-one">
          Explore more
        </Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
        {blogs.slice(0, 3).map((value, i) => {
          return (
            <div key={i} className="flex flex-col justify-between">
              <img
                src={value.thumbnail_image}
                alt={value.title}
                className="mb-4 rounded-lg"
              />
              <div className="mb-6">
                <h2 className="mb-3 text-xl font-bold">{value.title}</h2>
                <p className="font-semibold text-slate-500">
                  {value.desc.length > 150
                    ? value.desc.substring(0, 150)
                    : value.desc}
                </p>
              </div>
              <Link to={`/blog/${value.slug}`} className="btn-one inline-block">
                Read More
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default HomeBlogs;
