import React from "react";
import { Link } from "react-router-dom";
import { blogThumbnail2 } from "../../assets";

export default function BlogCard(props) {
  return (
    <figure className="flex flex-col p-2">
      <div>
        {/* <img src={props.data.image} className="w-full" alt="..." /> */}
        <img src={blogThumbnail2} className="w-full" alt="..." />
      </div>
      <figcaption className="flex h-full flex-col items-start justify-between">
        <div>
          <h5 className="my-2 text-lg font-bold uppercase tracking-wider text-black">
            {props.data.heading}
          </h5>
          <p className="text-lg font-medium">
            {props.data.subheading.length > 130
              ? props.data.subheading.substring(0, 130) + "..."
              : props.data.subheading}
          </p>
        </div>
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
