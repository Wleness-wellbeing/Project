import React from "react";
import { Link } from "react-router-dom";
import { assessment1, assessment2 } from "../../assets";

export default function WelcomeAssessment() {
  return (
    <div className="py-14">
      <h2 className="subheading text-center mb-4">
        <span className="heading-primary">Welcome to Wleness</span>
      </h2>

      <div className="w-[300px] mx-auto">
        <div className=" text-center">
          <h4 className="text-xl mb-5">
            <span className="font-semibold">Do you want help finding a</span>
            <Link
              to="/services/therapy"
              className="text-primary-400 font-bold text-xl block"
            >
              Therapist?
            </Link>
          </h4>
          <button className="btn-primary">Find the Therapist</button>
        </div>
        <div className="flex items-center gap-3 justify-center my-8">
          <span className="h-1 w-40 bg-primary-100"></span>
          <span>OR</span>
          <span className="h-1 w-40 bg-primary-100"></span>
        </div>
        <div className=" text-center">
          <h4 className="text-xl mb-5">
            <span className="font-semibold mr-1">
              Do you want to browse all our
            </span>
            <Link
              to="/services/therapy"
              className="text-primary-400 font-bold text-xl"
            >
              Therapist?
            </Link>
          </h4>
          <Link to="/experts/all" className="btn-primary block">
            Browse all Therapist
          </Link>
        </div>
      </div>
      {/* Images */}
      <img src={assessment1} alt="" className="w-32 absolute top-32 left-20" />
      <img
        src={assessment2}
        alt=""
        className="w-32 absolute bottom-40 right-20"
      />
    </div>
  );
}
