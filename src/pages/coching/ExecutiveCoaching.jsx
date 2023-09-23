import React from "react";
import {
  executiveHeader,
  executiveIcon1,
  executiveIcon2,
  executiveIcon3,
  executiveIcon4,
  executiveimage2,
  executiveimage3,
} from "../../assets";

const executiveCard = [
  {
    image: executiveIcon1,
    desc: "A global network of senior-level trainers with extensive expertise",
  },
  {
    desc: "Integrating coaching with practical, research-based growth strategies.",
    image: executiveIcon2,
  },
  {
    desc: "Non-profit purpose to promote leadership across all societal groups.",

    image: executiveIcon3,
  },
  {
    desc: "Counseling with a focus on organizational & personal changes like relationship.",
    image: executiveIcon4,
  },
];

export default function ExecutiveCoaching() {
  return (
    <>
      <header className="relative overflow-x-clip bg-secondary/10 pb-6 pt-12 xl:pb-10 xl:pt-16">
        <div className="container mx-auto xl:flex xl:items-center xl:gap-x-5">
          <div className="mb-5 flex justify-end xl:order-2 xl:mr-4 xl:w-1/2">
            <img
              className="w-full"
              src={executiveHeader}
              alt="Your Image Alt Text"
            />
          </div>
          <div className="xl:order-1 xl:w-1/2">
            <hgroup className="mb-6 xl:mb-8">
              <h1 className="heading-primary subheading">Executive Coaching</h1>
            </hgroup>

            <ul className="rounded-2xl bg-primary-50 p-3 text-center font-semibold lg:text-left xl:text-lg">
              <li className="mb-6">
                For the corporate superheroes who are always there for their
                employees like true leader, Wleness is here to care for people
                like you who look out for others. Led by top-notch industry
                experts, reward yourself for being the amazing leader that you
                are!
              </li>
            </ul>

            <div className="mt-6">
              <button className="btn-one">Book Us Now</button>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="">Why Executive Coaching </h2>
          <p className="">
            Executive coaching may assist in developing leaders, reveal blind
            spots, and alter attitudes that have an immediate influence on
            corporate outcomes. It's a great method for assisting executives
            assuming more responsibility or moving into a new position within
            the organization.
          </p>
        </div>
        <div className="flex">
          <div>
            <img src={executiveimage2}></img>
          </div>
          <div className="my-auto text-left">
            <ul>
              <li>
                <span>Improved emotional intelligence </span>and self-awareness
                to make better use of their capabilities
              </li>
              <li>
                Greater <span>leadership resilience</span>
              </li>
              <li>
                Growth of <span>strategic thinking</span> abilities
              </li>
              <li>
                Enhanced team<span>leadership capabilities</span>{" "}
              </li>
              <li>
                Long-term <span>organizational stay</span>
              </li>
            </ul>
          </div>
        </div>

        <section className="container mx-auto text-center">
          <h2 className="subheading mb-3 pt-10">
            <span>Why </span>
            <span className="heading-primary">Executive coaching</span>
            <span> With Wleness?</span>
          </h2>
          <p className="pb-12 text-lg font-medium lg:mx-auto">
            Wleness provides you client-centred,technically curated 
          </p>
          <div className="mb-14 grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-4 lg:gap-6 xl:gap-10">
            {executiveCard.map((value, i) => {
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
                    <p className="text-xs font-semibold text-slate-500 lg:text-base">
                      {value.desc}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      </div>

      <div className="container mx-auto my-4 text-center">
        <p className="my-4 text-xl font-semibold">
          Our on-demand senior leadership coaching is ideal for assisting
          executives to rapidly sense a feeling of being grounded and
          concentrated. Our experts specialize in:
        </p>
        <div class="grid grid-cols-3 gap-4">
          <div class="para rounded-xl bg-primary-50  p-6">
            Navigating through complex situations.
          </div>

          <div class="para rounded-xl bg-primary-50 p-6">
            Powerful approach designed specifically for the topmost leaders of
            an organisation.
          </div>

          <div class="para rounded-xl bg-primary-50 p-6">
            Reclaiming  clarity with confidentiality.{" "}
          </div>
        </div>
      </div>

      <div class="container mx-auto flex">
        <div class="my-auto w-1/2 p-6">
          <h2>
            “There’s a lot of dilemma about both being the same but in reality,
            they often have stark differences”
          </h2>
        </div>

        <div class="w-1/2 p-6">
          <div class="p-6">
            <ul class="mb-4 list-disc pl-5">
              <li>
                Coaching sessions are frequently structured in a way that they
                result in gradual progressive development through relevant
                stages that are quite closely related to a person's overarching
                goals
              </li>
              <li>
                Counselling is mainly about expressing one's feelings and
                examining one's emotions. It's not always necessary to carry out
                this with a particular strategy or set of action items in sight
              </li>
              <li>
                Coaching is utilised to boost performance. The individual
                requires assistance to reach goals in other areas of his or her
                position while having exceptional talents in some of them
              </li>
              <li>
                When management notices a performance issue that, if left
                unaddressed, might hinder an employee's ability to prosper or
                even stay with the company, counselling can be utilised to boost
                performance. An employee who isn't hitting sales goals is an
                instance
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-clip bg-secondary/10 pb-6 pt-12 xl:pb-10 xl:pt-2">
        <div className=" text-center">
          <h2 className="subheading my-8 ">
            <span>The </span>
            <span className="heading-primary">results</span>
            <span>say it all</span>
          </h2>
        </div>
        <div className="container mx-auto  xl:flex xl:items-center xl:gap-x-5">
          <div className="mb-5 flex justify-end xl:order-2 xl:mr-4 xl:w-1/2">
            <img
              className="w-full"
              src={executiveimage3}
              alt="Your Image Alt Text"
            />
          </div>
          <div className="xl:order-1 xl:w-1/2">
            <ul className="rounded-2xl p-3 text-center font-semibold lg:text-left xl:text-lg">
              <li className="mb-6">
                Those who choose to get executive coaching are assisted in
                discovering the assets they already possess to effect lasting
                change. It may significantly increase a leader's performance and
                put others on the fast track.
              </li>
              <li className="mb-6">
                Finding the ideal coach is crucial. Before presenting a range of
                coach profiles, a competent coaching provider will work together
                with each leader to make sure that their requirements and goals
                are understood. Wleness makes that commitment to you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
