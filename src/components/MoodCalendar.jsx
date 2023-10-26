import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MoodEmoji = ({ emoji }) => {
  return <span>{emoji}</span>;
};

const MoodCalendar = () => {
  const moodData = [
    "😊",
    "😃",
    "😐",
    "😄",
    "😊",
    "😃",
    "😐",
    "😞",
    "😊",
    "😃",
    "😄",
    "😃",
    "😐",
    "😊",
    "😊",
    "😄",
    "😃",
    "😊",
    "😞",
    "😃",
    "😃",
    "😐",
    "😄",
    "😊",
    "😊",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderCalendar = () => {
    return (
      <div className="w-full rounded-lg bg-white p-4 ">
        <div className="mb-4 flex justify-between">
          <div>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          {/* <div>
            <h2></h2>
          </div> */}

          <h1 className="text-xl font-bold">November 2023</h1>
          <div>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-center font-semibold">
              {day}
            </div>
          ))}
          {moodData.map((mood, index) => (
            <div key={index} className="text-center text-4xl md:p-2">
              <MoodEmoji emoji={mood} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="flex justify-center">{renderCalendar()}</div>;
};

export default MoodCalendar;
