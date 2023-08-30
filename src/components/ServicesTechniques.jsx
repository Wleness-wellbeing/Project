import React from "react";
import { Link } from "react-router-dom";

const ServicesTechniques = React.forwardRef((props, ref) => {
  const activityTypes = props.types.map((value, index) => {
    return (
      <figure key={index}>
        <div>
          <img
            src={value.thumbnail}
            alt={value.title}
            className="block w-full object-cover"
          />
        </div>
        <figcaption>
          <h4 className="py-2 text-xl font-bold text-primary-400">
            {value.title}
          </h4>
          <p className="pb-2 text-sm font-semibold text-slate-800">
            {value.desc}
          </p>
          <div className="mt-2 text-center">
            <button
              onClick={props.openAssessmentModal}
              className="btn-one inline-block !py-2"
            >
              Book Now
            </button>
          </div>
        </figcaption>
      </figure>
    );
  });

  return (
    <section className="container mx-auto pb-6" ref={ref}>
      <div className="my-6 text-center lg:my-14">
        <h2 className="subheading text-primary-400">{props.title}</h2>
        <p className="font-semibold text-slate-700 lg:text-xl">{props.desc}</p>
      </div>

      {/* Meditations */}
      <div className="grid gap-6 px-5 pb-4 lg:grid-cols-3 lg:px-0 xl:grid-cols-4">
        {activityTypes}
      </div>
    </section>
  );
});

export default ServicesTechniques;
