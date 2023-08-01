import React from "react";

export default function RightImage(props) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row mb-8 lg:items-center">
      <div className="lg:order-2 mb-2 lg:w-1/2">
        <img src={props.data.image} alt="" />
      </div>

      <p className="font-semibold lg:order-1 lg:w-1/2 lg:pr-12">
        <span className="text-primary-500 font-bold text-xl">
          {props.data.title}
        </span>
        {props.data.desc}
      </p>
    </div>
  );
}
