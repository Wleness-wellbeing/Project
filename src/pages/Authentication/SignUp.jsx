import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iconFacebookCircle, iconGoogle, logo, signup } from "../../assets";
import axios from "axios";
import { GOOGLE_SIGNUP_URI, SIGNUP_USER_URI } from "../../data/api";
import { auth, googleProvider, facebookProvider } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function Signup({ setToken, token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token && token !== "" && token !== undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/user/dashboard");
    }, []);
  }

  const [formInfo, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  // Update form value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formInfo, [name]: value });
  };
  const [user, setUser] = useState(null);

  // ===================Google Login ==========================//
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        let user = result.user;
        user.login_type = "google";
        console.log(user);

        // Send user data to the backend
        sendUserDataToBackend(user, GOOGLE_SIGNUP_URI);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };

  // ===================Facebook Login ==========================//
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider) // Use the Facebook provider
      .then((result) => {
        const user = result.user;
        console.log(user);

        // Send user data to the backend
        sendUserDataToBackend(user);

        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Redirect to the home page
        navigate("/"); // Replace "/" with the appropriate home page route
      })
      .catch((error) => {
        console.error("Error signing in with Facebook:", error);
      });
  };

  // Function to send user data to the backend
  const sendUserDataToBackend = async (user, url) => {
    let data = {
      name: user.displayName,
      email: user.email,
      image: user.photoURL,
      login_type: user.login_type,
      access_token: user.accessToken,
    };

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("image", data.image);
    formData.append("login_type", data.login_type);
    formData.append("access_token", data.access_token);

    try {
      const response = await axios.post(url, formData);
      if (response.data.status == "success") {
        // Set login token
        setToken(response.data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("login_type", data.login_type);
        navigate("/user/dashboard");
      } else {
        setMessages(response.data.status, response.data.message);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setMessages("error", "Internal Server Error! Please try again later"); // Set error message
    }
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
    if (
      formInfo["name"] &&
      formInfo["phone"] &&
      formInfo["email"] &&
      formInfo["password"] &&
      formInfo["confirm_password"]
    ) {
      // Check if passwords match
      if (formInfo["password"] !== formInfo["confirm_password"]) {
        setMessages("error", "Passwords don't match"); // Set error message
        return;
      }

      // Append form fields to the FormData object
      let formData = new FormData();
      for (const key in formInfo) {
        formData.append(key, formInfo[key]);
      }

      try {
        const response = await axios.post(SIGNUP_USER_URI, formData);
        setMessages(response.data.status, response.data.message); // Set success message

        // Empty form after successfully sending data
        if (response.data.status == "success") {
          // Empty Variable if success
          setFormData({
            name: "",
            phone: "",
            email: "",
            password: "",
            confirm_password: "",
          });
          // Set login token
          setToken(response.data.access_token);
          localStorage.setItem("phone", formInfo["phone"]);
          navigate("/user/dashboard");
        } else {
          setMessages(response.data.status, response.data.message);
        }
      } catch (error) {
        console.error("Error sending data:", error);
        setMessages("error", "Internal Server Error! Please try again later"); // Set error message
      }
    } else {
      setMessages("error", "Please fill in your details properly!"); // Set error message
    }
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <main className="flex h-screen flex-col items-center justify-center md:flex-row md:items-stretch">
      {/* Left Sidebar */}
      <aside className="hidden items-center justify-center bg-primary-200 bg-[url(../images/right-bar.jpg)] bg-contain bg-right bg-no-repeat md:flex md:w-1/2">
        <img src={signup} alt="" className="block object-cover md:w-[648px]" />
      </aside>

      {/* Right Content */}
      <div className="flex flex-col items-center justify-center md:w-1/2 md:px-12">
        <div className="w-80 sm:w-[400px]">
          <div className="mx-auto mb-4 w-64 sm:w-[280px]">
            <Link to="/">
              <img
                src={logo}
                loading="lazy"
                alt="Logo"
                className="block w-full object-cover"
              />
            </Link>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="mb-4 md:mb-8">
            <label htmlFor="name">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formInfo.name}
                onChange={handleChange}
                className="form-input"
              />
            </label>

            <label htmlFor="phone">
              <input
                type="tel"
                maxLength={10}
                id="phone"
                name="phone"
                placeholder="Mobile"
                value={formInfo.phone}
                onChange={handleChange}
                className="form-input"
              />
            </label>

            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formInfo.email}
                onChange={handleChange}
                className="form-input"
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formInfo.password}
                onChange={handleChange}
                className="form-input"
              />
            </label>

            <label htmlFor="confirm_password">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formInfo.confirm_password}
                onChange={handleChange}
                className="form-input"
              />
            </label>
            <p
              className={`text-center font-semibold ${
                successMessage.status == "success"
                  ? " text-green-500 "
                  : " text-red-500 "
              }`}
            >
              {successMessage.message}
            </p>
            <div className="mt-6 text-center">
              <button className="btn-primary !w-fit !px-20 !text-sm !font-semibold">
                CREATE ACCOUNT
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
              {user ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                  <h3>Welcome {user.displayName}</h3>
                  <p>{user.email}</p>
                  <div>
                    <img src={user.photoURL} alt="dp"></img>
                  </div>
                </>
              ) : (
                <button
                  className="rounded-lg bg-primary-50/80 px-4 py-2 transition-colors hover:bg-primary-50"
                  onClick={handleGoogleSignIn}
                >
                  <img src={iconGoogle} alt="" className="w-6" />
                </button>
              )}

              {user ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                  <h3>Welcome {user.displayName}</h3>
                  <p>{user.email}</p>
                  <div>
                    <img src={user.photoURL} alt="dp"></img>
                  </div>
                </>
              ) : (
                <button
                  className="rounded-lg bg-primary-50/80 px-4 py-2 transition-colors hover:bg-primary-50"
                  onClick={handleFacebookSignIn}
                >
                  <img src={iconFacebookCircle} alt="" className="w-6" />
                </button>
              )}
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
