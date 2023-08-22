import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { expertClient, featuredPatient } from "../../assets";
import DoctorsCard from "../../components/DoctorsCard";
import { allExperts } from "../../data/doctors";
import HeartIcon from "../../components/icon/HeartIcon";

export default function ExpertsDetails() {
  return (
    <main>
      <header className="container mx-auto flex flex-col items-center py-4 lg:flex-row xl:py-6 2xl:py-8">
        <h1 className=" lg:w-4/5">
          <span className="subheading heading-primary">
            Meet Our Specialists
          </span>
        </h1>

        {/* Filters */}
        <div className="flex items-center justify-end self-end lg:w-1/5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="mr-2 cursor-pointer text-3xl hover:fill-[#FF0E1C] "
            >
              {/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </span>
          {/* Filter */}
          <span className="cursor-pointer">
            <svg
              width="32"
              height="20"
              viewBox="0 0 32 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="15"
                y="2"
                width="17"
                height="5"
                rx="2.5"
                fill="#262626"
                fill-opacity="0.88"
              />
              <rect
                y="13"
                width="17"
                height="5"
                rx="2.5"
                fill="#262626"
                fill-opacity="0.88"
              />
              <circle
                cx="8.5"
                cy="4.5"
                r="4.5"
                fill="#262626"
                fill-opacity="0.88"
              />
              <circle
                cx="23.5"
                cy="15.5"
                r="4.5"
                fill="#262626"
                fill-opacity="0.88"
              />
            </svg>
          </span>
        </div>
      </header>

      {/* Specialist Doctors */}
      <section>
        <div className="side-spacing grid-cols-[repeat(4, minmax(280, 1fr))] container mx-auto grid items-center gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 3xl:gap-10">
          {allExperts.map((value, i) => {
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
        <div className="py-6 text-center lg:pb-0">
          <button className="btn-one">Show More..</button>
        </div>
      </section>

      {/* Clients Testimonials */}
      <section className="container mx-auto pt-7 lg:pt-14">
        <div className="mb-6  text-center">
          <h2 className="subheading heading-primary mb-4">
            What Our Patients Say About Us
          </h2>
          <p className="mx-auto text-center font-medium leading-5 xl:text-lg xl:leading-6">
            Hear from our valued patients about their experience with us and the
            impact we've made on their lives. Read their heartfelt testimonials
            and discover the quality of care and support we provide.
          </p>
        </div>
        <div className="md:flex md:items-start md:gap-4 lg:py-10">
          <div className="md:flex md:w-2/5">
            <img
              src={featuredPatient}
              alt="Testimonials"
              className="w-full object-cover"
            />
          </div>
          <div className="md:w-3/5">
            <figure className="flex h-full items-start rounded-xl rounded-br-[4rem] border-2 border-slate-200 bg-white p-4 shadow-xl sm:rounded-br-[7rem] lg:px-10 lg:py-12">
              <div className="mr-6 w-3/12">
                <img
                  src={expertClient}
                  alt=""
                  className="block w-full object-cover"
                />
              </div>
              <figcaption className="w-3/4">
                <h4 className="text-lg font-semibold sm:text-xl">John Kuch</h4>
                <p className="mb-2 flex items-center">
                  <span className="mr-2 block text-lg font-semibold">4/5</span>
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
                <p className="mb-1 text-sm font-medium xs:pr-3 sm:text-lg md:text-base md:leading-5">
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
