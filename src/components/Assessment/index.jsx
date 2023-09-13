import React, { useEffect, useState } from "react";
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

  // Slides States
  const [selectFeeling, setSelectFeeling] = useState([]);
  const [selectExperienceIssue, setSelectExperienceIssue] = useState("");
  const [selectDifficulty, setSelectDifficulty] = useState("");
  const [selectLanguage, setSelectLanguage] = useState([]);
  const [selectAge, setSelectAge] = useState("");

  // Screen One - Select Feelings
  const handleFeeling = (event) => {
    const exists = selectFeeling.includes(event.target.value);
    setSelectFeeling(
      exists
        ? selectFeeling.filter((element) => element !== event.target.value)
        : [...selectFeeling, event.target.value],
    );
  };

  // Screen Two - Select Experiencing Issue
  const handleExperienceIssue = (event) => {
    setSelectExperienceIssue(event.target.value);
  };

  // Screen Two - Select Difficulty Level
  const handleDifficultyLevel = (event) => {
    setSelectDifficulty(event.target.value);
  };

  // Screen Three - Select Feelings
  const handleLanguages = (event) => {
    const exists = selectLanguage.includes(event.target.value);
    setSelectLanguage(
      exists
        ? selectLanguage.filter((element) => element !== event.target.value)
        : [...selectLanguage, event.target.value],
    );
  };

  // Screen Three - Select Age
  const hangleAge = (event) => {
    setSelectAge(event.target.value);
  };

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

  // Close assessment modal on clicking outside of the box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isAssessmentOpen && !event.target.closest(".assessment")) {
        onAssessmentClose();
      }
    };

    if (isAssessmentOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isAssessmentOpen, onAssessmentClose]);

  console.log(selectFeeling);
  return (
    <div className="fixed inset-0 z-50 grid w-full place-items-center backdrop-brightness-50">
      <div className="assessment absolute mx-auto flex h-full w-full items-center justify-center overflow-hidden border-2 bg-[#E5FEFB] py-4 md:w-[720px] lg:relative lg:h-fit lg:w-[920px] lg:rounded-3xl lg:py-12">
        {/* Welcome Page */}
        {startAssessment && (
          <div className="flex flex-col justify-center py-6 text-center lg:h-[500px] lg:py-10">
            <h2 className="subheading mb-2 lg:mb-4">
              <span className="heading-primary">Welcome to Wleness</span>
            </h2>

            <img
              loading="lazy"
              src={assessment1}
              alt=""
              className="mx-auto my-4 mb-8 w-28 lg:w-36"
            />
            <button
              className="btn-primary mx-auto bg-gradient-to-r from-secondary to-tertiary !font-semibold"
              onClick={openScreenOne}
            >
              Find a Therapist
            </button>
          </div>
        )}

        {/* Screen 1 */}
        {screenOne && (
          <div className="flex flex-col justify-center lg:mx-auto lg:h-[500px] lg:w-[600px]">
            <h2 className="heading-primary flex flex-col text-center text-xl font-bold lg:text-3xl">
              How are you feeling?
            </h2>
            <div className="my-6 grid grid-cols-2 gap-2 px-4 lg:my-10 lg:grid-cols-3 lg:gap-4 lg:px-0">
              {assessmentFeelings.map((value, index) => {
                return (
                  <AssessmentOption
                    key={index}
                    image={value[0]}
                    name={value[1]}
                    index={index}
                    onchange={handleFeeling}
                    checked={selectFeeling.includes(value[1])}
                  />
                );
              })}
            </div>
            <div className="flex justify-center space-x-4 text-center">
              <button
                onClick={openWelcomeScreen}
                className="btn-primary !w-fit border-2 border-primary-300 !bg-transparent !bg-white !py-2 font-semibold !text-primary-300 transition-all hover:shadow-md"
              >
                Go Back
              </button>
              <button
                className="btn-primary !w-fit bg-gradient-to-r from-secondary to-tertiary !py-2.5 !font-semibold transition-all hover:shadow-md"
                onClick={openScreenTwo}
              >
                Save & Next
              </button>
            </div>
          </div>
        )}

        {/* Screen 2 */}
        {screenTwo && (
          <div className="px-2 lg:mx-auto lg:h-[500px] lg:w-[640px]">
            <h2 className="heading-primary mb-0 flex flex-col text-center text-xl font-bold lg:mb-8 lg:text-3xl">
              How Long have you been experiencing these issues?
            </h2>
            <div className="my-4 flex flex-wrap justify-center gap-2 lg:my-6">
              {experiencingIssue.map((value, index) => {
                return (
                  <AssessmentTextBtn
                    key={index}
                    name={value}
                    onclick={handleExperienceIssue}
                    selected={selectExperienceIssue === value}
                  />
                );
              })}
            </div>
            <h2 className="heading-primary mb-0 flex flex-col text-center text-xl font-bold lg:mb-8 lg:text-3xl">
              How difficult it is for you to manage all these issues?
            </h2>
            <div className="my-4 flex flex-col flex-wrap justify-center gap-2 px-4 lg:my-6 lg:flex-row lg:px-0">
              {managingDifficulty.map((value, index) => {
                return (
                  <AssessmentTextBtn
                    key={index}
                    name={value}
                    onclick={handleDifficultyLevel}
                    selected={selectDifficulty === value}
                  />
                );
              })}
            </div>

            <div className="mt-8 flex justify-center space-x-4 text-center lg:mt-0">
              <button
                onClick={openScreenOne}
                className="btn-primary !w-fit border-2 border-primary-300 !bg-transparent !bg-white !py-2 font-semibold !text-primary-300 transition-all hover:shadow-md"
              >
                Go Back
              </button>
              <button
                className="btn-primary !w-fit bg-gradient-to-r from-secondary to-tertiary !py-2.5 !font-semibold transition-all hover:shadow-md"
                onClick={openScreenThree}
              >
                Save & Next
              </button>
            </div>
          </div>
        )}

        {/* Screen 3 */}
        {screenThree && (
          <div className="xl px-2 lg:mx-auto lg:h-[500px] lg:w-[640px] lg:px-0 xl:w-[700px]">
            <h2 className="heading-primary mb-0 flex flex-col text-center text-xl font-bold lg:mb-8 lg:text-3xl">
              Which language are you comfortable?
            </h2>
            <div className="my-4 flex flex-wrap justify-center gap-2 lg:my-8 lg:gap-4">
              {languages.map((value, index) => {
                return (
                  <AssessmentTextBtn
                    key={index}
                    name={value}
                    onclick={handleLanguages}
                    selected={selectLanguage.includes(value)}
                  />
                );
              })}
            </div>
            <h2 className="heading-primary mb-0 flex flex-col text-center text-xl font-bold lg:mb-8 lg:text-3xl">
              How old are you?
            </h2>
            <div className="my-4 flex flex-wrap justify-center gap-2 lg:my-8 lg:gap-4">
              {ageRange.map((value, index) => {
                return (
                  <AssessmentTextBtn
                    key={index}
                    name={value}
                    onclick={hangleAge}
                    selected={selectAge === value}
                  />
                );
              })}
            </div>
            <div className="mt-8 flex justify-center space-x-4 text-center lg:mt-0">
              <button
                onClick={openScreenTwo}
                className="btn-primary !w-fit border-2 border-primary-300 !bg-transparent !bg-white !py-2 font-semibold !text-primary-300 transition-all hover:shadow-md"
              >
                Go Back
              </button>
              <button
                className="btn-primary !w-fit bg-gradient-to-r from-secondary to-tertiary !py-2.5 !font-semibold transition-all hover:shadow-md"
                onClick={openScreenFour}
              >
                Save & Next
              </button>
            </div>
          </div>
        )}

        {/* Screen 4 */}
        {screenFour && (
          <div className="flex flex-col justify-center px-4 lg:mx-auto lg:h-[500px] lg:w-[600px] lg:px-0">
            <h2 className="heading-primary flex flex-col text-center text-3xl font-bold lg:text-4xl">
              Thanks, Let's Begin!
            </h2>
            <div className="my-8 flex flex-wrap justify-center gap-4">
              <div className="w-full rounded-xl bg-primary-100 px-6 py-2">
                <h4 className="flex justify-between font-semibold">
                  <span className="text-lg text-white">Your Issues :</span>
                  <span
                    className="cursor-pointer text-white underline"
                    onClick={openScreenOne}
                  >
                    Edit
                  </span>
                </h4>
                <p className="font-medium text-white">
                  {selectFeeling.join(", ")}
                </p>
              </div>
              <div className="w-full rounded-xl bg-primary-100 px-6 py-2">
                <h4 className="flex justify-between font-semibold">
                  <span className="text-lg text-white">
                    Duration & difficulty your issue:
                  </span>
                  <span
                    className="cursor-pointer text-white underline"
                    onClick={openScreenTwo}
                  >
                    Edit
                  </span>
                </h4>
                <p className="font-medium text-white">{selectDifficulty}</p>
              </div>
              <div className="w-full rounded-xl bg-primary-100 px-6 py-2">
                <h4 className="flex justify-between font-semibold">
                  <span className="text-lg text-white">
                    Language of your choice:
                  </span>
                  <span
                    className="cursor-pointer text-white underline"
                    onClick={openScreenThree}
                  >
                    Edit
                  </span>
                </h4>
                <p className="font-medium text-white">
                  {selectLanguage.join(", ")}
                </p>
              </div>
              <div className="w-full rounded-xl bg-primary-100 px-6 py-2">
                <h4 className="flex justify-between font-semibold">
                  <span className="text-lg text-white">Your Age:</span>
                  <span
                    className="cursor-pointer text-white underline"
                    onClick={openScreenThree}
                  >
                    Edit
                  </span>
                </h4>
                <p className="font-medium text-white">{selectAge}</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 text-center">
              <button
                onClick={openScreenThree}
                className="btn-primary !w-fit border-2 border-primary-300 !bg-transparent !bg-white !py-2 font-semibold !text-primary-300 transition-all hover:shadow-md"
                s
              >
                Go Back
              </button>
              <Link
                to="/experts/all"
                className="btn-primary !w-fit bg-gradient-to-r from-secondary to-tertiary !py-2.5 !font-semibold transition-all hover:shadow-md"
              >
                Find the experts
              </Link>
            </div>
          </div>
        )}

        {/* Shapes */}
        {/* <span className="absolute -top-14 right-0 h-20 w-20 rounded-full border-8 border-primary-50 lg:h-40 lg:w-40"></span>
        <span className="absolute -bottom-12 left-10 h-20 w-20 rounded-full border-8 border-primary-50 lg:-bottom-8 lg:h-40 lg:w-40"></span>
        <span className="absolute right-14 top-20 h-6 w-6 rounded-full border-4 border-primary-50 lg:-top-7 lg:right-52 lg:h-14 lg:w-14"></span>
        <span className="absolute left-24 top-1/2 h-4 w-4 rounded-full border-4 border-primary-50 lg:h-12 lg:w-12"></span>
        <span className="absolute right-28 top-4 h-3 w-3 rounded-full bg-primary-50 lg:top-44 lg:h-10 lg:w-10"></span>
        <span className="absolute bottom-12 left-52 hidden h-3 w-3 rounded-full bg-primary-50 lg:inline-block lg:h-10 lg:w-10"></span>
        <span className="absolute left-52 top-0 hidden h-3 w-3 rounded-full bg-primary-50 lg:block lg:h-10 lg:w-10"></span>
        <span className="absolute bottom-4 right-10 h-3 w-3 rounded-full bg-primary-50 lg:bottom-12 lg:right-32 lg:h-10 lg:w-10"></span> */}

        {/* Close */}
        <FontAwesomeIcon
          icon={faClose}
          className="absolute right-4 top-4 cursor-pointer text-3xl text-slate-800 lg:right-8 lg:top-8 lg:text-4xl"
          onClick={onAssessmentClose}
        />
      </div>
    </div>
  );
}
