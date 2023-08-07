import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { signup } from "../../assets";

export default function SignUp() {
  return (
    <main class="flex md:flex-row flex-col justify-center items-center md:items-stretch h-screen">
      <aside class="md:w-1/2 hidden md:flex justify-center items-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-right bg-no-repeat bg-contain">
        <img src={signup} alt="" class="block object-cover w-[648px]" />
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

          {/* SignUp Form  */}
          <form action="javascript:void()" className="mb-4 md:mb-8">
            <label htmlFor="username">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="form-input"
              />
            </label>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="form-input"
              />
            </label>
            <label htmlFor="gender">
              <select name="gender" id="gender" className="form-input">
                <option>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="female">Other</option>
              </select>
            </label>
            <label htmlFor="mobile">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Mobile Number"
                className="form-input"
              />
            </label>
            <div className="text-center flex gap-2 flex-col justify-center items-center w-64 mx-auto lg:mt-4">
              <button className="btn-primary !w-full">CREATE ACCOUNT</button>
              <button className="btn-transparent !w-full">
                SIGN UP WITH GOOGLE
              </button>
            </div>
          </form>
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
