import React, { useRef, useState } from "react";
// Data
import { TherapyData } from "../../data/services";
import { therapyClient } from "../../data/clients";
// Components
import GridHeader from "../../components/GridHeader";
import SelectBest from "../../components/SelectBest";
import WhyChooseGrid from "../../components/WhyChooseGrid";
import HappyClient from "../../components/HappyClient";
import IssueCard from "../../components/Cards/IssueCard";
import { therapies } from "../../data";
import Assessment from "../../components/Assessment";

export default function Therapy() {
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
      <GridHeader
        name={TherapyData.name}
        image={TherapyData.image}
        desc={TherapyData.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
      />
      <WhyChooseGrid data={TherapyData.whyChoose} />
      <SelectBest
        ref={ref}
        name={TherapyData.name}
        heading={TherapyData.bestTherapist.heading}
        image={TherapyData.bestTherapist.featureImage}
        features={TherapyData.bestTherapist.features}
        btn={TherapyData.bestTherapist.startBtn}
        openAssessmentModal={openAssessmentModal}
      />

      {/* Therapies */}
      <section className="bg-gradient-to-br from-primary-10 to-white font-quicksand">
        <div className="container mx-auto grid gap-4 py-6 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pt-12 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-6">
          {therapies.map((value, index) => {
            return <IssueCard key={index} data={value} />;
          })}
        </div>
      </section>

      <HappyClient data={therapyClient} />

      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />
    </>
  );
}
