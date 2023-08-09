import React from "react";
import { bgDotsPattern, doctorAppointment } from "../../assets";
import StatisticsBlock from "../../components/StatisticsBlock";

const doctorsForte = [
  "Evidence based therapy expertise",
  "Holistic approach to wellness",
  "Coping skill cultivation",
  "Resilience",
  "Empathetic & self environment creation",
];

export default function DoctorAppointment() {
  return (
    <>
      <header className="relative overflow-x-hidden">
        <div className="container mx-auto py-12">
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

      <section className="container mx-auto flex items-center">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-5">
            Doctor's Main <span className="heading-primary">Forte</span>
          </h2>
          <div>
            {doctorsForte.map((value, index) => {
              return (
                <span
                  key={index}
                  className="p-4 rounded-xl border-2 border-secondary font-semibold"
                >
                  {value}
                </span>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-5">
            Doctor's Main <span className="heading-primary">Suggestion's</span>
          </h2>
          <div>
            <span>Evidence based therapy expertise</span>
            <span>Holistic approach to wellness</span>
            <span>Coping skill cultivation</span>
            <span>Resilience</span>
            <span>Empathetic & self environment creation</span>
          </div>
        </div>
      </section>
    </>
  );
}
