import {
  faCalendar,
  faCircleLeft,
  faVideo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// Data
import { modes, timings } from "../../data/doctors";
import { EXPERTS_URI, VERIFY_OTP } from "../../data/api";
import { profileMask, swatiGhoshalPortrait } from "../../assets";
import SessionMode from "../../components/icon/SessionMode";
import BookingHeading from "../../components/Appointment/BookingHeading";
import SessionDurationBtn from "../../components/Buttons/SessionDurationBtn";
import SessionPricingItem from "../../components/list/SessionPricingItem";
import AvailableSlots from "../../components/Appointment/AvailableSlots";
import Checkout from "./Checkout";
import OtpModal from "../../components/Auth/OtpModal";

export default function Appointment() {
  const { slug } = useParams();

  const availableTimeSlots = [
    {
      month: "January",
      year: 2023,
      slots: [
        {
          date: 10,
          time: ["10:00", "12:00", "4:00", "02:00", "4:00", "02:00"],
        },
        {
          date: 11,
          time: ["4:00", "3:00", "1:00"],
        },
        {
          date: 12,
          time: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "4:00",
            "02:00",
            "4:00",
            "02:00",
          ],
        },
      ],
    },
    {
      month: "February",
      year: 2023,
      slots: [
        {
          date: 11,
          time: ["11:00", "12:00", "13:00", "14:00"],
        },
        {
          date: 12,
          time: ["14:00", "2:00", "21:00", "22:00", "24:00", "43:00"],
        },
      ],
    },
    {
      month: "March",
      year: 2023,
      slots: [
        {
          date: 25,
          time: ["10:00", "12:00", "4:00", "02:00", "4:00", "02:00"],
        },
        {
          date: 26,
          time: ["10:00", "12:00", "4:00", "02:00", "4:00", "02:00"],
        },
      ],
    },
    {
      month: "April",
      year: 2023,
      slots: [
        {
          date: 25,
          time: ["10:00", "12:00", "4:00", "02:00", "4:00", "02:00"],
        },
        {
          date: 26,
          time: ["10:00", "12:00", "4:00", "02:00", "4:00", "02:00"],
        },
      ],
    },
  ];
  // Set Profile Data
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(true);
  // Set Form Data
  const [selectDuration, setSelectDuration] = useState(timings[0]["value"]);
  const [setMode, setSelectMode] = useState(modes[0]["value"]);
  const [index, setIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(
    availableTimeSlots[index].slots[0].date +
      " " +
      availableTimeSlots[index].month +
      " " +
      availableTimeSlots[index].year,
  );
  const [selectedTime, setSelectedTime] = useState(null);
  const [checkout, setCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  // Mobile verification
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState(null);
  const [OTPModal, setOTPModal] = useState(false);
  const [otpAlert, setOTPAlert] = useState("");

  // Get doctor profile data
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI + "/" + slug)
      .then((response) => {
        // Handle the successful response
        setProfileDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  // Set session duration
  const handleDuration = (event) => {
    setSelectDuration(event.target.id);
  };

  // Set session modes
  const handleModes = (event) => {
    setSelectMode(event.target.id);
  };

  // Handle Checkout
  const openCheckout = () => {
    window.scrollTo(0, 0);
    setCheckout(true);
  };

  const closeCheckout = () => {
    window.scrollTo(0, 0);
    setCheckout(false);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    // Validate if mode, duration, session and slots are filled
    openCheckout();
  };

  // Handle form submission
  const handleOTPVerification = (e) => {
    e.preventDefault();
    setOTPModal(true);
    if (otp == null) {
      setOTPAlert("Please Enter Your OTP");
    } else {
      axios
        .post(VERIFY_OTP, { otp: otp })
        .then((response) => console.log(response))
        .catch((error) => {
          setOTPAlert(error.data.message);
        });
    }
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    axios
      .post("/sendOtp", { number: mobileNumber })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <section className="relative">
        <div className="absolute left-0 top-0 -z-10  h-28 w-full bg-primary-50 lg:bottom-0 lg:left-0 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-28 -z-10 h-28 w-full bg-primary-50/60 lg:bottom-0 lg:left-28 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-56 -z-10 h-28 w-full bg-primary-50/50 lg:bottom-0 lg:left-56 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-[21rem] -z-10 h-24 w-full bg-primary-50/30 lg:bottom-0 lg:left-[21rem] lg:top-0 lg:h-auto lg:w-28"></div>

        <figure className="left-16 top-10 mx-auto w-64 justify-center gap-x-8 py-6 lg:absolute lg:ml-5 lg:w-[300px]">
          <Link to={"/experts/profile/" + slug} className="mb-5 block">
            <div className="relative">
              <img
                src={
                  profileDetails.image
                    ? profileDetails.image
                    : swatiGhoshalPortrait
                }
                alt=""
                className="mx-auto mb-2 h-52 w-52 rounded-full object-cover object-top"
              />
              <img
                src={profileMask}
                alt=""
                className="absolute left-1/2 top-0 h-52 w-52 -translate-x-[55%] scale-110 object-cover"
              />
            </div>
          </Link>
          <figcaption className="mx-auto w-60">
            <h4 className="text-2xl font-bold">{profileDetails.name}</h4>
            <h6 className="text-xl font-semibold">
              {profileDetails.experience
                ? profileDetails.experience
                : "5+ years of experience"}
            </h6>
            <div className="my-2 font-medium">
              <p>
                Expertise:{" "}
                {profileDetails.expertise
                  ? profileDetails.expertise
                  : "Yoga, Work-life"}
              </p>
              <p>
                Speaks:{" "}
                {profileDetails.languages
                  ? profileDetails.languages
                  : "English, Hindi"}
              </p>
            </div>
          </figcaption>
        </figure>

        {/* Book Session */}
        <div className="container mx-auto flex flex-col pb-10 md:items-end">
          <div className="pt-6 md:w-[580px] 2xl:w-[720px]">
            {!checkout ? (
              <form onSubmit={handleProceed}>
                <h2 className="mb-4 text-center text-3xl font-bold">
                  Book Your Session
                </h2>
                <p className="para mb-8 text-center">
                  Book an appointment to connect with a mental health expert
                </p>

                {/* Select session mode */}
                <div className="mb-8 grid justify-center text-center">
                  <BookingHeading heading="1. Select session mode" />
                  <div className="mb-4 flex justify-between gap-x-2 lg:mb-0 lg:gap-x-5">
                    {modes.map((value, i) => {
                      return (
                        <SessionMode
                          key={i}
                          data={value}
                          setMode={setMode}
                          handleModes={handleModes}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Select session duration */}
                <div className="mb-8 flex flex-col items-center justify-center">
                  <BookingHeading heading="2. Select session duration" />
                  <div className="mb-4 grid grid-cols-3 gap-x-2 lg:mb-0 lg:gap-x-3">
                    {timings.map((value, i) => {
                      return (
                        <SessionDurationBtn
                          key={i}
                          data={value}
                          selectDuration={selectDuration}
                          handleDuration={handleDuration}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Select session plan */}
                <div className="mb-8">
                  <BookingHeading heading="3. Select session plan" />
                  {profileDetails.packages.map((value, i) => {
                    return (
                      <SessionPricingItem
                        data={value}
                        key={i}
                        selectPlan={() =>
                          setSelectedPlan({
                            plan: value.package,
                            price: value.price,
                          })
                        }
                        selectedPlan={selectedPlan?.plan === value.package}
                      />
                    );
                  })}
                </div>

                {/* Choose your slots */}
                <div className="mb-8 self-stretch lg:gap-x-5">
                  <BookingHeading heading="4. Available slots" />

                  <AvailableSlots
                    date={selectedDate}
                    time={selectedTime}
                    updateDate={setSelectedDate}
                    updateTime={setSelectedTime}
                    slots={availableTimeSlots}
                    index={index}
                    setIndex={setIndex}
                  />
                </div>

                <div className="mb-8 text-center">
                  <button
                    type="submit"
                    disabled={
                      selectedPlan == null ||
                      selectedDate == null ||
                      selectedTime == null
                        ? !checkout
                        : checkout
                    }
                    className="btn-one !rounded-lg disabled:cursor-not-allowed disabled:bg-gray-500"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            ) : (
              <Checkout
                back={closeCheckout}
                mode={setMode}
                duration={selectDuration}
                date={selectedDate}
                time={selectedTime}
                plan={selectedPlan}
                handleCheckout={handleCheckout}
                setMobile={setMobileNumber}
                mobileNumber={mobileNumber}
              />
            )}
          </div>
        </div>
      </section>

      <OtpModal
        isOpen={OTPModal}
        msg={otpAlert}
        verifyOtp={handleOTPVerification}
        otp={otp}
        setOTP={setOTP}
        phone={mobileNumber}
      />
    </>
  );
}
