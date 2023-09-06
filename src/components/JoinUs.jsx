import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// Data
import { joinUsList } from "../data/navigation";

function JoinUs({ isOpen, onClose }) {
  if (!isOpen) return null;

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".joinus")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-none backdrop-brightness-50 backdrop-filter">
      <div className="joinus relative flex w-[90%] flex-col items-center rounded-lg bg-white p-6 shadow-md md:w-1/2 md:flex-row md:p-20">
        <div className="">
          <h2 className="mb-4 text-center text-4xl font-extrabold text-primary-500 md:text-7xl">
            Join Us
          </h2>
          <p className="text-center text-sm font-semibold md:text-base">
            Do you wish to become a mental health warrior? Save lives and make a
            difference! Join our noble cause, choose your expertise, and be part
            of an amazing team dedicated to improving mental well-being
            worldwide today.
          </p>
          <div className="mt-4 grid grid-cols-2 justify-center gap-y-4 lg:grid-cols-4">
            {joinUsList.map((value, index) => {
              return (
                <figure key={index}>
                  <div>
                    <Link to={value.slug} onClick={onClose} className="w-fit">
                      <img
                        src={value.image}
                        alt={value.name}
                        className="mx-auto mb-1 h-24 w-24 transition-all hover:scale-105 md:h-28 md:w-28"
                      />
                    </Link>
                  </div>
                  <figcaption>
                    <h5 className="text-center text-xs font-semibold text-primary-500 md:text-base">
                      <Link to={value.slug} onClick={onClose}>
                        {value.name}
                      </Link>
                    </h5>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute right-5 top-5 cursor-pointer text-3xl"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default JoinUs;
