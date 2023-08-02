import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Data
import { Elipse1, Elipse2, Elipse3 } from "../assets";

const joinUsList = [
  {
    image: Elipse1,
    name: "Campus Ambassador",
    slug: "/join-campus-ambassador",
  },
  {
    image: Elipse2,
    name: "Therapist",
    slug: "/join-therapist",
  },
  {
    image: Elipse3,
    name: "Psychiatrist",
    slug: "/join-psychiatrist",
  },
];
function JoinUs({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-none backdrop-brightness-50">
      <div className="bg-white p-6 md:p-20 rounded-lg shadow-md flex flex-col md:flex-row items-center md:w-1/2 relative">
        <div className="">
          <h2 className="text-primary-500 font-extrabold text-4xl md:text-7xl text-center mb-4">
            Join Us
          </h2>
          <p className="text-center text-sm font-semibold md:text-base">
            Do you wish to become a mental health warrior? Save lives and make a
            difference! Join our noble cause, choose your expertise, and be part
            of an amazing team dedicated to improving mental well-being
            worldwide today.
          </p>
          <div className="grid lg:grid-cols-3 mt-4 justify-center">
            {joinUsList.map((value, index) => {
              return (
                <figure key={index}>
                  <Link to={value.slug}>
                    <img
                      src={value.image}
                      alt={value.name}
                      className="h-24 w-24 md:h-32 md:w-32 mb-1 mx-auto hover:scale-105 transition-all"
                    />
                    <figcaption>
                      <h5 className="text-primary-500 font-semibold text-center text-xs md:text-base">
                        {value.name}
                      </h5>
                    </figcaption>
                  </Link>
                </figure>
              );
            })}
          </div>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-3xl absolute top-5 right-5 cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default JoinUs;
