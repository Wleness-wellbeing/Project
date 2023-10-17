import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  let slug = "/blog/" + props.data.slug;

  return (
    <figure className="flex h-full flex-col p-2">
      <Link to={slug}>
        <img
          src={props.data.thumbnail_image}
          className="w-full rounded-xl"
          alt="..."
        />
      </Link>
      <figcaption className="flex h-full flex-col items-start justify-between">
        <div>
          <h5 className="my-2 text-lg font-bold capitalize tracking-wider text-black">
            <Link to={slug}>{props.data.title}</Link>
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
    </figure>
  );
}
