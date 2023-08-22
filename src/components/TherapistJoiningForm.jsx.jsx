import React, { useState } from "react";
import { Bubble } from "../assets";
import ProfessionalDetails from "./TherapistProfessionalDetails";
import { Link } from "react-router-dom";

const TherapistJoiningForm = () => {
  const [personalDetailsSaved, setPersonalDetailsSaved] = useState(false);

  const handleSaveAndContinue = () => {
    setPersonalDetailsSaved(true);
  };

  const handleBack = () => {
    setPersonalDetailsSaved(false);
  };
  return (
    <div className="container mx-auto  ">
      <img
        src={Bubble}
        alt="Top Left"
        className="absolute left-0 top-0 hidden xl:block "
      />
      {!personalDetailsSaved ? (
        <div className="mx-auto  w-3/4 rounded-2xl p-8 shadow-lg shadow-slate-300">
          <h2 className="mt-4 text-center text-3xl font-bold text-primary-400 ">
            Therapist Joining Form - Personal Details
          </h2>
          <div className="my-10 grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="w-full  rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div className="">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="State"
                className="w-full  rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Postal/Zip code"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Country"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
            <div className="col-span-2">
              <input
                type="Date"
                placeholder="Date of Birth"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 text-slate-400 outline-none"
              />
            </div>
            <div className=" col-span-2">
              <input
                type="text"
                placeholder="Language"
                className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
              />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-4">
            <Link
              to="/"
              className="btn-transparent !w-fit !border-primary-300 !py-2 font-semibold text-primary-400"
            >
              Back
            </Link>
            <button
              onClick={handleSaveAndContinue}
              className="rounded-xl bg-primary-300 px-4 py-2.5 font-semibold text-white hover:bg-primary-500"
            >
              Save & Continue
            </button>
          </div>
        </div>
      ) : (
        <ProfessionalDetails handleBack={handleBack} />
      )}
      <img
        src={Bubble}
        alt="Bottom Right"
        className="absolute bottom-0 right-0  hidden scale-x-[-1] transform xl:block "
      />
    </div>
  );
};

export default TherapistJoiningForm;
