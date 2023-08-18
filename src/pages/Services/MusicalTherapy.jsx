import React, { useRef } from "react";
// Data
import { servicesFeatures, MusicalTherapyData } from "../../data/services";
import { musicalTherapyClient } from "../../data/clients";
import { musicalTherapyFaq } from "../../data/faqs";
// Components
import FeaturesBlock from "../../components/FeaturesBlock";
import ActivityHeader from "../../components/ActivityHeader";
import ServicesTechniques from "../../components/ServicesTechniques";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";

export default function MusicalTherapy() {
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
      />
      <FeaturesBlock data={servicesFeatures} />
      <ServicesTechniques
        title={MusicalTherapyData.activities.title}
        desc={MusicalTherapyData.activities.desc}
        types={MusicalTherapyData.activities.types}
        ref={ref}
      />
      <HappyClient data={musicalTherapyClient} />
      <FaqWithImage data={musicalTherapyFaq} />
    </>
  );
}
