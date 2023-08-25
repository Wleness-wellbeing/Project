import React from "react";

export default function Symptoms({ highlight, image, points }) {
  return (
    <section className="container mx-auto text-center">
      <h2 className="subheading mb-2">
        <span>Here's How Generalized</span>
        <p>
          <span className="heading-primary">{highlight} </span>
          <span>May Appear</span>
        </p>
      </h2>

      <div className="grid grid-cols-2">
        <div className="lg:order-2">
          <img src={image} alt="" className="object-cover" />
        </div>

        {/* Points */}
        <ul className="flex list-square flex-col justify-between text-left text-2xl text-primary-300 lg:order-1 lg:py-7 xl:py-12 xl:pl-7 xl:pr-16">
          {points.map((value, index) => {
            return (
              <li key={index}>
                <p className="text-lg font-semibold text-black">{value[0]}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="py-2 text-center">
        <button className="btn-one">Undergo an evaluation</button>
      </div>
    </section>
  );
}
