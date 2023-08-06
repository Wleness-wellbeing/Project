import React from "react";
// Data
import { TherapyData } from "../../data/services";
import { therapyClient } from "../../data/clients";
// Components
import GridHeader from "../../components/GridHeader";
import SelectBest from "../../components/SelectBest";
import WhyChooseGrid from "../../components/WhyChooseGrid";
import HappyClient from "../../components/HappyClient";

export default function Therapy() {
  return (
    <>
      <GridHeader name={TherapyData.name} image={TherapyData.image} />
      <SelectBest
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
