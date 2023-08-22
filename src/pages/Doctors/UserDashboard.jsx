import React from "react";
import {
  faAngleDown,
  faBell,
  faComments,
  faEllipsis,
  faHouse,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// Data
import { assessment1 } from "../../assets";
import { activityReport, patientsList } from "../../data/patients";
import { userDashboardData } from "../../data/chart";
// Components
import UpcomingMeets from "../../components/list/UpcomingMeets";
import PatientListItem from "../../components/list/PatientListItem";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <main className="flex">
      <aside className="w-[10%] bg-primary-50/50 text-center">
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouse}
            className="mt-5 cursor-pointer rounded-full border-2 border-primary-300 p-2 text-2xl text-primary-400 transition-colors hover:text-primary-300"
          />
        </Link>
      </aside>
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
              <span className="text-sm font-bold">Ken Parker</span>
            </span>
          </div>
        </nav>

        <section className="flex gap-5">
          <div className="w-[65%]">
            {/* Doctor Profile */}
            <div className="mb-5">
              <h1 className="mb-3">
                <span className="text-2xl font-medium">Good Morning </span>
                <span className="text-3xl font-bold text-[#0DCCF6]">Ken</span>
              </h1>

              <div>
                <div className="mb-4 grid">
                  <span className="text-lg font-bold">Activity Report</span>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  {activityReport.map((value, i) => {
                    return (
                      <div
                        key={i}
                        className="relative grid rounded-xl px-5 py-4"
                        style={{ background: value[2] }}
                      >
                        <span className="mb-1 text-center font-semibold">
                          {value[0]}
                        </span>
                        <span className="text-center text-3xl font-bold">
                          {value[1]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-primary-10 py-5">
              <h2 className="ml-12 pb-4 text-lg font-bold">
                Health Performance
              </h2>
              <ResponsiveContainer aspect={2.5} width="100%">
                <BarChart width={400} height={400} data={userDashboardData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar
                    dataKey="score"
                    barSize={20}
                    className="fill-[#0DCCF6]"
                    radius={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Patient List & Consultation */}
            <div className="flex">
              <div className="w-1/2 p-4">
                <h3 className="flex justify-between pb-4 pt-2">
                  <span className="text-xl font-bold">Linked Therapist</span>
                  <span className="flex items-center text-sm font-medium text-slate-400">
                    <span className="mr-1">Today </span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </h3>

                <div className="space-y-3">
                  <PatientListItem data={patientsList[0]} />;
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%] p-4">
            <div className="mb-4">
              <h5 className="flex items-center justify-between">
                <span className="font-bold">Upcoming Appointments</span>
                <span className="cursor-pointer rounded-full bg-slate-200 px-2 py-0.5 text-sm font-semibold transition-all hover:bg-slate-300">
                  <FontAwesomeIcon icon={faEllipsis} />
                </span>
              </h5>
            </div>

            <div>
              <h5 className="flex items-center justify-between">
                <span className="font-bold">Upcoming Events</span>
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
