import React, { useRef } from "react";
// Data
import { TherapyData } from "../../data/services";
import { therapyClient } from "../../data/clients";
// Components
import GridHeader from "../../components/GridHeader";
import SelectBest from "../../components/SelectBest";
import WhyChooseGrid from "../../components/WhyChooseGrid";
import HappyClient from "../../components/HappyClient";
import IssueCard from "../../components/Cards/IssueCard";
import { issues } from "../../data";

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
      <WhyChooseGrid data={TherapyData.whyChoose} />
      <SelectBest
        ref={ref}
        name={TherapyData.name}
        image={TherapyData.bestTherapist.featureImage}
        features={TherapyData.bestTherapist.features}
        btn={TherapyData.bestTherapist.startBtn}
      />

      {/* Therapies */}
      <section className="bg-gradient-to-br from-primary-10 to-white font-quicksand">
        <div className="container mx-auto grid gap-4 py-6 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pt-12 xl:grid-cols-3 xl:gap-10 2xl:grid-cols-4 2xl:gap-x-8 2xl:gap-y-14">
          {issues.map((value, index) => {
            return <IssueCard key={index} data={value} />;
          })}
        </div>
      </section>

      <HappyClient data={therapyClient} />
    </>
  );
}
