import React from "react";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Data
import { textColorize } from "../utils";
import { doodle2 } from "../assets";

export default function HappyClient(props) {
  return (
    <section className="relative px-4 py-6 text-center lg:px-0 lg:py-10">
      <h2 className="subheading">{textColorize(props.data.heading)}</h2>
      <div className="container mx-auto py-2 lg:py-4">
        <div className="relative pb-4 lg:!pr-0 lg:pb-0">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            className="!overflow-x-clip overflow-y-visible"
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            speed={400}
            loop={true}
          >
            {props.data.clients.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <figure className="items-center lg:flex">
                    <div className="flex items-center justify-center p-4 lg:w-2/5">
                      <img
                        src={value.image}
                        alt=""
                        className="w-60 object-cover"
                      />
                    </div>
                    <figcaption className="lg:w-3/5">
                      <h4 className="text-center text-2xl font-semibold text-primary-300 lg:text-left lg:text-3xl">
                        {value.name}
                      </h4>
                      <h6 className="mb-4 text-center font-medium text-slate-400 lg:text-left xl:text-lg">
                        {value.profession}
                      </h6>
                      <p className="mb-1 text-center font-medium sm:text-lg md:text-base md:leading-5 lg:pr-8 lg:text-left xl:text-xl">
                        {value.review}
                      </p>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* Testimonials */}
        </div>
      </div>
      <img
        src={doodle2}
        alt=""
        className="absolute right-0 top-0 -z-10 w-20 -scale-x-[1] object-cover opacity-20 xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80"
      />
      <img
        src={doodle2}
        alt=""
        className="absolute bottom-0 left-0 -z-10 w-20 object-cover opacity-20 xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80"
      />
    </section>
  );
}
