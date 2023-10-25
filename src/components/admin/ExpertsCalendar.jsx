import React, { useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";

const ExpertsCalendar = ({ onDateSelect, currentDate }) => {
  const [displayedMonth, setDisplayedMonth] = useState(currentDate);

  // Get the first day of the displayed month
  const firstDay = startOfMonth(displayedMonth);

  // Get the last day of the displayed month
  const lastDay = endOfMonth(displayedMonth);

  // Generate an array of dates for the displayed month
  const dates = eachDayOfInterval({ start: firstDay, end: lastDay });

  // Function to handle date selection
  const handleDateSelect = (date) => {
    onDateSelect(format(date, "yyyy-MM-dd"));
  };

  // Function to navigate to the next month
  const goToNextMonth = () => {
    setDisplayedMonth(addMonths(displayedMonth, 1));
  };

  // Function to navigate to the previous month
  const goToPreviousMonth = () => {
    setDisplayedMonth(subMonths(displayedMonth, 1));
  };

  return (
    <div className="mb-4 lg:mb-8">
      <div className="mb-4 flex justify-between border-b-2 border-slate-200 pb-2">
        <h2 className="text-center text-lg font-semibold text-gray-800">
          {format(displayedMonth, "MMMM yyyy")}
        </h2>
        <div className="flex items-center space-x-5">
          <span
            onClick={goToPreviousMonth}
            className="cursor-pointer text-sm font-medium text-gray-600  hover:text-primary-400 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
          </span>
          <span
            onClick={goToNextMonth}
            className="cursor-pointer text-sm font-medium text-gray-600 hover:text-primary-400 focus:outline-none"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {dates.map((date) => (
          <span
            key={date}
            onClick={() => handleDateSelect(date)}
            className={`cursor-pointer ${
              date.getMonth() !== displayedMonth.getMonth()
                ? "text-gray-400"
                : ""
            } ${
              format(date, "yyyy-MM-dd") === format(currentDate, "yyyy-MM-dd")
                ? "bg-blue-200"
                : "bg-white hover:bg-gray-300"
            } justify-self-center rounded-full px-4 py-2.5 text-center focus:outline-none`}
          >
            {format(date, "d")}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExpertsCalendar;
