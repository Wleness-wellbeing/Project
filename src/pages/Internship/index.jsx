import React, { useState } from "react";
// Data
import {
  internshipHeader,
  internshipIcon1,
  internshipIcon2,
  internshipIcon3,
  internshipIcon4,
  internshipIcon5,
  internshipWhy,
  iconCommitment,
  iconFacilities,
  iconExperience,
} from "../../assets";
import { internshipClients } from "../../data/clients";
// Components
import HappyClient from "../../components/HappyClient";
import InternshipApply from "../../components/InternshipApply";

const wlenessWork = [
  {
    image: internshipIcon1,
    title: "Kill deadlines, not your mental health:",
    desc: "Flexible timings for your Flexible creativity",
  },
  {
    image: internshipIcon2,
    title: "The perfect work life balance:",
    desc: "We work as a family where your priority matters to us.",
  },
  {
    image: internshipIcon3,
    title: "We spread smiles, not stress:",
    desc: "Unleash a perfect state of mind sans anxiety or stress.",
  },
  {
    image: internshipIcon4,
    title: "Break mental health barriers:",
    desc: "well-being rules with wit, passion, and positive vibes!",
  },
  {
    image: internshipIcon5,
    title: "The perfect Work-Life balance:",
    desc: "Conquer the stigma,spread love and compassion.",
  },
];

export default function Internship() {
  const [internshipModal, setInternshipModal] = useState(false);

  const openInternshipModal = () => {
    setInternshipModal(true);
  };

  const closeInternshipModal = () => {
    setInternshipModal(false);
  };

  return (
    <>
      <main className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Text items on the left */}
          <div className="md:w-1/2 text-center md:text-left px-4 space-y-2">
            <h1 className="subheading heading-primary">
              Looking for an Internship.
            </h1>
            <h3 className="font-bold text-3xl">Want to join us ?</h3>
            <p className="para py-4 pb-6">
              We are seeking passionate individuals who are willing to make a
              change and contribute to our noble cause. Are you someone who has
              the zest to combine your passion for mental health with real life?
              If yes, look no further! Join Wleness to embark on a rewarding
              journey promoting well-being and supporting individuals in need.
            </p>
            <button className="btn-one !text-lg" onClick={openInternshipModal}>
              Apply Now
            </button>
          </div>

          {/* Image on the right */}
          <div className="md:w-1/2">
            <img src={internshipHeader} alt="header" />
          </div>
        </div>

        {/* ==== why wleness===== */}
        <section className="container mx-auto pb-7 pt-10 lg:pt-12 overflow-x-hidden">
          <div>
            <hgroup className="items-center lg:text-center">
              <h2 className="subheading heading-primary text-center ">
                Why Wleness?
              </h2>
            </hgroup>
          </div>
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="order-2 box-border p-4 lg:p-10 sm:mx-auto sm:w-4/5 lg:order-1 2xl:w-[45%]">
              <img src={internshipWhy} alt="" />
            </div>
            <article className="order-1 mx-auto sm:w-[580px] lg:order-2 2xl:w-[55%] pb-10">
              <div className="space-y-3 lg:ml-12">
                <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                  <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                    <img
                      src={iconExperience}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                    <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                      Whether you're looking to assist therapists, conducting
                      research or supporting community outreach programs, enjoy
                      customized diverse learning opportunities
                    </p>
                  </figcaption>
                </figure>
                <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                  <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                    <img
                      src={iconCommitment}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                    <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                      Our supportive and collaborative environment ensures
                      you'll receive quality guidance and mentorship from
                      experienced professionals dedicated to your growth.
                    </p>
                  </figcaption>
                </figure>
                <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                  <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                    <img
                      src={iconFacilities}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                    <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                      Experience holistic growth by working in a multi
                      disciplinary team with a positive work-life balance.
                      There's a place for you wherever you excel.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </article>
          </div>
        </section>

        {/* Want to know what is like to work at WLENESS */}
        <div className="mb-8">
          <h1 className="subheading text-center heading-primary">
            Want to know what it's like to work at WLENESS
          </h1>

          <div className="grid mt-4 grid-cols-5 items-center gap-4">
            {wlenessWork.map((value, index) => {
              return (
                <div
                  key={index}
                  className="p-4 border-2 border-slate-100 shadow-xl rounded-xl h-full"
                >
                  <img
                    src={value.image}
                    alt="Icon 1"
                    className="mx-auto lg:w-40 lg:h-40 object-contain"
                  />
                  <div>
                    <h3 className="text-primary-400 font-bold">
                      {value.title}
                    </h3>
                    <p className="font-semibold">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <HappyClient data={internshipClients} />

      <InternshipApply
        isOpen={internshipModal}
        onClose={closeInternshipModal}
      />
    </>
  );
}
