import React from "react";
import { textColorize } from "../utils";
import { Link } from "react-router-dom";

export default function ActivityHeader(props) {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center rounded-3xl py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:pt-6 2xl:pb-10 relative">
        <div className="lg:order-2 xl:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
          {/* Desktop Image */}
          <img src={props.image} alt="" className="w-full object-cover" />
        </div>
        <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 xl:w-[55%] xl:pl-0 -m-5 lg:m-0 p-5 rounded-3xl lg:rounded-none">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem]">
              {textColorize(props.title)}
            </h1>
            <h5 className="text-2xl font-semibold mb-8">
              {textColorize(props.desc)}
            </h5>
          </hgroup>
          <button className="btn-one mr-2">Explore More</button>
          <button className="btn-one !bg-transparent hover:!bg-primary-400 border-2 hover:!text-white !text-[#383838] !w-full !border-primary-400 lg:!w-fit !py-2">
            Book Now
          </button>
        </div>

        {/* BreadCrump */}
        {/* <p className="absolute top-5 left-5 font-semibold text-lg">
          <span>Activities / </span>
          <span className="text-primary-400">Meditation</span>
        </p> */}
      </header>
    </>
  );
}
