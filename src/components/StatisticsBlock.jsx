import React from "react";
import { bubbleDoodles } from "../assets";

export default function StatisticsBlock(props) {
  return (
    <figure>
      <div className="relative">
        <div>
          <img src={bubbleDoodles} alt="" className="w-full object-cover" />
        </div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          <span>{props.number}</span>
          <span>{props.suffix}</span>
        </span>
      </div>
      <figcaption>
        <h4 className="text-center text-xl font-bold">{props.subtitle}</h4>
      </figcaption>
    </figure>
  );
}
