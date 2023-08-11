import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MenuLink from "./MenuLink";
import { Link } from "react-router-dom";

export default function SubmenuLink(props) {
  return (
    <li className="group relative inline-block">
      <Link to={props.url} className="menu-link cursor-pointer">
        {props.text} <FontAwesomeIcon icon={faAngleDown} />
      </Link>

      {/* Submenu */}
      <ul className="absolute hidden w-52 xl:w-60 z-10 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
        {props.pages.map((value, index) => {
          return <MenuLink key={index} url={value[1]} text={value[0]} />;
        })}
      </ul>
    </li>
  );
}
