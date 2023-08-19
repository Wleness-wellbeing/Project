import React from "react";
import { placeholder } from "../../../assets";

export default function UserCard() {
  return (
    <figure className="rounded-lg border-[1.4px] border-slate-200 bg-white p-3">
      <h3 className="pb-2 text-center">Name</h3>
      <div className="mb-2">
        <img src={placeholder} alt="" className="block w-full object-cover" />
      </div>
      <figcaption>
        <ul className="mb-3">
          <li>
            <span className="font-medium">Email: </span>
            <span>123@gmail.com</span>
          </li>
          <li>
            <span className="font-medium">Password: </span>
            <span>*****</span>
          </li>
          <li>
            <span className="font-medium">No. of appointment: </span>
            <span>20</span>
          </li>
        </ul>
        <div className="text-center">
          <button className="mb-2 rounded-full bg-primary-300 px-5 py-1.5 font-medium text-white">
            Update
          </button>
          <button className="rounded-full bg-primary-50 px-5 py-1.5 font-medium">
            Disable
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
