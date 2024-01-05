import React, { useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Data
import { textColorize } from "../../utils";
import {
  yoga__HathaYoga,
  yoga__MeditationAndMinfullness,
  yoga_instructor_snigda,
  yoga_instructor_venkatesh,
} from "../../assets";
import YogaInstructorCard from "../Cards/YogaInstructorCard";

const yogaInstructorsData = [
  {
    name: "Snigdha Biswas",
    image: yoga_instructor_snigda,
    expertise: "Backbend, Headstand, Handstand, Aerial yoga",
    slug: "snigdha-biswaws",
    year: 5,
  },
  {
    name: "Archya Venkatesh",
    image: yoga_instructor_venkatesh,
    // expertise: "Hatha Yoga, Krishnamacharya Yoga, Therapeutic yoga, Kundalini yoga, fertility yoga, prenatal and postnatal yoga, breathwork, mindfulness",
    expertise: "Hatha Yoga, Krishnamacharya Yoga, Therapeutic yoga",
    slug: "snigdha-biswaws",
    year: 5,
  },
  {
    name: "Venashree Das",
    image: yoga__MeditationAndMinfullness,
    expertise: "Backbend, Headstand, Handstand, Aerial yoga",
    slug: "snigdha-biswaws",
    year: 5,
  },
  {
    name: "Rohini sharma",
    image: yoga__HathaYoga,
    expertise: "Backbend, Headstand, Handstand, Aerial yoga",
    slug: "snigdha-biswaws",
    year: 5,
  },
];

export default function YogaSlider(props) {
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };

  return (
    <section className="container relative mx-auto mb-5 mt-5 lg:mt-0">
      <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
        <h1 className="subheading sm:pb-0 lg:mb-4">
          {textColorize([
            {
              color: false,
              text: "Our ",
            },
            {
              color: true,
              text: "Yoga Instructors ",
            },
          ])}
        </h1>

        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          quasi.
        </p>
      </div>

      {/* Yoga Instructors */}
      <div
        className="doctorSlider relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          className="mySwiper overflow-y-visible rounded-2xl pb-12"
          navigation={true}
          grabCursor={true}
          spaceBetween={15}
          slidesPerView={2}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
          speed={600}
        >
          {props.data.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <YogaInstructorCard key={index} data={value} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
