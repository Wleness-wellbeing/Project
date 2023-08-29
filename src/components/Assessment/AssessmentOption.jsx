import React from "react";

export default function AssessmentOption(props) {
  return (
    <div className="group box-border flex items-stretch">
      <label
        title={props.name}
        className={`flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-primary-300 px-2 py-1.5 text-xs font-semibold transition-all hover:bg-primary-300 hover:text-white md:text-sm lg:px-3 lg:py-2.5 lg:text-base ${
          props.checked ? " bg-primary-300 text-white" : ""
        }`}
      >
        <input
          type="checkbox"
          name="feelings"
          value={props.name}
          className="hidden"
          checked={props.checked}
          onChange={props.onchange}
        />
        <img src={props.image} alt="" className="mr-2 w-6 object-contain" />
        <span>{props.name}</span>
      </label>
    </div>
  );
}
