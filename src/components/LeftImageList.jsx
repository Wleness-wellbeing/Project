import React from "react";
import { precautions } from "../assets";

export default function LeftImageList(props) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">
      <div className="w-full object-cover lg:w-1/2">
        <img src={precautions} alt="" className="w-full object-cover" />
      </div>
      <div className="lg:p-8 py-4 font-semibold lg:w-1/2">
        <h2 className="text-2xl font-bold mb-2 lg:mb-4 text-primary-500">
          Precautions:
        </h2>
        <p className="pt-3">{props.data.desc}</p>
        <ul className=" pt-4">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="text-gray-800">
                <span className="text-primary-500 font-bold text-lg mr-1">
                  &#10004;
                </span>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
        <p className="text-gray-800 font-semibold mt-4 pt-4">
          {props.data.info}
        </p>
      </div>
    </div>
  );
}
