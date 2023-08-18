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
        <div className="lg:my-14 text-center">
          <h2 className="subheading text-primary-400">
            {brainExercise.activities.title}
          </h2>
          <p className="lg:text-2xl font-semibold">
            {brainExercise.activities.desc}
          </p>
        </div>

        {/* Meditations */}
        <div className="pb-4 space-y-10">
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
                    className="w-full object-cover block"
                  />
                </div>
                <figcaption
                  className={
                    brainExercise.activities.types[index].class[1] + " w-2/5"
                  }
                >
                  <h4 className="font-bold text-xl lg:text-2xl 2xl:text-4xl text-primary-400 py-2">
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
