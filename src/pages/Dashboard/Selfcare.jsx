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
// Data
import { assessment1 } from "../../assets";
import { activityReport, patientsList } from "../../data/patients";
// Components
import UpcomingMeets from "../../components/list/UpcomingMeets";
import PatientListItem from "../../components/list/PatientListItem";
import { Link } from "react-router-dom";
import { selfCareConcern, selfCareFeeling } from "../../data/dashboard";

export default function Selfcare() {
  return (
    <section className="flex gap-5">
      <div className="w-[65%]">
        <div className="mb-2">
          <h1>
            <span className="text-2xl font-medium">Good Morning </span>
            <span className="text-3xl font-bold text-[#0DCCF6]">Mia</span>
          </h1>
          <p className="font-medium text-slate-600">
            Today is the 12th day of your therapy session.
          </p>
        </div>

        {/* How you feel */}
        <div className="mb-5">
          <span className="text-lg font-bold">How you feel today...</span>
          <div className="flex gap-5">
            {selfCareFeeling.map((value, i) => {
              return (
                <div key={i} className="relative grid rounded-xl px-5 py-2">
                  <img
                    className="text-center text-3xl font-bold"
                    src={value[1]}
                  />
                  <span className="mb-1 text-center font-semibold">
                    {value[0]}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="my-7">
            <blockquote
              style={{ background: "rgb(0, 217, 245, 12%)" }}
              className="mx-auto w-[640px] rounded-lg p-5 text-center"
            >
              <q className="text-lg">
                It's not the load that breaks you down, it's the way you carry
                it
              </q>
              <h4 className="text-xl font-bold text-sky-500">Lou Holtz</h4>
            </blockquote>
          </div>
        </div>

        {/* Today's concern */}
        <div className="mb-5">
          <div className="mb-4 grid">
            <span className="text-lg font-bold">
              Pick your today's concern...
            </span>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {selfCareConcern.map((value, i) => {
              return (
                <div
                  key={i}
                  className="relative grid rounded-xl px-5 py-4"
                  style={{ background: value[1] }}
                >
                  <span className="mb-1 text-center font-semibold">
                    {value[0]}
                  </span>
                </div>
              );
            })}
          </div>
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
  );
}
