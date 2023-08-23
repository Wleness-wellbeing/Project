import React from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Data
import { textColorize } from "../utils";
import DoctorSliderBtns from "./Buttons/DoctorSliderBtns";

export default function DoctorSlider(props) {
  // Show Active Image content
  const hideOtherImages = (e) => {
    let activeSlide = e.activeIndex;
    let doctorSlidesContent = document.querySelectorAll(
      ".doctor-slide-content",
    );
    // Hide all slide content elements
    doctorSlidesContent.forEach((element) => {
      element.style.display = "none";
    });
    doctorSlidesContent[activeSlide].style.display = "block";
  };

  return (
    <section className="container relative mx-auto mb-5 mt-5 lg:mt-0 ">
      {/* ========== Soul Healers ========== */}
      <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
        <h2 className="subheading sm:pb-0 lg:mb-4">
          {textColorize(props.data.heading)}
        </h2>
        <p className="para">{props.data.desc}</p>
      </div>

      {/* Doctors */}
      <div className="doctorSlider relative">
        <Swiper
          className="mySwiper mb-14 h-96 overflow-y-visible xs:h-[400px] xl:h-[480px]"
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={18}
          slidesPerView={2}
          initialSlide={3}
          loop={true}
          loopedSlides={4}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            scale: 0.9,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          onSlideChange={hideOtherImages}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {props.data.doctors.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <figure>
                  <div className="rounded-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 p-1 shadow-md">
                    <img
                      src={value.image}
                      alt="Doctors"
                      className="box-border block w-full rounded-2xl object-cover"
                    />
                  </div>
                  <figcaption className="doctor-slide-content py-3">
                    <h4 className="text-center text-lg font-semibold lg:text-2xl">
                      {value.name}
                    </h4>
                    <p className="text-center text-sm font-medium text-slate-500 lg:text-base">
                      {value.exp}
                    </p>
                    <div className="text-center text-xs lg:text-sm">
                      <p>
                        <span className="mr-1 font-semibold text-primary-400">
                          Expertise:
                        </span>
                        <span className="font-medium text-slate-500">
                          {value.expertise}
                        </span>
                      </p>
                      <p>
                        <span className="mr-1 font-semibold text-primary-400">
                          Speaks:
                        </span>
                        <span className="font-medium text-slate-500">
                          {value.speaks}
                        </span>
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}

          {/* Buttons */}
          <DoctorSliderBtns
            slug={props.data.button.slug}
            text={props.data.button.text}
          />
        </Swiper>
      </div>
    </section>
  );
}
