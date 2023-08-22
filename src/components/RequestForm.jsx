import React, { useState } from "react";
import { requestCallback } from "../assets";

function RequestForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      number: number,
      date: date,
    };

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Thanks! We will get back to you soon.🙂"); // Update success message
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <section className="container mx-auto mb-6 grid rounded-3xl bg-[#FAFCE7] px-6 py-12 xs:px-8 xs:py-14 md:grid-cols-2 lg:mb-28 lg:px-8 lg:py-16 2xl:py-20">
      <div className="md:flex md:h-full md:flex-col md:justify-between md:px-6">
        <div>
          <h3 className="font-medium text-[#464646] opacity-80 lg:text-lg">
            Need a doctor consulting?
          </h3>
          <h1 className="font-quicksand text-4xl font-bold text-[#464646] opacity-90 xl:text-5xl">
            Request a Call Back Now
          </h1>
          <p className="pb-4 pt-2 text-slate-700 opacity-90 lg:text-xl">
            Talk to your mental health professional.
          </p>
        </div>
        <div className="items-center sm:flex">
          <img
            className="mb-2 w-24 object-cover sm:mr-6"
            src={requestCallback}
            alt="contact"
          />
          <p className="font-medium leading-5 text-slate-700">
            Our Doctors are waiting
            <br />
            for your service.
          </p>
        </div>
      </div>
      <form
        className="flex flex-col pt-10 md:px-6 md:pt-0"
        onSubmit={handleSubmit}
      >
        <label className="mb-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-6">
          <input
            type="tel" // Use "tel" for phone numbers
            placeholder="Your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-2">
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        {successMessage && (
          <p className="text-center text-green-500">{successMessage}</p>
        )}
        <button type="submit" className="btn-one mx-auto mt-4">
          Submit
        </button>
      </form>
    </section>
  );
}

export default RequestForm;
