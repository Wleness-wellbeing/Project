import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentComponent from "../Appointment";
import { APPOINTMENT_BOOK_URI } from "../../data/api";
import axios from "axios";
import { modes, timings } from "../../data/doctors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectPricing({ slug }) {
  const [selectDuration, setSelectDuration] = useState(timings[0]["value"]);
  const [setMode, setSelectMode] = useState(modes[0]["value"]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleDuration = (event) => {
    setSelectDuration(event.target.id);
  };

  const handleModes = (event) => {
    setSelectMode(event.target.id);
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if ((selectDuration, setMode, selectedDate, selectedTime)) {
      let formData = new FormData();

      formData.append("duration", selectDuration);
      formData.append("mode", setMode);
      formData.append("date", selectedDate);
      formData.append("time", selectedTime);
      formData.append("price", "350");
      console.log(formData);

      try {
        const response = await axios.post(APPOINTMENT_BOOK_URI, formData);
        console.log(response.data);
        setSuccessMessage({
          status: response.data.status,
          message: response.data.message,
        });
      } catch (error) {
        console.error("Error sending data:", error);
        setSuccessMessage({
          status: "error",
          message: "Internal Server Error! Please Try Again later",
        });
      }
    } else {
      setSuccessMessage({
        status: "error",
        message: "Please fill your details properly!",
      });
    }
  };
  return (
    <section className="container mx-auto pb-10 lg:pt-6">
      <div className="lg:flex lg:gap-x-5">
        <div className="lg:w-1/2">
          <div className="mb-4 flex gap-x-2 lg:gap-x-5">
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
                  <span className="mr-1 lg:mr-2">
                    <FontAwesomeIcon
                      icon={value.icon}
                      className="text-xs lg:text-base"
                    />
                  </span>
                  <span className="text-sm lg:text-base">{value.text}</span>
                </label>
              );
            })}
          </div>
          <div className="mb-4 flex gap-x-2 lg:mb-0 lg:gap-x-5">
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
                  <span className="text-sm lg:text-base">{value.text}</span>
                </label>
              );
            })}
          </div>

          <div className="hidden pt-5 lg:block">
            <label htmlFor="coupon">
              <input
                type="text"
                name="coupon"
                id="coupon"
                placeholder="Apply Coupon"
                className="mb-3 block w-full rounded-xl border-2 border-slate-200 px-6 py-2.5"
              />
            </label>

            <p
              className={`mb-4 text-center font-semibold ${
                successMessage.status == "success"
                  ? " text-green-500 "
                  : " text-red-500 "
              }`}
            >
              {successMessage.message}
            </p>
            <div className="text-center">
              <Link to={slug} className="btn-one inline-block">
                Book an appointment now
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-primary-50 p-5 lg:w-1/2 lg:p-10 ">
          <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
            Pricing Details
          </h2>
          {timings
            .filter((price) => price.value == selectDuration)
            .map((filteredPrice) => (
              <>
                <div className="mb-6 ">
                  <h4 className="mb-2 flex justify-between font-semibold">
                    <span>Total Price ({filteredPrice.text}) Session</span>
                    <span>Rs. {filteredPrice.price}</span>
                  </h4>
                  <h5 className="mb-2 flex justify-between font-semibold">
                    <span>Discount</span>
                    <span>-100</span>
                  </h5>
                  <h5 className="mb-5 flex justify-between font-semibold">
                    <span>Coupon Discount</span>
                    <span>-{filteredPrice.coupon_discount}</span>
                  </h5>
                </div>
                <h5 className="mb-2 flex justify-between font-semibold">
                  <span>Amount to be paid</span>
                  <span className="font-bold">
                    Rs.{" "}
                    {filteredPrice.price - filteredPrice.coupon_discount - 100}
                  </span>
                </h5>
              </>
            ))}
        </div>

        <div className="pt-5 lg:hidden">
          <label htmlFor="coupon">
            <input
              type="text"
              name="coupon"
              id="coupon"
              placeholder="Apply Coupon"
              className="mb-3 block w-full rounded-xl border-2 border-slate-200 px-6 py-2.5"
            />
          </label>

          <p
            className={`mb-4 text-center font-semibold ${
              successMessage.status == "success"
                ? " text-green-500 "
                : " text-red-500 "
            }`}
          >
            {successMessage.message}
          </p>
          <div className="text-center">
            <Link to={slug} className="btn-one inline-block">
              Book an appointment now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
