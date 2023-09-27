import React, { useState } from "react";
// Components
import HeaderWithButton from "../../components/HeaderWithButton";
import Symptoms from "../../components/Symptoms";
import DoctorSlider from "../../components/DoctorSlider";
import Community from "../../components/Community";
import IssueQuote from "../../components/IssueQuote";
import Assessment from "../../components/Assessment";
import WlenessApproach from "../../components/WlenessApproach";

export default function IssueSubPageLayout({
  header,
  symptoms,
  doctors,
  quote,
}) {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  return (
    <>
      <HeaderWithButton
        title={header.title}
        desc={header.desc}
        image={header.image}
        openAssessmentModal={openAssessmentModal}
      />
      <Symptoms
        highlight={symptoms.highlight}
        image={symptoms.image}
        points={symptoms.points}
      />
      <WlenessApproach issue={symptoms.issue} />
      <DoctorSlider data={doctors} />
      <Community />
      <IssueQuote quote={quote} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />
    </>
  );
}
