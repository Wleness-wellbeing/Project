import {
  faBell,
  faComments,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { assessment1 } from "../../assets";

export default function DoctorDashboard() {
  return (
    <main className="flex">
      <aside className="w-[10%] h-[100svh] bg-primary-50"></aside>
      <section className="w-[90%] py-5 px-8">
        <nav className="flex justify-between mb-5">
          <div className="w-[65%]">
            <form
              action=""
              method="get"
              className="w-full flex bg-slate-200 rounded-xl"
            >
              <label htmlFor="search" className="w-full">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search"
                  className="w-full h-full outline-none bg-transparent rounded-l-xl px-4 py-3"
                />
              </label>
              <button type="submit" className="bg-transparent">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="px-4 text-slate-400"
                />
              </button>
            </form>
          </div>

          <div className="w-[35%] justify-end flex items-center gap-5">
            <span>
              <FontAwesomeIcon
                icon={faComments}
                className="text-2xl text-slate-400 transition-all hover:text-slate-500 cursor-pointer"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faBell}
                className="text-2xl text-slate-400 transition-all hover:text-slate-500 cursor-pointer"
              />
            </span>
            <span className="flex items-center border-2 py-1 px-2 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
              <img src={assessment1} alt="" className="w-8 mr-2" />
              <span className="font-bold text-sm">Dr. Tim</span>
            </span>
          </div>
        </nav>

        <section className="flex">
          <div className="w-[65%] bg-slate-200">
            <div>
              <h1>
                <span className="font-medium text-2xl">Good Morning </span>
                <span className="text-3xl font-semibold text-primary-300">
                  Dr. Tim!
                </span>
              </h1>
            </div>
          </div>
          <div className="w-[35%] bg-slate-400">
            <h1>Hello sidebar</h1>
          </div>
        </section>
      </section>
    </main>
  );
}
