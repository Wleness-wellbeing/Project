import React, { useRef } from "react";
// Data
import { brainExercise, activityFeatures } from "../../data";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityVideos from "../../components/ActivityVideos";
import ActivityBlogs from "../../components/ActivityBlogs";
import FeaturesBlock from "../../components/FeaturesBlock";

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
      />
      <FeaturesBlock data={activityFeatures} />

      <section className="container mx-auto pb-6" ref={ref}>
        <div className="text-center lg:my-14">
          <h2 className="subheading text-primary-400">
            {brainExercise.activities.title}
          </h2>
          <p className="font-semibold lg:text-2xl">
            {brainExercise.activities.desc}
          </p>
        </div>

        {/* Meditations */}
        <div className="space-y-10 pb-4">
          {brainExercise.activities.types.map((value, index) => {
            return (
              <figure key={index} className="flex gap-8">
                <div
                  className={
                    brainExercise.activities.types[index].class[0] + " w-3/5"
                  }
                >
                  <img
                    src={value.thumbnail}
                    alt={value.title}
                    className="block w-full object-cover"
                  />
                </div>
                <figcaption
                  className={
                    brainExercise.activities.types[index].class[1] + " w-2/5"
                  }
                >
                  <h4 className="py-2 text-xl font-bold text-primary-400 lg:text-2xl 2xl:text-4xl">
                    {value.title}
                  </h4>
                  <p className="pb-2 text-justify text-lg">{value.desc}</p>
                  <div className="text-right">
                    <button className="btn-one !py-2.5">Play Now</button>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <ActivityVideos />
      <ActivityBlogs blogs={brainExercise.blogs} />
    </>
  );
}
