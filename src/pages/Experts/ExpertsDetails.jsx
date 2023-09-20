import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { expertClient, featuredPatient } from "../../assets";
import DoctorsCard from "../../components/DoctorsCard";
import { EXPERTS_URI } from "../../data/api";
import HappyClient from "../../components/HappyClient";
import { expertsClients } from "../../data/clients";
import axios from "axios";

export default function ExpertsDetails() {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI)
      .then((response) => {
        // Handle the successful response
        setDoctorDetails(response.data["experts"]);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <main>
      <header className="container mx-auto py-4">
        <h1 className="text-center">
          <span className="subheading heading-primary">
            Meet Our Specialists
          </span>
        </h1>

        {/* Filters */}
        {/* <div className="flex items-center justify-end self-end lg:w-1/5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="mr-2 cursor-pointer text-3xl hover:fill-[#FF0E1C] "
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </span>
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
        </div> */}
      </header>

      {/* Specialist Doctors */}
      <section>
        <div className="side-spacing grid-cols-[repeat(4, minmax(280, 1fr))] container mx-auto grid items-center gap-5 p-4 sm:grid-cols-2 lg:pb-12 3xl:gap-6">
          {doctorDetails.map((value, i) => {
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
      </section>

      <div className="bg-primary-50/40">
        <div className="container mx-auto py-4 text-center">
          <h2 className="subheading heading-primary">
            What Our Patients Say About Us
          </h2>
          <p className="text-center font-medium leading-5 xl:text-lg xl:leading-6">
            Hear from our valued patients about their experience with us and the
            impact we've made on their lives. Read their heartfelt testimonials
            and discover the quality of care and support we provide.
          </p>
        </div>
      </div>
      <HappyClient data={expertsClients} />
    </main>
  );
}
