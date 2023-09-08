import React from "react";
import { cloudWithDots, didYouKnow } from "../assets";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IssueQuote({ quote }) {
  return (
    <section className="relative overflow-x-hidden overflow-y-clip pb-14">
      <div className="relative px-10">
        <img src={didYouKnow} alt="" className="mx-auto w-fit xl:w-32" />
        <div className="relative mx-auto border-4 border-primary-400 p-6 lg:w-[640px] lg:p-12">
          <p className="text-justify font-bold">{quote}</p>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="absolute -left-14 -top-12 bg-white p-5 pb-14 text-4xl text-primary-300 lg:text-6xl"
          />
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="absolute -bottom-10 -right-12 bg-white p-5 pt-14 text-4xl text-primary-300 lg:text-6xl"
          />
        </div>
      </div>

      {/* Cloud */}
      <img
        src={cloudWithDots}
        alt=""
        className="absolute -left-20 bottom-14 hidden w-44 lg:block xl:w-80"
      />
    </section>
  );
}
