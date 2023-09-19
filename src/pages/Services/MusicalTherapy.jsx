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
import MusicalTherapyComponent from "../../components/MusicalTherapyComponent";
//image
import { musicalelipse1, musicalelipse2, musicalelipse3 } from "../../assets";
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
        isButton={true}
        button={["Explore More"]}
      />
      <p ref={ref}></p>

      {/* <FeaturesBlock data={musicalTherapyFeatures} /> */}
      <div className="container mx-auto mt-6 flex justify-center">
        <div className="grid grid-cols-3 gap-20">
          <img src={musicalelipse1} alt="Image 1" />
          <img src={musicalelipse2} alt="Image 2" />
          <img src={musicalelipse3} alt="Image 3" />
        </div>
      </div>
      <ServicesTechniques
        title={MusicalTherapyData.activities.title}
        desc={MusicalTherapyData.activities.desc}
        types={MusicalTherapyData.activities.types}
        openAssessmentModal={openAssessmentModal}
      />
      <MusicalTherapyComponent />
      <HappyClient data={musicalTherapyClient} />
      <FaqWithImage data={musicalTherapyFaq} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />
    </>
  );
}
