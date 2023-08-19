import React from "react";
import { Link } from "react-router-dom";

export default function IssueCard(props) {
  return (
    <div className="rounded-2xl rounded-br-[3rem] bg-gradient-to-br from-secondary to-tertiary p-1">
      <div className="flex h-full flex-col items-center justify-center rounded-2xl rounded-br-[3rem] bg-[#FAFCE7] py-8">
        <h3 className="mb-4 text-center text-2xl font-bold xl:mb-6">
          {props.data.name}
        </h3>
        <Link to={props.data.slug}>
          <img
            src={props.data.image}
            alt="Avatar"
            className="mx-auto mb-4 block h-24 w-24 rounded-2xl object-cover lg:h-40 lg:w-40 3xl:h-44 3xl:w-44"
          />
        </Link>

        <Link to="/appointment/checkout" className="btn-one">
          Book Now
        </Link>
      </div>
    </div>
  );
}
