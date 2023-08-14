import React from "react";

export default function Symptoms({ highlight, image, points }) {
  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-2xl lg:text-4xl xl:text-5xl text-center mb-10">
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
          className="object-cover w-40 xl:w-fit mx-auto py-10"
        />
        {/* Points */}
        {points.map((value, index) => {
          return (
            <p
              key={index}
              className={
                "font-medium xl:font-semibold text-xs lg:text-sm xl:text-base absolute w-96 text-center " +
                value[1]
              }
            >
              {value[0]}
            </p>
          );
        })}
      </div>

      <div className="text-center py-8">
        <button className="btn-one">Find the Therapist</button>
      </div>

      <div className="text-center flex items-center justify-center pb-8">
        <h5 className="font-semibold text-2xl mr-3">
          Doubtful about the symptoms?
        </h5>
        <button className="btn-one">Undergo an evaluation</button>
      </div>
    </section>
  );
}
