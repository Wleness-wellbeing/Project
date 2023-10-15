import {
  faCircleArrowLeft,
  faClose,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import { userDashboardLinks } from "../../data/navigation";
import useLogout from "../Auth/useLogout";

export default function AdminSideBar({ isOpen, toggle }) {
  const { logout } = useLogout();
  const wleness_user_type = localStorage.getItem("wleness_user_type");

  let dashbaordLinks = userDashboardLinks;
  if (wleness_user_type == "expert") {
    dashbaordLinks = [];
  }

  return (
    <aside
      className={`fixed bottom-0 top-0 z-10 flex w-64 flex-col gap-y-4 bg-white p-5 text-center shadow-lg transition-all lg:w-[10%] lg:items-center lg:justify-between lg:bg-primary-50/50 lg:p-0 lg:py-4 lg:shadow-none ${
        isOpen ? " right-0" : " -right-64 lg:left-0 lg:right-auto"
      }`}
    >
      <span className="cursor-pointer self-end lg:hidden" onClick={toggle}>
        <FontAwesomeIcon icon={faClose} className="text-3xl" />
      </span>
      <Link
        to="/"
        className="flex cursor-pointer items-center rounded-full border-2 border-primary-300 px-4 py-2 text-xl text-primary-400 transition-colors hover:text-primary-300 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:text-xl"
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} className="text-3xl" />
      </Link>

      <ul className="space-y-2">
        {dashbaordLinks.map((value, i) => {
          return (
            <Link
              key={i}
              to={value[1]}
              target={value[3]}
              className="flex cursor-pointer items-center rounded-full border-2 border-primary-300 px-4 py-2 text-xl text-primary-400 transition-colors hover:text-primary-300 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:text-xl"
              title={value[0]}
            >
              <FontAwesomeIcon icon={value[2]} className="mr-2 lg:m-0" />
              <span className="font-semibold lg:hidden">{value[0]}</span>
            </Link>
          );
        })}
      </ul>

      <button
        onClick={() => logout()}
        className="flex cursor-pointer items-center rounded-full border-2 border-primary-300 px-4 py-2 text-xl text-primary-400 transition-all hover:border-primary-300  hover:text-red-500 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:text-xl"
        title="Logout"
      >
        <FontAwesomeIcon icon={faRightFromBracket} className="text-3xl" />
      </button>
    </aside>
  );
}
