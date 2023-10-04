import React, { useEffect, useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Data
import { textColorize } from "../utils";
import DoctorSliderBtns from "./Buttons/DoctorSliderBtns";
import { useNavigate } from "react-router-dom";
import { EXPERTS_URI } from "../data/api";
import axios from "axios";

export default function DoctorSlider(props) {
  const [swiper, setSwiper] = useState(null); // Store Swiper instance
  const navigate = useNavigate();
  const [experts, setExperts] = useState([]);
  const [bookNow, setBookNow] = useState("");

  // Fetch Doctors list
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI)
      .then((response) => {
        let data = response.data["experts"];
        data.forEach((element) => {
          data.push(element);
        });
        data.forEach((element) => {
          data.push(element);
        });
        // Handle the successful response
        data.length >= 10 ? (data.length = 10) : "";
        console.log(data);
        setExperts(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
      });
  }, []);
  // Show Active Image content
  const hideOtherImages = (e) => {
    let activeSlide = e.activeIndex;
    let doctorSlidesContent = document.querySelectorAll(
      ".doctor-slide-content",
    );
    if (doctorSlidesContent.length == 0) {
      console.log("Experts Content Not Found");
    } else {
      setBookNow("");
      // Hide all slide content elements
      doctorSlidesContent.forEach((element) => {
        element.style.display = "none";
      });
      doctorSlidesContent[activeSlide].style.display = "block";
      setBookNow(experts[activeSlide - 1].bookingUrl);
    }
  };

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };

  return (
    <section className="container relative mx-auto mb-5 mt-5 lg:mt-0">
      {/* ========== Soul Healers ========== */}
      <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
        <h2 className="subheading sm:pb-0 lg:mb-4">
          {textColorize(props.data.heading)}
        </h2>
        <p className="para">{props.data.desc}</p>
      </div>

      {/* Doctors */}
      <div
        className="doctorSlider relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          modules={[EffectCoverflow, Navigation, Autoplay]}
          className="mySwiper mb-16 h-[425px] overflow-y-visible rounded-2xl xl:h-[520px]"
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
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
          speed={600}
        >
          {experts.map((value, index) => {
            let slug = `/experts/profile/${value.slug}`;
            return (
              <SwiperSlide key={index}>
                <figure onClick={() => navigate(slug)}>
                  <div className="rounded-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 p-1">
                    <img
                      src={value.image}
                      alt="Doctors"
                      className="box-border block w-full rounded-2xl object-cover"
                    />
                  </div>
                  <figcaption className="doctor-slide-content py-3">
                    <h4 className="text-center text-lg font-semibold leading-6 lg:text-2xl">
                      {value.name}
                    </h4>
                    <p className="text-center text-sm font-medium text-slate-500 lg:text-base">
                      {value.experience}
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
                          {value.languages}
                        </span>
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}

          {/* Buttons */}
          <DoctorSliderBtns slug={bookNow} text="Book Now" />
        </Swiper>
      </div>
    </section>
  );
}
