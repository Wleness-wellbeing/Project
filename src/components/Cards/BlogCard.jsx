import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <figure className="flex flex-col p-2 ">
      <div>
        <img src={props.data.image} className="w-full" alt="..." />
      </div>
      <figcaption>
        <h5 className="text-lg text-black font-bold tracking-wider my-2 uppercase">
          {props.data.heading}
        </h5>
        <p className="text-lg font-medium">{props.data.subheading}</p>
        <Link
          to=""
          className="bg-primary-400 hover:bg-primary-500 transition-all font-medium text-white px-4 py-2 inline-block mt-4 rounded-3xl"
        >
          Read more
        </Link>
      </figcaption>
    </figure>
  );
}
