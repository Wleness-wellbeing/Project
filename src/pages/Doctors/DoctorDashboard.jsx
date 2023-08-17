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
              <span className="font-bold text-sm">Dr. Tim</span>
            </span>
          </div>
        </nav>

        <section className="flex gap-5">
          <div className="w-[65%]">
            {/* Doctor Profile */}
            <div>
              <h1 className="mb-3">
                <span className="font-medium text-2xl">Good Morning </span>
                <span className="text-3xl font-semibold text-primary-300">
                  Dr. Tim!
                </span>
              </h1>

              <div className="flex items-center  bg-slate-200 rounded-3xl px-4 bg-gradient-to-tr from-[#B2E6FD] via-[#9BD8F1] to-[#52D0C2] pr-8">
                <div className="w-3/4">
                  <div className="grid mb-4">
                    <span className="font-semibold text-2xl mb-1">
                      Visit for Today
                    </span>
                    <span className="font-bold text-4xl">104</span>
                  </div>
                  <div className="flex gap-5">
                    <div className="bg-slate-100/50 rounded-xl py-4 px-5 grid relative shadow-xl scale-105">
                      <span className="font-semibold mb-1">New Patients</span>
                      <span className="text-2xl font-semibold">40</span>
                      <span className="absolute -right-2 bottom-2 bg-green-200 text-green-600 p-1 px-2 text-sm rounded-lg shadow-lg border-[1px] border-green-300 font-medium">
                        <span>51</span>
                        <span>
                          % <FontAwesomeIcon icon={faArrowTrendUp} />
                        </span>
                      </span>
                    </div>
                    <div className="bg-slate-100/50 rounded-xl py-4 px-5 grid relative">
                      <span className="font-semibold mb-1">Old Patients</span>
                      <span className="text-2xl font-semibold">64</span>
                      <span className="absolute -right-2 bottom-2 bg-red-200 text-red-600 p-1 px-2 text-sm rounded-lg shadow-lg border-[1px] border-red-300 font-medium">
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
                    className="w-full scale-125 -translate-y-6 h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Patient List & Consultation */}
            <div className="flex">
              <div className="w-1/2 p-4">
                <h3 className="flex justify-between pt-2 pb-4">
                  <span className="text-xl font-bold">Patient List</span>
                  <span className="text-sm flex items-center font-medium text-slate-400">
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
                <h3 className="text-xl font-bold pt-2 pb-4">Consultation</h3>

                <PatientItem data={patientsList[0]} />
              </div>
            </div>
          </div>
          <div className="w-[35%] p-4">
            <div className="mb-4">
              <h5 className="flex justify-between items-center">
                <span className="font-semibold">Upcoming Events</span>
                <span className="text-sm font-semibold py-0.5 px-2 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-all">
                  <FontAwesomeIcon icon={faEllipsis} />
                </span>
              </h5>
            </div>

            <div>
              <h5 className="flex justify-between items-center">
                <span className="font-semibold">Upcoming Meets & Events</span>
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
