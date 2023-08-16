import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PatientItem(props) {
  return (
    <div className="border-2 rounded-2xl p-4">
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
            <span className="text-sm font-semibold py-0.5 px-2 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-all">
              <FontAwesomeIcon icon={faEllipsis} />
            </span>
          </h5>
          <span className="text-sm font-medium block">
            {props.data.gender + " - " + props.data.age}
          </span>
        </div>
      </div>

      <div>
        <div className="space-x-2 mb-2 mt-4 font-semibold text-sm">
          <span>Stress</span>
          <span>Anxiety</span>
        </div>
        <hr />
        <table className="text-sm my-4 space-y-3">
          <tr className="flex">
            <td className="font-medium w-[30%]">Last Checked</td>
            <td className="w-[70%]">
              Dr. Everly on 21st April 2021 Prescription
            </td>
          </tr>
          <tr className="flex">
            <td className="font-medium w-[30%]">Observation</td>
            <td className="w-[70%]">
              Physiological signs of heightened anxiety, including rapid
              heartbeat, shallow breathing, and intermittent muscle tension.
            </td>
          </tr>
          <tr className="flex">
            <td className="font-medium w-[30%]">Prescription</td>
            <td className="w-[70%]">
              Take zefio tablets orally, two times per day, with meals.
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
