import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { auth, googleProvider, facebookProvider } from "./FirebaseConfig";
// Data
import { login, logo } from "../../assets";
import { EXPERTS_LOGIN_URI } from "../../data/api";

export default function ExpertsLogin({ setToken, token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token && token !== "" && token !== undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/user/dashboard");
    }, []);
  }

  const [formInfo, setFormData] = useState({
    user_id: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Set alert message
  const location = useLocation();

  // Update form value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };

  // Set alert message
  const setMessages = (status, msg) => {
    setSuccessMessage({
      status: status,
      message: msg,
    });
  };

  // Handle Post Request
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if form is filled
    if (formInfo["user_id"] && formInfo["password"]) {
      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        // Send user data to the backend
        const response = await axios.post(EXPERTS_LOGIN_URI, formData);
        setMessages(response.data.status, response.data.message); // set success message

        // Empty form after successfully sending data
        if (response.data.status === "success") {
          setFormData({
            user_id: "",
            password: "",
          });
          setToken(response.data.access_token);
          localStorage.setItem("wleness_experts_id", formInfo["user_id"]);
          localStorage.setItem("wleness_user_type", "expert");

          navigate("/doctor/dashboard");
        } else {
          setMessages(response.data.status, response.data.message);
        }
      } catch (error) {
        console.error("Error sending data:", error);
        setMessages("error", "Internal Server Error! Please try again later"); // set error message
      }
    } else {
      setMessages("error", "Please fill in your details properly!"); // set error message
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch">
      <aside className="hidden items-center justify-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-contain bg-right bg-no-repeat md:flex md:w-1/2">
        <img src={login} alt="" className="block w-[648px] object-cover" />
      </aside>

      <div className="flex items-center justify-center md:w-1/2 md:px-4">
        <div className="w-80 sm:w-[400px]">
          <div className="mx-auto mb-3 w-64 sm:w-[280px]">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                loading="lazy"
                className="block w-full object-cover"
              />
            </Link>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            {successMessage.status == "" ? (
              location.state &&
              location.state.successMessage && (
                <p className="mb-3 text-center font-semibold text-red-500">
                  {location.state.successMessage}
                </p>
              )
            ) : (
              <p
                className={`mb-3 text-center font-semibold ${
                  successMessage.status == "success"
                    ? " text-green-500 "
                    : " text-red-500 "
                }`}
              >
                {successMessage.message}
              </p>
            )}

            <label htmlFor="user_id" className="mb-5 block">
              <input
                type="tel"
                id="user_id"
                maxLength={10}
                name="user_id"
                placeholder="User Id"
                className="form-input"
                value={formInfo.user_id}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-input"
                value={formInfo.password}
                onChange={handleChange}
              />
            </label>

            <div className="text-right">
              <Link
                to="/forgot-password"
                className="mb-6 inline-block font-medium text-primary-400"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-center">
              <button type="submit" className="btn-primary !w-fit !px-28 !py-3">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
