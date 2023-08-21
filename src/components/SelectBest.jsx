import React from "react";
import { themeWAve } from "../assets";

const SelectBest = React.forwardRef((props, ref) => {
  return (
    <section className="py-6">
      <div className="relative overflow-x-hidden">
        <div className="container mx-auto text-center">
          <h2 className="subheading lg:w-[640px]">
            <span>Select the best </span>
            <span className="heading-primary">{props.name}</span>
          </h2>

          <div className="relative pt-10">
            <img src={props.image} alt="" className="mx-auto w-fit" />
            {props.features.map((value, index) => {
              return (
                <h5
                  key={index}
                  className={
                    "absolute w-fit text-center text-lg font-bold " + value[2]
                  }
                >
                  <p className="text-primary-300">{value[0]}</p>
                  <p>{value[1]}</p>
                </h5>
              );
            })}
          </div>

          <div className="pb-10 pt-14 text-center" ref={ref}>
            <button className="btn-one" onClick={props.openAssessmentModal}>
              Start the Therapy
            </button>
          </div>

          <img
            src={themeWAve}
            alt=""
            className="absolute -right-20 top-1/2 w-[480px] -translate-y-1/2"
          />
        </div>
      </div>
    </section>
  );
});

export default SelectBest;
