import React from "react";
import { faAngleDown, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
// Data
import { activityReport, patientsList } from "../../data/patients";
import { userDashboardData } from "../../data/chart";
// Components
import UpcomingMeets from "../../components/list/UpcomingMeets";
import PatientListItem from "../../components/list/PatientListItem";

export default function UserDashboard() {
  return (
    <section className="flex flex-col gap-5 lg:flex-row">
      <div className="lg:w-[65%]">
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
            <div className="grid grid-cols-3 gap-3 lg:gap-5">
              {activityReport.map((value, i) => {
                return (
                  <div
                    key={i}
                    className="relative grid rounded-xl px-2 py-4 lg:px-5"
                    style={{ background: value[2] }}
                  >
                    <span className="mb-1 text-center text-sm font-semibold lg:text-base">
                      {value[0]}
                    </span>
                    <span className="text-center text-2xl font-bold lg:text-3xl">
                      {value[1]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-primary-10 py-5">
          <h2 className="ml-12 pb-4 text-lg font-bold">Health Performance</h2>
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
        <div className="lg:flex">
          <div className="p-4 pb-0 lg:w-1/2 lg:pb-4">
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

      <div className="p-4 pt-0 lg:w-[35%] lg:pt-4">
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
