import React from "react";
// Data
import { mainHeaderImage } from "../../assets";

export default function MainHeader({ openAssessmentModal }) {
  return (
    <header className="animate-fadeIn overflow-x-clip bg-[#ddf2ef] py-4 pb-8 pt-6 lg:!px-5 lg:py-10 xl:py-20">
      <div className="container mx-auto items-center text-center lg:flex lg:text-left">
        {/* Header Image */}
        <div className="relative mb-2 lg:order-2 lg:my-2 lg:w-1/2">
          <img
            loading="lazy"
            src={mainHeaderImage}
            alt="Holistic wellness"
            className="mx-auto scale-110"
          />
        </div>
        <div className="lg:order-1 lg:w-1/2">
          <h1 className="subheading heading-primary px-10 lg:mb-4 lg:px-0 lg:text-4xl xl:text-[38px]">
            Partnering Your Well Being
          </h1>
          {/* <h4 className="mb-2 text-xl font-bold text-primary-400 lg:mb-4">
            Take Care Of Yourself
          </h4> */}
          <h3 className="mx-auto mb-6 pr-4 text-sm font-semibold text-slate-700 md:text-base lg:text-lg">
            Discover your journey to a better self by nurturing your mind, body
            and soul with our professionally curated services customized by
            industry experts just for you!
          </h3>
          <button
            className="mx-auto mb-5 block w-4/5 rounded-full bg-primary-400 px-6 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-primary-300 md:w-fit lg:mx-0 lg:mb-8 lg:px-8 lg:text-base"
            onClick={openAssessmentModal}
          >
            Book appointment
          </button>
          {/* <h3 className="mx-auto mb-4 text-sm font-semibold text-slate-700 md:text-base lg:text-lg">
            Explore your inner self, take a comprehensive self assessment and
            get an online therapy session at a promotional price.
          </h3>

          <Link
            to="/assessment"
            className="mx-auto block w-4/5 rounded-full border-2 border-primary-400 px-6 py-2 text-center text-sm font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white md:w-fit lg:mx-0 lg:px-8 lg:text-base"
          >
            Self Assessment
          </Link> */}
        </div>
      </div>
    </header>
  );
}
