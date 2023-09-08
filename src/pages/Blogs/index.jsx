import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// Data
import { blogHeader1, blogHeader2, blogRecent } from "../../assets";
// Component
import BlogCard from "../../components/Cards/BlogCard";
import {
  issuesBlogs,
  medicalBlogs,
  navigatingMidlifeForWomenBlogs,
} from "../../data/blogs";

const allBlogs = [
  ...navigatingMidlifeForWomenBlogs,
  ...issuesBlogs,
  ...medicalBlogs,
];

export default function Blogs() {
  const [blogs, setBlogs] = useState(allBlogs);

  const recentBlogs = [1, 2, 3, 4, 5];

  const blogFilterValues = [
    allBlogs,
    navigatingMidlifeForWomenBlogs,
    issuesBlogs,
    medicalBlogs,
  ];
  const blogFilters = [
    "All Categories",
    "Navigating Miflife for Women",
    "Issues",
    "Medical",
  ];
  const handleBlogsFilter = (index) => {
    console.log(index);
    setBlogs(blogFilterValues[index]);
  };
  return (
    <>
      {/* ========== Header ============= */}
      <header className="bg-gradient-to-b from-primary-50/30 to-transparent">
        <div className="container mx-auto rounded-xl py-14 lg:py-28">
          <div className="mb-4 flex flex-col items-center lg:mb-0 lg:flex-row">
            <div className="lg:w-1/4">
              <img src={blogHeader1} className="w-fit object-cover"></img>
            </div>

            <div className="text-center lg:w-1/2">
              <h1 className="subheading heading-primary">OUR BLOGS</h1>
              <p className="text-sm font-medium lg:text-lg">
                Mental health and physical health are linked, with poor mental
                health leading to physical health problems and vice versa. This
                blog post explores the relationship and offers tips for how to
                prioritize both in daily life.
              </p>
            </div>

            <div className="hidden w-1/4 lg:block">
              <img src={blogHeader2} className="w-full object-cover"></img>
            </div>
          </div>

          {/* =========search button======= */}
          <form class="mx-auto flex items-center justify-between rounded-full border border-gray-300 bg-white lg:w-96">
            <input
              type="text"
              placeholder="Search..."
              class="w-full rounded-l-full py-2.5 pl-5 pr-2 outline-none"
            />
            <button
              type="submit"
              class="rounded-full bg-primary-400 px-4 py-2.5 text-white"
            >
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </button>
          </form>
        </div>
      </header>

      {/* =========== Recent Blog ========= */}
      <section className="container mx-auto py-5 lg:!px-0">
        <div className="mx-auto flex w-fit justify-end pb-8 lg:w-full lg:py-10">
          <button className="rounded-l-lg bg-primary-400 px-8 py-3 font-bold text-white">
            Recent
          </button>
          <button className="rounded-r-lg bg-slate-200 px-8 py-3 font-bold text-primary-400">
            Popular
          </button>
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          className="blog-categories !overflow-x-clip overflow-y-visible pb-2 lg:pb-14"
          pagination={{ clickable: true }}
        >
          {recentBlogs.map((value, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="items-center rounded-xl lg:flex">
                  <div className="lg:w-3/5">
                    <img src={blogRecent} className="w-full object-cover"></img>
                  </div>
                  <div className="pt-3 xs:w-full sm:w-full lg:w-2/5 lg:pl-12">
                    <h2 className="pb-2 text-xl font-bold lg:pb-6 lg:text-5xl">
                      Maintain a good habit with yourself
                    </h2>
                    <p className="text-lg font-medium">
                      <span className="mr-1">
                        Lorem ipsum dolor sit amet consectetur. Neque turpis
                        faucibus eget magna est.Neque turpis faucibus eget magna
                        est.
                      </span>
                      <span className="text-base font-bold text-primary-500">
                        Read More
                      </span>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Filterable Blogs */}
      <section className="container mx-auto lg:!px-0">
        {/* ============== Filters ============= */}
        <ul className="flex flex-wrap justify-center gap-2 pb-8 pt-12 lg:justify-between lg:gap-x-14 lg:gap-y-6 lg:pt-5 2xl:py-8">
          {blogFilters.map((value, index) => {
            return (
              <li key={index} onClick={() => handleBlogsFilter(index)}>
                <span className="inline-block cursor-pointer rounded-3xl bg-primary-50/50 px-6 py-2.5 text-xs font-bold text-slate-900 transition-colors hover:bg-primary-50 md:text-base">
                  {value}
                </span>
              </li>
            );
          })}
        </ul>

        {/* ============== Blogs ============= */}
        <div className="grid gap-4 rounded-xl sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {blogs.map((value, i) => {
            return <BlogCard key={i} data={value} />;
          })}
        </div>

        {/* Dot Pagination */}
        <div class="my-8 flex items-center justify-center pt-4">
          <div class="font-sm mr-4 flex h-12  w-12 items-center justify-center rounded-full bg-primary-500 text-xl text-white hover:bg-primary-300">
            1
          </div>
          <div class="font-sm mr-4 flex  h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl text-primary-500 hover:bg-slate-300">
            2
          </div>
          <div class="font-sm mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-xl text-primary-500 hover:bg-slate-200">
            3
          </div>
          <div class="font-sm mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-500 bg-primary-500 text-xl text-white hover:bg-slate-200">
            <FontAwesomeIcon
              icon={faAnglesRight}
              className="  hover:text-slate-600"
            />
          </div>
        </div>
      </section>
    </>
  );
}
