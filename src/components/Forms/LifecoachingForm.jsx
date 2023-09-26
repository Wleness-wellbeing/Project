import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CORPORATE_JOIN_URI } from "../../data/api";

export default function LifeCoachingForm({ isOpen, onClose }) {
  if (!isOpen) return null;
  // Handle Joining Form
  const [formInfo, setFormData] = useState({
    org: "",
    professional_email: "",
    full_name: "",
    role: "",
    number: "",
    website: "",
    policyAccept: "off",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Close assessment modal on clicking outside of the box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".corporate-form")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // ========== Handle Form Submission ==========
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formInfo);

    // Validate if form is filled
    if (
      formInfo["org"] &&
      formInfo["professional_email"] &&
      formInfo["full_name"] &&
      formInfo["role"] &&
      formInfo["number"] &&
      formInfo["website"] &&
      formInfo["policyAccept"]
    ) {
      let formData = new FormData();
      // Append form fields to the FormData object
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        const response = await axios.post(CORPORATE_JOIN_URI, formData);
        console.log(response.data);
        setSuccessMessage({
          status: response.data.status,
          message: response.data.message,
        });

        // Empty form after successfully sending data
        response.data.status == "success"
          ? setFormData({
              org: "",
              professional_email: "",
              full_name: "",
              role: "",
              number: "",
              website: "",
              policyAccept: "off",
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
    <section className="fixed inset-0 z-50 grid place-items-center bg-black/20">
      <div className="corporate-form w-4/5 rounded-2xl bg-white p-6 lg:w-[620px]">
        <div className="text-center">
          <h2 className="subheading">Life-coaching Join</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <p
            className={`mb-2 text-center font-semibold ${
              successMessage.status == "success"
                ? " text-green-500 "
                : " text-red-500 "
            }`}
          >
            {successMessage.message}
          </p>
          <label htmlFor="org">
            <input
              type="text"
              name="org"
              id="org"
              placeholder="Name *"
              className="form-input"
              value={formInfo.org}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="professional_email">
            <input
              type="text"
              name="professional_email"
              id="professional_email"
              placeholder=" Email *"
              className="form-input"
              value={formInfo.professional_email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="full_name">
            <input
              type="number"
              name="full_name"
              id="full_name"
              placeholder="Age *"
              className="form-input"
              value={formInfo.full_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="role">
            <input
              type="gender"
              name="role"
              id="role"
              placeholder="Gender *"
              className="form-input"
              value={formInfo.role}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="number">
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone Number *"
              className="form-input"
              value={formInfo.number}
              onChange={handleChange}
            />
          </label>
          {/* <label htmlFor="website">
            <input
              type="text"
              name="website"
              id="website"
              placeholder="Your Website *"
              className="form-input"
              value={formInfo.website}
              onChange={handleChange}
            />
          </label> */}
          <label htmlFor="policyAccept" className="mb-4 flex px-2">
            <input
              type="checkbox"
              name="policyAccept"
              className="mr-2"
              id="policyAccept"
              value={formInfo.policyAccept}
              onChange={handleChange}
            />
            <span className="text-[8px] font-medium md:text-xs">
              I understand & agree that the information submitted in this form
              will be transmitted to, stored and processed by Wleness, in
              accordance with their &nbsp;
              <Link to="/privacy-policy" className="text-primary-400">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          <div className="grid grid-cols-2 justify-center lg:flex">
            <button
              type="reset"
              onClick={onClose}
              className="mr-2 rounded-2xl border-2 border-primary-300 px-5 py-2 font-semibold text-primary-300 transition-all hover:bg-primary-500 hover:text-white"
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded-2xl border-2 border-primary-300 bg-primary-300 px-5 py-2 font-semibold text-white  transition-all hover:border-primary-500 hover:bg-primary-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
