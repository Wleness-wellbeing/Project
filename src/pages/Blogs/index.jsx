import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// Data
import { blogHeader1, blogHeader2, blogRecent } from "../../assets";
import { blogsData } from "../../data";
// Component
import BlogCard from "../../components/Cards/BlogCard";

export default function Blogs() {
  const recentBlogs = [1, 2, 3, 4, 5];

  return (
    <>
      <main className="py-6">
        {/* ========== Header ============= */}
        <header className="container mx-auto rounded-xl bg-primary-50/30 py-12">
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
          <form class="mx-auto flex w-96 items-center justify-between rounded-full border border-gray-300 bg-white">
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
        </header>

        {/* =========== Recent Blog ========= */}
        <section className="container mx-auto !px-0">
          <div className="flex justify-end py-10">
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
            className="!overflow-x-clip overflow-y-visible pb-12"
            pagination={{ clickable: true }}
          >
            {recentBlogs.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="items-center rounded-xl 2xl:flex">
                    <div className="lg:w-3/5">
                      <img
                        src={blogRecent}
                        className="w-full object-cover"
                      ></img>
                    </div>
                    <div className="w-2/5 pl-12 pt-3 xs:w-full sm:w-full lg:w-2/5 ">
                      <h2 className="pb-6 text-5xl font-bold">
                        Maintain a good habit with yourself
                      </h2>
                      <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur. Neque turpis
                        faucibus eget magna est.Neque turpis faucibus eget magna
                        est.
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
        <section className="container mx-auto !px-0">
          {/* ============== Filters ============= */}
          <ul className="flex flex-wrap justify-between gap-x-14 gap-y-6 py-4 2xl:py-8">
            <li>
              <span className="rounded-3xl bg-primary-50 px-6 py-2.5 font-bold text-slate-900">
                All Categories
              </span>
            </li>
            <li>
              <span className="rounded-3xl px-6 py-2.5 font-bold text-slate-400 transition-all hover:bg-primary-50 hover:text-slate-900">
                Mental Peace
              </span>
            </li>
            <li>
              <span className="rounded-3xl px-6 py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900">
                Social Life
              </span>
            </li>
            <li>
              <span className="rounded-3xl px-6 py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900">
                Culture
              </span>
            </li>
            <li>
              <span className="rounded-3xl px-6 py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900">
                Natural
              </span>
            </li>
            <li>
              <span className="rounded-3xl px-6  py-2.5 font-bold text-slate-400  transition-all hover:bg-primary-50 hover:text-slate-900">
                Travel
              </span>
            </li>
          </ul>

          {/* ============== Blogs ============= */}
          <div className="grid grid-cols-3 gap-4 rounded-xl">
            {blogsData.map((value, i) => {
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
      </main>
    </>
  );
}
