import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login, logo } from "../../assets";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .post("/patient/forgot-password", {
        email,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data.status == "ok") {
          alert("A password reset email has been sent to your email address.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main class="flex md:flex-row flex-col justify-center items-center h-screen">
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

          {/* Forgot Password Form */}
          <form action="javascript:void()" className="mb-8">
            <h2 className="text-center font-bold mb-5">Forgot Password</h2>
            <label htmlFor="email">
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Email Address"
                className="form-input"
              />
            </label>
            <button
              onClick={handlesubmit}
              className="btn-primary !w-fit !px-28"
            >
              Send Password Reset Email
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
