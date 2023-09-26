import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <figure className="p-2">
      <Link to={`/blog/${props.data.slug}`} className="flex h-full flex-col">
        <div>
          <img src={props.data.image} className="w-full rounded-xl" alt="..." />
        </div>
        <figcaption className="flex h-full flex-col items-start justify-between">
          <div>
            <h5 className="my-2 text-lg font-bold uppercase tracking-wider text-black">
              {props.data.title}
            </h5>
            <p className="text-lg font-medium">
              {props.data.desc.length > 130
                ? props.data.desc.substring(0, 130) + "..."
                : props.data.desc}
            </p>
          </div>
          <Link
            to={`/blog/${props.data.slug}`}
            className="mt-4 inline-block rounded-3xl bg-primary-400 px-4 py-2 font-medium text-white transition-all hover:bg-primary-500"
          >
            Read more
          </Link>
        </figcaption>
      </Link>
    </figure>
  );
}
