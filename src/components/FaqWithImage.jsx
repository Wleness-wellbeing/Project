import React, { useState } from "react";
// Data
import { textColorize } from "../utils";
import Faq from "./layout/Faq";

export default function FaqWithImage(props) {
  const [openFAQ, setOpenFAQ] = useState(0);

  // Toggle Faq's
  const toggleFAQ = (index) => {
    if (index !== openFAQ) {
      setOpenFAQ(index);
    }
  };
  return (
    <>
      <section className="container mx-auto">
        <div className="text-center">
          <hgroup className="subheading mb-2 grid">
            <h2>{textColorize(props.data.heading1)}</h2>
            <h2>{textColorize(props.data.heading2)}</h2>
          </hgroup>
        </div>

        <p className="para text-center">{props.data.desc}</p>

        <div className="py-10 lg:flex">
          <div className="mb-8 lg:mb-0 lg:w-1/2">
            <img
              src={props.data.image}
              alt=""
              className="mx-auto block object-cover lg:w-80"
            />
          </div>
          <div className="space-y-4 lg:w-1/2">
            {props.data.qnas.map((value, index) => {
              return (
                <Faq
                  key={index}
                  question={value.question}
                  answer={value.answer}
                  isOpen={index === openFAQ}
                  toggleFAQ={() => toggleFAQ(index)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
