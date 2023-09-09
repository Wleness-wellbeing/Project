import React from "react";
import { Link } from "react-router-dom";

export default function ServicesCard(props) {
  return (
    <>
      <div className="rounded-2xl bg-gradient-to-br from-secondary to-tertiary p-1 transition-all lg:hover:scale-105">
        <Link to={props.data.slug}>
          {/* <figure className="relative flex h-full flex-col justify-between rounded-xl bg-white p-5 transition-all hover:bg-[#FAFCE7] hover:shadow-xl hover:shadow-secondary/30"> */}
          <figure className="relative flex h-full flex-col justify-between rounded-xl bg-white p-5 transition-all hover:bg-[#FAFCE7] hover:shadow-xl hover:shadow-secondary/30">
            <img
              src={props.data.image}
              alt={props.data.title}
              className="absolute  -top-1/4 left-1/2 mx-auto w-24 -translate-x-1/2 translate-y-1/4 drop-shadow-lg"
            />
            <figcaption className="pb-5 pt-10">
              <h2 className="mb-2 text-center text-xl font-semibold">
                {props.data.title}
              </h2>
              <p className="text-center font-semibold text-slate-600">
                {props.data.desc}
              </p>
            </figcaption>
            <button className="mx-auto block w-fit rounded-full bg-gradient-to-tr from-secondary to-tertiary px-5 py-2.5 font-semibold text-white transition-all hover:shadow-lg">
              Explore More
            </button>
          </figure>
        </Link>
      </div>
    </>
  );
}
