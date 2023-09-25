import React, { useState } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { assessment1 } from "../../assets";

export default function DashboardLayout({ children }) {
  const [openMenu, setOpenMenu] = useState(false);

  const username = localStorage.getItem("username");
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <main className="flex">
      <AdminSideBar isOpen={openMenu} toggle={toggleMenu} />

      <section className="px-4 pb-3 pt-5 lg:ml-[10%] lg:w-[90%] lg:px-8">
        <nav className="mb-5 justify-between gap-5 lg:flex">
          <div className="mb-3 flex items-center justify-between gap-5 lg:order-2 lg:mb-0 lg:w-[35%] lg:justify-end">
            <span onClick={toggleMenu} className="lg:hidden">
              <FontAwesomeIcon
                icon={faBars}
                className="cursor-pointer text-2xl text-slate-400 transition-all hover:text-slate-500"
              />
            </span>
            <span className="flex cursor-pointer items-center rounded-xl border-2 px-2 py-1 transition-all hover:bg-slate-100">
              <img src={assessment1} alt="" className="mr-2 w-8" />
              <span className="text-sm font-bold">{username}</span>
            </span>
          </div>

          <div className="lg:order-1 lg:w-[65%]">
            {/* <form
              action=""
              method="get"
              className="flex w-full rounded-xl bg-slate-200/60"
            >
              <label htmlFor="search" className="w-full">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="h-full w-full rounded-l-xl bg-transparent px-4 py-3 outline-none"
                />
              </label>
              <button type="submit" className="bg-transparent">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="px-4 text-slate-400"
                />
              </button>
            </form> */}
          </div>
        </nav>

        {children}
      </section>
    </main>
  );
}
