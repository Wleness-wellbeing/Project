import React from "react";
import { benefits } from "../assets";

export default function RightImageList(props) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:order-2 lg:w-1/2">
        <img src={benefits} alt="" className="object-cover" />
      </div>
      <div className="lg:p-8 py-4 font-semibold lg:order-1 lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">
          {props.data.title}
        </h2>
        <p>{props.data.desc}</p>
        <ul className="pt-4">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="text-gray-800">
                <span className="text-primary-500 font-bold text-lg">
                  &#10004; {value.subtitle}
                </span>
                <span>{value.desc}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
