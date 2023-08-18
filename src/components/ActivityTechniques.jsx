import React from "react";
import { Link } from "react-router-dom";

const ActivityTechniques = React.forwardRef((props, ref) => {
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
          <div className="text-right">
            <Link
              className="font-bold text-lg text-primary-400"
              to={value.slug}
            >
              Read More
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

      <div className="text-center py-4">
        <Link to="/appointment/checkout" className="btn-one inline-block">
          Book Now
        </Link>
      </div>
    </section>
  );
});

export default ActivityTechniques;
