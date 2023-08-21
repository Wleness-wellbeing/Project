import React, { useState } from "react";

export default function AssessmentTextBtn(props) {
  const [selectOption, setselectOption] = useState(false);
  function name(params) {}

  return (
    <div
      onClick={selectOption}
      className="group box-border flex items-stretch rounded-lg bg-gradient-to-r from-secondary to-tertiary p-[3px]"
    >
      <button className="flex w-full items-center justify-center rounded-md bg-white px-5 py-2 font-semibold hover:bg-primary-300 hover:text-white lg:py-2.5">
        {props.name}
      </button>
    </div>
  );
}
