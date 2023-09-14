import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iconFacebookCircle, iconGoogle, logo, signup } from "../../assets";
import axios from "axios";

export default function Signup() {
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
    <main className="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch">
      {/* Left Sidebar */}
      <aside className="hidden items-center justify-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-contain bg-right bg-no-repeat md:flex md:w-1/2">
        <img src={signup} alt="" className="block object-cover md:w-[648px]" />
      </aside>

      {/* Right Content */}
      <div className="flex flex-col items-center justify-center md:w-1/2 md:px-12">
        <div className="w-80 sm:w-[400px]">
          <div className="mx-auto mb-4 w-64 sm:w-[280px]">
            <Link to="/">
              <img
                src={logo}
                loading="lazy"
                alt="Logo"
                className="block w-full object-cover"
              />
            </Link>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="mb-4 md:mb-8">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`form-input ${errors.name ? "border-red-500" : ""}`}
              />
            </label>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}

            <label htmlFor="mobile">
              <input
                type="tel"
                maxLength={10}
                id="mobile"
                name="mobile"
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={`form-input ${errors.name ? "border-red-500" : ""}`}
              />
            </label>

            <label htmlFor="password">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`form-input ${errors.name ? "border-red-500" : ""}`}
              />
            </label>

            <label htmlFor="confirm_password">
              <input
                type="text"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`form-input ${errors.name ? "border-red-500" : ""}`}
              />
            </label>

            <div className="mt-6 text-center">
              <button className="btn-primary !w-fit !px-20 !text-sm !font-semibold">
                CREATE ACCOUNT
              </button>
            </div>
          </form>

          <div className="md:px-16">
            <div className="my-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-28 bg-slate-200"></span>
              <span className="text-sm font-medium">OR</span>
              <span className="h-[2px] w-28 bg-slate-200"></span>
            </div>
            <div className="mb-6 flex justify-center gap-x-4">
              <button className="rounded-lg bg-primary-50/80 px-4 py-2 transition-colors hover:bg-primary-50">
                <img src={iconGoogle} alt="" className="w-6" />
              </button>
              <button className="rounded-lg bg-primary-50/80 px-4 py-2 transition-colors hover:bg-primary-50">
                <img src={iconFacebookCircle} alt="" className="w-6" />
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center">
              <span> Already have an account? </span>
              <Link
                className="font-bold text-primary-100 hover:text-primary-500"
                to="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
