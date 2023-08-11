import React from "react";
import { textColorize } from "../utils";

export default function HeaderWithButton({ title, desc, image }) {
  return (
    <header className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:py-12 2xl:!px-0">
      <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem] lg:hidden">
        {textColorize(title)}
      </h1>
      <div className="lg:order-2 lg:w-1/2 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
        {/* Desktop Image */}
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 lg:w-1/2 xl:pl-4 lg:pr-16">
        <hgroup className="md:mb-3 xl:mb-8">
          <h1 className="font-bold text-3xl xl:text-5xl mb-4 text-center lg:text-left hidden lg:block">
            {textColorize(title)}
          </h1>
        </hgroup>
        <div className="pr-12">
          {desc.map((value, index) => {
            return (
              <p className="mb-6 text-justify font-semibold" key={index}>
                {value}
              </p>
            );
          })}
        </div>
        <button className="btn-one">Talk to Therapist</button>
      </div>
    </header>
  );
}
