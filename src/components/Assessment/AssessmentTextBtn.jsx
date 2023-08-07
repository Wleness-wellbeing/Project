import React, { useState } from "react";

export default function AssessmentTextBtn(props) {
  const [selectOption, setselectOption] = useState(false);
  function name(params) {}

  return (
    <div
      onClick={selectOption}
      className="bg-gradient-to-r from-secondary to-tertiary rounded-lg flex items-stretch p-[3px] box-border group"
    >
      <button className="flex items-center px-5 py-2.5  hover:text-white w-full justify-center font-semibold bg-white rounded-md hover:bg-primary-300">
        {props.name}
      </button>
    </div>
  );
}
