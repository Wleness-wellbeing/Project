import React, { useState } from "react";
import { Bubble } from "../assets";
import ProfessionalDetails from "./PsychiatristProfessionalDetails";

const PsychiatristJoiningForm = () => {
  const [personalDetailsSaved, setPersonalDetailsSaved] = useState(false);

  const handleSaveAndContinue = () => {
    setPersonalDetailsSaved(true);
  };
  return (
    <div className="container mx-auto  ">
      <img
        src={Bubble}
        alt="Top Left"
        className="absolute top-0 left-0 hidden xl:block "
      />
      {!personalDetailsSaved ? (
        <div className="w-3/4  mx-auto  shadow-lg shadow-slate-300 p-8 rounded-2xl">
          <h2 className="text-3xl mt-4 text-primary-400 text-center font-bold ">
            Therapist Joining Form - Personal Details
          </h2>
          <div className="grid grid-cols-2 gap-4 my-10">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div className="">
              <input
                type="email"
                placeholder="Email"
                className="w-full  border-2 rounded-xl border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div className="">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border-2 rounded-xl border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                placeholder="Address"
                className="w-full border-2 rounded-xl border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="w-full border-2 rounded-xl border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="State"
                className="w-full  border-2 rounded-xl border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Postal/Zip code"
                className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Country"
                className="w-full border-2 rounded-xl border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
            <div className="col-span-2">
              <input
                type="Date"
                placeholder="Date of Birth"
                className="w-full rounded-xl border-2 border-primary-300 outline-none  text-slate-400 px-4 py-2.5"
              />
            </div>
            <div className=" col-span-2">
              <input
                type="text"
                placeholder="Language"
                className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={handleSaveAndContinue}
              className="bg-primary-300    text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-primary-500"
            >
              Save & Continue
            </button>
          </div>
        </div>
      ) : (
        <ProfessionalDetails />
      )}
      <img
        src={Bubble}
        alt="Bottom Right"
        className="absolute bottom-0 right-0  transform scale-x-[-1] hidden xl:block "
      />
    </div>
  );
};

export default PsychiatristJoiningForm;
