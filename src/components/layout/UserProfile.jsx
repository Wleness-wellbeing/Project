import React, { useEffect, useState } from "react";
import { avatars } from "../../data/dashboard";
import { USER_APPOINTMENTS, USER_PROFILE_URI } from "../../data/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  AngryIcon,
  HappyIcon,
  EmotionalIcon,
  NeutralIcon,
  OverwhelmingIcon,
  SadIcon,
  ArrowVector,
  Spark,
  Sunflower,
  Album,
  palmWave,
} from "../../assets";

const genders = ["Male", "Female", "Transgender"];

export default function UserProfile() {
  // const navigate = useNavigate();
  // Redirect user if loggedin
  // if (token == null || token == "" || token == undefined) {
  //   // Navigate to login
  //   useEffect(() => {
  //     navigate("/login", {
  //       state: {
  //         successMessage: "Please Login",
  //       },
  //     });
  //   }, []);
  //   return null;
  // }

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
    <div className="grid-cols-1 md:flex">
      <div className="mx-auto flex h-auto items-center justify-center bg-teal-100 md:h-screen  md:w-60">
        <div className="flex items-center gap-9 text-center md:flex md:flex-col">
          <div className="mt-3 md:mt-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoek0LDoiXQiIPBsGRN2iWZojLcRzMiODgzoD1dSgxQ&s"
              alt="Image Alt Text"
              className="mb-4 h-20 w-20 rounded-full"
            />
          </div>
          <div className="flex gap-6 md:flex md:flex-col">
            <h2 className="font-semibold">Home</h2>
            <h2 className="font-semibold">User Profile</h2>
            <h2 className="font-semibold">Logout</h2>
          </div>
        </div>
      </div>
      <div className="mx-12 w-[85%]">
        <div className="flex ">
          <h1 className="pb-2 pt-2 text-3xl font-bold text-teal-500">
            Hello <span className="text-3xl font-bold text-teal-500">Mia</span>
          </h1>
          <img
            src={palmWave}
            alt="Your Image Description"
            className="h-12 w-12 object-contain "
          />
        </div>
        <div className="text-center md:px-96">
          <h2 className="text-center text-2xl font-semibold text-primary-400">
            Edit Your Avatar
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 pt-4 md:pt-10">
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
            <div className="mb-2 space-y-3 pt-4 md:pt-10">
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
            <div className="pt-4 md:pt-10">
              <button
                type="submit"
                className="btn-one !w-2/3 !rounded-lg px-6 py-3"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
