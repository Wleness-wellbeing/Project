import React from "react";
import { Link } from "react-router-dom";

export default function ApproachCard(props) {
  return (
    <figure className="group relative z-20">
      <Link to={props.data.slug}>
        <div className="z-20 grid h-full cursor-pointer place-items-center rounded-xl border-2 border-slate-100 bg-white p-1 text-center text-xs font-semibold shadow-sm group-hover:rounded-none group-hover:text-primary-300 lg:px-8 lg:py-4 lg:text-lg 2xl:py-14">
          <img src={props.data.image} alt="" className="mb-4" />
          <h4>{props.data.title}</h4>
        </div>
      </Link>
      <figcaption className="absolute inset-0 -z-10 rounded-xl bg-primary-300 transition-all group-hover:-inset-y-6 group-hover:lg:-inset-y-10"></figcaption>
    </figure>
  );
}
