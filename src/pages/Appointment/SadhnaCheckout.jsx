import { faVideo, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
// Data
import { sadhnaCheckoutBg } from "../../assets";
import { modes, timings } from "../../data/doctors";
import axios from "axios";
import { EXPERTS_URI } from "../../data/api";
import { profileMask, swatiGhoshalPortrait } from "../../assets";
import AppointmentComponent from "../../components/Appointment";

export default function SadhnaCheckout() {
  const { slug } = useParams();
  const [profileDetails, setProfileDetails] = useState({});
  const [loading, setLoading] = useState(true);
  // Set Form Data
  const [selectDuration, setSelectDuration] = useState(timings[0]["value"]);
  const [setMode, setSelectMode] = useState(modes[0]["value"]);

  const handleDuration = (event) => {
    setSelectDuration(event.target.id);
  };

  const handleModes = (event) => {
    setSelectMode(event.target.id);
  };

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

  return (
    <>
      <section className="relative">
        <div className="absolute left-0 top-0 -z-10  h-28 w-full bg-primary-50 lg:bottom-0 lg:left-0 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-28 -z-10 h-28 w-full bg-primary-50/60 lg:bottom-0 lg:left-28 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-56 -z-10 h-28 w-full bg-primary-50/50 lg:bottom-0 lg:left-56 lg:top-0 lg:h-auto lg:w-28"></div>
        <div className="absolute left-0 top-[21rem] -z-10 h-24 w-full bg-primary-50/30 lg:bottom-0 lg:left-[21rem] lg:top-0 lg:h-auto lg:w-28"></div>

        <figure className="left-16 top-10 mx-auto w-64 justify-center gap-x-8 py-6 lg:absolute lg:w-[300px]">
          <Link to={"/experts/profile/" + slug} className="mb-5 block">
            <div className="relative ml-10">
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
          <figcaption className="mx-auto ml-14 w-60">
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
        <div className="container mx-auto  mt-20 flex justify-center pb-10 md:mt-4 lg:justify-end">
          <div className="relative w-full pt-6 lg:w-[680px]">
            <div
              style={{
                backgroundImage: `url(${sadhnaCheckoutBg})`,
                backgroundSize: "90%", // Adjust as needed (e.g., "contain", "100% 100%", etc.)
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top -80px", // Move the background image up by adjusting the position
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1, // Move the background image to the background
              }}
            ></div>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Book Your Session
            </h2>
            <p className="para mb-8 text-center">
              Book an appointment to connect with a mental health expert
            </p>

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
                          ? "block w-full cursor-pointer rounded-lg bg-primary-300 px-5 py-2.5 text-center font-semibold text-white "
                          : "block w-full cursor-pointer rounded-lg border-2 border-primary-300 px-5 py-2.5 text-center font-semibold text-primary-300"
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
            <div className="my-6 mt-16 text-center">
              <h3 className="text-xl font-bold">
                Copy the code below and apply it to avail 50% off on your first
                session.
              </h3>
            </div>

            <div className="mx-auto max-w-md ">
              <h2 className="mb-4 text-base font-semibold">
                Meditation Services Bundle – your journey to inner peace starts
                here
              </h2>

              <div class="flex">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  class="w-full rounded-l-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button class="rounded-r-md bg-primary-300 px-4 py-2 text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50">
                  Apply
                </button>
              </div>
            </div>

            <div className="my-12 text-center">
              <h2 className="subheading ">Choose Your Slot</h2>
            </div>
            <div className="my-6 mb-8">
              <AppointmentComponent />
            </div>

            {/* calendar we have to put here */}

            <div className="mb-8 text-center">
              <Link>
                <button className="btn-one !rounded-lg">Proceed</button>
              </Link>
            </div>
          </div>

          {/* Confirm Booking */}
          <div className="hidden w-fit py-6">
            <h2 className="mb-4 text-center text-3xl font-bold">
              Confirm Booking
            </h2>

            <div>
              <h4 className="mb-2 text-xl font-semibold">Session Details: </h4>
              <div className="flex gap-x-5">
                <div className="flex w-60 flex-col justify-center rounded-lg border-2 border-primary-300 px-8 py-4 font-bold">
                  <span className="text-center">
                    <FontAwesomeIcon icon={faVideo} /> <span>Mode</span>
                  </span>
                  <span className="my-2 flex justify-between font-semibold text-slate-400">
                    <span>video</span>
                    <span>45 min</span>
                  </span>
                  <span className="text-center underline">Change</span>
                </div>

                <div className="flex w-60 flex-col justify-center rounded-lg border-2 border-primary-300 px-8 py-4 font-bold">
                  <span className="text-center">
                    <FontAwesomeIcon icon={faVideo} /> <span>Date</span>
                  </span>
                  <span className="my-2 flex justify-between font-semibold text-slate-400">
                    <span>10th Aug, 23</span>
                    <span>1:00 PM</span>
                  </span>
                  <span className="text-center underline">Change</span>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold">Payment Details:</h4>
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

              <form className="pt-4">
                <h4 className="mb-2 text-xl font-semibold">Client Details:</h4>
                <input
                  type="text"
                  name=""
                  placeholder="Rahul Singh"
                  className="form-input"
                  readOnly
                />
                <div className="flex gap-x-4">
                  <input
                    type="text"
                    className="form-input !w-1/5"
                    value="91+"
                  />
                  <label
                    htmlFor=""
                    className="form-input !flex !w-4/5 justify-between"
                  >
                    <input
                      type="number"
                      className="w-full outline-none"
                      placeholder="Phone"
                    />
                    <span className="font-semibold text-primary-400">
                      Verify
                    </span>
                  </label>
                </div>
                <div className="text-center">
                  <button className="btn-one !rounded-lg">Make Payment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
