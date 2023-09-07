import React from "react";

export default function ApplyHeader({ image, name, specialist }) {
  return (
    <header className="bg-gradient-to-b from-primary-50/50 to-transparent py-8 xl:py-28">
      <div className="container mx-auto gap-x-6 xl:flex">
        <div className="mb-2 xl:order-2 xl:w-1/2">
          <img
            src={image}
            alt=""
            className="w-full drop-shadow-[15px_15px_2px_rgba(0,245,160,0.2)]"
          />
          <ul className="flex list-disc justify-center space-x-6 pt-6 text-sm font-semibold text-primary-300 lg:text-base">
            <li>
              <span className="text-black">{specialist}</span>
            </li>
            <li>
              <span className="text-black">Anxiety Specialist</span>
            </li>
            <li>
              <span className="text-black">New Delhi</span>
            </li>
          </ul>
        </div>
        <div className="text-center xl:order-1 xl:w-1/2 xl:self-center xl:text-left">
          <h1 className="subheading my-3 xl:mb-3">
            <span>Join Our Team of Compassionate </span>
            <span className="heading-primary">{name}</span>
          </h1>
          <p className="para">
            Join us in making a positive impact. We offer a nurturing
            environment for your expertise to shine. Your unique contributions
            matter. Join our team today.
          </p>
        </div>
      </div>
    </header>
  );
}
