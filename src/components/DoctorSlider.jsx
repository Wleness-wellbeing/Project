import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { textColorize } from "../utils";
import { Link } from "react-router-dom";

export default function DoctorSlider(props) {
  return (
    <section className="container relative mx-auto mb-5 mt-5 lg:mt-0">
      {/* ========== Soul Healers ========== */}
      <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
        <h2 className="subheading sm:pb-0 lg:mb-4">
          {textColorize(props.data.heading)}
        </h2>
        <p className="para">{props.data.desc}</p>
      </div>

      {/* Doctors */}
      <div className="mb-8 grid gap-6 lg:mb-12 lg:grid-cols-5">
        {props.data.doctors.map((value, index) => {
          return (
            <div
              key={index}
              className={
                value.size +
                " w-fit rounded-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 p-[2px] shadow-2xl"
              }
            >
              <img
                src={value.image}
                alt="Doctors"
                className="box-border block w-full object-cover p-1"
              />
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="pb-6 lg:pb-10">
        <div className="flex items-center justify-between">
          <button className="mr-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-300 lg:h-12 lg:w-12">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="text-2xl text-primary-300 lg:text-4xl"
            />
          </button>
          <Link to={props.data.button.slug} className="btn-one mx-auto">
            {props.data.button.text}
          </Link>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-300 lg:h-12 lg:w-12">
            <FontAwesomeIcon
              icon={faCaretRight}
              className="text-2xl text-white lg:text-4xl"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
