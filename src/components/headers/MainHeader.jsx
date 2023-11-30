import React from "react";
// Data
import { mainHeaderImage } from "../../assets";
import { Link } from "react-router-dom";

export default function MainHeader({ openAssessmentModal }) {
  return (
    <header className="animate-fadeIn overflow-x-clip bg-[#ddf2ef] py-4 pb-8 pt-6 lg:!px-5 lg:py-10 xl:py-20">
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
          <h1 className="subheading heading-primary px-10 lg:mb-4 lg:px-0 lg:text-4xl xl:text-[38px]">
            Partnering Your Well Being
          </h1>
          <h4 className="mb-2 text-xl font-bold text-primary-400 lg:mb-4">
            Take Care Of Yourself
          </h4>
          <h3 className="mx-auto mb-6 text-sm font-semibold text-slate-600 md:text-base lg:mb-10 lg:text-lg">
            Discover your journey to a better self by nurturing your mind, body
            and soul with our professionally curated services customized by
            industry experts just for you!
          </h3>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:py-6 lg:justify-start lg:gap-6">
            <button
              className="block w-full rounded-full bg-primary-400 px-6 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-primary-300 md:w-fit lg:mx-0 lg:px-8 lg:text-base"
              onClick={openAssessmentModal}
            >
              Book appointment
            </button>
            <Link
              to="/assessment"
              className="block w-full rounded-full border-2 border-primary-400 px-6 py-2 text-center text-sm font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white md:w-fit lg:mx-0 lg:px-8 lg:text-base"
            >
              Assessment Test
            </Link>
          </div>
          {/* <small className="ml-3 mt-3 inline-block border-b-2 border-primary-300 font-semibold text-gray-600 hover:text-primary-400">
            <Link to="/assessment">Assessment Test</Link>
          </small> */}
        </div>
      </div>
    </header>
  );
}
