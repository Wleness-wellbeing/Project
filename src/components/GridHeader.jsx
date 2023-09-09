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
    <header className="relative mb-5  overflow-x-hidden bg-primary-50/30 py-10">
      <div className="container mx-auto text-center">
        <h1 className="subheading lg:w-[640px]">
          <span>Discover the power of </span>
          <span className="heading-primary">{props.name}</span>
        </h1>
        <div>
          <img src={props.image} alt="" className="w-full" />
        </div>
        <p className="para mb-8 text-center lg:px-20">{props.desc}</p>
        <div className="text-center" onClick={props.handleScrollToComponent}>
          <button className="btn-one">Explore More</button>
        </div>
      </div>
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        button={button}
      />
    </header>
  );
}
