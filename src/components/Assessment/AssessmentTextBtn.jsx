import React from "react";

export default function AssessmentTextBtn(props) {
  return (
    <div className="group box-border flex items-stretch rounded-lg bg-gradient-to-r from-secondary to-tertiary p-[3px]">
      <button
        className={`flex w-full items-center justify-center rounded-md  px-5 py-2 font-semibold hover:bg-primary-300 hover:text-white lg:py-2.5 ${
          props.selected ? "bg-primary-300 text-white" : "bg-white"
        }`}
        onClick={props.onclick}
        value={props.name}
      >
        {props.name}
      </button>
    </div>
  );
}
