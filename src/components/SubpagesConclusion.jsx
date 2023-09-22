import React from "react";

export default function SubpagesConclusion(props) {
  return (
    <section className="container mx-auto py-8 lg:flex">
      <div className="lg:w-1/2">
        <img
          src={props.data.image}
          alt="conclusion bulb image"
          className="mx-auto w-80"
        />
      </div>
      <div className="lg:w-1/2">
        <h2 className="mb-4 text-2xl font-bold text-primary-500">
          {props.data.title}
        </h2>
        <p className="text-lg font-semibold text-gray-800">{props.data.desc}</p>
      </div>
    </section>
  );
}
