import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iconFacebookCircle, iconGoogle, logo, signup } from "../../assets";
import axios from "axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import Facebook from "../../components/googleAuth/facebookAuth";
// import jwt_decode from "jwt-decode";

// import FacebookAuth from "../../components/googleAuth/facebookAuth";
// import { FacebookLoginButton } from "react-social-login-buttons";
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
      confirmPassword,
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
          },
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
    <main className="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch">
      {/* Left Sidebar */}
      <aside className="hidden items-center justify-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-contain bg-right bg-no-repeat md:flex md:w-1/2">
        <img src={signup} alt="" className="block w-[648px] object-cover" />
      </aside>
      {/* Right Content */}
      <div className="flex flex-col items-center justify-center px-4 md:w-1/2">
        <div class="w-full sm:w-[400px]">
          <div class="mx-auto mb-4 w-full sm:w-[280px]">
            <Link to="/">
              <img src={logo} alt="Logo" class="block w-full object-cover" />
            </Link>
          </div>

          {/* Login/Signup Buttons */}
          {/* <div className="mb-10 flex justify-between gap-5">
            <Link to="/login" className="btn-transparent">
              LOGIN
            </Link>
            <Link to="/signup" className="btn-primary">
              SIGN UP
            </Link>
          </div> */}
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

            <label htmlFor="email">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            {/* <label htmlFor="email">
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } block w-full rounded-lg border-b-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
                placeholder="Email Address"
              />
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )} */}

            {/* <label htmlFor="gender">
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`border ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                } block w-full rounded-lg border-b-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            {errors.gender && (
              <p className="mt-1 text-sm text-red-500">{errors.gender}</p>
            )} */}

            {/* <label htmlFor="mobile">
              <input
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className={`border ${
                  errors.mobile ? "border-red-500" : "border-gray-300"
                } block w-full rounded-lg border-b-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`}
                placeholder="Mobile Number"
              />
            </label>
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
            )} */}
            {/* <label htmlFor="password">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } ... bg-gray-50`}
                placeholder="Password"
              />
            </label>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )} */}

            {/* Confirm Password input */}
            {/* <label htmlFor="confirmPassword">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } ... bg-gray-50`}
                placeholder="Confirm Password"
              />
            </label>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )} */}

            <div className="mt-6 text-center">
              <button className="btn-primary !w-fit !py-3 !text-sm !font-semibold">
                CREATE ACCOUNT
              </button>
            </div>
          </form>

          <div className="px-16">
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
