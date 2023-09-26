import { faVideo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Data
import { modes, timings } from "../../data/doctors";
import axios from "axios";
import { EXPERTS_URI } from "../../data/api";
import { profileMask, swatiGhoshalPortrait } from "../../assets";
import AppointmentComponent from "../../components/Appointment";

export default function Appointment() {
  const { slug } = useParams();
  // Set Profile Data
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(true);
  // Set Form Data
  const [selectDuration, setSelectDuration] = useState(timings[0]["value"]);
  const [setMode, setSelectMode] = useState(modes[0]["value"]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [checkout, setCheckout] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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

  const handleDuration = (event) => {
    setSelectDuration(event.target.id);
  };

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
    console.log("successful");
    // Validate if mode, duration, session and slots are filled
    if (selectedDate == null || selectedTime == null) {
      // Validate date and time
      setAlertMessage("Please select date & time");
      return null;
    } else {
      setAlertMessage("");
    }
    openCheckout();
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    console.log("successful");
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
        <div className="container mx-auto flex flex-col items-end pb-10">
          <div className="w-[720px] pt-6">
            {!checkout ? (
              <form onSubmit={handleProceed}>
                <h2 className="mb-4 text-center text-3xl font-bold">
                  Book Your Session
                </h2>
                <p className="para mb-8 text-center">
                  Book an appointment to connect with a mental health expert
                </p>
                <div className="mb-2 grid justify-center text-center">
                  <h5 className="mb-5 text-xl font-semibold">
                    1. Select session mode
                  </h5>
                  <div className="mb-4 flex justify-between gap-x-2 lg:mb-0 lg:gap-x-5">
                    {modes.map((value, i) => {
                      return (
                        <label
                          key={i}
                          htmlFor={value.value}
                          className="block w-full py-2.5 text-center font-semibold text-primary-300"
                        >
                          <input
                            type="radio"
                            name="duration"
                            id={value.value}
                            checked={setMode == value.value}
                            onChange={handleModes}
                            className="hidden"
                          />
                          <FontAwesomeIcon
                            icon={value.icon}
                            className={`mb-1 cursor-pointer rounded-full border-2 border-primary-300 p-5 text-xl ${
                              setMode == value.value
                                ? " bg-primary-300 text-white "
                                : ""
                            }`}
                          />
                          <span className="block text-center">
                            {value.text}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-4 flex flex-col items-center justify-center">
                  <h5 className="my-5 text-center text-xl font-semibold">
                    2. Select session duration
                  </h5>
                  <div className="mb-4 grid grid-cols-3 gap-x-2 lg:mb-0 lg:gap-x-3">
                    {timings.map((value, i) => {
                      return (
                        <label
                          key={i}
                          htmlFor={value.value}
                          className={
                            selectDuration == value.value
                              ? "block w-full cursor-pointer rounded-2xl bg-primary-300 px-5 py-2.5 text-center font-semibold text-white "
                              : "block w-full cursor-pointer rounded-2xl border-2 border-primary-300 px-5 py-2.5 text-center font-semibold text-primary-300"
                          }
                        >
                          <input
                            type="radio"
                            name="duration"
                            id={value.value}
                            checked={selectDuration == value.value}
                            onChange={handleDuration}
                            className="hidden"
                          />
                          <span className="block">{value.text}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className="mb-8">
                  <h5 className="mb-2 mt-10 text-center text-xl font-semibold">
                    Copy the code below and apply it to avail 50% off on your
                    first session.
                  </h5>
                  <div className="border-b-2 border-dotted border-slate-400 py-4">
                    <p className="font-medium">Get a single session</p>
                    <label
                      htmlFor=""
                      className="flex items-center justify-between text-lg font-bold"
                    >
                      <span>1 Session</span>
                      <span className="flex items-center space-x-2">
                        <span>Rs. {profileDetails.price}/session</span>
                        <input
                          type="radio"
                          name="session"
                          className="cursor-pointer"
                        />
                      </span>
                    </label>
                  </div>
                </div>

                {/* Choose your slots */}
                <div className="mb-8 self-stretch lg:gap-x-5">
                  <h2 className="mb-4 text-center text-3xl font-bold lg:mb-8">
                    Choose Your Slot
                  </h2>
                  <AppointmentComponent
                    date={selectedDate}
                    time={selectedTime}
                    updateDate={setSelectedDate}
                    updateTime={setSelectedTime}
                  />
                </div>
                <p className="mb-4 text-center text-lg font-semibold text-red-500">
                  {alertMessage}
                </p>
                <div className="mb-8 text-center">
                  <button type="submit" className="btn-one !rounded-lg">
                    Proceed
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6">
                <div className="mb-4 flex justify-between text-center ">
                  <span></span>
                  <h2 className="text-3xl font-bold">Confirm Booking</h2>
                  <span
                    onClick={closeCheckout}
                    className="btn-one cursor-pointer"
                  >
                    Back
                  </span>
                </div>

                <div>
                  <h4 className="mb-2 text-xl font-semibold">
                    Session Details:{" "}
                  </h4>
                  <div className="flex gap-x-5">
                    <div className="flex w-60 flex-col justify-center rounded-lg border-2 border-primary-300 px-8 py-4 font-bold">
                      <span className="text-center">
                        <FontAwesomeIcon icon={faVideo} /> <span>Mode</span>
                      </span>
                      <span className="my-2 flex justify-between font-semibold text-slate-400">
                        <span>video</span>
                        <span>45 min</span>
                      </span>
                      <span
                        className="cursor-pointer text-center underline transition-all hover:text-primary-300"
                        onClick={closeCheckout}
                      >
                        Change
                      </span>
                    </div>

                    <div className="flex w-60 flex-col justify-center rounded-lg border-2 border-primary-300 px-8 py-4 font-bold">
                      <span className="text-center">
                        <FontAwesomeIcon icon={faVideo} /> <span>Date</span>
                      </span>
                      <span className="my-2 flex justify-between font-semibold text-slate-400">
                        <span>10th Aug, 23</span>
                        <span>1:00 PM</span>
                      </span>
                      <span
                        className="cursor-pointer text-center underline transition-all hover:text-primary-300"
                        onClick={closeCheckout}
                      >
                        Change
                      </span>
                    </div>
                  </div>

                  <div className="my-8">
                    <div className="border-b-4 border-dotted pb-2">
                      <span className="flex justify-between rounded-lg bg-slate-200 px-4 py-1 font-semibold">
                        <span>#FIRSTSESSION</span>
                        <span>
                          <FontAwesomeIcon icon={faXmark} />
                        </span>
                      </span>
                    </div>
                    <p className="font-semibold text-primary-300">
                      Coupon applied! Enjoy your discount!
                    </p>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xl font-semibold">
                      Payment Details:
                    </h4>
                    <ul className="border-b-2 border-dashed border-slate-400 pb-4">
                      <li className="flex justify-between">
                        <span className="font-medium">Price for 1 session</span>
                        <span className="font-medium">Rs. 999</span>
                      </li>
                      <li className="mb-2 flex justify-between">
                        <span className="font-medium">Discount</span>
                        <span className="font-medium">Rs. 99</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-xl font-bold">Final Amount</span>
                        <span className="font-medium">Rs. 900</span>
                      </li>
                    </ul>
                  </div>

                  <form className="pt-4" onSubmit={handleCheckout}>
                    <h4 className="mb-2 text-xl font-semibold">
                      Client Details:
                    </h4>
                    <input
                      type="text"
                      name=""
                      placeholder="Enter Your Name"
                      className="form-input"
                    />
                    <div className="flex gap-x-4">
                      <input
                        type="text"
                        className="form-input inline-block !w-20"
                        value="91+"
                        readOnly
                      />
                      <label
                        htmlFor="phone"
                        className="form-input !flex !w-full justify-between"
                      >
                        <input
                          type="tel"
                          className="block w-full outline-none"
                          placeholder="Phone"
                          name="phone"
                          id="phone"
                        />
                        <span className="font-semibold text-primary-400">
                          Verify
                        </span>
                      </label>
                    </div>
                    <div className="mt-3 text-center">
                      <button className="btn-one !rounded-lg" type="submit">
                        Make Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
