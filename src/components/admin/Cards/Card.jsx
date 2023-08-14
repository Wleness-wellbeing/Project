import React from "react";

export default function Card({ category, image, desc }) {
  return (
    <figure className="p-3 border-[1.4px] border-slate-200 rounded-lg bg-white">
      <h3 className="pb-2 text-center font-medium">{category}</h3>
      <div className="mb-2">
        <img src={image} alt="" className="w-full block object-cover" />
      </div>
      <figcaption>
        <p className="leading-5 text-[15px] text-[#818181] font-medium">
          {desc}
        </p>
      </figcaption>
    </figure>
  );
}
