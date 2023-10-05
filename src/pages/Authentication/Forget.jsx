import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const response = await axios.post("/patient/forgot-password", {
        email,
      });
      if (response.data.status === "ok") {
        setResetEmailSent(true);
      } else {
        // Handle error, e.g., display an error message
        console.error("Password reset email request failed.");
      }
    } catch (error) {
      // Handle network error or other unexpected errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <main
      id="content"
      role="main"
      className="mx-auto my-32 w-full max-w-md p-6"
    >
      <div className=" mt-7 rounded-xl  border-2 border-teal-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?
              <Link
                to="/login"
                className="font-bold text-teal-600 decoration-2 hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 ml-1 block text-sm font-bold dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-md border-2 border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      required=""
                      aria-describedby="email-error"
                      value={email}
                      onChange={handleChange} // Handle email input change
                    />
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-teal-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="mt-3 flex items-center justify-center divide-x divide-gray-300 text-center dark:divide-gray-700"></p>
    </main>
  );
};

export default ForgotPassword;
