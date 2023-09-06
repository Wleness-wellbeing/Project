import React from "react";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoutineCareChats } from "../../data/dashboard";
import { iconDay, iconNight } from "../../assets";

export default function RoutineCare() {
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
        <div className="mb-5 mt-6 space-y-6">
          {RoutineCareChats.map((value, i) => {
            return (
              <div
                key={i}
                className={
                  "rounded-2xl bg-primary-50/50 px-6 py-2.5 " + value.bg
                }
              >
                <h4 className="font-bold">{value.question}</h4>
                <p className="text-sm font-semibold">{value.answer}</p>
                <p className="text-right">
                  <span className="text-sm font-semibold text-red-600">
                    View More
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[35%] p-4">
        <div className="relative mb-10 rounded-2xl bg-[#C0F1F8] p-6">
          <h2 className="mb-2 font-semibold">
            Morning Routine <span className="font-bold">AM</span>
          </h2>
          <ul className="space-y-2 font-semibold">
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>30 Min Books</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Brush your tooth</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Make Bed</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Music</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Running</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Yoga</span>
            </li>
          </ul>

          <img src={iconDay} alt="" className="absolute -right-5 -top-6 w-20" />
        </div>

        <div className="relative mb-10 rounded-2xl bg-[#C0F1F8] p-6">
          <h2 className="mb-2 font-semibold">
            Evening Routine <span className="font-bold">AM</span>
          </h2>
          <ul className="space-y-2 font-semibold">
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>30 Min Books</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Brush your tooth</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Make Bed</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Music</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Running</span>
            </li>
            <li>
              <span className="mr-2 text-sky-500">
                <FontAwesomeIcon icon={faRightLong} />
              </span>
              <span>Yoga</span>
            </li>
          </ul>

          <img
            src={iconNight}
            alt=""
            className="absolute -right-5 -top-6 w-20"
          />
        </div>
      </div>
    </section>
  );
}
