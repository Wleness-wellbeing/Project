import React from "react";

export default function FeaturesBlock(props) {
  return (
    <section className="container mx-auto grid grid-cols-3 rounded-2xl bg-primary-10 px-6 py-6 text-center">
      {props.data.map((value, index) => {
        return (
          <div key={index}>
            <img
              src={value.image}
              alt="Icon 2"
              className="mx-auto h-12 w-12 object-contain"
            />
            <h4 className="text-lg font-bold">{value.name}</h4>
          </div>
        );
      })}
    </section>
  );
}
