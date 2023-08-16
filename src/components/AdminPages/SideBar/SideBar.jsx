import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./SideBar.css";

const routes = [
  {
    path: "doctors",
    name: "Doctors",
  },
  {
    path: "queries",
    name: "Queries",
  },
  {
    path: "issues",
    name: "Issues",
  },

  {
    path: "issuecategory",
    name: "Issue Category",
  },
  {
    path: "users",
    name: "Users",
  },
  {
    path: "questions",
    name: "Questions",
  },
  {
    path: "blogs",
    name: "Blogs",
  },
];

const SideBar = ({ children }) => {
  return (
    <div className="main-container flex flex-row ">
      <div className="sidebar ">
        <section className="routes">
          {routes.map((route, index) => {
            return (
              <NavLink
                to={route.path}
                key={index}
                className="link"
                activeClassName="active"
                title={route.name}
              >
                <div className="link_text">{route.name}</div>
              </NavLink>
            );
          })}
        </section>
      </div>
      <main
        style={{
          width: "95%",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default SideBar;
