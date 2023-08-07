import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { issuesHeader } from "../../assets";
import { issues } from "../../data";

function Issues() {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:pt-14 2xl:pb-10">
        <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem] lg:hidden">
          <span className="heading-primary block lg:inline-block pb-1">
            Facing Issues
          </span>
          <span className="text-[#383838] lg:block">Let's Talk</span>
        </h1>
        <div className="lg:order-2 lg:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
          {/* Desktop Image */}
          <img src={issuesHeader} alt="" className="w-full object-cover" />
        </div>
        <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 lg:w-[55%] xl:pl-4 lg:pr-16">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem] hidden lg:block">
              <span className="heading-primary block lg:inline-block pb-1">
                Facing Issues
              </span>
              <span className="text-[#383838] lg:block">Let's Talk</span>
            </h1>
          </hgroup>
          <p className="mb-8 text-justify font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            placeat cumque! Ducimus quis nulla, distinctio magni laudantium
            ipsam quam, obcaecati est consequatur accusantium at unde? Optio
            quas est ex aliquam.
          </p>
          <form className="lg:flex lg:space-x-3 space-y-3 lg:space-y-0">
            <label
              htmlFor="search"
              className="flex w-full border-2 border-slate-300 rounded-2xl pr-5"
            >
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full p-4 pl-5 h-full outline-none bg-transparent"
              />
              <button type="submit" className="outline-none">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-slate-400 transition-all hover:text-slate-600"
                />
              </button>
            </label>
          </form>
        </div>
      </header>

      <section className="container mx-auto lg:py-10 p-4 xl:pt-2">
        <h2 className="subheading text-center heading-primary">
          Most Common Health Issues
        </h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-6 py-4 2xl:pt-8 justify-center">
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
              Social Life
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Relationship
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Depressed
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Stress
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6  font-bold rounded-3xl text-slate-400  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Health
            </a>
          </li>
        </ul>

        {/* Issues */}
        <div className="pb-8">
          <div className="grid gap-4 py-6 pt-8 lg:pt-8 grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-12 xl:gap-10 xl:pb-16">
            {issues.map((value) => {
              return (
                <div className="bg-gradient-to-r overflow-hidden from-secondary via-tertiary to-primary-300 rounded-2xl rounded-br-[5rem] lg:rounded-br-[8rem] hover:shadow-xl shadow-slate-300">
                  <div className="py-4 lg:py-6 bg-white m-1 rounded-2xl rounded-br-[5rem] lg:rounded-br-[8rem]">
                    <h4 className="text-center lg:text-2xl font-semibold mb-5">
                      {value.name}
                    </h4>
                    <img
                      src={value.image}
                      alt=""
                      className="mx-auto block w-24 h-24 lg:h-40 lg:w-40 object-cover rounded-2xl 2xl:w-52 2xl:h-52"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <button className="btn-one">View More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Issues;
