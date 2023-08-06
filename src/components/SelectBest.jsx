import React from "react";
import DoctorsCard from "./DoctorsCard";
import { themeWAve } from "../assets";

export default function SelectBest(props) {
  return (
    <section className="py-6">
      <div className="relative overflow-x-hidden">
        <div className="container mx-auto">
          <h2 className="subheading text-center lg:w-[640px] mx-auto">
            <span>Select the best </span>
            <span className="heading-primary">{props.name}</span>
          </h2>

          <div className="pt-10 relative">
            <img src={props.image} alt="" className="w-fit mx-auto" />
            {props.features.map((value, index) => {
              return (
                <h5
                  key={index}
                  className={
                    "font-bold text-lg absolute w-fit text-center " + value[2]
                  }
                >
                  <p className="text-primary-300">{value[0]}</p>
                  <p>{value[1]}</p>
                </h5>
              );
            })}
          </div>

          <div className="text-center pt-14 pb-10">
            <button className="btn-one">{props.btn}</button>
          </div>

          <img
            src={themeWAve}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 -right-20 w-[480px]"
          />
        </div>
      </div>

      {/* Therapy Doctors */}
      <div className="relative">
        <div className="container side-spacing mx-auto p-4 grid grid-cols-[repeat(4, minmax(280, 1fr))] items-center sm:grid-cols-2 gap-5 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 3xl:gap-10">
          {props.doctors.map((value, i) => {
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
        <img
          src={themeWAve}
          alt=""
          className="absolute -top-56 -left-52 w-[480px]"
        />
      </div>
    </section>
  );
}
