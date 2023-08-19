import React from "react";

export default function Card({ category, image, desc }) {
  return (
    <figure className="rounded-lg border-[1.4px] border-slate-200 bg-white p-3">
      <h3 className="pb-2 text-center font-medium">{category}</h3>
      <div className="mb-2">
        <img src={image} alt="" className="block w-full object-cover" />
      </div>
      <figcaption>
        <p className="text-[15px] font-medium leading-5 text-[#818181]">
          {desc}
        </p>
      </figcaption>
    </figure>
  );
}
