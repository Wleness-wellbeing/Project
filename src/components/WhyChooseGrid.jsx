import React from "react";

export default function WhyChooseGrid(props) {
  return (
    <section className="mb-8 text-center">
      <h2 className="subheading mx-auto mb-8 lg:w-[640px]">
        <span>Why Should I Choose </span>
        <span className="heading-primary">Therapy</span>
      </h2>

      <div className="container mx-auto grid gap-5 lg:grid-cols-5">
        {props.data.map((value, index) => {
          return (
            <figure key={index}>
              <div>
                <img src={value.image} alt="" className="mx-auto w-fit" />
              </div>
              <figcaption>
                <h4 className="my-2 px-6 text-center text-xl font-bold text-primary-400">
                  {/* {console.log(value.title)} */}
                  {value.title}
                </h4>
                <p className="text-center font-semibold">{value.desc}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
