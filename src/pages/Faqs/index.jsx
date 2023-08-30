import React, { useState } from "react";
import { bgDotsPattern, faq3Lg } from "../../assets";
import Faq from "../../components/layout/Faq";
import { faqs } from "../../data/faqs";

export default function index() {
  const [openFAQ, setOpenFAQ] = useState(0);

  // Toggle Faq's
  const toggleFAQ = (index) => {
    if (index !== openFAQ) {
      setOpenFAQ(index);
    }
  };
  return (
    <>
      <header className="relative overflow-x-hidden overflow-y-clip">
        <div className="container mx-auto">
          <h1 className="subheading mt-8 !grid text-center">
            <span>
              <span>You've got </span>
              <span className="heading-primary">questions</span>
              <span>?</span>
            </span>
            <span>
              <span>We've got </span>
              <span className="heading-primary">answers </span>
              <span>!</span>
            </span>
          </h1>

          <div className="mb-4">
            <img src={faq3Lg} alt="" className="mx-auto w-[560px]" />
            <p className="px-44 text-center text-xl font-bold">
              Everything you need to know right here at Wleness. Ask questions
              and browse around for answers.
            </p>
          </div>
        </div>

        {/* Dots  */}
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -right-10 top-0 -z-10 w-72"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 bottom-32 -z-10 w-80"
        />
      </header>

      <section className="container mx-auto mb-5 pb-5">
        <div className="pt-10">
          <div className="space-y-4">
            {faqs.map((value, index) => {
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
