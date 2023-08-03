import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import { blogsData } from "../../data";

import { blogHeader1, blogHeader2, blogRecent } from "../../assets";

export default function Blogs() {
  return (
    <>
      <main className="container mx-auto py-6">
        {/* ==========our blogs============= */}
        <section className="bg-primary-50/30 py-12 rounded-xl">
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
          <div class="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search..."
              class="border border-gray-300 rounded-l-lg py-2 px-4 w-64 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button class="bg-primary-500 text-white rounded-r-lg px-4 py-2">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-white  hover:text-slate-600"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 15l-4-4m0 0l-4 4m4-4V3"
              ></path>
            </button>
          </div>
        </section>

        {/* ===========slider butoon========= */}
        <div class="sm:hidden">
          <select
            id="tabs"
            class="bg-primary-500 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option>Recent</option>
            <option>Popular</option>
          </select>
        </div>
        <ul class="hidden  py-4 text-base font-medium text-center  rounded-lg sm:flex  justify-end ">
          <li class="">
            <a
              href="#"
              class="inline-block p-4 text-white bg-primary-500 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none "
              aria-current="page"
            >
              Recent
            </a>
          </li>
          <li class="">
            <a
              href="#"
              class="inline-block  p-4 bg-slate-200 text-primary-500 hover:text-primary-500  font-bold rounded-r-lg hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none"
            >
              Popular
            </a>
          </li>
        </ul>

        {/* =========Maintain A good habit ======= */}
        <div className="2xl:flex rounded-xl  items-center  sm:grid xs:grid">
          <div>
            <img src={blogRecent} className="w-full object-cover"></img>
          </div>
          <div className="w-2/5 pl-12 sm:w-full pt-3 xs:w-full ">
            <h2 className="font-bold pb-6 text-5xl">
              Maintain a good habit with yourself
            </h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget
              magna est.Neque turpis faucibus eget magna est.
              <span className="text-primary-500 font-bold text-base">
                Read More
              </span>
            </p>
          </div>
        </div>
        {/* ***************************dot dot dot  */}
        <div className="flex space-x-1 pt-10 w-fit mx-auto">
          <span className="w-3 h-3 block rounded-full bg-slate-500" />
          <span className="w-3 h-3 block rounded-full bg-slate-500" />
          <span className="w-3 h-3 block rounded-full bg-primary-300" />
          <span className="w-3 h-3 block rounded-full bg-slate-500" />
          <span className="w-3 h-3 block rounded-full bg-slate-500" />
        </div>

        {/* slider category */}

        <ul className="flex flex-wrap gap-x-14 gap-y-6 py-4 2xl:pt-8 justify-center">
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-900 font-bold bg-primary-50 rounded-3xl"
            >
              All Categories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Mental Peace
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Social Life
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Culture
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Natural
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6  font-bold rounded-3xl text-slate-400  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Travel
            </a>
          </li>
        </ul>

        {/* ==============cards============= */}

        <div className=" rounded-xl grid grid-cols-3  gap-4 ">
          {blogsData.map(
            (
              value,
              index // Don't forget to adgrid 'index' to the map function
            ) => (
              <div key={index} className="flex flex-col p-2 ">
                <img src={value.image} className="w-full" alt="..." />
                <div className="para">
                  <h5 className="text-lg text-black font-black tracking-widest mb-2 uppercase">
                    {value.heading}
                  </h5>
                  <p className="para">{value.subheading}</p>
                  <a
                    href="#"
                    className="bg-primary-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded-3xl"
                  >
                    Read more
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {/* dot dot bottom */}

        <div class="flex items-center pt-4 justify-center">
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
      </main>
    </>
  );
}
