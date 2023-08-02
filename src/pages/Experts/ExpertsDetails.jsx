import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { specialist1, expertClient, featuredPatient } from "../../assets";

export default function ExpertsDetails() {
  let specialists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <main className="py-4 xl:py-6">
      <div className="flex flex-col lg:flex-row container mx-auto items-center pb-8">
        <h1 className="subheading heading-primary lg:w-4/5">
          Meet Our Specialists
        </h1>

        {/* Filters */}
        <div className="flex lg:w-1/5 justify-end items-center">
          <span>
            <FontAwesomeIcon icon={faHeart} className="text-3xl mr-2" />
          </span>
          <button className="pl-4 pr-6 py-2 border-2 border-primary-300 rounded-full">
            <span className="mr-2 font-semibold px-2">Filter</span>
            <FontAwesomeIcon icon={faFilter} className="text-primary-300" />
          </button>
        </div>
      </div>

      {/* Specialist Doctors */}
      <section>
        <div className="bg-primary-50/50">
          <div className="md:py-12">
            <div className="container side-spacing mx-auto p-4 grid grid-cols-[repeat(4, minmax(280, 1fr))] items-center sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 3xl:gap-10">
              {specialists.map((i) => {
                return (
                  <figure className="p-6 pb-8 bg-white rounded-2xl rounded-br-[7rem] border-2 border-primary-300">
                    <div className="mb-3 relative">
                      <img
                        src={specialist1}
                        alt=""
                        className="w-full object-cover block"
                      />
                      <span className="font-semibold bg-white px-2 absolute left-0 bottom-0 text-primary-300">
                        Consultant
                      </span>
                    </div>
                    <figcaption>
                      <h3 className="font-semibold text-2xl xs:text-3xl">
                        Dr. Christina
                      </h3>
                      <h4 className="text-slate-500 font-semibold text-lg xs:text-xl">
                        6+ yrs of experience
                      </h4>
                      <p className="leading-5 text-slate-600 mb-8 xs:text-lg">
                        Lorem ipsum dolor sit amet conse ctetur adipisicing
                        elit.
                      </p>
                      <a href="/" className="btn-one">
                        Book Now
                      </a>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
            <div className="text-center py-6 lg:pb-0">
              <button className="btn-one">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Testimonials */}
      <section className="pt-7 lg:pt-14 container mx-auto">
        <div className="mb-6">
          <h2 className="subheading mb-4 text-center heading-primary">
            What Our Patients Say About Us
          </h2>
          <p className="text-center leading-5 mx-auto xl:text-lg xl:leading-6">
            Hear from our valued patients about their experience with us and the
            impact we've made on their lives. Read their heartfelt testimonials
            and discover the quality of care and support we provide.
          </p>
        </div>
        <div className="md:flex md:items-start md:gap-4 lg:py-10">
          <div className="md:w-2/5 md:flex">
            <img
              src={featuredPatient}
              alt="Testimonials"
              className="w-full object-cover"
            />
          </div>
          <div className="md:w-3/5">
            <figure className="flex items-start rounded-xl rounded-br-[4rem] bg-white p-4 shadow-xl border-2 border-slate-200 sm:rounded-br-[7rem] lg:px-10 h-full lg:py-12">
              <div className="w-3/12 mr-6">
                <img
                  src={expertClient}
                  alt=""
                  className="w-full object-cover block"
                />
              </div>
              <figcaption className="w-3/4">
                <h4 className="text-lg font-semibold sm:text-xl">John Kuch</h4>
                <p className="flex items-center mb-2">
                  <span className="text-lg font-semibold block mr-2">4/5</span>
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                  </span>
                </p>
                <p className="mb-1 text-sm xs:pr-3 sm:text-lg md:text-base md:leading-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt laudantium mollitia id.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
