import React from "react";
import FaqWithImage from "../../components/FaqWithImage";
import { musicalTherapyFaq } from "../../data/faqs";
import PoliciesHeader from "../../components/headers/PoliciesHeader";
import { lifecoching } from "../../data";
import {
  grp1,
  grp2,
  grp3,
  rectangle1,
  rectangle2,
  rectangle3,
} from "../../assets";
export default function LifeCoching() {
  return (
    <main>
      <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent py-12">
        <div className=" container mx-auto flex">
          <div className="w-1/2">
            <div>
              <h1 className="text-4xl font-bold ">
                Unleash Your Inner Champion
              </h1>
              <h2 className="text-2xl font-semibold">
                Through Wleness &nbsp;
                <span className="subheading heading-primary ">
                  Life Coaching
                </span>
              </h2>
            </div>
            <br></br>
            <br></br>

            <div>
              <p className="text-lg font-medium">
                Do you crave higher growth and confidence in your life,
                business, and leadership journey?
              </p>{" "}
              <br></br>
              <p className="text-lg font-medium">
                Discover the absolute confidence to find fulfillment and
                experience your desired joyous relationships.
              </p>
            </div>
          </div>
          <div className="mr-4 flex w-1/2 justify-end">
            <img
              className="w-auto"
              src={rectangle2}
              alt="Your Image Alt Text"
            ></img>
          </div>
        </div>
        <div className="container mx-auto pt-16 text-center">
          <p className="text-lg font-medium">
            How do you silence that inner critic and rise above those beliefs
            that drag you down?
          </p>
          <br />
          <p className="text-lg font-medium">
            Identify and shatter the barriers holding you back. We know you know
            those limiting beliefs and habits, but it's time to break free. It's
            time to commit to a trans-formative path, ready to shift your
            consciousness and become the best version of yourself.
            <span className="font-bold">Are you ready?</span>
          </p>
        </div>
      </header>

      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">
          How can &nbsp;
          <span className="subheading heading-primary">life coaching</span>{" "}
          propel you forward?
        </h2>{" "}
        <br></br>
        <p className="pb-12 text-lg font-medium lg:mx-auto lg:w-[720px]">
          Life coaching is your personalized journey to growth and fulfillment.
          It's like having a trusted partner who helps you navigate life's
          challenges and capitalize on your strengths.
        </p>
        <div className="mb-14 grid gap-y-8 md:grid-cols-4 lg:gap-12 lg:gap-y-0">
          {lifecoching.map((value, i) => {
            return (
              <figure key={i} className="rounded border p-4">
                <div>
                  <img src={value.image} alt="" className="mx-auto lg:w-28" />
                </div>
                <figcaption>
                  <h2 className="heading-primary mb-3 inline-block text-xl font-bold text-primary-400">
                    {value.title}
                  </h2>
                  <p className="text-lg font-medium">{value.desc}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
      <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent py-6">
        <div className="py-4 text-center">
          <h2 className="text-4xl font-bold">
            The &nbsp;
            <span className="subheading heading-primary">results </span> say it
            all
          </h2>
        </div>
        <div className="container  mx-auto flex">
          <div className="my-auto w-3/5">
            <ul className="">
              <li className="mb-4">
                <div className="mr-6 inline-block h-2 w-2 rounded-full bg-primary-300"></div>
                <span className="font-bold">
                  <span className="text-primary-300">99% </span>of individuals
                  and companies who hire a coach are satisfied or very satisfied
                  with the experience.
                </span>
              </li>
              <li className="mb-4">
                <div className="mr-6 inline-block h-2 w-2 rounded-full bg-primary-300"></div>
                <span className="font-bold">
                  <span className="text-primary-300">80% </span> of coaching
                  clients say they improved their self-esteem or self-confidence
                  thanks to coaching.
                </span>
              </li>
              <li className="mb-4">
                <div className="mr-6 inline-block h-2 w-2 rounded-full bg-primary-300"></div>
                <span className="font-bold">
                  <span className="text-primary-300">73% </span> of coaching
                  clients say that coaching helps them improve their
                  relationships, communication skills{" "}
                  <span className="text-primary-300">(72%) </span>,
                  interpersonal skills{" "}
                  <span className="text-primary-300">(71%)</span>, work
                  performance <span className="text-primary-300">(70%)</span>,
                  work/life balance{" "}
                  <span className="text-primary-300">(67%)</span>, and wellness
                  <span className="text-primary-300">(63%)</span>.
                </span>
              </li>
              <li className="mb-4">
                <div className="mr-6 inline-block h-2 w-2 rounded-full bg-primary-300"></div>
                <span className="font-bold">
                  <span className="text-primary-300">51%</span> of companies
                  with a strong coaching culture have higher revenues than
                  others.
                </span>
              </li>
              <li className="mb-4">
                <div className="mr-6 inline-block h-2 w-2 rounded-full bg-primary-300"></div>
                <span className="font-bold">
                  <span className="text-primary-300">68%</span> of individuals
                  who hired coaches could make back their investment. The median
                  ROI is 7x the investment. Coaching can have a{" "}
                  <span className="text-primary-300">221%</span> ROI.
                </span>
              </li>
              <li className="mb-4">
                <div className="mr-6 inline-block h-2 w-2 rounded-full bg-primary-300"></div>
                <span className="font-bold">
                  Coaching clients report that they experience decreased anxiety
                  levels <span className="text-primary-300">57.1%</span> and
                  depression levels{" "}
                  <span className="text-primary-300">44.3%</span>, as well as
                  improved workplace relationships{" "}
                  <span className="text-primary-300">79%</span>.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex w-2/5 justify-end">
            <img className="h-full" src={rectangle3}></img>
          </div>
        </div>
        <div className="my-10 text-center">
          <h2 className="text-4xl font-bold">
            Wleness &nbsp;
            <span className="subheading heading-primary">life coaching </span>
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="flex flex-col rounded border p-4 text-center">
            <img className="mx-auto" src={grp1}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              One to One power Coaching
            </h2>
            <p className="font-semibold">
              Our transformative approach offers tailored strategies and
              unwavering personal and professional growth support. With a
              dedicated life coach, unlock your fullest potential and achieve
              your goals – advancing your career, enhancing relationships, or
              overall life improvement.
            </p>
          </div>
          <div className="flex flex-col rounded border p-4 text-center">
            <img className="mx-auto" src={grp2}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              Empowerment Exchange
            </h2>
            <p className="font-semibold">
              Explore the advantages of our Group Life Coaching offering. By
              joining our community of dedicated individuals, you'll receive
              expert guidance in pursuing personal growth. Achieve clarity,
              reach your goals, and experience a more enriching life journey
              with the help of our experienced coaches.
            </p>
          </div>
          <div className="flex flex-col rounded border p-4 text-center">
            <img className="mx-auto" src={grp3}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              360-degree evaluation
            </h2>
            <p className="font-semibold">
              Our comprehensive approach examines all facets of your life,
              providing a clear roadmap for growth. Our expert coaches will
              assess your strengths, identify areas for improvement, & work with
              you to set & achieve meaningful goals. Elevate every aspect of
              your life.
            </p>
          </div>
        </div>
      </header>

      <FaqWithImage data={musicalTherapyFaq} />
    </main>
  );
}
