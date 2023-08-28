import React from "react";
import { bubbleDoodles } from "../assets";

export default function StatisticsBlock(props) {
  return (
    <figure>
      <div className="relative">
        <div>
          <img src={bubbleDoodles} alt="" className="w-full object-cover" />
        </div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold lg:text-3xl">
          <span>{props.number}</span>
          <span>{props.suffix}</span>
        </span>
      </div>
      <figcaption>
        <h4 className="text-center text-lg font-bold lg:text-xl">
          {props.subtitle}
        </h4>
      </figcaption>
    </figure>
  );
}
