import React from "react";
import { bgDotsPattern, doctorAppointment, faq3 } from "../../assets";
import StatisticsBlock from "../../components/StatisticsBlock";
import { Link } from "react-router-dom";
import Faq from "../../components/layout/Faq";

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
      <header className="relative overflow-x-hidden">
        <div className="container mx-auto pb-8 pt-12">
          <h1 className="text-center text-4xl font-bold text-primary-400">
            Appointment Booking
          </h1>
          <figure className="mx-auto flex w-96 items-center justify-center gap-x-8 py-6 lg:w-[590px]">
            <div className="w-1/2">
              <img src={doctorAppointment} alt="" className="object-cover" />
            </div>
            <figcaption className="w-1/2">
              <h4 className="text-4xl font-bold">Dr. Jenny</h4>
              <h6 className="text-xl font-semibold">6+ yrs of experience</h6>
              <div className="my-2 font-medium">
                <p>Expertise: Yoga, Work-life</p>
                <p>Speaks: German, English</p>
              </div>
              <p className="text-xl font-bold text-primary-400">
                Starts at $ 500
              </p>
            </figcaption>
          </figure>

          <div className="rounded-3xl border-2 border-secondary p-6">
            <p className="text-justify text-lg font-medium">
              Dr. Michelle Reynolds is a compassionate and dedicated licensed
              clinical psychologist with over a decade of experience in helping
              individuals achieve mental and emotional well-being. With a warm
              and non-judgmental approach, she creates a safe space for clients
              to explore their thoughts, feelings, and challenges.
            </p>
            <span className="block text-right text-lg font-bold text-primary-400">
              View More
            </span>
          </div>

          <div className="pt-10 text-center">
            <Link to="/appointment/checkout" className="btn-one inline-block">
              Book an appointment Now
            </Link>
          </div>
        </div>
        <img src={bgDotsPattern} alt="" className="absolute -right-20 top-0" />
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 bottom-52 w-72"
        />
      </header>

      <section className="container mx-auto grid items-center justify-between gap-x-20 pb-14 lg:grid-cols-4">
        <StatisticsBlock number="5/5" suffix="" subtitle="User Rating" />
        <StatisticsBlock number={160} suffix="+" subtitle="Users Recommend" />
        <StatisticsBlock number={2} suffix=" Hr" subtitle="Last Booked" />
        <StatisticsBlock number={22} suffix="" subtitle="Ongoing Sessions" />
      </section>

      <section className="container mx-auto flex gap-x-6">
        <div className="w-1/2">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Doctor's Main <span className="heading-primary">Forte</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {doctorsForte.map((value, index) => {
              return (
                <span
                  key={index}
                  className="rounded-xl border-2 border-primary-300 px-5 py-3 font-semibold"
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Doctor's Main <span className="heading-primary">Suggestion's</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {doctorsSuggestions.map((value, index) => {
              return (
                <span
                  key={index}
                  className="rounded-xl border-2 border-primary-300 bg-primary-300 px-5 py-3 font-semibold text-white"
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-12">
        <h4 className="pb-6 text-center text-4xl font-bold">
          <span>Looking for different service </span>
          <Link to="" className="heading-primary inline-block underline">
            Click Here
          </Link>
        </h4>

        <div className="flex py-10">
          <div className="w-1/2 pr-10">
            <h2 className="heading-primary inline-block pb-2 text-6xl font-bold">
              FAQ's
            </h2>
            <p className="my-5 text-lg font-semibold">
              Everything you need to know right here at Wleness. Ask questions
              and browse around for answers.
            </p>
            <div>
              <img src={faq3} alt="" className="w-96" />
            </div>
            <button className="btn-one">Goes to FAQ's</button>
          </div>

          <div className="w-1/2 space-y-4">
            {faqs.map((value, index) => {
              return <Faq question={value.question} answer={value.answer} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
