import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { textColorize } from "../utils";
import { Link } from "react-router-dom";

export default function DoctorSlider(props) {
  return (
    <section className="container mx-auto mb-5 relative">
      {/* ========== Soul Healers ========== */}
      <div className="pb-6 sm:pt-6 lg:pb-14 2xl:py-14">
        <h2 className="subheading text-[1.8rem] sm:pb-0 text-center text-[#383838] lg:mb-4">
          {textColorize(props.data.heading)}
        </h2>
        <p className="para text-center">{props.data.desc}</p>
      </div>
      {/* Doctors */}
      <div className="grid lg:grid-cols-5 gap-6 mb-8 lg:mb-12">
        {props.data.doctors.map((value, index) => {
          return (
            <div key={index} className={value.size}>
              <img
                src={value.image}
                alt="Doctors"
                className="w-full block object-cover p-1 box-border"
              />
            </div>
          );
        })}
      </div>
      {/* Buttons */}
      <div className="pb-6 lg:pb-10">
        <div className="flex justify-between items-center">
          <button className="lg:w-12 lg:h-12 w-8 h-8 border-2 border-primary-300 rounded-full mr-6 flex justify-center items-center absolute top-[55%] left-4 -translate-y-[55%] lg:-translate-y-0 lg:static">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="text-primary-300 text-2xl lg:text-4xl"
            />
          </button>
          <Link to={props.data.button.slug} className="btn-one mx-auto">
            {props.data.button.text}
          </Link>
          <button className="bg-primary-300 lg:w-12 lg:h-12 w-8 h-8 rounded-full flex justify-center items-center absolute top-[55%] right-4 -translate-y-[55%] lg:-translate-y-0 lg:static">
            <FontAwesomeIcon
              icon={faCaretRight}
              className="text-white text-2xl lg:text-4xl"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
