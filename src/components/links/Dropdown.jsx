import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import SubmenuLink from "./SubmenuLink";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  return (
    <li className="group relative">
      <Link to={props.url} className="menu-link">
        {props.text} <FontAwesomeIcon icon={faAngleDown} />
      </Link>

      <ul className="absolute z-10 hidden w-52 rounded-xl border-[1px] border-slate-100 bg-white py-4 shadow-md group-hover:block xl:w-60">
        {props.pages.map((value, index) => {
          return (
            <SubmenuLink
              key={index}
              url={value.slug}
              text={value.name}
              subpages={value.subPages}
            />
          );
        })}
      </ul>
    </li>
  );
}
