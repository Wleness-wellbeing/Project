import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iconFacebookCircle, iconGoogle, login, logo } from "../../assets";
import axios from "axios";

export default function Login() {
  const [mobile, setMobile] = useState("");
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

      <div class="flex items-center justify-center md:w-1/2 md:px-4">
        <div class="w-80 sm:w-[400px]">
          <div class="mx-auto mb-4 w-64 sm:w-[280px]">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                loading="lazy"
                class="block w-full object-cover"
              />
            </Link>
          </div>
          {/* Login Form */}
          <form action="javascript:void()" className="mb-8">
            <label htmlFor="mobile" className="mb-5 block">
              <input
                type="tel"
                id="mobile"
                maxLength={10}
                onChange={(e) => setMobile(e.target.value)}
                name="mobile"
                value={mobile}
                placeholder="Mobile Number"
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
            </label>
            <div className="text-right">
              <Link
                to="/forget-password"
                className="mb-6 inline-block font-medium text-primary-400"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-center">
              <button
                onClick={handlesubmit}
                className="btn-primary !w-fit !px-28 !py-3"
              >
                LOGIN
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
            <p className="text-center font-medium">
              <span>Don't have an account yet. </span>
              <Link className="font-semibold text-primary-400" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
