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
        setSuccessMessage("Form data submitted successfully!"); // Update success message
      } else {
        console.error("Error submitting form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <section className="container mx-auto mb-6 lg:mb-28 py-12 px-6 xs:px-8 xs:py-14 grid md:grid-cols-2 rounded-3xl lg:px-8 bg-[#FAFCE7] lg:py-16 2xl:py-20">
      <div className="md:px-6 md:flex md:flex-col md:justify-between md:h-full">
        <div>
          <h3 className="font-medium opacity-80 text-[#464646] lg:text-lg">
            Need a doctor consulting?
          </h3>
          <h1 className="text-4xl font-bold font-quicksand text-[#464646] opacity-90 xl:text-5xl">
            Request a Call Back Now
          </h1>
          <p className="pt-2 pb-4 text-slate-700 opacity-90 lg:text-xl">
            Talk to your mental health professional.
          </p>
        </div>
        <div className="sm:flex items-center">
          <img
            className="w-24 object-cover mb-2 sm:mr-6"
            src={requestCallback}
            alt="contact"
          />
          <p className="text-slate-700 font-medium leading-5">
            Our Doctors are waiting
            <br />
            for your service.
          </p>
        </div>
      </div>
      <form
        className="flex flex-col md:px-6 pt-10 md:pt-0"
        onSubmit={handleSubmit}
      >
        <label className="mb-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-6 block py-4 w-full rounded-md shadow-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
          />
        </label>
        <label className="mb-6">
          <input
            type="tel" // Use "tel" for phone numbers
            placeholder="Your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="px-6 block py-4 w-full rounded-md shadow-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
          />
        </label>
        <label className="mb-2">
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-6 block py-4 w-full rounded-md shadow-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
          />
        </label>
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}
        <button type="submit" className="btn-one mt-4 mx-auto">
          Submit
        </button>
      </form>
    </section>
  );
}

export default RequestForm;
