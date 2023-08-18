import React from "react";
import {
  faAngleDown,
  faBell,
  faComments,
  faEllipsis,
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

export default function UserDashboard() {
  return (
    <main className="flex">
      <aside className="w-[10%] bg-primary-50/50"></aside>
      <section className="w-[90%] pt-5 pb-3 px-8">
        <nav className="flex justify-between mb-5 gap-5">
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
              <span className="font-bold text-sm">Ken Parker</span>
            </span>
          </div>
        </nav>

        <section className="flex gap-5">
          <div className="w-[65%]">
            {/* Doctor Profile */}
            <div className="mb-5">
              <h1 className="mb-3">
                <span className="font-medium text-2xl">Good Morning </span>
                <span className="text-3xl font-bold text-[#0DCCF6]">Ken</span>
              </h1>

              <div>
                <div className="grid mb-4">
                  <span className="font-bold text-lg">Activity Report</span>
                </div>
                <div className="grid grid-cols-3 gap-5">
                  {activityReport.map((value, i) => {
                    return (
                      <div
                        key={i}
                        className="rounded-xl py-4 px-5 grid relative"
                        style={{ background: value[2] }}
                      >
                        <span className="font-semibold mb-1 text-center">
                          {value[0]}
                        </span>
                        <span className="text-3xl font-bold text-center">
                          {value[1]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="py-5 bg-primary-10 rounded-2xl">
              <h2 className="text-lg font-bold ml-12 pb-4">
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
                <h3 className="flex justify-between pt-2 pb-4">
                  <span className="text-xl font-bold">Linked Therapist</span>
                  <span className="text-sm flex items-center font-medium text-slate-400">
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
              <h5 className="flex justify-between items-center">
                <span className="font-bold">Upcoming Appointments</span>
                <span className="text-sm font-semibold py-0.5 px-2 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-all">
                  <FontAwesomeIcon icon={faEllipsis} />
                </span>
              </h5>
            </div>

            <div>
              <h5 className="flex justify-between items-center">
                <span className="font-bold">Upcoming Events</span>
                <span className="text-sm font-semibold py-0.5 px-2 rounded-full cursor-pointer text-blue-500 transition-all">
                  View all
                </span>
              </h5>

              <div className="py-4 space-y-3">
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
