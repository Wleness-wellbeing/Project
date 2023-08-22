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

      <div className="flex items-center">
        <div className="lg:order-2 lg:w-1/2">
          <img src={image} alt="" className="object-cover" />
        </div>

        {/* Points */}
        <ul className="list-square space-y-3 text-left text-2xl text-primary-300 lg:order-1 lg:w-1/2 xl:pr-16">
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
