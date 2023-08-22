import React from "react";

export default function WhyChooseGrid(props) {
  return (
    <section className="mb-8 text-center">
      <h2 className="subheading mx-auto mb-8 lg:w-[640px]">
        <span>Why Should I Choose </span>
        <span className="heading-primary">Therapy</span>
      </h2>

      <div className="container mx-auto grid grid-cols-2 gap-5 lg:grid-cols-5">
        {props.data.map((value, index) => {
          return (
            <figure key={index}>
              <div>
                <img
                  src={value.image}
                  alt=""
                  className="mx-auto w-24 lg:w-fit"
                />
              </div>
              <figcaption>
                <h4 className="my-2 px-6 text-center text-lg font-bold leading-6 text-primary-400 lg:text-xl">
                  {value.title}
                </h4>
                <p className="text-center text-sm font-semibold md:text-base">
                  {value.desc}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
