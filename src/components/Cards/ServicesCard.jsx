import React from "react";
import { Link } from "react-router-dom";

export default function ServicesCard(props) {
  return (
    <>
      <div className="rounded-2xl ">
        <Link to={props.data.slug}>
          <img src={props.data.image} className="" />
          {/* <figcaption className="pb-2 pt-8 lg:pb-5 lg:pt-10">
              <h2 className="mb-2 text-center text-sm font-semibold lg:text-lg xl:text-xl">
                {props.data.title}
              </h2>
              <p className="text-center text-xs font-semibold text-slate-600 lg:text-base">
                {props.data.desc}
              </p>
            </figcaption>
            <button className="mx-auto block w-fit rounded-full bg-gradient-to-tr from-secondary to-tertiary px-5 py-2.5 text-xs font-semibold text-white transition-all hover:shadow-lg lg:text-base">
              Explore More
            </button> */}
        </Link>
      </div>
    </>
  );
}
