import React from "react";
import { Link } from "react-router-dom";
import { assessment1, assessment2 } from "../assets";

export default function Assessment() {
  return (
    <div className="fixed inset-0 w-full bg-white h-[100svh] grid place-items-center">
      <div className="w-[720px] mx-auto relative">
        <div>
          <h2 className="subheading text-center mb-4">
            <span className="heading-primary">Welcome to Wleness</span>
          </h2>

          <div className="w-[300px] mx-auto">
            <div className=" text-center">
              <h4 className="text-2xl mb-5">
                Do you want help finding a
                <Link
                  to=""
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
              <h4 className="text-2xl mb-5">
                Do you want to browse all our
                <Link
                  to=""
                  className="text-primary-400 font-bold text-xl block"
                >
                  Therapist?
                </Link>
              </h4>
              <button className="btn-primary">Browse all Therapist</button>
            </div>
          </div>
          {/* Images */}
          <img src={assessment1} alt="" className="absolute top-14 -left-40" />
          <img
            src={assessment2}
            alt=""
            className="absolute bottom-0 -right-20"
          />
        </div>
      </div>
      {/* Shapes */}
      {/* <span className="border-8 w-40 h-40 border-primary-50 rounded-full"></span>
      <span className="border-8 w-40 h-40 border-primary-50 rounded-full"></span> */}
      <span className="border-4 w-20 h-20 border-primary-50 rounded-full"></span>
      <span className="border-4 w-20 h-20 border-primary-50 rounded-full"></span>
      <span className=" w-12 h-12 rounded-full bg-primary-100"></span>
    </div>
  );
}
