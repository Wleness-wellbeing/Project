import React from "react";

export default function Symptoms({ highlight, image, points }) {
  return (
    <section className="container mx-auto">
      <h2 className="mb-10 text-center text-2xl font-bold lg:text-4xl xl:text-5xl">
        <span>Here's How Generalized</span>
        <p>
          <span className="heading-primary">{highlight} </span>
          <span>May Appear</span>
        </p>
      </h2>

      <div className="relative">
        <img
          src={image}
          alt=""
          className="mx-auto w-40 object-cover py-10 xl:w-fit"
        />
        {/* Points */}
        {points.map((value, index) => {
          return (
            <p
              key={index}
              className={
                "absolute w-96 text-center text-xs font-medium lg:text-sm xl:text-base xl:font-semibold " +
                value[1]
              }
            >
              {value[0]}
            </p>
          );
        })}
      </div>

      <div className="py-8 text-center">
        <button className="btn-one">Find the Therapist</button>
      </div>

      <div className="flex items-center justify-center pb-8 text-center">
        <h5 className="mr-3 text-2xl font-semibold">
          Doubtful about the symptoms?
        </h5>
        <button className="btn-one">Undergo an evaluation</button>
      </div>
    </section>
  );
}
