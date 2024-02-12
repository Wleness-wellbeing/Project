import React from "react";

export default function AboutCoach({ name, paras }) {
  return (
    <section className="container mx-auto text-center">
      <h2 className="subheading my-4">
        About <span className="heading-primary">{name}</span>
      </h2>
      {paras.map((value, i) => {
        return (
          <p className="para text-justify" key={i}>
            {value}
          </p>
        );
      })}
    </section>
  );
}
