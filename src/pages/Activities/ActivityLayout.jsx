import React, { useRef } from "react";
// Data
import { activityFeatures } from "../../data";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityTechniques from "../../components/ActivityTechniques";
import ActivityVideos from "../../components/ActivityVideos";
import ActivityBlogs from "../../components/ActivityBlogs";
import FeaturesBlock from "../../components/FeaturesBlock";

export default function ActivityLayout(props) {
  const ref = useRef(null);

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
        isButton={true}
        button={["Explore More"]}
      />
      <ActivityTechniques
        ref={ref}
        title={props.activities.title}
        desc={props.activities.desc}
        types={props.activities.types}
        slug={props.activities.types.slug}
      />
      <FeaturesBlock data={activityFeatures} />
      {/* <ActivityVideos /> */}
      <ActivityBlogs blogs={props.blogs} />
    </>
  );
}
