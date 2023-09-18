import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import HeartIcon from "./icon/HeartIcon";
import { Link } from "react-router-dom";

export default function DoctorsCard(props) {
  return (
    <figure className="rounded-2xl rounded-br-[7rem] border-2 border-primary-300 bg-white transition-all hover:shadow-lg hover:shadow-primary-50">
      <div className="relative">
        <Link to="/appointment">
          <img
            src={props.data.image}
            alt=""
            className="block w-full rounded-t-2xl object-cover"
          />
        </Link>
        <span className="absolute bottom-0 left-5 bg-white px-2 text-lg font-bold text-primary-300">
          Psychiatrist
        </span>
      </div>
      <figcaption className="px-4 py-2 pb-6 3xl:px-6">
        <hgroup>
          <h3 className="flex items-center justify-between text-2xl font-semibold">
            <span>{props.data.name}</span>
            <HeartIcon />
          </h3>
          <h4 className="mb-2 text-lg font-semibold text-slate-500 xs:text-xl">
            {props.data.experience}
          </h4>
        </hgroup>
        <div className="font-medium">
          <p className="leading-5 text-slate-600">
            Expertise: {props.data.expertise}
          </p>
          <p className="leading-5 text-slate-600">
            Speaks: {props.data.languages}
          </p>
          <h5 className="my-2 mb-5 text-lg font-semibold text-primary-400">
            Session Starts
            <FontAwesomeIcon icon={faIndianRupee} className="mx-1 text-sm" />
            {props.data.price}
          </h5>
          <div className="space-x-2 space-y-2">
            <Link to="/appointment" className="btn-one inline-block !text-sm">
              View Profile
            </Link>
            <Link
              to="/appointment/checkout"
              className="btn-one inline-block !text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
