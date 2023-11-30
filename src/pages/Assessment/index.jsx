import React from "react";
import { Link } from "react-router-dom";
import { assessments } from "../../data/mainAssessment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function MainAssessment() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="mb-8 grid items-center justify-between md:mb-14 lg:grid-cols-3">
          <Link
            to="/"
            className="mb-4 flex items-center justify-self-start rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold hover:bg-gray-200 md:mb-0 md:rounded-lg"
          >
            <FontAwesomeIcon icon={faAngleLeft} className="text-lg md:mr-2" />
            <span className="hidden md:block">Back</span>
          </Link>

          <h2 className="text-center text-xl font-bold text-gray-600 xl:text-2xl">
            What are you struggling with?
          </h2>

          <small></small>
        </div>

        <div className="mb-6 grid grid-cols-2 justify-center gap-2 lg:grid-cols-4">
          {assessments.map((value, i) => {
            return (
              <Link
                to={"/assessment/" + value.slug}
                key={i}
                className="mx-auto inline-block w-full cursor-pointer rounded-lg border-2 bg-white py-6 shadow-xl shadow-gray-300 transition-all hover:border-primary-300 hover:shadow-lg md:w-4/5 md:px-10"
              >
                <img
                  src={value.image}
                  alt="stress icon"
                  className="mx-auto mb-3 w-10 lg:w-16"
                />
                <span className="block text-center text-lg font-semibold">
                  {value.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
