import React from "react";

export default function GamesCard(props) {
  return (
    <figure className="gap-8 md:flex md:gap-14">
      <div className={props.data.class[0] + " md:w-3/5"}>
        <img
          src={props.data.thumbnail}
          alt={props.data.title}
          className="block w-full object-cover"
        />
      </div>
      <figcaption className={props.data.class[1] + " md:w-2/5"}>
        <h4 className="py-2 text-xl font-bold text-primary-400 lg:text-2xl 2xl:text-4xl">
          {props.data.title}
        </h4>
        <p className="pb-2 text-justify font-medium md:text-lg">
          {props.data.desc}
        </p>
        <div className="text-right">
          <button className="btn-one !py-2.5">Play Now</button>
        </div>
      </figcaption>
    </figure>
  );
}
