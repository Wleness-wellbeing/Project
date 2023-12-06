import {
  faAngleLeft,
  faCalendar,
  faVideo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Checkout({
  back,
  mode,
  // duration,
  date,
  time,
  plan,
  handleCheckout,
  setMobile,
  mobileNumber,
  email,
  setEmail,
  username,
  setUsername,
}) {
  return (
    <div className="py-6">
      <div className="mb-4 flex items-center justify-between text-center md:flex-row ">
        <span onClick={back} className="cursor-pointer">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-2xl hover:text-slate-600"
          />
        </span>
        <h2 className="text-3xl font-bold">Confirm Booking</h2>
        <span className="hidden lg:block"></span>
      </div>

      <div className="mt-8">
        <div className="flex justify-center gap-x-2 lg:gap-x-5">
          <div className="flex w-1/2 flex-col justify-between rounded-lg border-2 border-primary-300 px-4 py-4 text-center font-bold md:w-60 lg:px-8">
            <span className="text-center">
              <FontAwesomeIcon icon={faVideo} /> <span>Mode</span>
            </span>
            {/* <span className="my-2 flex justify-between text-sm font-semibold capitalize text-slate-400 lg:text-base">
              <span>{mode}</span>
              <span>
                {
                  timings
                    .filter((value) => duration == value.value)
                    .map((text) => text.text)[0]
                }
              </span>
            </span> */}
            <span className="my-2 flex justify-between text-sm font-semibold capitalize text-slate-400 lg:text-base">
              <span>{mode}</span>
              <span>Online</span>
            </span>
            <span
              className="cursor-pointer text-center underline transition-all hover:text-primary-300"
              onClick={back}
            >
              Change
            </span>
          </div>

          <div className="w-1/2 rounded-lg border-2 border-primary-300 px-4 py-4 text-center font-bold md:w-60 lg:px-8">
            <p>
              <FontAwesomeIcon icon={faCalendar} /> <span>Date</span>
            </p>
            <div className="my-1">
              <p className="text-sm font-semibold text-slate-400 lg:text-base">
                {date}
              </p>
              <p className="text-sm font-semibold text-slate-400 lg:text-base">
                {time}
              </p>
            </div>
            <span
              className="cursor-pointer underline transition-all hover:text-primary-300"
              onClick={back}
            >
              Change
            </span>
          </div>
        </div>

        <div className="my-8 hidden">
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

        <div className="mt-8">
          <h4 className="mb-2 text-xl font-semibold">Payment Details:</h4>
          <ul className="space-y-4 border-b-2 border-dashed border-slate-400 pb-4">
            <li className="flex justify-between">
              <span className="font-medium">{plan.plan} Price</span>
              <span className="font-medium">Rs. {plan.price}</span>
            </li>
            {/* <li className="mb-2 flex justify-between">
              <span className="font-medium">Discount</span>
              <span className="font-medium">Rs. 99</span>
            </li> */}
            <li className="flex justify-between">
              <span className="text-xl font-bold">Final Amount</span>
              <span className="font-medium">Rs. {plan.price}</span>
            </li>
          </ul>
        </div>

        <form className="pt-4" onSubmit={handleCheckout} autoComplete="off">
          <h4 className="mb-2 font-semibold">Enter Mobile Number</h4>
          <div className="grid grid-cols-2 gap-x-4">
            <label
              htmlFor="username"
              className="form-input col-span-2  !flex !w-full justify-between"
            >
              <input
                type="text"
                className="block w-full outline-none"
                placeholder="Enter Your Name"
                value={username}
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label
              htmlFor="phone"
              className="form-input !flex !w-full justify-between"
            >
              <input
                type="tel"
                className="block w-full outline-none"
                placeholder="Phone"
                value={mobileNumber}
                name="phone"
                id="phone"
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>
            <label
              htmlFor="email"
              className="form-input !flex !w-full justify-between"
            >
              <input
                type="email"
                className="block w-full outline-none"
                placeholder="Email"
                value={email}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="mt-3 text-center">
            <button
              className="btn-one !rounded-lg disabled:cursor-not-allowed disabled:bg-gray-500"
              disabled={
                mobileNumber.length == 10 && email != "" && username != ""
                  ? false
                  : true
              }
              type="submit"
            >
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
