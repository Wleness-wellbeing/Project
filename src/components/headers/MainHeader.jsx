import React from "react";
// Data
import { mainHeaderImage } from "../../assets";

export default function MainHeader({ openAssessmentModal }) {
  return (
    <header className="overflow-x-clip bg-[#ddf2ef]  py-4 pb-8 pt-6 lg:!px-5 lg:py-10 xl:py-20">
      <div className="container mx-auto items-center text-center lg:flex lg:text-left">
        {/* Header Image */}
        <div className="relative mb-2 lg:order-2 lg:my-2 lg:w-1/2">
          <img
            loading="lazy"
            src={mainHeaderImage}
            alt=""
            className="mx-auto scale-110"
          />
        </div>
        <div className="lg:order-1 lg:w-1/2">
          <h1 className="subheading heading-primary px-10 lg:mb-4 lg:px-0">
            Partnering Your Well Being
          </h1>
          <h4 className="mb-2 text-xl font-bold text-primary-400 lg:mb-4">
            Take Care Of Yourself
          </h4>
          <h3 className="mx-auto mb-3 text-sm font-semibold text-slate-600 md:text-base lg:mb-10 lg:text-lg">
            Discover your journey to a better self by nurturing your mind, body
            and soul with our professionally curated services customised by
            industry experts just for you!
          </h3>
          <button
            className="mx-auto mt-2 block w-fit rounded-full bg-primary-400 px-6 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-primary-300 lg:mx-0 lg:px-8 lg:text-base"
            onClick={openAssessmentModal}
          >
            Schedule an appointment
          </button>
        </div>
      </div>
    </header>
  );
}
