import React from "react";

export default function GamesCard(props) {
  return (
    <figure className="gap-8 text-center md:flex md:gap-14">
      <div className={props.data.class[0] + " md:w-3/5"}>
        <img
          src={props.data.thumbnail}
          alt={props.data.title}
          className="block w-full object-cover"
        />
      </div>
      <figcaption className={props.data.class[1] + " md:w-2/5 lg:text-left"}>
        <h4 className="py-2 text-xl font-bold text-primary-400 lg:text-2xl 2xl:text-4xl">
          {props.data.title}
        </h4>
        <p className="mb-2 pb-2 text-sm font-medium md:text-lg">
          {props.data.desc}
        </p>
        <div className="lg:text-right">
          <button
            className="btn-one !py-2.5"
            onClick={() => (window.location.href = props.data.buttonLink)}
          >
            Play Now
          </button>
        </div>
      </figcaption>
    </figure>
  );
}
