import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperBtns() {
  const swiper = useSwiper();

  return (
    <div className="absolute -bottom-16 right-1/2 z-10 translate-x-1/2 lg:bottom-0 lg:right-0 lg:translate-x-0">
      <button
        onClick={() => swiper.slideNext()}
        className="mr-6 h-12 w-12 cursor-pointer rounded-full border-2 border-primary-300"
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-4xl text-primary-300"
        />
      </button>
      <button
        onClick={() => swiper.slidePrev()}
        className="h-12 w-12 cursor-pointer rounded-full bg-primary-300"
      >
        <FontAwesomeIcon icon={faCaretLeft} className="text-4xl text-white" />
      </button>
    </div>
  );
}
