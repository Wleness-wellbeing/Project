import React from "react";
import FaqWithImage from "../../components/FaqWithImage";
import { lifeStyleCoachingFaqs } from "../../data/faqs";
import { lifecoching, wlenessLifeCoaching } from "../../data";
import { lifeCoachingHeader, rectangle2, rectangle3 } from "../../assets";
export default function LifeCoching() {
  return (
    <>
      <header className="relative overflow-x-clip bg-secondary/10 pb-6 pt-12 xl:pb-10 xl:pt-16">
        <div className="container mx-auto xl:flex xl:items-center xl:gap-x-5">
          <div className="mb-5 flex justify-end xl:order-2 xl:mr-4 xl:w-1/2">
            <img
              className="w-full"
              src={lifeCoachingHeader}
              alt="Your Image Alt Text"
            ></img>
          </div>
          <div className="xl:order-1 xl:w-1/2">
            <div>
              <hgroup className="mb-6 xl:mb-8">
                <h1 className="subheading">Unleash Your Inner Champion</h1>
                <h2 className="text-2xl font-semibold">
                  <span>Through Wleness </span>
                  <span className="heading-primary font-bold">
                    Life Coaching
                  </span>
                </h2>
              </hgroup>
            </div>

            <ul className="rounded-2xl bg-primary-50 p-3 !font-semibold xl:text-lg">
              <li className="mb-6">
                Do you crave higher growth and confidence in your life,
                business, and leadership journey?
              </li>
              <li className="para">
                Discover the absolute confidence to find fulfillment and
                experience your desired joyous relationships.
              </li>
            </ul>
          </div>
        </div>
      </header>

      <section className="container mx-auto text-center">
        <h2 className="subheading mb-3 pt-10">
          <span>How can </span>
          <span className="heading-primary">life coaching</span>
          <span> propel you forward?</span>
        </h2>
        <p className="pb-12 text-lg font-medium lg:mx-auto">
          Life coaching is your personalized journey to growth and fulfillment.
          It's like having a trusted partner who helps you navigate life's
          challenges and capitalize on your strengths.
        </p>
        <div className="mb-14 grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 lg:gap-6 xl:gap-10">
          {lifecoching.map((value, i) => {
            return (
              <figure
                key={i}
                className="cursor-pointer rounded-xl border-[1px] border-slate-200 p-3 shadow-xl shadow-slate-300 hover:bg-primary-10 lg:p-5"
              >
                <div>
                  <img
                    src={value.image}
                    alt=""
                    className="mx-auto mb-2 w-16 lg:w-28"
                  />
                </div>
                <figcaption>
                  <h2 className="heading-primary mb-1 inline-block font-bold text-primary-400 lg:mb-3 lg:text-xl">
                    {value.title}
                  </h2>
                  <p className="text-xs font-semibold text-slate-500 lg:text-base">
                    {value.desc}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section className="mt-4">
        <div className="container mx-auto mb-8 rounded-2xl bg-[#fafce7] py-4 text-center font-medium">
          <h5 className="mb-3">
            How do you silence that inner critic and rise above those beliefs
            that drag you down?
          </h5>
          <p className="mb-3">
            Identify and shatter the barriers holding you back. You know those
            limiting beliefs and habits, but it's time to break free. It's time
            to commit to a trans-formative path, ready to shift your
            consciousness and become the best version of yourself.
          </p>
          <span className="font-bold">Are you ready?</span>
        </div>
      </section>

      <section className="relative bg-secondary/10 py-6">
        <div className="container mx-auto lg:flex lg:gap-x-5">
          <div className="mb-6 flex justify-end lg:order-2 lg:w-2/5">
            <img src={rectangle3} alt="" className="w-full xl:w-[90%]"></img>
          </div>
          <div className="my-auto lg:order-1 lg:w-3/5">
            <h2 className="subheading mb-4">
              <span>The </span>
              <span className=" heading-primary">results </span>
              <span>say it all</span>
            </h2>
            <ul className="list-outside list-disc px-4 font-semibold  text-primary-300">
              <li className="mb-4">
                <p className="text-black">
                  <span className="text-primary-300">99% </span>
                  <span>
                    of individuals and companies who hire a coach are satisfied
                    or very satisfied with the experience.
                  </span>
                </p>
              </li>
              <li className="mb-4">
                <p className="text-black">
                  <span className="text-primary-300">80% </span>
                  <span>
                    of coaching clients say they improved their self-esteem or
                    self-confidence thanks to coaching.
                  </span>
                </p>
              </li>
              <li className="mb-4">
                <p className="text-black">
                  <span className="text-primary-300">73% </span>
                  <span>
                    of coaching clients say that coaching helps them improve
                    their relationships, communication skills
                  </span>
                  <span className="text-primary-300"> (72%), </span>
                  <span>interpersonal skills </span>
                  <span className="text-primary-300">(71%), </span>
                  <span>work performance </span>
                  <span className="text-primary-300">(70%), </span>
                  <span>work/life balance </span>
                  <span className="text-primary-300">(67%), </span>
                  <span>and wellness </span>
                  <span className="text-primary-300">(63%).</span>
                </p>
              </li>
              <li className="mb-4">
                <p className="text-black">
                  <span className="text-primary-300">51%</span>
                  <span>
                    of companies with a strong coaching culture have higher
                    revenues than others
                  </span>
                </p>
              </li>
              <li className="mb-4">
                <p className="text-black">
                  <span>
                    <span className="text-primary-300">68% </span>
                    <span>
                      of individuals who hired coaches could make back their
                      investment. The median ROI is 7x the investment. Coaching
                      can have a
                    </span>
                    <span className="text-primary-300"> 221% </span>
                    <span>ROI.</span>
                  </span>
                </p>
              </li>
              <li className="mb-4">
                <p className="text-black">
                  <span>
                    Coaching clients report that they experience decreased
                    anxiety levels
                  </span>
                  <span className="text-primary-300"> 57.1% </span>
                  <span> and depression levels </span>
                  <span className="text-primary-300"> 44.3%, </span>
                  <span> as well as improved workplace relationships </span>
                  <span className="text-primary-300">79%.</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-2 mb-8 pt-4 text-center">
        <h2 className="subheading">
          <span>Wleness </span>
          <span className=" heading-primary"> life coaching </span>
        </h2>
        <div className="container mx-auto mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
          {wlenessLifeCoaching.map((value, i) => {
            return (
              <figure
                key={i}
                className="cursor-pointer rounded-2xl p-4 text-center hover:shadow-xl"
              >
                <div>
                  <img className="mx-auto w-32 xl:w-44" src={value.image} />
                </div>
                <figcaption className="font-semibold">
                  <h2 className="mb-2 text-xl font-bold text-primary-400">
                    {value.name}
                  </h2>
                  <p className="text-sm text-slate-500">{value.desc}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <FaqWithImage data={lifeStyleCoachingFaqs} />
    </>
  );
}
