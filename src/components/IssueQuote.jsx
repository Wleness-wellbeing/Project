import React from "react";
import { cloudWithDots, didYouKnow } from "../assets";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IssueQuote({ quote }) {
  return (
    <section className="pb-14 pt-4 relative overflow-x-hidden overflow-y-clip">
      <div className="relative">
        <img src={didYouKnow} alt="" className="w-fit mx-auto" />
        <div className="w-[640px] border-4 border-primary-400 p-12 mx-auto relative">
          <p className="font-bold text-justify">{quote}</p>
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-6xl text-primary-300 absolute -top-12 -left-14 bg-white p-5 pb-14"
          />
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="text-6xl text-primary-300 absolute -right-12 -bottom-10 bg-white p-5 pt-14"
          />
        </div>
      </div>

      {/* Cloud */}
      <img
        src={cloudWithDots}
        alt=""
        className="absolute bottom-14 -left-20 w-44 xl:w-80"
      />
    </section>
  );
}
