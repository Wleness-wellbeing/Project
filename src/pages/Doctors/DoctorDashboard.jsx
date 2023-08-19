import {
  faAngleDown,
  faArrowTrendDown,
  faArrowTrendUp,
  faBell,
  faComments,
  faEllipsis,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { assessment1, dashboardDoctor } from "../../assets";
import PatientListItem from "../../components/list/PatientListItem";
import { patientsList } from "../../data/patients";
import PatientItem from "../../components/list/PatientItem";
import UpcomingMeets from "../../components/list/UpcomingMeets";

export default function DoctorDashboard() {
  return (
    <main className="flex">
      <aside className="w-[10%] bg-primary-50"></aside>
      <section className="w-[90%] px-8 pb-3 pt-5">
        <nav className="mb-5 flex justify-between gap-5">
          <div className="w-[65%]">
            <form
              action=""
              method="get"
              className="flex w-full rounded-xl bg-slate-200"
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
            </form>
          </div>

          <div className="flex w-[35%] items-center justify-end gap-5">
            <span>
              <FontAwesomeIcon
                icon={faComments}
                className="cursor-pointer text-2xl text-slate-400 transition-all hover:text-slate-500"
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faBell}
                className="cursor-pointer text-2xl text-slate-400 transition-all hover:text-slate-500"
              />
            </span>
            <span className="flex cursor-pointer items-center rounded-xl border-2 px-2 py-1 transition-all hover:bg-slate-100">
              <img src={assessment1} alt="" className="mr-2 w-8" />
              <span className="text-sm font-bold">Dr. Tim</span>
            </span>
          </div>
        </nav>

        <section className="flex gap-5">
          <div className="w-[65%]">
            {/* Doctor Profile */}
            <div>
              <h1 className="mb-3">
                <span className="text-2xl font-medium">Good Morning </span>
                <span className="text-3xl font-semibold text-primary-300">
                  Dr. Tim!
                </span>
              </h1>

              <div className="flex items-center  rounded-3xl bg-slate-200 bg-gradient-to-tr from-[#B2E6FD] via-[#9BD8F1] to-[#52D0C2] px-4 pr-8">
                <div className="w-3/4">
                  <div className="mb-4 grid">
                    <span className="mb-1 text-2xl font-semibold">
                      Visit for Today
                    </span>
                    <span className="text-4xl font-bold">104</span>
                  </div>
                  <div className="flex gap-5">
                    <div className="relative grid scale-105 rounded-xl bg-slate-100/50 px-5 py-4 shadow-xl">
                      <span className="mb-1 font-semibold">New Patients</span>
                      <span className="text-2xl font-semibold">40</span>
                      <span className="absolute -right-2 bottom-2 rounded-lg border-[1px] border-green-300 bg-green-200 p-1 px-2 text-sm font-medium text-green-600 shadow-lg">
                        <span>51</span>
                        <span>
                          % <FontAwesomeIcon icon={faArrowTrendUp} />
                        </span>
                      </span>
                    </div>
                    <div className="relative grid rounded-xl bg-slate-100/50 px-5 py-4">
                      <span className="mb-1 font-semibold">Old Patients</span>
                      <span className="text-2xl font-semibold">64</span>
                      <span className="absolute -right-2 bottom-2 rounded-lg border-[1px] border-red-300 bg-red-200 p-1 px-2 text-sm font-medium text-red-600 shadow-lg">
                        <span>20</span>
                        <span>
                          % <FontAwesomeIcon icon={faArrowTrendDown} />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-1/4">
                  <img
                    src={dashboardDoctor}
                    alt=""
                    className="h-full w-full -translate-y-6 scale-125 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Patient List & Consultation */}
            <div className="flex">
              <div className="w-1/2 p-4">
                <h3 className="flex justify-between pb-4 pt-2">
                  <span className="text-xl font-bold">Patient List</span>
                  <span className="flex items-center text-sm font-medium text-slate-400">
                    <span className="mr-1">Today </span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </h3>

                <div className="space-y-3">
                  {patientsList.map((value, i) => {
                    return <PatientListItem data={value} key={i} />;
                  })}
                </div>
              </div>

              <div className="w-1/2 p-4">
                <h3 className="pb-4 pt-2 text-xl font-bold">Consultation</h3>

                <PatientItem data={patientsList[0]} />
              </div>
            </div>
          </div>
          <div className="w-[35%] p-4">
            <div className="mb-4">
              <h5 className="flex items-center justify-between">
                <span className="font-semibold">Upcoming Events</span>
                <span className="cursor-pointer rounded-full bg-slate-200 px-2 py-0.5 text-sm font-semibold transition-all hover:bg-slate-300">
                  <FontAwesomeIcon icon={faEllipsis} />
                </span>
              </h5>
            </div>

            <div>
              <h5 className="flex items-center justify-between">
                <span className="font-semibold">Upcoming Meets & Events</span>
                <span className="cursor-pointer rounded-full px-2 py-0.5 text-sm font-semibold text-blue-500 transition-all">
                  View all
                </span>
              </h5>

              <div className="space-y-3 py-4">
                <UpcomingMeets />
                <UpcomingMeets />
                <UpcomingMeets />
                <UpcomingMeets />
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
