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
        },
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
    <main class="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch">
      <aside class="hidden items-center justify-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-contain bg-right bg-no-repeat md:flex md:w-1/2">
        <img src={login} alt="" class="block w-[648px] object-cover" />
      </aside>

      <div class="flex items-center justify-center px-4 md:w-1/2">
        <div class="w-full sm:w-[440px]">
          <div class="mx-auto mb-12 w-full sm:w-[320px]">
            <Link to="/">
              <img src={logo} alt="Logo" class="block w-full object-cover" />
            </Link>
          </div>

          <div class="mb-10 flex justify-between gap-5">
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
                className="mb-10 block text-right text-primary-100"
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
            <Link className="font-semibold text-primary-100" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
