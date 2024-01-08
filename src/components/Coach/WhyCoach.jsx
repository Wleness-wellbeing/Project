import React from "react";

export default function WhyCoach({ name, image, lists }) {
  return (
    <section className="lg:py-8">
      <div class="my-4 text-center">
        <h2 class="subheading">
          Why work with <span class="heading-primary">{name}</span>
        </h2>
      </div>

      <div class="container mx-auto flex flex-col md:flex-row">
        <div class="w-full md:w-2/5">
          <img src={image} alt={name} class="mx-auto rounded-lg lg:w-96" />
        </div>
        <div class="my-9 w-full md:ml-8 md:w-3/5">
          {lists.map((value, i) => {
            return (
              <div
                key={i}
                class="mb-8 rounded-xl border-2 border-teal-400 bg-white p-4 shadow-md hover:bg-teal-400 hover:text-white md:p-8"
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
