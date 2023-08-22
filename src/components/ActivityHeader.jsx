import React from "react";
import { textColorize } from "../utils";

export default function ActivityHeader(props) {
  return (
    <>
      <header className="container relative mx-auto flex flex-col items-center rounded-3xl py-2 lg:flex-row lg:py-6 2xl:justify-between 2xl:pb-10 2xl:pt-6">
        <div className="mb-6 lg:order-2 lg:mb-0 xl:w-[45%] 2xl:flex 2xl:justify-end">
          {/* Desktop Image */}
          <img src={props.image} alt="" className="w-full object-cover" />
        </div>
        <div className="-m-5 mb-6 rounded-3xl p-5 md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:rounded-none xl:w-[55%] xl:pl-0">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 text-center lg:text-left">
              {textColorize(props.title)}
            </h1>
            <h5 className="mb-8 text-center text-lg font-semibold lg:text-left">
              {textColorize(props.desc)}
            </h5>
          </hgroup>
          <div className="text-center lg:text-left">
            <button
              className="btn-one mr-2"
              onClick={props.handleScrollToComponent}
            >
              Explore More
            </button>
            <button
              onClick={props.openAssessmentModal}
              className="btn-one inline-block border-2 !border-primary-400 !bg-transparent !py-2 !text-[#383838] hover:!bg-primary-400 hover:!text-white lg:!w-fit"
            >
              Book Now
            </button>
          </div>
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
