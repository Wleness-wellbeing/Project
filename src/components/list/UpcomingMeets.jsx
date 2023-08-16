import React from "react";

export default function UpcomingMeets() {
  return (
    <div className="flex gap-x-4 bg-sky-100 p-2 rounded-xl">
      <div className="w-fit grid place-items-center">
        <span className="font-bold p-2.5  text-white px-3.5 rounded-full block bg-gradient-to-tr from-blue-400 via-cyan-500 to-blue-600">
          M
        </span>
      </div>
      <div>
        <h5 className="flex justify-between items-center">
          <span className="font-semibold">Monthly doctor's meet</span>
        </h5>
        <span className="text-sm py-0.5 rounded-lg font-medium text-slate-500">
          <span>8 April, 2021</span> | <span>04:00 PM</span>
        </span>
      </div>
    </div>
  );
}
