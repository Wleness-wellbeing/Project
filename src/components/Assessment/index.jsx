import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
// Data
import { assessment1, assessment2 } from "../../assets";
import {
  ageRange,
  assessmentFeelings,
  experiencingIssue,
  languages,
  managingDifficulty,
} from "../../data/assessment";
// Components
import AssessmentOption from "./AssessmentOption";
import AssessmentTextBtn from "./AssessmentTextBtn";

export default function Assessment({ isAssessmentOpen, onAssessmentClose }) {
  if (!isAssessmentOpen) return null;
  // Welcome Screen Handling
  const [startAssessment, setStartAssessment] = useState(true);
  const [screenOne, setScreenOne] = useState(false);
  const [screenTwo, setScreenTwo] = useState(false);
  const [screenThree, setScreenThree] = useState(false);
  const [screenFour, setScreenFour] = useState(false);
  const [finalScreen, setFinalScreen] = useState(false);
  // Handle welcome and first screen
  function openWelcomeScreen() {
    setStartAssessment(true);
    setScreenOne(false);
    setScreenTwo(false);
    setScreenThree(false);
    setScreenFour(false);
    setFinalScreen(false);
  }
  function openScreenOne() {
    setStartAssessment(false);
    setScreenOne(true);
    setScreenTwo(false);
    setScreenThree(false);
    setScreenFour(false);
    setFinalScreen(false);
  }

  function openScreenTwo() {
    setStartAssessment(false);
    setScreenOne(false);
    setScreenTwo(true);
    setScreenThree(false);
    setScreenFour(false);
    setFinalScreen(false);
  }

  // Handle first and second screen
  function openScreenThree() {
    setStartAssessment(false);
    setScreenOne(false);
    setScreenTwo(false);
    setScreenThree(true);
    setScreenFour(false);
    setFinalScreen(false);
  }

  // Handle first and second screen
  function openScreenFour() {
    setStartAssessment(false);
    setScreenOne(false);
    setScreenTwo(false);
    setScreenThree(false);
    setScreenFour(true);
    setFinalScreen(false);
  }

  return (
    <div className="fixed inset-0 w-full grid place-items-center backdrop-brightness-50 z-30">
      <div className="w-[420px] md:w-[720px] lg:w-[1100px] py-12 mx-auto relative border-2 overflow-hidden bg-white rounded-3xl">
        {/* Welcome Page */}
        {startAssessment && (
          <div className="py-14">
            <h2 className="subheading text-center mb-4">
              <span className="heading-primary">Welcome to Wleness</span>
            </h2>

            <div className="w-[300px] mx-auto">
              <div className=" text-center">
                <h4 className="text-xl mb-5">
                  <span className="font-semibold">
                    Do you want help finding a
                  </span>
                  <Link
                    to="/services/therapy"
                    className="text-primary-400 font-bold text-xl block"
                  >
                    Therapist?
                  </Link>
                </h4>
                <button className="btn-primary" onClick={openScreenOne}>
                  Find the Therapist
                </button>
              </div>
              <div className="flex items-center gap-3 justify-center my-8">
                <span className="h-1 w-40 bg-primary-100"></span>
                <span>OR</span>
                <span className="h-1 w-40 bg-primary-100"></span>
              </div>
              <div className=" text-center">
                <h4 className="text-xl mb-5">
                  <span className="font-semibold mr-1">
                    Do you want to browse all our
                  </span>
                  <Link
                    to="/services/therapy"
                    className="text-primary-400 font-bold text-xl"
                  >
                    Therapist?
                  </Link>
                </h4>
                <Link to="/experts/all" className="btn-primary block">
                  Browse all Therapist
                </Link>
              </div>
            </div>
            {/* Images */}
            <img
              src={assessment1}
              alt=""
              className="w-32 absolute top-32 left-20"
            />
            <img
              src={assessment2}
              alt=""
              className="w-32 absolute bottom-40 right-20"
            />
          </div>
        )}

        {/* Screen 1 */}
        {screenOne && (
          <div className="lg:w-[560px] lg:mx-auto">
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
            <div className="text-center flex justify-center space-x-4">
              <button
                onClick={openWelcomeScreen}
                className="btn-primary !w-fit !py-2 font-semibold border-2 border-primary-300 !bg-transparent !text-primary-300"
              >
                Go Back
              </button>
              <button
                className="btn-primary !w-fit !py-2.5 font-semibold"
                onClick={openScreenTwo}
              >
                Save & Next
              </button>
            </div>
          </div>
        )}

        {/* Screen 2 */}
        {screenTwo && (
          <div className="lg:w-[640px] lg:mx-auto">
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

            <div className="text-center flex justify-center space-x-4">
              <button
                onClick={openScreenOne}
                className="btn-primary !w-fit !py-2 font-semibold border-2 border-primary-300 !bg-transparent !text-primary-300"
              >
                Go Back
              </button>
              <button
                className="btn-primary !w-fit !py-2.5 font-semibold"
                onClick={openScreenThree}
              >
                Save & Next
              </button>
            </div>
          </div>
        )}

        {/* Screen 3 */}
        {screenThree && (
          <div className="lg:w-[600px] lg:mx-auto">
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
            <div className="text-center flex justify-center space-x-4">
              <button
                onClick={openScreenTwo}
                className="btn-primary !w-fit !py-2 font-semibold border-2 border-primary-300 !bg-transparent !text-primary-300"
              >
                Go Back
              </button>
              <button
                className="btn-primary !w-fit !py-2.5 font-semibold"
                onClick={openScreenFour}
              >
                Save & Next
              </button>
            </div>
          </div>
        )}

        {/* Screen 4 */}
        {screenFour && (
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
              <Link
                to="/experts/all"
                className="btn-primary !w-fit !py-2.5 font-semibold inline-block"
              >
                Find the Experts
              </Link>
            </div>
          </div>
        )}

        {/* Shapes */}
        <span className="border-8 w-40 h-40 border-primary-50 rounded-full absolute -top-14 right-10"></span>
        <span className="border-8 w-40 h-40 border-primary-50 rounded-full absolute left-10 -bottom-8"></span>
        <span className="border-4 w-14 h-14 border-primary-50 rounded-full absolute top-24 right-44"></span>
        <span className="border-4 w-16 h-16 border-primary-50 rounded-full absolute left-48 bottom-32"></span>
        <span className="border-4 w-12 h-12 border-primary-50 rounded-full absolute left-48 top-1/2"></span>
        <span className="w-10 h-10 rounded-full bg-primary-50 absolute top-44 right-40"></span>
        <span className="w-10 h-10 rounded-full bg-primary-50 absolute bottom-12 left-72"></span>
        <span className="w-10 h-10 rounded-full bg-primary-50 absolute top-4 left-80"></span>
        <span className="w-10 h-10 rounded-full bg-primary-50 absolute bottom-12 right-32"></span>

        {/* Close */}
        <FontAwesomeIcon
          icon={faClose}
          className="text-4xl absolute top-8 right-8 text-slate-800 cursor-pointer"
          onClick={onAssessmentClose}
        />
      </div>
    </div>
  );
}
