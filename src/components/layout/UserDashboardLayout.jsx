import React, { useEffect } from "react";
import UserSidebar from "../Admin/UserSidebar";
import { palmWave } from "../../assets";
import { useNavigate } from "react-router-dom";

export default function UserDashboardLayout({ children, token }) {
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

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo);

  return (
    <div className="justify-end md:flex">
      <UserSidebar image={userInfo ? userInfo.image : ""} />

      <div className="px-8 md:w-[80%]">
        <div className="flex ">
          <h1 className="mb-2 pb-2 pt-2 text-3xl font-bold text-teal-500">
            <span>Hello </span>
            <span className="text-3xl font-bold text-teal-500">
              {userInfo ? userInfo.name : "User"}
            </span>
          </h1>
          <img
            src={palmWave}
            alt="Your Image Description"
            className="h-12 w-12 object-contain "
          />
        </div>
        {children}
      </div>
    </div>
  );
}
