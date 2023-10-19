import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../Auth/useLogout";

export default function UserSidebar({ image }) {
  const { logout } = useLogout();

  return (
    <aside className="fixed bottom-0 left-0 top-0 mx-auto flex items-center justify-center bg-teal-100 md:w-[20%]">
      <div className="flex items-center gap-9 text-center md:flex md:flex-col">
        <div className="mt-3 md:mt-0">
          <img
            src={image}
            alt="Image Alt Text"
            className="mb-4 h-20 w-20 rounded-full object-cover object-top"
          />
        </div>
        <ul className="flex gap-6 md:flex md:flex-col">
          <li className="font-semibold">
            <Link to="/user/dashboard">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/user/profile">User Profile</Link>
          </li>
          <li className="font-semibold">
            <span onClick={() => logout()} className="cursor-pointer">
              Logout
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
}
