import React from "react";
// Data
import { textColorize } from "../utils";
import { doodle2 } from "../assets";

export default function HappyClient(props) {
  return (
    <section className="py-6 lg:py-10 relative">
      <h2 className="subheading text-center">
        {textColorize(props.data.heading)}
      </h2>
      <div className="container mx-auto py-2 lg:py-4">
        <div className="relative lg:!pr-0 pb-4 lg:pb-0">
          {/* Testimonials */}
          <figure className="lg:flex items-center">
            <div className="lg:w-2/5 p-4 flex justify-center items-center">
              <img
                src={props.data.image}
                alt=""
                className="object-cover w-60"
              />
            </div>
            <figcaption className="lg:w-3/5">
              <h4 className="text-2xl text-primary-300 text-center lg:text-left font-bold lg:text-3xl 2xl:text-4xl">
                {props.data.name}
              </h4>
              <h6 className="font-medium text-slate-400 2xl:text-xl mb-4 text-center lg:text-left">
                {props.data.profession}
              </h6>
              <p className="mb-1 sm:text-lg md:text-base 2xl:text-xl md:leading-5 text-justify lg:pr-8">
                {props.data.review}
              </p>
            </figcaption>
          </figure>
        </div>
        <div className="flex space-x-1 w-fit mx-auto">
          <span className="w-3 h-3 block rounded-full bg-slate-500" />
          <span className="w-3 h-3 block rounded-full bg-primary-300" />
          <span className="w-3 h-3 block rounded-full bg-slate-500" />
        </div>
      </div>
      <img
        src={doodle2}
        alt=""
        className="absolute right-0 top-0 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80 -scale-x-[1] opacity-20 -z-10"
      />
      <img
        src={doodle2}
        alt=""
        className="absolute bottom-0 left-0 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80 opacity-20 -z-10"
      />
    </section>
  );
}
