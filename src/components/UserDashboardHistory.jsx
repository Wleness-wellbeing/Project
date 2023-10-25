import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowVector, JournallingSmallPage } from "../assets";
import MoodCalendar from "./MoodCalendar";
import UserChart from "./UserChart";

// ==========todo========================
function ToDoItem({ label }) {
  return (
    <li className=" flex  items-center justify-between py-2  pr-16 ">
      <label className="inline-flex items-center">
        <input type="checkbox" className="form-checkbox text-green-500" />
        <span className="ml-2 text-sm font-semibold lg:text-base">{label}</span>
      </label>
    </li>
  );
}

export function ToDoList({ day, date, time }) {
  return (
    <main className=" w-full md:w-1/4">
      <div className="m-2 mt-2 md:mt-0">
        <div className="rounded-lg bg-teal-100 py-6 shadow-sm">
          <ul className="pl-4">
            <ToDoItem label="30 min book reading" />
            <ToDoItem label="45 min exercise" />
            {/* Add more items here */}
          </ul>
        </div>
        <div className="text-xs text-gray-500">
          {day} - {date} - {time}
        </div>
      </div>
    </main>
  );
}

function JournallingItem({ day, date, time, onOpen }) {
  return (
    <div>
      <div>
        <img
          src={JournallingSmallPage}
          alt="Journal Page"
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="mt-2 px-6 text-xs text-gray-500">
        {day} - {date} - {time}
      </div>
    </div>
  );
}

export function Journalling({ day, date, time }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" md:w-2/12">
      <JournallingItem day={day} date={date} time={time} onOpen={openModal} />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="h-2/3 w-2/3 rounded-lg bg-white p-4 shadow-lg md:h-1/2 md:w-1/2"
            style={{ maxHeight: "50vh", overflowY: "auto" }}
          >
            <div className="mb-2 flex justify-end">
              <button
                onClick={closeModal}
                className="close-icon text-xl font-bold text-red-500"
              >
                &times;
              </button>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Journalling:</h2>
            <p>
              Here is your journal content for {day} at {time} on {date}:
            </p>
            <ul>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 2</li>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 2</li>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 2</li>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 2</li>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 2</li>
              <li className="list-item">Entry 1</li>
              <li className="list-item">Entry 2</li>
              <li className="list-item">Entry 1</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function GoalItem({ label }) {
  return (
    <li className="flex items-center text-lg font-semibold">
      <img src={ArrowVector} alt="Arrow Icon" className="mr-2 h-4 w-4" />
      <div className="flex text-start">{label}</div>
    </li>
  );
}

export function GoalPlanner({ day, date, time }) {
  return (
    <div className=" mt-4 w-full md:w-1/4">
      <div className="rounded-lg bg-yellow-300/25 p-4">
        <ul className="ml-4 list-disc">
          <GoalItem label="Cooking" />
          <GoalItem label="Family Call" />
          {/* Add more goal items here */}
        </ul>
      </div>
      <div className="text-xs text-gray-500">
        {day} - {date} - {time}
      </div>
    </div>
  );
}

export default function UserDashboardHistory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const todoListData = [
    { day: "Monday", date: "2023-10-25", time: "10:00 AM" },
    { day: "Tuesday", date: "2023-10-26", time: "3:30 PM" },
    { day: "Wednesday", date: "2023-10-27", time: "2:00 PM" },
    { day: "Thursday", date: "2023-10-28", time: "4:45 PM" },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % todoListData.length);
  };

  return (
    <main>
      <div>
        <h2 className="mb-2 text-2xl font-bold">To-Do List:</h2>
      </div>
      <div className="grid-cols-1 md:flex ">
        {todoListData.map((data, index) => (
          <ToDoList
            key={index}
            day={data.day}
            date={data.date}
            time={data.time}
          />
        ))}
        <div className="my-auto text-center">
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </div>
      </div>
      {/* ==================== Journalling:============================*/}
      <div>
        <div>
          <h2 className="mb-2 text-2xl font-bold">Journalling:</h2>
        </div>
        <div className="grid grid-cols-2 md:flex">
          <Journalling day="Monday" date="2023-10-25" time="10:00 AM" />
          <Journalling day="Monday" date="2023-10-25" time="10:00 AM" />
          <Journalling day="Monday" date="2023-10-25" time="10:00 AM" />
          <Journalling day="Monday" date="2023-10-25" time="10:00 AM" />
          <Journalling day="Monday" date="2023-10-25" time="10:00 AM" />
          <Journalling day="Monday" date="2023-10-25" time="10:00 AM" />
          <div className="my-auto text-center">
            <button onClick={handleNext}>
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </div>
        </div>
      </div>

      {/* ==================== Goal-Planner:============================*/}
      <div>
        <div className="">
          <h2 className="py-4 text-xl font-bold md:py-4 lg:text-2xl">
            Goal Planner:
          </h2>

          <div className="  grid-cols-1 gap-3  md:flex">
            <GoalPlanner day="Monday" date="2023-10-25" time="10:00 AM" />
            <GoalPlanner day="Tuesday" date="2023-10-26" time="3:30 PM" />
            <GoalPlanner day="Wednesday" date="2023-10-27" time="2:00 PM" />
            <GoalPlanner day="Thursday" date="2023-10-28" time="4:45 PM" />
            <div className="my-auto text-center">
              <button onClick={handleNext}>
                <FontAwesomeIcon icon={faCaretRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid-cols-1 md:flex ">
        <div className="w-full md:w-1/2 ">
          <h2 className="mb-2 mt-4 text-2xl font-bold">Your Progress:</h2>
          <div className="items-center justify-center text-center">
            <h2 className="text-xl font-bold text-red-500">
              Total No: of Days - 31
            </h2>
            <UserChart />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mb-2 mt-4 pb-8 text-2xl font-bold">Mood record:</h2>
          <MoodCalendar />
        </div>
      </div>
    </main>
  );
}
