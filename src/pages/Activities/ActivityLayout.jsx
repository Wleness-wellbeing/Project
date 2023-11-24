import React, { useRef, useState } from "react";
// Data
import { activityFeatures } from "../../data";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityTechniques from "../../components/ActivityTechniques";
import ActivityForm from "../../components/Forms/ActivityForm";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import ThankYou from "../../components/Modals/ThankYou";

export default function ActivityLayout(props) {
  const ref = useRef(null);
  const { enquiryForm, toggleForm } = useEnquiryForm();

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ActivityHeader
        title={props.header.title}
        image={props.header.image}
        desc={props.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        isEnquiry={true}
        displayButton={true}
        button={["Explore More"]}
        openEnquiry={toggleForm}
      />
      <ActivityTechniques
        ref={ref}
        title={props.activities.title}
        desc={props.activities.desc}
        types={props.activities.types}
        slug={props.activities.types.slug}
        openEnquiry={toggleForm}
      />
      {/* <FeaturesBlock data={activityFeatures} /> */}
      {/* <ActivityVideos /> */}
      {/* <ActivityBlogs blogs={props.blogs} /> */}
      <ActivityForm
        purpose={props.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
      {/* <ThankYou /> */}
    </>
  );
}
