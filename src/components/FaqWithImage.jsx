import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// Data
import { textColorize } from "../utils";

export default function FaqWithImage(props) {
  return (
    <>
      <section className="container mx-auto">
        <hgroup className="subheading mb-2 text-center">
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
                  className="bg-200/30 cursor-pointer rounded-lg bg-primary-50 p-4 lg:p-6"
                >
                  <summary className="flex items-center justify-between">
                    <h3 className="flex w-full items-center justify-between text-lg font-bold">
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
              className="mx-auto block w-80 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
