import React from "react";
import { Link } from "react-router-dom";

export default function IssueCard(props) {
  return (
    <div className="bg-gradient-to-br p-1 from-secondary to-tertiary rounded-2xl rounded-br-[3rem]">
      <div className="bg-[#FAFCE7] h-full rounded-2xl flex flex-col items-center justify-center py-8 rounded-br-[3rem]">
        <h3 className="font-bold text-center text-2xl mb-4">
          {props.data.name}
        </h3>
        <Link to={props.data.slug}>
          <img
            src={props.data.image}
            alt="Avatar"
            className="mx-auto block w-24 h-24 lg:h-40 lg:w-40 object-cover rounded-2xl 2xl:w-48 2xl:h-48 mb-4"
          />
        </Link>

        <Link to="/appointment/checkout" className="btn-one">
          Book Now
        </Link>
      </div>
    </div>
  );
}
