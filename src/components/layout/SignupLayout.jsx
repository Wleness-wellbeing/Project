import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SignupLayout({ children }) {
  return (
    <main>
      <Link
        to="/"
        className="absolute left-1/2 top-5 flex -translate-x-1/2 cursor-pointer items-center rounded-full border-2 border-primary-300 px-2 py-2 text-xl text-primary-400 transition-colors hover:text-primary-300 md:left-10 md:translate-x-0 lg:h-12 lg:w-12 lg:justify-center lg:p-0 lg:px-4 lg:text-xl"
      >
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          className="text-2xl lg:text-3xl"
        />
      </Link>
      {children}
    </main>
  );
}
