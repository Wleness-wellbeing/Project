import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { expertClient, featuredPatient } from "../../assets";
import DoctorsCard from "../../components/DoctorsCard";
import { EXPERTS_URI } from "../../data/api";
import HappyClient from "../../components/HappyClient";
import { expertsClients } from "../../data/clients";
import axios from "axios";
import Assessment from "../../components/Assessment";

export default function ExpertsDetails() {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(EXPERTS_URI)
      .then((response) => {
        // Handle the successful response
        setDoctorDetails(response.data["experts"]);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <main>
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
