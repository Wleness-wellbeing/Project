import React from "react";
import { cloudWithDots } from "../assets";

export default function Community() {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="subheading">
          <span>We are here to help you!</span>
          <span className="heading-primary">Wleness Community</span>
        </h1>
        <p className="para">
          Helping you connect with like minded people. Find your ultimate
          support network today.
        </p>
        <button className="btn-one">Join Now</button>

        {/* Cloud */}
        <img src={cloudWithDots} alt="" />
      </div>
    </section>
  );
}
