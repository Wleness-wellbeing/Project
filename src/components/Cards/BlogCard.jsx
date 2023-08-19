import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <figure className="flex flex-col p-2 ">
      <div>
        <img src={props.data.image} className="w-full" alt="..." />
      </div>
      <figcaption>
        <h5 className="my-2 text-lg font-bold uppercase tracking-wider text-black">
          {props.data.heading}
        </h5>
        <p className="text-lg font-medium">{props.data.subheading}</p>
        <Link
          to=""
          className="mt-4 inline-block rounded-3xl bg-primary-400 px-4 py-2 font-medium text-white transition-all hover:bg-primary-500"
        >
          Read more
        </Link>
      </figcaption>
    </figure>
  );
}
