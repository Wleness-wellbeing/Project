import React from "react";
import { wlenessApproach } from "../data/issues";
import ApproachCard from "./Cards/ApproachCard";
import { Link } from "react-router-dom";

export default function WlenessApproach({ issue, desc }) {
  return (
    <section className="my-5 bg-gradient-to-b from-primary-50/40 to-transparent pt-5 xl:mt-10 xl:pt-10">
      <div className="container mx-auto text-center">
        <h2 className="subheading">
          How <span className="heading-primary">Wleness approach</span> helps to
          treat {issue}
        </h2>
        <p className="text-xl font-medium">{desc}</p>

        <div className="my-6 grid grid-cols-3 gap-6 rounded-xl bg-yellow-primary p-2 lg:my-10 lg:grid-cols-3 lg:gap-6 lg:p-4">
          {wlenessApproach.map((value, i) => {
            return <ApproachCard key={i} data={value} />;
          })}
        </div>

        {/* <div className="text-center">
          <Link to="/experts/all" className="btn-one mx-auto block w-fit">
            Start the treatment
          </Link>
        </div> */}
      </div>
    </section>
  );
}
