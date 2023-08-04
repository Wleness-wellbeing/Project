import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// Data
import { textColorize } from "../utils";

export default function FaqWithImage(props) {
  return (
    <>
      <section className="container mx-auto">
        <hgroup className="subheading text-center mb-2">
          <h2>{textColorize(props.data.heading1)}</h2>
          <h2>{textColorize(props.data.heading2)}</h2>
        </hgroup>

        <p className="para text-center">{props.data.desc}</p>

        <div className="py-10 lg:flex">
          <div className="w-1/2 space-y-4">
            {props.data.qnas.map((value, index) => {
              return (
                <details
                  key={index}
                  className="bg-200/30 p-4 lg:p-6 rounded-lg cursor-pointer bg-primary-50"
                >
                  <summary className="flex justify-between items-center">
                    <h3 className="text-lg font-bold flex justify-between items-center w-full">
                      <span>{value.question}</span>
                      <FontAwesomeIcon icon={faPlus} />
                    </h3>
                  </summary>
                  <p className="font-semibold">{value.answer}</p>
                </details>
              );
            })}
          </div>
          <div className="w-1/2">
            <img
              src={props.data.image}
              alt=""
              className="w-80 mx-auto block object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
