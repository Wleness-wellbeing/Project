import React from "react";
import { Link } from "react-router-dom";
// Data
import { assessment1, assessment2 } from "../assets";
import {
  ageRange,
  assessmentFeelings,
  experiencingIssue,
  languages,
  managingDifficulty,
} from "../data/assessment";
// Components
import AssessmentOption from "./AssessmentOption";
import AssessmentTextBtn from "./AssessmentTextBtn";

export default function Assessment() {
  return (
    <div className="fixed inset-0 w-full bg-white h-[100svh] grid place-items-center">
      <div className="w-[720px] mx-auto relative">
        {/* Welcome Page */}
        <div className="hidden">
          <h2 className="subheading text-center mb-4">
            <span className="heading-primary">Welcome to Wleness</span>
          </h2>

          <div className="w-[300px] mx-auto">
            <div className=" text-center">
              <h4 className="text-2xl mb-5">
                Do you want help finding a
                <Link
                  to=""
                  className="text-primary-400 font-bold text-xl block"
                >
                  Therapist?
                </Link>
              </h4>
              <button className="btn-primary">Find the Therapist</button>
            </div>
            <div className="flex items-center gap-3 justify-center my-8">
              <span className="h-1 w-40 bg-primary-100"></span>
              <span>OR</span>
              <span className="h-1 w-40 bg-primary-100"></span>
            </div>
            <div className=" text-center">
              <h4 className="text-2xl mb-5">
                Do you want to browse all our
                <Link
                  to=""
                  className="text-primary-400 font-bold text-xl block"
                >
                  Therapist?
                </Link>
              </h4>
              <button className="btn-primary">Browse all Therapist</button>
            </div>
          </div>
          {/* Images */}
          <img src={assessment1} alt="" className="absolute top-14 -left-40" />
          <img
            src={assessment2}
            alt=""
            className="absolute bottom-0 -right-20"
          />
        </div>

        {/* Screen 1 */}
        <div className="hidden">
          <h2 className="flex flex-col text-primary-300 text-4xl font-bold text-center mb-8">
            <span>What is in your mind?</span>
            <span>How are you feeling?</span>
          </h2>
          <div className="flex justify-between flex-wrap gap-4 my-14">
            {assessmentFeelings.map((value, index) => {
              return (
                <AssessmentOption
                  key={index}
                  image={value[0]}
                  name={value[1]}
                />
              );
            })}
          </div>
          <div className="text-center">
            <button className="btn-primary !w-fit !py-2.5 font-semibold">
              Save & Next
            </button>
          </div>
        </div>

        {/* Screen 2 */}
        <div className="lg:w-[640px] lg:mx-auto hidden">
          <h2 className="flex flex-col text-primary-300 text-4xl font-bold text-center">
            How Long have you been experiencing these issues?
          </h2>
          <div className="flex justify-center flex-wrap gap-4 my-8">
            {experiencingIssue.map((value, index) => {
              return <AssessmentTextBtn key={index} name={value} />;
            })}
          </div>
          <h2 className="flex flex-col text-primary-300 text-4xl font-bold text-center">
            How difficult it is for you to manage all these issues?
          </h2>
          <div className="flex justify-center flex-wrap gap-4 my-8">
            {managingDifficulty.map((value, index) => {
              return <AssessmentTextBtn key={index} name={value} />;
            })}
          </div>
          <div className="text-center">
            <button className="btn-primary !w-fit !py-2.5 font-semibold">
              Save & Next
            </button>
          </div>
        </div>

        {/* Screen 3 */}
        <div className="lg:w-[600px] lg:mx-auto hidden">
          <h2 className="flex flex-col text-primary-300 text-4xl font-bold text-center">
            Which language are you comfortable?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {languages.map((value, index) => {
              return <AssessmentTextBtn key={index} name={value} />;
            })}
          </div>
          <h2 className="flex flex-col text-primary-300 text-4xl font-bold text-center">
            How old are you?
          </h2>
          <div className="flex justify-center flex-wrap gap-4 my-8">
            {ageRange.map((value, index) => {
              return <AssessmentTextBtn key={index} name={value} />;
            })}
          </div>
          <div className="text-center">
            <button className="btn-primary !w-fit !py-2.5 font-semibold">
              Save & Next
            </button>
          </div>
        </div>

        {/* Screen 4 */}
        <div className="lg:w-[600px] lg:mx-auto">
          <h2 className="flex flex-col text-primary-300 text-4xl font-bold text-center">
            Thanks you for your response
          </h2>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            <div className="bg-primary-100 rounded-xl px-6 py-2 w-full">
              <h4 className="flex justify-between font-semibold">
                <span className="text-lg text-white">Your Issues :</span>
                <span className="text-white cursor-pointer underline">
                  Edit
                </span>
              </h4>
              <p className="text-white font-medium">Depression</p>
            </div>
            <div className="bg-primary-100 rounded-xl px-6 py-2 w-full">
              <h4 className="flex justify-between font-semibold">
                <span className="text-lg text-white">
                  Duration & difficulty your issue:
                </span>
                <span className="text-white cursor-pointer underline">
                  Edit
                </span>
              </h4>
              <p className="text-white font-medium">2 weeks or less</p>
            </div>
            <div className="bg-primary-100 rounded-xl px-6 py-2 w-full">
              <h4 className="flex justify-between font-semibold">
                <span className="text-lg text-white">
                  Language of your choice:
                </span>
                <span className="text-white cursor-pointer underline">
                  Edit
                </span>
              </h4>
              <p className="text-white font-medium">English & Hindi</p>
            </div>
            <div className="bg-primary-100 rounded-xl px-6 py-2 w-full">
              <h4 className="flex justify-between font-semibold">
                <span className="text-lg text-white">Your Age:</span>
                <span className="text-white cursor-pointer underline">
                  Edit
                </span>
              </h4>
              <p className="text-white font-medium">18 - 25 years</p>
            </div>
          </div>
          <div className="text-center">
            <button className="btn-primary !w-fit !py-2.5 font-semibold">
              Find the Therapist
            </button>
          </div>
        </div>
      </div>
      {/* Shapes */}
      <span className="border-8 w-40 h-40 border-primary-50 rounded-full absolute -top-14 right-10"></span>
      <span className="border-8 w-40 h-40 border-primary-50 rounded-full absolute left-10 -bottom-8"></span>
      <span className="border-4 w-16 h-16 border-primary-50 rounded-full absolute top-20 right-52"></span>
      <span className="border-4 w-16 h-16 border-primary-50 rounded-full absolute left-48 bottom-32"></span>
      <span className="border-4 w-12 h-12 border-primary-50 rounded-full absolute left-48 top-1/2"></span>
      <span className="w-12 h-12 rounded-full bg-primary-50 absolute top-44 right-40"></span>
      <span className="w-12 h-12 rounded-full bg-primary-50 absolute bottom-12 left-72"></span>
      <span className="w-12 h-12 rounded-full bg-primary-50 absolute top-12 left-80"></span>
      <span className="w-12 h-12 rounded-full bg-primary-50 absolute bottom-12 right-32"></span>
    </div>
  );
}
