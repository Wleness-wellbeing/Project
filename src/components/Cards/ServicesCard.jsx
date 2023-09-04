import React from "react";

export default function ServicesCard(props) {
  return (
    <>
      <div className="rounded-2xl bg-gradient-to-br from-secondary to-tertiary p-1">
        <figure className="relative flex h-full flex-col justify-between rounded-xl bg-white p-5">
          <img
            src={props.data.image}
            alt={props.data.title}
            className="absolute -top-1/4 left-1/2 mx-auto w-24 -translate-x-1/2 translate-y-1/4 drop-shadow-lg"
          />
          <figcaption className="pb-5 pt-10">
            <h2 className="mb-2 text-center text-xl font-semibold">
              {props.data.title}
            </h2>
            <p className="text-center font-medium text-slate-600">
              {props.data.desc}
            </p>
          </figcaption>
          <button className="mx-auto block w-fit rounded-full bg-gradient-to-tr from-secondary to-tertiary px-5 py-2.5 font-semibold text-white">
            Explore More
          </button>
        </figure>
      </div>
    </>
  );
}
