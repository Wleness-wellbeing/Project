import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperBtns() {
  const swiper = useSwiper();

  return (
    <div className="absolute translate-x-1/2 right-1/2 lg:right-0 lg:translate-x-0 -bottom-16 lg:bottom-0 z-10">
      <button
        onClick={() => swiper.slideNext()}
        className="w-12 h-12 border-2 border-primary-300 rounded-full mr-6 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-primary-300 text-4xl"
        />
      </button>
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-primary-300 w-12 h-12 rounded-full cursor-pointer"
      >
        <FontAwesomeIcon icon={faCaretLeft} className="text-white text-4xl" />
      </button>
    </div>
  );
}
