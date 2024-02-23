import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function HomeServiceCard({ data }) {
  return (
    <div className="container mx-auto mb-10 flex items-center gap-5">
      <div className={`${data.ltr ? "order-2" : "order-1"} p-6 lg:w-1/2`}>
        <img
          src={data.image}
          alt="Why wleness wellbeing"
          className={`${
            data.ltr
              ? "shadow-[50px_-50px_4px_-10px]"
              : "shadow-[-50px_50px_4px_-10px]"
          } rounded-3xl  shadow-primary-50`}
        />
      </div>
      <div className={`${data.ltr ? "order-1" : "order-2"} lg:w-1/2`}>
        <h3 className="grid text-4xl font-bold">{data.title}</h3>
        <p className="mt-4 text-lg font-medium">{data.description}</p>
        <ul className="my-8 space-y-2">
          {data.points.map((value, i) => {
            return (
              <li
                className="flex cursor-pointer rounded-xl transition-all"
                key={i}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-3 mt-1 block font-semibold text-primary-400"
                />
                <h2 className="font-semibold">{value}</h2>
              </li>
            );
          })}
        </ul>
        <Link to={data.button.slug} className="btn-one inline-block">
          {data.button.text}
        </Link>
      </div>
    </div>
  );
}
