import React from "react";

export default function PatientListItem(props) {
  return (
    <div className="flex gap-x-4">
      <div className="w-fit grid place-items-center">
        <span
          className={
            props.data.style.background +
            props.data.style.border +
            " font-semibold p-2.5 text-sm rounded-full border-2 block"
          }
        >
          SM
        </span>
      </div>
      <div className="w-full">
        <h5 className="flex justify-between items-center">
          <span className="font-semibold">{props.data.name}</span>
          <span
            className={
              props.data.style.background +
              props.data.style.text +
              " text-sm font-semibold py-0.5 px-2 rounded-lg "
            }
          >
            {props.data.timing}
          </span>
        </h5>
        <span className={props.data.style.text + " text-sm font-medium block"}>
          {props.data.status}
        </span>
      </div>
    </div>
  );
}
