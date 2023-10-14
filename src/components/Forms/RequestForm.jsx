import React, { useState } from "react";
import axios from "axios";
import { requestCallback } from "../../assets";
import { REQUEST_CALLBACK_URI } from "../../data/api";

function RequestForm() {
  const [formInfo, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (formInfo["name"] && formInfo["phone"]) {
      let formData = new FormData();
      // Append form fields to the FormData object
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        const response = await axios.post(REQUEST_CALLBACK_URI, formData);
        console.log(response.data);
        setSuccessMessage({
          status: response.data.status,
          message: response.data.message,
        });

        // Empty form after successfully sending data
        response.data.status == "success"
          ? setFormData({
              name: "",
              phone: "",
            })
          : null;
      } catch (error) {
        console.error("Error sending data:", error);
        setSuccessMessage({
          status: "error",
          message: "Internal Server Error! Please Try Again later",
        });
      }
    } else {
      setSuccessMessage({
        status: "error",
        message: "Please fill your details properly!",
      });
    }
  };

  return (
    <section className="bg-yellow-primary container mx-auto mb-6 grid rounded-3xl px-6 py-8 xs:px-8 xs:py-14 md:grid-cols-2 lg:px-8 lg:py-16 2xl:py-20">
      <div className="md:flex md:h-full md:flex-col md:justify-between md:px-6">
        <div>
          <h3 className="font-medium text-[#464646] opacity-80 lg:text-lg">
            Need expert counselling?
          </h3>
          <h2 className="font-quicksand text-3xl font-bold leading-tight tracking-tight text-[#464646] opacity-90 xl:text-4xl">
            Request a Call Back
          </h2>

          <p className="pb-4 pt-2 font-medium text-slate-700 opacity-90 lg:text-xl">
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
            Our Experts are waiting.
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
            value={formInfo.name}
            onChange={handleChange}
            name="name"
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <label className="mb-3">
          <input
            type="tel" // Use "tel" for phone numbers
            placeholder="Your number"
            name="phone"
            value={formInfo.phone}
            onChange={handleChange}
            className="block w-full rounded-md px-6 py-4 shadow-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:bg-white"
          />
        </label>
        <p
          className={`text-center font-semibold ${
            successMessage.status == "success"
              ? " text-green-500 "
              : " text-red-500 "
          }`}
        >
          {successMessage.message}
        </p>

        <button type="submit" className="btn-one mx-auto mt-4">
          Submit
        </button>
      </form>
    </section>
  );
}

export default RequestForm;
