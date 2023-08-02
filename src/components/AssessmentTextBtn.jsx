import React from "react";

export default function AssessmentTextBtn(props) {
  return (
    <div className="bg-gradient-to-r from-secondary to-tertiary rounded-lg flex items-stretch p-[3px] box-border group">
      <button className="flex items-center px-5 py-2.5  hover:text-white w-full justify-center font-semibold bg-white rounded-md hover:bg-primary-300">
        {props.name}
      </button>
    </div>
  );
}
