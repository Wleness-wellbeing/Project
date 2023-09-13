import React from "react";
import { bgDotsPattern, doctorAppointment, faq3 } from "../../assets";
import { Link } from "react-router-dom";
import BookAppointment from "../../components/Forms/BookAppointment";
import DoctorStatistics from "../../components/Statistics/DoctorStatistics";
import HomeFaq from "../../components/Faq/HomeFaq";

const doctorsForte = [
  "Evidence based therapy expertise",
  "Holistic approach to wellness",
  "Coping skill cultivation",
  "Resilience",
  "Empathetic & self environment creation",
];

const doctorsSuggestions = [
  "Stay Connected",
  "Healthy Lifestyle",
  "Help Others",
  "Prioritize Self care",
  "Limit Screen Time",
  "Seek Professional Help",
  "Learn To Say No",
  "Stay Mindfull",
];

const faqs = [
  {
    question: "What is Wleness?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
  {
    question: "What services does Wleness offer?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
  {
    question: "What makes Wleness different from others?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
  {
    question: "How can I benefit from using Wleness?",
    answer:
      "Wleness is an inclusive online platform dedicated to promoting mental health and wellness.",
  },
];

export default function DoctorAppointment() {
  return (
    <>
      <header className="relative overflow-x-clip">
        <div className="container mx-auto pb-8 pt-4">
          <h1 className="text-center text-primary-400 lg:pb-4">
            <span className="subheading">Appointment Booking</span>
          </h1>
          <figure className="mx-auto items-center justify-center gap-x-8 py-3 lg:flex lg:w-[590px] lg:py-6">
            <div className="mx-auto w-48 lg:mx-0 lg:w-1/2">
              <img src={doctorAppointment} alt="" className="object-cover" />
            </div>
            <figcaption className="mx-auto text-center lg:w-1/2 lg:text-left">
              <h4 className="text-2xl font-bold lg:text-3xl">Dr. Jenny</h4>
              <h6 className="text-xl font-semibold lg:text-2xl">
                6+ yrs of experience
              </h6>
              <div className="my-2 font-medium">
                <p>Expertise: Yoga, Work-life</p>
                <p>Speaks: German, English</p>
              </div>
              <p className="text-xl font-bold text-primary-400">
                Starts at $ 500
              </p>
            </figcaption>
          </figure>

          <div className="rounded-3xl border-2 border-secondary p-3 lg:p-6">
            <p className="text-center text-sm font-medium md:text-lg">
              Dr. Michelle Reynolds is a compassionate and dedicated licensed
              clinical psychologist with over a decade of experience in helping
              individuals achieve mental and emotional well-being. With a warm
              and non-judgmental approach, she creates a safe space for clients
              to explore their thoughts, feelings, and challenges.
            </p>
            {/* <span className="block text-right text-lg font-bold text-primary-400">
              View More
            </span> */}
          </div>

          {/* <div className="pt-7 text-center">
            <Link to="/appointment/checkout" className="btn-one inline-block">
              Book an appointment Now
            </Link>
          </div> */}
        </div>

        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -right-20 top-0 hidden w-32 lg:-right-20 lg:block lg:w-64"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 top-20 w-32 lg:top-40 lg:w-72"
        />
      </header>

      <BookAppointment />
      <DoctorStatistics />

      <section className="container mx-auto gap-x-6 lg:flex">
        <div className="mb-6 lg:mb-0 lg:w-1/2">
          <h2 className="mb-4 text-center text-2xl font-bold lg:mb-10 lg:text-3xl">
            Doctor's Main <span className="heading-primary">Forte</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {doctorsForte.map((value, index) => {
              return (
                <span
                  key={index}
                  className="rounded-xl border-2 border-primary-300 px-5 py-2.5 text-sm font-semibold lg:py-3 lg:text-base"
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="mb-4 text-center text-2xl font-bold lg:mb-10 lg:text-3xl">
            Doctor's Main <span className="heading-primary">Suggestion's</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {doctorsSuggestions.map((value, index) => {
              return (
                <span
                  key={index}
                  className="rounded-xl bg-primary-300 px-5 py-2.5 text-sm font-semibold text-white lg:py-3 lg:text-base"
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <h4 className="container mx-auto pb-6 pt-12 text-center text-2xl font-bold lg:text-4xl">
        <span>Looking for different service </span>
        <Link to="" className="heading-primary inline-block underline">
          Click Here
        </Link>
      </h4>

      <HomeFaq data={faqs} />
    </>
  );
}
