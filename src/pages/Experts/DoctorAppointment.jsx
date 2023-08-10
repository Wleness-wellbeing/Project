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
        <div className="container mx-auto pt-12 pb-8">
          <h1 className="text-4xl font-bold text-center text-primary-400">
            Appointment Booking
          </h1>
          <figure className="flex items-center w-96 mx-auto lg:w-[590px] justify-center gap-x-8 py-6">
            <div className="w-1/2">
              <img src={doctorAppointment} alt="" className="object-cover" />
            </div>
            <figcaption className="w-1/2">
              <h4 className="text-4xl font-bold">Dr. Jenny</h4>
              <h6 className="font-semibold text-xl">6+ yrs of experience</h6>
              <div className="my-2 font-medium">
                <p>Expertise: Yoga, Work-life</p>
                <p>Speaks: German, English</p>
              </div>
              <p className="text-xl font-bold text-primary-400">
                Starts at $ 500
              </p>
            </figcaption>
          </figure>

          <div className="p-6 border-2 border-secondary rounded-3xl">
            <p className="font-medium text-justify text-lg">
              Dr. Michelle Reynolds is a compassionate and dedicated licensed
              clinical psychologist with over a decade of experience in helping
              individuals achieve mental and emotional well-being. With a warm
              and non-judgmental approach, she creates a safe space for clients
              to explore their thoughts, feelings, and challenges.
            </p>
            <span className="text-lg block text-right font-bold text-primary-400">
              View More
            </span>
          </div>

          <div className="text-center pt-10">
            <Link to="/appointment/checkout" className="btn-one inline-block">
              Book an appointment Now
            </Link>
          </div>
        </div>
        <img src={bgDotsPattern} alt="" className="absolute top-0 -right-20" />
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute bottom-52 -left-20 w-72"
        />
      </header>

      <section className="container mx-auto grid lg:grid-cols-4 items-center justify-between gap-x-20 pb-14">
        <StatisticsBlock number="5/5" suffix="" subtitle="User Rating" />
        <StatisticsBlock number={160} suffix="+" subtitle="Users Recommend" />
        <StatisticsBlock number={2} suffix=" Hr" subtitle="Last Booked" />
        <StatisticsBlock number={22} suffix="" subtitle="Ongoing Sessions" />
      </section>

      <section className="container mx-auto flex gap-x-6">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Doctor's Main <span className="heading-primary">Forte</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {doctorsForte.map((value, index) => {
              return (
                <span
                  key={index}
                  className="py-3 px-5 rounded-xl border-2 border-primary-300 font-semibold"
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Doctor's Main <span className="heading-primary">Suggestion's</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {doctorsSuggestions.map((value, index) => {
              return (
                <span
                  key={index}
                  className="py-3 px-5 rounded-xl border-2 text-white border-primary-300 bg-primary-300 font-semibold"
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto pt-12">
        <h4 className="text-4xl font-bold text-center pb-6">
          <span>Looking for different service </span>
          <Link to="" className="heading-primary underline inline-block">
            Click Here
          </Link>
        </h4>

        <div className="flex py-10">
          <div className="w-1/2 pr-10">
            <h2 className="heading-primary text-6xl font-bold inline-block pb-2">
              FAQ's
            </h2>
            <p className="font-semibold my-5 text-lg">
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
