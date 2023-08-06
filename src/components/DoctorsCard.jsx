import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import HeartIcon from "./icon/HeartIcon";

export default function DoctorsCard(props) {
  return (
    <figure className="bg-white rounded-2xl transition-all rounded-br-[7rem] border-2 border-primary-300 hover:shadow-lg hover:shadow-primary-50">
      <div className="relative">
        <img
          src={props.data.image}
          alt=""
          className="w-full object-cover block rounded-t-2xl"
        />
        <span className="font-bold bg-white px-2 absolute left-5 text-lg bottom-0 text-primary-300">
          {props.data.profession}
        </span>
      </div>
      <figcaption className="px-6 py-2 pb-6">
        <hgroup>
          <h3 className="font-semibold text-2xl xs:text-3xl flex items-center">
            <span className="mr-10">{props.data.name}</span>
            <HeartIcon />
          </h3>
          <h4 className="text-slate-500 font-semibold text-lg xs:text-xl mb-2">
            {props.data.exp}
          </h4>
        </hgroup>
        <div className=" font-medium">
          <p className="leading-5 text-slate-600">
            Expertise: {props.data.expertise}
          </p>
          <p className="leading-5 text-slate-600">
            Speaks: {props.data.speaks}
          </p>
          <h5 className="my-2 text-primary-400 text-lg font-semibold">
            Session Starts
            <FontAwesomeIcon icon={faIndianRupee} className="text-sm mx-1" />
            {props.data.price}
          </h5>
          <button className="btn-one">Book Now</button>
        </div>
      </figcaption>
    </figure>
  );
}
