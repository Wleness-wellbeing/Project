import React from "react";
import {
  bgDotsPattern,
  faq3Lg,
  feature1,
  feature10,
  feature9,
} from "../../assets";
import Faq from "../../components/layout/Faq";
import { faqs } from "../../data/faqs";

export default function index() {
  return (
    <>
      <header className="overflow-x-hidden overflow-y-clip relative">
        <div className="container mx-auto">
          <h1 className="subheading text-center grid my-8">
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

          <div className="mb-8">
            <img src={faq3Lg} alt="" className="w-[560px] mx-auto mb-10" />
            <p className="text-xl font-bold text-center px-44">
              Everything you need to know right here at Wleness. Ask questions
              and browse around for answers.
            </p>
          </div>
        </div>

        {/* Dots  */}
        <img
          src={bgDotsPattern}
          alt=""
          className="w-72 absolute top-0 -right-10 -z-10"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="w-80 absolute bottom-32 -left-20 -z-10"
        />
      </header>

      <section className="container mx-auto pb-5 mb-5">
        <div className="grid grid-cols-3 gap-x-6">
          <div className="px-8 py-4 flex justify-center flex-col items-center rounded-xl bg-gradient-to-br from-secondary/50 to-tertiary/50 border-2 border-transparent">
            <img src={feature10} alt="" />
            <h5 className="font-semibold text-lg mt-1">Therapy</h5>
          </div>
          <div className="px-8 py-4 flex justify-center flex-col items-center rounded-xl border-2 border-secondary hover:bg-gradient-to-br hover:from-secondary/50 hover:to-tertiary/50 cursor-pointer">
            <img src={feature9} alt="" className="rounded-full" />
            <h5 className="font-semibold text-lg mt-1">Corporate</h5>
          </div>
          <div className="px-8 py-4 flex justify-center flex-col items-center rounded-xl border-2 border-secondary hover:bg-gradient-to-br hover:from-secondary/50 hover:to-tertiary/50 cursor-pointer">
            <img src={feature1} alt="" />
            <h5 className="font-semibold text-lg mt-1">Yoga & Meditation</h5>
          </div>
        </div>

        <div className="pt-10">
          <div className="space-y-4">
            {faqs.map((value, index) => {
              return (
                <Faq
                  key={index}
                  question={value.question}
                  answer={value.answer}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
