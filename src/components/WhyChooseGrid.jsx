import React from "react";

export default function WhyChooseGrid(props) {
  return (
    <section className="mb-8">
      <h2 className="subheading text-center lg:w-[640px] mx-auto mb-8">
        <span>Why Should I Choose </span>
        <span className="heading-primary">Therapy</span>
      </h2>

      <div className="container mx-auto grid lg:grid-cols-5 gap-5">
        {props.data.map((value, index) => {
          return (
            <figure key={index}>
              <div>
                <img src={value.image} alt="" className="w-fit mx-auto" />
              </div>
              <figcaption>
                <h4 className="font-bold text-xl text-primary-400 text-center px-6 my-2">
                  {/* {console.log(value.title)} */}
                  {value.title}
                </h4>
                <p className="font-semibold text-center">{value.desc}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
