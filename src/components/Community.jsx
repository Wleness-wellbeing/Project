import React from "react";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <section className="relative overflow-x-hidden overflow-y-clip bg-[#ddf2ef] pb-7 pt-4">
      <div className="container mx-auto text-center">
        <h1 className="subheading pt-5">
          <span className="heading-primary pb-1 text-4xl">
            Wleness Community
          </span>
          {/* <span className="text-2xl">We are here to help you! </span> */}
        </h1>
        <p className="para pb-6 !text-xl">
          Wleness is helping you connect with like-minded people. Find your
          ultimate support network today.
        </p>
        <Link to="/community" className="btn-one mx-auto block w-fit">
          Join Now
        </Link>

        {/* Cloud */}
        {/* <img
          src={cloudWithDots}
          alt=""
          className="absolute -right-20 top-0 w-44 xl:w-72"
        /> */}
      </div>
    </section>
  );
}
