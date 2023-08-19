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
    <main class="flex h-screen flex-col items-center justify-center md:flex-row">
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

          {/* Forgot Password Form */}
          <form action="javascript:void()" className="mb-8">
            <h2 className="mb-5 text-center font-bold">Forgot Password</h2>
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
