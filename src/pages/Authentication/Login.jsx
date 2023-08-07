import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { login } from "../../assets";

export default function Login() {
  return (
    <main className="flex md:flex-row flex-col justify-center items-center md:items-stretch h-screen">
      <aside className="md:w-1/2 hidden md:flex justify-center items-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-right bg-no-repeat bg-contain">
        <img src={login} alt="" className="block object-cover w-[648px]" />
      </aside>

      <div className="md:w-1/2 flex justify-center items-center px-4">
        <div className="sm:w-[440px] w-full">
          <div className="sm:w-[320px] w-full mx-auto mb-12">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="block object-cover w-full"
              />
            </Link>
          </div>

          <div className="flex justify-between gap-5 mb-10">
            <Link to="/login" className="btn-primary">
              LOGIN
            </Link>
            <Link to="/signup" className="btn-transparent">
              SIGN UP
            </Link>
          </div>

          {/* Login Form */}
          <form action="javascript:void()" className="mb-8">
            <label htmlFor="username" className="mb-5 block">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Email or Mobile Number"
                className="form-input"
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="form-input"
              />
              <a href="#" className="text-right block mb-10 text-primary-100">
                Forgot Password?
              </a>
            </label>
            <div className="text-center">
              <button className="btn-primary !w-fit !px-28">LOGIN</button>
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
