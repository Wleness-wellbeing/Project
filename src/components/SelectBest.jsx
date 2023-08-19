import React from "react";
import { themeWAve } from "../assets";
import { Link } from "react-router-dom";
import { issues } from "../data";
import IssueCard from "./Cards/IssueCard";

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
            <Link to={props.btn[1]} className="btn-one">
              {props.btn[0]}
            </Link>
          </div>

          <img
            src={themeWAve}
            alt=""
            className="absolute -right-20 top-1/2 w-[480px] -translate-y-1/2"
          />
        </div>
      </div>

      {/* Therapies */}
      <div className="bg-gradient-to-br from-primary-10 to-white font-quicksand">
        <div className="container mx-auto grid gap-4 py-6 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pt-12 xl:grid-cols-3 xl:gap-10 2xl:grid-cols-4 2xl:gap-x-8 2xl:gap-y-14">
          {issues.map((value, index) => {
            return <IssueCard key={index} data={value} />;
          })}
        </div>
      </div>
    </section>
  );
});

export default SelectBest;
