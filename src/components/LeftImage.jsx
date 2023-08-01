import React from "react";

export default function LeftImage(props) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center mb-8">
      <div className="mb-2 lg:w-1/2">
        <img src={props.data.image} alt="" className="object-cover" />
      </div>

      <p className="font-semibold lg:w-1/2">
        <span className="text-primary-500 font-bold text-xl">
          {props.data.title}
        </span>
        {props.data.desc}
      </p>
    </div>
  );
}
