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
            className="w-full object-cover block"
          />
        </div>
        <figcaption>
          <h4 className="font-bold text-2xl text-primary-400 py-2">
            {value.title}
          </h4>
          <p className="pb-2 text-justify">{value.desc}</p>
          <div className="text-center mt-2">
            <Link
              to="/appointment/checkout"
              className="btn-one !py-2 inline-block"
            >
              Book Now
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  });

  return (
    <section className="container mx-auto pb-6" ref={ref}>
      <div className="lg:my-14 text-center">
        <h2 className="subheading text-primary-400">{props.title}</h2>
        <p className="lg:text-2xl font-semibold">{props.desc}</p>
      </div>

      {/* Meditations */}
      <div className="grid lg:grid-cols-3 pb-4 gap-6">{activityTypes}</div>
    </section>
  );
});

export default ServicesTechniques;
