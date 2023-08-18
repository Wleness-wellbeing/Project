import React, { useRef } from "react";
// Data
import { TherapyData } from "../../data/services";
import { therapyClient } from "../../data/clients";
// Components
import GridHeader from "../../components/GridHeader";
import SelectBest from "../../components/SelectBest";
import WhyChooseGrid from "../../components/WhyChooseGrid";
import HappyClient from "../../components/HappyClient";

export default function Therapy() {
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GridHeader
        name={TherapyData.name}
        image={TherapyData.image}
        handleScrollToComponent={() => handleScrollToComponent()}
      />
      <SelectBest
        ref={ref}
        name={TherapyData.name}
        image={TherapyData.bestTherapist.featureImage}
        features={TherapyData.bestTherapist.features}
        btn={TherapyData.bestTherapist.startBtn}
        doctors={TherapyData.bestTherapist.doctors}
      />
      <WhyChooseGrid data={TherapyData.whyChoose} />
      <HappyClient data={therapyClient} />
    </>
  );
}
