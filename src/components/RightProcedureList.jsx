import React from "react";

export default function RightProcedureList(props) {
  return (
    <div className="container mx-auto flex flex-col items-center lg:flex-row">
      <div className="lg:w-1/2">
        <img src={props.data.image} alt="" className="object-cover" />
      </div>
      <div className="py-4 font-semibold lg:w-1/2 lg:p-8">
        <h2 className="mb-4 text-2xl font-bold text-primary-500">
          {props.data.title}
        </h2>
        <ul className="pt-4">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="text-gray-800">
                <span className="text-lg font-bold text-primary-500">
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
