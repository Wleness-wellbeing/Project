import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import { blogsData } from "../../data";

import { blogHeader1, blogHeader2, blogRecent } from "../../assets";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      <main className="py-6">
        {/* ========== Header ============= */}
        <header className="bg-primary-50/30 py-12 rounded-xl container mx-auto">
          <div className="flex items-center">
            <div className="w-1/4">
              <img src={blogHeader1} className="w-fit object-cover"></img>
            </div>

            <div className="w-1/2 text-center">
              <h1 className="subheading heading-primary">OUR BLOGS</h1>
              <p className="text-lg">
                Mental health and physical health are linked, with poor mental
                health leading to physical health problems and vice versa. This
                blog post explores the relationship and offers tips for how to
                prioritize both in daily life.
              </p>
            </div>

            <div className="w-1/4">
              <img src={blogHeader2} className="w-full object-cover"></img>
            </div>
          </div>

          {/* =========search button======= */}
          <form class="flex items-center justify-between border border-gray-300 w-96 mx-auto bg-white rounded-full">
            <input
              type="text"
              placeholder="Search..."
              class="rounded-l-full py-2.5 pl-5 pr-2 outline-none w-full"
            />
            <button
              type="submit"
              class="bg-primary-400 text-white rounded-full px-4 py-2.5"
            >
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </button>
          </form>
        </header>

        {/* =========== Recent Blog ========= */}
        <section className="container mx-auto !px-0">
          <div className="flex justify-end py-10">
            <button className="px-8 py-3 bg-primary-400 font-bold text-white rounded-l-lg">
              Recent
            </button>
            <button className="px-8 py-3 bg-slate-200 font-bold text-primary-400 rounded-r-lg">
              Popular
            </button>
          </div>

          <div className="2xl:flex rounded-xl items-center sm:grid xs:grid">
            <div className="lg:w-3/5">
              <img src={blogRecent} className="w-full object-cover"></img>
            </div>
            <div className="w-2/5 lg:w-2/5 pl-12 sm:w-full pt-3 xs:w-full ">
              <h2 className="font-bold pb-6 text-5xl">
                Maintain a good habit with yourself
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus
                eget magna est.Neque turpis faucibus eget magna est.
                <span className="text-primary-500 font-bold text-base">
                  Read More
                </span>
              </p>
            </div>
          </div>

          <div className="flex space-x-1 pt-8 w-fit mx-auto">
            <span className="w-3 h-3 block rounded-full bg-slate-400" />
            <span className="w-3 h-3 block rounded-full bg-slate-400" />
            <span className="w-3 h-3 block rounded-full bg-primary-300" />
            <span className="w-3 h-3 block rounded-full bg-slate-400" />
            <span className="w-3 h-3 block rounded-full bg-slate-400" />
          </div>
        </section>

        {/* Filterable Blogs */}
        <section className="container mx-auto !px-0">
          {/* ============== Filters ============= */}
          <ul className="flex flex-wrap gap-x-14 gap-y-6 py-4 2xl:py-8 justify-between">
            <li>
              <span className="py-2.5 px-6 text-slate-900 font-bold bg-primary-50 rounded-3xl">
                All Categories
              </span>
            </li>
            <li>
              <span className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl hover:text-slate-900 hover:bg-primary-50 transition-all">
                Mental Peace
              </span>
            </li>
            <li>
              <span className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all">
                Social Life
              </span>
            </li>
            <li>
              <span className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all">
                Culture
              </span>
            </li>
            <li>
              <span className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all">
                Natural
              </span>
            </li>
            <li>
              <span className="py-2.5 px-6  font-bold rounded-3xl text-slate-400  hover:text-slate-900 hover:bg-primary-50 transition-all">
                Travel
              </span>
            </li>
          </ul>

          {/* ============== Blogs ============= */}
          <div className=" rounded-xl grid grid-cols-3 gap-4">
            {blogsData.map((value, index) => (
              <figure key={index} className="flex flex-col p-2 ">
                <div>
                  <img src={value.image} className="w-full" alt="..." />
                </div>
                <figcaption>
                  <h5 className="text-lg text-black font-bold tracking-wider my-2 uppercase">
                    {value.heading}
                  </h5>
                  <p className="text-lg font-medium">{value.subheading}</p>
                  <Link
                    to=""
                    className="bg-primary-400 hover:bg-primary-500 transition-all font-medium text-white px-4 py-2 inline-block mt-4 rounded-3xl"
                  >
                    Read more
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* dot dot bottom */}
          <div class="flex items-center my-8 pt-4 justify-center">
            <div class="rounded-full bg-primary-500 text-white hover:bg-primary-300  font-sm text-xl h-12 w-12 flex items-center justify-center mr-4">
              1
            </div>
            <div class="rounded-full bg-white text-primary-500  hover:bg-slate-300 border-primary-500 border-2 font-sm text-xl h-12 w-12 flex items-center justify-center mr-4">
              2
            </div>
            <div class="rounded-full bg-white text-primary-500 border-primary-500 hover:bg-slate-200 border-2 font-sm text-xl h-12 w-12 flex items-center justify-center mr-4">
              3
            </div>
            <div class="rounded-full bg-primary-500 text-white border-primary-500 hover:bg-slate-200 border-2 font-sm text-xl h-12 w-12 flex items-center justify-center mr-4">
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="  hover:text-slate-600"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
