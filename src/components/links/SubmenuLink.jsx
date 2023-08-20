import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SubmenuLink(props) {
  return (
    <li className="subdropdown relative">
      <Link to={props.url} className="submenu-link">
        <span>{props.text}</span>
        {props.subpages ? <FontAwesomeIcon icon={faAngleRight} /> : null}
      </Link>

      {props.subpages ? (
        <ul className="subdropdown-pages absolute left-60 top-0  z-10 hidden w-52 rounded-xl border-[1px] border-slate-100 bg-white py-4 shadow-md xl:w-60">
          {props.subpages.map((value, index) => {
            return (
              <Link key={index} to={value[1]} className="submenu-link">
                {value[0]}
              </Link>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
}
