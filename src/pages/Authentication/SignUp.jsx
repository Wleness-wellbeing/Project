import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, signup } from "../../assets";
import axios from "axios";
import GoogleAuth from "../../components/googleAuth/GoogleLogout";
import FacebookAuth from "../../components/googleAuth/facebookAuth";
// import { AuthApp } from "../../components/googleAuth/facebookAuth";
import { FacebookLoginButton } from "react-social-login-buttons";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(
      name,
      email,
      gender,
      mobile,
      password,
      confirmPassword
    );
    if (Object.keys(validationErrors).length === 0) {
      try {
        const res = await axios.post(
          "http://localhost:3000/patient/register",
          {
            name,
            email,
            gender,
            mobile,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(res.data);
        if (res.data.status === "ok") {
          alert("Registration Successful! Please proceed to login.");
          navigate("/login");
        } else {
          alert("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (name, email, gender, mobile, password) => {
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "Name is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!gender) {
      validationErrors.gender = "Gender is required";
    }
    if (!mobile) {
      validationErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      validationErrors.mobile = "Invalid mobile number";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    return validationErrors;
  };

  return (
    <main className="flex md:flex-row flex-col justify-center items-center md:items-stretch h-screen">
      {/* Left Sidebar */}
      <aside className="md:w-1/2 hidden md:flex justify-center items-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-right bg-no-repeat bg-contain">
        <img src={signup} alt="" className="block object-cover w-[648px]" />
      </aside>
      {/* Right Content */}
      <div className="md:w-1/2 flex justify-center items-center px-4">
        <div className="sm:w-[440px] w-full">
          {/* Logo */}
          <div className="sm:w-[320px] w-full mx-auto mb-12">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="block object-cover w-full"
              />
            </Link>
          </div>

          {/* Login/Signup Buttons */}
          <div className="flex justify-between gap-5 mb-10">
            <Link to="/login" className="btn-transparent">
              LOGIN
            </Link>
            <Link to="/signup" className="btn-primary">
              SIGN UP
            </Link>
          </div>
          <GoogleAuth />
          <FacebookAuth />

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
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}

            <label htmlFor="email">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Email Address"
              />
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}

            <label htmlFor="gender">
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`border ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                } bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
            )}

            <label htmlFor="mobile">
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={`border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="Mobile Number"
              />
            </label>
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } bg-gray-50 ...`}
                placeholder="Password"
              />
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}

            {/* Confirm Password input */}
            <label htmlFor="confirmPassword">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } bg-gray-50 ...`}
                placeholder="Confirm Password"
              />
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}

            <div className="text-center flex gap-2 flex-col justify-center items-center w-64 mx-auto lg:mt-4">
              <button className="btn-primary !w-full">CREATE ACCOUNT</button>
              <button className="btn-transparent !w-full">
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center">
            <span> Already have an account? </span>
            <Link
              className="text-primary-100 font-bold hover:text-primary-500"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
