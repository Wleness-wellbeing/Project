import React from "react";

export default function AboutCoach({ name, paras }) {
  return (
    <section class="container mx-auto text-center">
      <h2 class="subheading my-4">
        About <span className="heading-primary">{name}</span>
      </h2>
      {paras.map((value, i) => {
        return (
          <p class="para text-justify" key={i}>
            {value}
          </p>
        );
      })}
    </section>
  );
}
