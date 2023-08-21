import React from "react";
import { textColorize } from "../utils";

export default function HeaderWithButton({
  title,
  desc,
  image,
  openAssessmentModal,
}) {
  return (
    <header className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:flex-row lg:py-6 2xl:justify-between 2xl:!px-0 2xl:py-12">
      <h1 className="subheading mb-4 text-center lg:hidden lg:text-left lg:leading-[4rem]">
        {textColorize(title)}
      </h1>
      <div className="mb-6 lg:order-2 lg:mb-0 lg:w-1/2 2xl:flex 2xl:justify-end">
        {/* Desktop Image */}
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="mb-6 md:mb-6 lg:order-1 lg:mb-0 lg:w-1/2 lg:pr-16 xl:pl-4">
        <hgroup className="md:mb-3 xl:mb-8">
          <h1 className="mb-4 hidden text-center text-3xl font-bold lg:block lg:text-left xl:text-5xl">
            {textColorize(title)}
          </h1>
        </hgroup>
        <div className="xl:pr-12">
          {desc.map((value, index) => {
            return (
              <p className="mb-6 text-justify font-semibold" key={index}>
                {value}
              </p>
            );
          })}
        </div>
        <div className="text-center xl:text-left">
          <button className="btn-one" onClick={openAssessmentModal}>
            Talk to Therapist
          </button>
        </div>
      </div>
    </header>
  );
}
