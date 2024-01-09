import React, { useRef, useState } from "react";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityForm from "../../components/Forms/ActivityForm";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import { Helmet } from "react-helmet";
import { get_canonical, get_title_text } from "../../utils";
import YogaTechniques from "../../components/Activities/YogaTechniques";
import { activityYoga } from "../../data";
import HappyClient from "../../components/HappyClient";
import { yogaClients } from "../../data/clients";
import YogaSlider from "../../components/Carousels/YogaSlider";
import YogaBenefits from "../../components/Activities/YogaBenefits";

export default function YogaPage() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  const ref = useRef(null);

  const handleScrollToComponent = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Helmet>
        <title>
          {activityYoga.name +
            " | " +
            get_title_text(activityYoga.header.title)}
        </title>
        <meta name="description" content="yoga and meditation description" />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <ActivityHeader
        title={activityYoga.header.title}
        image={activityYoga.header.image}
        desc={activityYoga.header.desc}
        handleScrollToComponent={() => handleScrollToComponent(ref)}
        isEnquiry={false}
        displayButton={false}
        button={["Explore More"]}
        openEnquiry={toggleForm}
      />

      <YogaTechniques
        title={activityYoga.activities.title}
        desc={activityYoga.activities.desc}
        types={activityYoga.activities.types}
        slug={activityYoga.activities.types.slug}
        openEnquiry={toggleForm}
        ref={ref}
      />

      <YogaSlider />

      <YogaBenefits />

      <ActivityForm
        purpose={activityYoga.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />

      <HappyClient data={yogaClients} />
    </>
  );
}
