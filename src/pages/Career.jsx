import React from "react";
import { email, location, ringervolume } from "../assets";
import CareerForm from "../components/Forms/CareerForm";

export default function Career() {
  return (
    <>
      <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent pb-5 pt-12">
        <div className="container mx-auto text-center">
          <h1 className="subheading heading-primary">Career</h1>
          <p className="text-lg font-semibold text-primary-400">
            Reach Out for Support and Guidance
          </p>
        </div>
      </header>

      <section className="container mx-auto space-y-5 py-8 font-medium">
        <CareerForm />
        <div>
          <div className="my-6 flex items-center justify-center">
            <h1 className="subheading heading-primary text-center">
              Have a question? Talk to us
            </h1>
          </div>

          <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <img className="mx-auto" src={email}></img>
              <h2 className="text-lg font-semibold text-primary-400">
                Email Us At
              </h2>
              <h3 className="font-bold">hello@wleness.com</h3>
              <p className="font-semibold">
                We'll get back to you within 24Hrs
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src={location}></img>
              <h2 className="text-lg font-semibold text-primary-400">
                Visit Us At
              </h2>
              <h3 className="font-bold">Spring House, Plot 2, Sec 43</h3>
              <p className="font-semibold">
                Golf - Course Road, Gurgaon - 122002
              </p>
            </div>
            <div className="text-center">
              <img className="mx-auto" src={ringervolume}></img>
              <h2 className="text-lg font-semibold text-primary-400">
                Call Us At
              </h2>
              <h3 className="font-bold">+91 8764387421</h3>
              <p className="font-semibold">Call between 10AM to 10PM</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
