import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, logo } from "../../assets";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    console.log(email, password);
    axios
      .post(
        "http://localhost:3000/patient/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <main class="flex md:flex-row flex-col justify-center items-center md:items-stretch h-screen">
      <aside class="md:w-1/2 hidden md:flex justify-center items-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-right bg-no-repeat bg-contain">
        <img src={login} alt="" class="block object-cover w-[648px]" />
      </aside>

      <div class="md:w-1/2 flex justify-center items-center px-4">
        <div class="sm:w-[440px] w-full">
          <div class="sm:w-[320px] w-full mx-auto mb-12">
            <Link to="/">
              <img src={logo} alt="Logo" class="block object-cover w-full" />
            </Link>
          </div>

          <div class="flex justify-between gap-5 mb-10">
            <Link to="/login" class="btn-transparent">
              LOGIN
            </Link>
            <Link to="/signup" class="btn-primary">
              SIGN UP
            </Link>
          </div>

          {/* Login Form */}
          <form action="javascript:void()" className="mb-8">
            <label htmlFor="username" className="mb-5 block">
              <input
                type="text"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
                name="username"
                placeholder="Email or Mobile Number"
                className="form-input"
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password"
                className="form-input"
              />
              <Link
                to="/forget-password"
                className="text-right block mb-10 text-primary-100"
              >
                Forgot Password?
              </Link>
            </label>
            <div className="text-center">
              <button
                onClick={handlesubmit}
                className="btn-primary !w-fit !px-28"
              >
                LOGIN
              </button>
            </div>
          </form>
          <p className="text-center">
            <span>Don't have an account yet. </span>
            <Link className="text-primary-100 font-semibold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
