import React, { useState } from "react";

import { cloudWithDots } from "../assets";
import Assessment from "../components/Assessment";

export default function GridHeader(props) {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);

  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };
  const button = {
    slug: "",
    text: "Find the Experts",
    click: props.handleScrollToComponent,
  };
  return (
    <header className="relative overflow-x-hidden py-10">
      <div className="container mx-auto text-center">
        <h1 className="subheading lg:w-[640px]">
          <span>Discover the power of </span>
          <span className="heading-primary">{props.name}</span>
        </h1>
        <div>
          <img src={props.image} alt="" className="w-full" />
        </div>
        <p className="para mb-8 px-20 text-center">
          Discover transformative counseling and online therapy for growth,
          healing, and resilience, empowering you with compassionate support for
          renewed well-being.
        </p>
        <div className="text-center" onClick={props.handleScrollToComponent}>
          <button className="btn-one">Explore More</button>
        </div>
      </div>
      <img
        src={cloudWithDots}
        alt=""
        className="absolute -right-56 top-20 -z-10 lg:w-[480px]"
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
