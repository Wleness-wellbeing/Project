import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
// Swiper Js
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import SwiperBtns from "../Buttons/SwiperBtns";

export default function Testimonial(props) {
  return (
    <div className="container mx-auto lg:!pr-0 pb-14 lg:pb-0 relative">
      {/* Testimonials */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        className="!overflow-x-clip overflow-y-visible"
      >
        {props.data.map((value, i) => {
          return (
            <SwiperSlide key={i}>
              <figure className="lg:flex items-center">
                <div className="lg:w-2/5 p-4">
                  <img
                    src={value.image}
                    alt={value.name}
                    className="object-cover w-full"
                  />
                </div>
                <figcaption className="lg:pl-24 lg:w-3/5">
                  <h4 className="text-lg font-semibold sm:text-xl lg:text-3xl 2xl:text-4xl">
                    {value.name}
                  </h4>
                  <h6 className="font-medium text-slate-400 2xl:text-xl mb-2">
                    {value.profession}
                  </h6>
                  <p className="mb-1 text-sm sm:text-lg md:text-base 2xl:text-xl md:leading-5 text-justify">
                    {value.desc}
                  </p>
                </figcaption>
              </figure>
            </SwiperSlide>
          );
        })}
        <SwiperBtns />
      </Swiper>
    </div>
  );
}
