import React from "react";
import MenuLink from "../links/MenuLink";
import Dropdown from "../links/Dropdown";
import {
  resourcesSubpages,
  seldCareSubpages,
  serviceMenuPages,
} from "../../data/navigation";
import { Link } from "react-router-dom";
import { profile } from "../../assets";

export default function DesktopNavbar({ toggleJoinUs, token }) {
  const userDataFromLocalStorage = JSON.parse(localStorage.getItem("user"));
  console.log(userDataFromLocalStorage);

  return (
    <>
      <ul className="hidden w-fit justify-end space-x-4 bg-white p-6 xl:flex">
        <MenuLink url="/" text="Home" />
        <Dropdown url="" text="Services" pages={serviceMenuPages} />
        <MenuLink url="/experts" text="Our Experts" />
        <Dropdown url="" text="Self Care" pages={seldCareSubpages} />
        <Dropdown url="" text="Resources" pages={resourcesSubpages} />
        <MenuLink url="/about-us" text="About Us" />
      </ul>

      {/* Authentication */}
      <div className="hidden xl:flex xl:items-center">
        <button
          onClick={toggleJoinUs}
          className="btn-primary mr-2 !w-fit !rounded-full border-2 border-primary-400 !bg-transparent !py-1.5 !font-semibold !text-primary-400 hover:!bg-primary-400 hover:!text-white"
        >
          Join Us
        </button>

        {!token ? (
          <Link
            to="/signup"
            className="btn-primary !w-fit !rounded-full !bg-primary-400 !py-2 font-semibold hover:!bg-primary-300"
          >
            Sign Up
          </Link>
        ) : (
          <Link
            to="/user/profile"
            className="btn-primary flex !w-fit !rounded-full !bg-primary-400 !py-2.5 font-semibold hover:!bg-primary-300"
          >
            <img src={profile} alt="" className="mr-1 w-5 rounded-full" />
            <span className="text-sm">
              {userDataFromLocalStorage?.displayName.slice(0, 1) || "User"}
            </span>
          </Link>
        )}
      </div>
    </>
  );
}
