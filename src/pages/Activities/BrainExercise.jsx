import React, { useRef } from "react";
// Data
import { brainExercise, activityFeatures } from "../../data";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityVideos from "../../components/ActivityVideos";
import ActivityBlogs from "../../components/ActivityBlogs";
import FeaturesBlock from "../../components/FeaturesBlock";
import GamesCard from "../../components/Cards/GamesCard";

export default function BrainExercise() {
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ActivityHeader
        key={brainExercise.id}
        title={brainExercise.header.title}
        image={brainExercise.header.image}
        desc={brainExercise.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        isButton={false}
        button={["Play Now"]}
      />
      <FeaturesBlock data={activityFeatures} />

      <section className="container mx-auto pb-6" ref={ref}>
        <div className="my-5 text-center lg:my-14">
          <h2 className="subheading text-primary-400">
            {brainExercise.activities.title}
          </h2>
          <p className="font-semibold lg:text-xl">
            {brainExercise.activities.desc}
          </p>
        </div>

        {/* Meditations */}
        <div className="space-y-10 pb-4">
          {brainExercise.activities.types.map((value, index) => {
            return <GamesCard key={index} data={value} />;
          })}
        </div>
      </section>

      {/* <ActivityVideos /> */}
      <ActivityBlogs blogs={brainExercise.blogs} />
    </>
  );
}
