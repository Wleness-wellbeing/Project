import {
  faCommentDots,
  faPhoneVolume,
  faVideo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Calendly from "../../components/Calendly";
// Data
import { doctorAppointment } from "../../assets";

export default function Appointment() {
  return (
    <>
      <section className="relative">
        {/* Book Session */}
        <div className="container mx-auto flex justify-end pb-10">
          <form className="w-[680px] pt-6">
            <h2 className="text-3xl font-bold text-center mb-4">
              Book Your Session
            </h2>
            <p className="para text-center mb-8">
              Book an appointment to connect with a mental health expert
            </p>
            <div className="grid justify-center mb-2">
              <h5 className="text-xl font-semibold mb-5">
                1. Select session mode
              </h5>
              <ul className="flex gap-x-5">
                <li className="grid justify-center">
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="text-xl p-5 rounded-full border-2 border-primary-300 mb-1"
                  />
                  <span className="text-center font-semibold text-primary-300">
                    Call
                  </span>
                </li>
                <li className="grid justify-center">
                  <FontAwesomeIcon
                    icon={faVideo}
                    className="text-xl p-5 rounded-full border-2 border-primary-300 bg-primary-300 text-white mb-1"
                  />
                  <span className="text-center font-semibold text-primary-300">
                    Video
                  </span>
                </li>
                <li className="grid justify-center">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-xl p-5 rounded-full border-2 border-primary-300 mb-1"
                  />
                  <span className="text-center font-semibold text-primary-300">
                    Chat
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid justify-center mb-4">
              <h5 className="text-xl font-semibold my-5 text-center">
                2. Select session duration
              </h5>
              <ul className="grid lg:grid-cols-3 gap-x-5">
                <li className="text-center font-semibold text-primary-300 border-2 border-primary-300 rounded-lg px-6 py-2.5">
                  30 Min
                </li>
                <li className="text-center font-semibold text-primary-300 border-2 border-primary-300 rounded-lg px-6 py-2.5">
                  45 Min
                </li>
                <li className="text-center font-semibold text-primary-300 border-2 border-primary-300 rounded-lg px-6 py-2.5">
                  1 Hr
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h5 className="text-xl font-semibold mt-10 mb-2 text-center">
                Copy the code below and apply it to avail 50% off on your first
                session.
              </h5>
              <div className="border-b-2 border-slate-400 border-dotted py-4">
                <p className="font-medium">Get a single session</p>
                <label
                  htmlFor=""
                  className="font-bold text-lg flex justify-between items-center"
                >
                  <span>1 Session</span>
                  <span className="flex items-center space-x-2">
                    <span>Rs. 999/session</span>
                    <input
                      type="radio"
                      name="session"
                      className="cursor-pointer"
                    />
                  </span>
                </label>
              </div>
              <div className="border-b-2 border-slate-400 border-dotted py-4">
                <p className="font-medium">Get a package</p>
                <label
                  htmlFor=""
                  className="font-bold text-lg flex justify-between items-center"
                >
                  <span>1 Session</span>
                  <span className="flex items-center space-x-2">
                    <span>Rs. 999/session</span>
                    <input
                      type="radio"
                      name="session"
                      className="cursor-pointer"
                    />
                  </span>
                </label>
              </div>
              <div className="border-b-2 border-slate-400 border-dotted py-4">
                <p className="font-medium">Get a package</p>
                <label
                  htmlFor=""
                  className="font-bold text-lg flex justify-between items-center"
                >
                  <span>1 Session</span>
                  <span className="flex items-center space-x-2">
                    <span>Rs. 999/session</span>
                    <input
                      type="radio"
                      name="session"
                      className="cursor-pointer"
                    />
                  </span>
                </label>
              </div>
            </div>
            <Calendly />
            <div className="text-center mb-8">
              <button className="btn-one !rounded-lg">Proceed</button>
            </div>
          </form>

          {/* Confirm Booking */}
          <div className="w-fit py-6 hidden">
            <h2 className="text-3xl font-bold text-center mb-4">
              Confirm Booking
            </h2>

            <div>
              <h4 className="font-semibold text-xl mb-2">Session Details: </h4>
              <div className="flex gap-x-5">
                <div className="border-2 border-primary-300 rounded-lg px-8 py-4 justify-center flex flex-col font-bold w-60">
                  <span className="text-center">
                    <FontAwesomeIcon icon={faVideo} /> <span>Mode</span>
                  </span>
                  <span className="flex justify-between text-slate-400 my-2 font-semibold">
                    <span>video</span>
                    <span>45 min</span>
                  </span>
                  <span className="underline text-center">Change</span>
                </div>

                <div className="border-2 border-primary-300 rounded-lg px-8 py-4 justify-center flex flex-col font-bold w-60">
                  <span className="text-center">
                    <FontAwesomeIcon icon={faVideo} /> <span>Date</span>
                  </span>
                  <span className="flex justify-between text-slate-400 my-2 font-semibold">
                    <span>10th Aug, 23</span>
                    <span>1:00 PM</span>
                  </span>
                  <span className="underline text-center">Change</span>
                </div>
              </div>

              <div className="my-8">
                <div className="border-b-4 border-dotted pb-2">
                  <span className="font-semibold flex justify-between bg-slate-200 px-4 py-1 rounded-lg">
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
                <h4 className="font-semibold text-xl mb-2">Payment Details:</h4>
                <ul className="border-b-2 border-slate-400 pb-4 border-dashed">
                  <li className="flex justify-between">
                    <span className="font-medium">Price for 1 session</span>
                    <span className="font-medium">Rs. 999</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span className="font-medium">Discount</span>
                    <span className="font-medium">Rs. 99</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-bold text-xl">Final Amount</span>
                    <span className="font-medium">Rs. 900</span>
                  </li>
                </ul>
              </div>

              <form className="pt-4">
                <h4 className="font-semibold text-xl mb-2">Client Details:</h4>
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
                    className="form-input !w-4/5 !flex justify-between"
                  >
                    <input
                      type="number"
                      className="outline-none w-full"
                      placeholder="Phone"
                    />
                    <span className="text-primary-400 font-semibold">
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

        <div className="absolute top-0 left-0 bottom-0 w-28 bg-primary-50"></div>
        <div className="absolute top-0 left-28 bottom-0 w-28 bg-primary-50/60"></div>
        <div className="absolute top-0 left-56 bottom-0 w-28 bg-primary-50/50"></div>
        <div className="absolute top-0 left-[21rem] bottom-0 w-28 bg-primary-50/30"></div>

        <figure className="w-96 mx-auto lg:w-[320px] justify-center gap-x-8 py-6 absolute top-10 left-16">
          <div>
            <img
              src={doctorAppointment}
              alt=""
              className="object-cover w-52 mx-auto mb-2"
            />
          </div>
          <figcaption className="w-52 mx-auto">
            <h4 className="text-3xl font-bold">Dr. Jenny</h4>
            <h6 className="font-semibold text-xl">6+ yrs of experience</h6>
            <div className="my-2 font-medium">
              <p>Expertise: Yoga, Work-life</p>
              <p>Speaks: German, English</p>
            </div>
          </figcaption>
        </figure>
      </section>
    </>
  );
}
