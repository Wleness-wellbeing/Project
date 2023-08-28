import React from "react";
// Data
import { mainHeaderImage } from "../../assets";

export default function MainHeader({ openAssessmentModal }) {
  return (
    <header className="overflow-x-clip bg-gradient-to-b from-primary-50/30 to-transparent !px-5 py-4 lg:py-10">
      <div className="container mx-auto text-center">
        <hgroup>
          {/* <h1 className="heading-primary pb-2 font-quicksand text-2xl font-bold sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl "> */}
          <h1 className="heading-primary subheading pb-2">
            Partnering Your Well Being
          </h1>
          <h3 className="mx-auto mb-3 text-base font-semibold text-slate-600 lg:w-[800px] lg:text-lg">
            Discover your journey to a better self by nurturing your mind, body
            and soul with our professionally curated services customised by
            industry experts just for you!
          </h3>
          <h4 className="font-bold text-primary-400 lg:text-xl">
            We Care For You
          </h4>
        </hgroup>

        {/* Header Image */}
        <div className="relative">
          <img src={mainHeaderImage} alt="" className="mx-auto w-[620px]" />
        </div>

        <button className="btn-one" onClick={openAssessmentModal}>
          Schedule an appointment
        </button>
      </div>
    </header>
  );
}
