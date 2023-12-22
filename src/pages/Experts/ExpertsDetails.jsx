import React, { useState, useEffect } from "react";
import DoctorsCard from "../../components/DoctorsCard";
import HappyClient from "../../components/HappyClient";
import { expertsClients } from "../../data/clients";
import getExperts from "./getExperts";
import { ALL_EXPERTS_META } from "../../data/meta";
import { get_canonical } from "../../utils";
import { Helmet } from "react-helmet";

export default function ExpertsDetails() {
  const { status, doctorDetails } = getExperts();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <main>
      <Helmet>
        <title>{ALL_EXPERTS_META.title}</title>
        <meta name="description" content={ALL_EXPERTS_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <header className="container mx-auto py-4">
        <h1 className="text-center">
          <span className="subheading heading-primary">
            Meet Our Specialists
          </span>
        </h1>
      </header>

      {/* Specialist Doctors */}
      <section>
        <div className="side-spacing grid-cols-[repeat(4, minmax(280, 1fr))] container mx-auto grid gap-5 p-4 sm:grid-cols-2 lg:pb-12 3xl:gap-6">
          {doctorDetails.map((value, i) => {
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
      </section>

      <div className="bg-primary-50/40">
        <div className="container mx-auto py-4 text-center">
          <h2 className="subheading heading-primary">
            What Our Clients Say About Us
          </h2>
          <p className="text-center font-medium leading-5 xl:text-lg xl:leading-6">
            Hear from our valued clients about their experience with us and the
            impact we've made on their lives. Read their heartfelt testimonials
            and discover the quality of care and support we provide.
          </p>
        </div>
      </div>
      <HappyClient data={expertsClients} />
    </main>
  );
}
