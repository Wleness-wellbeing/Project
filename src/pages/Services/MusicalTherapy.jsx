import React, { useRef, useState } from "react";
// Data
import {
  MusicalTherapyData,
  musicalTherapyFeatures,
} from "../../data/services";
import { musicalTherapyClient } from "../../data/clients";
import { musicalTherapyFaq } from "../../data/faqs";
// Components
import FeaturesBlock from "../../components/FeaturesBlock";
import ActivityHeader from "../../components/ActivityHeader";
import ServicesTechniques from "../../components/ServicesTechniques";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";
import Assessment from "../../components/Assessment";

export default function MusicalTherapy() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ActivityHeader
        title={MusicalTherapyData.header.title}
        image={MusicalTherapyData.header.image}
        desc={MusicalTherapyData.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={openAssessmentModal}
      />
      <p ref={ref}></p>
      <FeaturesBlock data={musicalTherapyFeatures} />
      <ServicesTechniques
        title={MusicalTherapyData.activities.title}
        desc={MusicalTherapyData.activities.desc}
        types={MusicalTherapyData.activities.types}
        openAssessmentModal={openAssessmentModal}
      />
      <HappyClient data={musicalTherapyClient} />
      <FaqWithImage data={musicalTherapyFaq} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />
    </>
  );
}
