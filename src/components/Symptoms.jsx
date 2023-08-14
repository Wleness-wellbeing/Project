import React from "react";
import { textColorize } from "../utils";

export default function Symptoms({ title, image, points }) {
  return (
    <section className="container mx-auto">
      <h2 className="font-bold text-5xl text-center mb-10">
        {textColorize(title)}
      </h2>

      <div className="relative">
        <img src={image} alt="" className="object-cover w-fit mx-auto py-10" />
        {/* Points */}
        {points.map((value, index) => {
          return (
            <p
              key={index}
              className={"para absolute w-96 text-center " + value[1]}
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
