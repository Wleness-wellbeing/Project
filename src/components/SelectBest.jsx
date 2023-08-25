import React from "react";
import { themeWAve } from "../assets";
import { textColorize } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SelectBest = React.forwardRef((props, ref) => {
  return (
    <section className="py-3 lg:py-6">
      <div className="relative overflow-x-clip">
        <div className="container mx-auto text-center">
          <h2 className="subheading lg:w-[640px]">
            {textColorize(props.heading)}
          </h2>

          <div className="relative pt-2 md:flex md:gap-x-8 lg:pt-10">
            <div className="md:w-1/2">
              <img src={props.image} alt="" className="mx-auto w-full" />
            </div>
            <ul className="grid items-center gap-y-3 pl-5 pt-5 md:w-1/2 md:py-8">
              {props.features.map((value, index) => {
                return (
                  <li
                    key={index}
                    className="w-fit text-center text-base font-bold lg:text-lg"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="mr-4 text-xl text-primary-300"
                    />
                    <span className="text-primary-300">{value[0]} </span>
                    <span>{value[1]}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pb-6 pt-7 text-center lg:pb-10 lg:pt-14" ref={ref}>
            <button className="btn-one" onClick={props.openAssessmentModal}>
              Start the Therapy
            </button>
          </div>

          <img
            src={themeWAve}
            alt=""
            className="absolute -right-36 -top-14 w-64 -translate-y-1/2 lg:-right-20 lg:top-1/2 lg:w-[480px]"
          />
        </div>
      </div>
    </section>
  );
});

export default SelectBest;
