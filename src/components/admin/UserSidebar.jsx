import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../Auth/useLogout";

export default function UserSidebar({ image, isMenuOpen, closeMenu }) {
  const { logout } = useLogout();

  return (
    <aside
      className={`fixed bottom-0 top-14 mx-auto items-center justify-center bg-teal-100 transition-all  duration-500 md:w-[20%] lg:top-0 lg:flex ${
        isMenuOpen ? " left-0" : "  invisible -left-64 lg:visible lg:left-0"
        // isMenuOpen ? " left-0" : "  left-0"
      }`}
    >
      <div className="flex w-56 flex-col items-center gap-9 text-center transition-all">
        <div className="mt-3 md:mt-0">
          <img
            src={image}
            alt="Image Alt Text"
            className="mb-4 h-20 w-20 rounded-full object-cover object-top"
          />
        </div>
        <ul className="flex flex-col gap-6">
          <li className="font-semibold">
            <Link to="/user/dashboard" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="font-semibold">
            <Link to="/user/profile" onClick={closeMenu}>
              User Profile
            </Link>
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
