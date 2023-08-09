import React from "react";
import { bubbleDoodles } from "../assets";

export default function StatisticsBlock(props) {
  return (
    <figure>
      <div className="relative">
        <div>
          <img src={bubbleDoodles} alt="" className="w-full object-cover" />
        </div>
        <span className="text-3xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span>{props.number}</span>
          <span>{props.suffix}</span>
        </span>
      </div>
      <figcaption>
        <h4 className="text-xl font-bold text-center">{props.subtitle}</h4>
      </figcaption>
    </figure>
  );
}
