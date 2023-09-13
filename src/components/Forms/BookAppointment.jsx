import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentComponent from "../Appointment";

const timings = [
  {
    text: "30 Mins",
    value: "30_min",
    price: 450,
  },
  {
    text: "45 Mins",
    value: "45_min",
    price: 550,
  },
  {
    text: "60 Mins",
    value: "60_min",
    price: 700,
  },
];

const modes = [
  {
    text: "Chat",
    value: "chat",
  },
  {
    text: "Voice",
    value: "voice",
  },
  {
    text: "Video",
    value: "video",
  },
];

const timeSlots = [
  "10:30 AM",
  "11:30 AM",
  "02:30 PM",
  "04:30 PM",
  "06:30 PM",
  "07:30 PM",
  "08:30 AM",
  "10:30 AM",
  "10:30 AM",
  "10:30 AM",
  "10:30 AM",
  "10:30 AM",
];
export default function BookAppointment() {
  const [selectDuration, setSelectDuration] = useState(timings[0]["value"]);
  const [setMode, setSelectMode] = useState(modes[0]["value"]);

  const handleDuration = (event) => {
    setSelectDuration(event.target.id);
  };

  const handleModes = (event) => {
    setSelectMode(event.target.id);
  };
  return (
    <section className="container mx-auto pb-10 pt-6">
      <div className="mb-8 lg:flex lg:gap-x-5">
        <div className="mb-4 flex gap-x-2 lg:mb-0 lg:w-1/2 lg:gap-x-5">
          {timings.map((value, i) => {
            return (
              <label
                key={i}
                htmlFor={value.value}
                className={
                  selectDuration == value.value
                    ? "block w-full cursor-pointer rounded-full bg-primary-300 px-5 py-2.5 text-center font-semibold text-white"
                    : "block w-full cursor-pointer rounded-full border-2 border-primary-300 px-5 py-2.5 text-center font-semibold text-primary-300"
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
                <span>{value.text}</span>
              </label>
            );
          })}
        </div>

        <div className="mb-4 flex gap-x-2 lg:mb-0 lg:w-1/2 lg:gap-x-5">
          {modes.map((value, i) => {
            return (
              <label
                key={i}
                htmlFor={value.value}
                className={
                  setMode == value.value
                    ? "block w-full cursor-pointer rounded-full bg-primary-300 px-5 py-2.5 text-center font-semibold text-white"
                    : "block w-full cursor-pointer rounded-full border-2 border-primary-300 px-5 py-2.5 text-center font-semibold text-primary-300"
                }
              >
                <input
                  type="radio"
                  name="duration"
                  id={value.value}
                  checked={setMode == value.value}
                  onChange={handleModes}
                  className="hidden"
                />
                <span>{value.text}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="mb-8 lg:gap-x-5">
        <AppointmentComponent />
      </div>

      <div className="lg:flex lg:gap-x-5 ">
        <div className="rounded-xl bg-primary-50 p-5 lg:w-1/2 lg:p-10">
          <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
            Pricing Details
          </h2>
          {timings
            .filter((price) => price.value == selectDuration)
            .map((filteredPrice) => (
              <>
                <h4 className="mb-2 flex justify-between font-semibold">
                  <span>Total Price ({filteredPrice.text}) Session</span>
                  <span>Rs. {filteredPrice.price}</span>
                </h4>
                <h5 className="mb-5 flex justify-between font-semibold">
                  <span>Discount</span>
                  <span>-100</span>
                </h5>
                <h5 className="mb-2 flex justify-between font-semibold">
                  <span>Amount to be paid</span>
                  <span className="font-bold">
                    Rs. {filteredPrice.price - 100}
                  </span>
                </h5>
              </>
            ))}
        </div>
        <div className="pt-5 lg:w-1/2">
          <label htmlFor="coupon">
            <input
              type="text"
              name="coupon"
              id="coupon"
              placeholder="Apply Coupon"
              className="mb-3 block w-full rounded-xl border-2 border-slate-200 px-6 py-3 text-lg"
            />
          </label>
          <label
            htmlFor="policies"
            className="mb-6 flex cursor-pointer select-none items-center pl-2"
          >
            <input type="checkbox" name="policies" id="policies" />
            <span className="ml-2 flex flex-wrap text-sm font-medium lg:text-base">
              <span>I have read and agree with the</span>
              <Link to="" className="mx-1 font-medium text-primary-400">
                Cancellation
              </Link>
              <span>and</span>
              <Link to="" className="ml-1 font-medium text-primary-400">
                Privacy Policy
              </Link>
            </span>
          </label>
          <label htmlFor="submit">
            <button className="btn-one">Book an appointment now</button>
          </label>
        </div>
      </div>
    </section>
  );
}
