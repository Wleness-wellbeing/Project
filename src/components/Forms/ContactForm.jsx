import React, { useState } from "react";
import { requestCallback } from "../../assets";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: name,
      number: number,
      email: email,
      message: message,
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
    <section className="container mx-auto mb-6 grid rounded-3xl bg-[#FAFCE7] px-8 py-12 md:grid-cols-2 lg:px-8 ">
      <div className="md:flex md:h-full md:flex-col md:px-6">
        <div>
          <h3 className="font-medium text-[#464646] opacity-80 lg:text-lg">
            Need an expert's consulting?
          </h3>
          <h1 className="font-quicksand text-4xl font-bold leading-tight tracking-tight text-[#464646] opacity-90 xl:text-4xl">
            Request a Call Back
          </h1>

          <p className="pt-2 text-slate-700 opacity-90 lg:text-xl">
            Talk to your mental health professional.
          </p>
        </div>
        <div className="mt-5 items-center sm:flex">
          <img
            className="mb-2 w-24 object-cover sm:mr-6"
            src={requestCallback}
            alt="contact"
          />
          <p className="font-medium leading-5 text-slate-700">
            Our Experts are waiting
            <br />
            for your service.
          </p>
        </div>
      </div>
      <form
        className="flex flex-col pt-10 md:px-6 md:pt-0"
        onSubmit={handleSubmit}
      >
        <label className="mb-3">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-3">
          <input
            type="tel" // Use "tel" for phone numbers
            placeholder="Your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-3">
          <input
            type="text"
            placeholder="Message"
            value={message}
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

export default ContactForm;
