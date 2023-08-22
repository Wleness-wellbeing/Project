import React from "react";
import { cloudWithDots } from "../assets";

export default function Community() {
  return (
    <section className="relative overflow-x-hidden overflow-y-clip pb-7">
      <div className="container mx-auto text-center">
        <h1 className="subheading !grid">
          <span>We are here to help you!</span>
          <span className="heading-primary pb-1">Wleness Community</span>
        </h1>
        <p className="para pb-6 xl:mx-auto xl:w-3/5">
          Helping you connect with like minded people. Find your ultimate
          support network today.
        </p>
        <button className="btn-one">Join Now</button>

        {/* Cloud */}
        <img
          src={cloudWithDots}
          alt=""
          className="absolute -right-20 top-0 w-44 xl:w-72"
        />
      </div>
    </section>
  );
}
