import React from "react";
import { placeholder } from "../../../assets";

export default function UserCard() {
  return (
    <figure className="p-3 border-[1.4px] border-slate-200 rounded-lg bg-white">
      <h3 className="pb-2 text-center">Name</h3>
      <div className="mb-2">
        <img src={placeholder} alt="" className="w-full block object-cover" />
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
          <button className="text-white font-medium px-5 py-1.5 rounded-full bg-primary-300 mb-2">
            Update
          </button>
          <button className="font-medium px-5 py-1.5 rounded-full bg-primary-50">
            Disable
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
