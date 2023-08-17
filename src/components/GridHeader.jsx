import React, { useState } from "react";

import { cloudWithDots } from "../assets";
import Assessment from "../components/Assessment";

const button = {
  slug: "#experts",
  text: "Find the Experts",
};
export default function GridHeader(props) {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);

  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };
  return (
    <header className="py-10 relative overflow-x-hidden">
      <div className="container mx-auto ">
        <h1 className="subheading text-center lg:w-[640px] mx-auto">
          <span>Discover the power of </span>
          <span className="heading-primary">{props.name}</span>
        </h1>
        <div>
          <img src={props.image} alt="" className="w-full" />
        </div>
        <p className="para text-center mb-8 px-20">
          Discover transformative counseling and online therapy for growth,
          healing, and resilience, empowering you with compassionate support for
          renewed well-being.
        </p>
        <div className="text-center">
          <button className="btn-one" onClick={openAssessmentModal}>
            Book an appointment now
          </button>
        </div>
      </div>
      <img
        src={cloudWithDots}
        alt=""
        className="absolute top-20 -right-56 -z-10 lg:w-[480px]"
      />
      <img
        src={cloudWithDots}
        alt=""
        className="absolute bottom-0 left-0 -z-10 lg:w-96"
      />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        button={button}
      />
    </header>
  );
}
