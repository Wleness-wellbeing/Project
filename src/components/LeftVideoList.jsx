import React from "react";
import { benefits, precautions, adhvmukhaSteps } from "../assets";

export default function LeftVideoList(props) {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">
      <div className="lg:w-1/2">
        <iframe
          src={props.data.videoUrl}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen="true"
          className="rounded-2xl w-fit h-44 mx-auto lg:w-[460px] lg:h-[300px]"
        />
      </div>
      <div className="lg:p-8 py-2 font-semibold lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-primary-500">
          {props.data.title}
        </h2>
        <p>{props.data.desc}</p>
        <ul className="list-disc pt-4 list-inside">
          {props.data.list.map((value, index) => {
            return (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary-500 font-bold">
                  &#10004; {value.subtitle}
                </span>
                <p>{value.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
