import React, { useEffect, useState } from "react";
import { avatars } from "../../data/dashboard";
import { USER_APPOINTMENTS, USER_PROFILE_URI } from "../../data/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const genders = ["Male", "Female", "Transgender"];

export default function Profile({ token }) {
  const navigate = useNavigate();
  // Redirect user if loggedin
  if (token == null || token == "" || token == undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/login", {
        state: {
          successMessage: "Please Login",
        },
      });
    }, []);
    return null;
  }

  let wleness_user = JSON.parse(localStorage.getItem("wleness_user"));
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (wleness_user.type == "expert") {
    useEffect(() => {
      navigate("/doctor/dashboard");
    }, []);
    return null;
  }

  const [avatar, setAvatar] = useState(null);
  const [userData, setUserData] = useState({
    name: userInfo.name,
    email: userInfo.email,
    phone: userInfo.phone,
    gender: "",
    avatar: avatar,
  });
  const [successMessage, setSuccessMessage] = useState({
    status: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage({
      status: "success",
      message: "Updated Successfully!",
    });
  };

  return (
    <section className="mx-auto flex h-full flex-col justify-center lg:w-96">
      <h2 className="text-center text-2xl font-semibold text-primary-400">
        Edit Your Avatar
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 pt-4">
          {avatars.map((value, i) => {
            return (
              <div
                key={i}
                className="mx-auto grid w-fit cursor-pointer place-items-center rounded-full"
                onClick={() => setAvatar(value)}
              >
                <img
                  src={value}
                  className={`block w-24 rounded-full border-red-500 ${
                    avatar == value ? " border-4" : "hover:border-4"
                  }`}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        <div className="mb-2 space-y-3 pt-4">
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={userData.name}
            placeholder="Enter You Username"
          />
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="tel"
            maxLength={10}
            name="phone"
            id="phone"
            placeholder="91******78"
            onChange={handleChange}
            value={userData.phone}
          />
          <input
            className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
            type="text"
            name="email"
            id="email"
            placeholder="demo@gmail.com"
            onChange={handleChange}
            value={userData.email}
          />
          <select
            name="gender"
            id="gender"
            className="w-full rounded-lg border-2 border-slate-400 py-2"
          >
            {genders.map((value, i) => {
              return (
                <option
                  value={value}
                  key={i}
                  selected={userData.gender == value}
                >
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <p
          className={`text-center font-semibold ${
            successMessage.status == "success"
              ? " text-green-500 "
              : " text-red-500 "
          }`}
        >
          {successMessage.message}
        </p>
        <div className="pt-2 ">
          <button
            type="submit"
            className="btn-one !w-full !rounded-lg px-6 py-3"
          >
            Update
          </button>
        </div>
      </form>
    </section>
  );
}
