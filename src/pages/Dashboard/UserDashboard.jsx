import React, { useState, useEffect } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AngryIcon,
  HappyIcon,
  EmotionalIcon,
  NeutralIcon,
  OverwhelmingIcon,
  SadIcon,
  ArrowVector,
  Spark,
  Sunflower,
  Album,
} from "../../assets";

export default function UserDashboard() {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [editingGoal, setEditingGoal] = useState(null);
  const [selectedMood, setSelectedMood] = useState("Happy");

  console.log(thoughts, newThought, todos, selectedDay, goals);

  // Function to add a new todo task
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);

      // Update local storage with the new todo list
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      setNewTodo("");
    }
  };

  // Function to delete a todo task by index
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // Handle thought form submit
  const handleThoughtSubmit = (event) => {
    event.preventDefault();

    if (newThought === "") return;

    setThoughts([...thoughts, newThought]);
    // empty new thought value after submission
    setNewThought("");
  };

  // Add New Thought
  const updateNewThought = (event) => {
    setNewThought(event.target.value);
  };

  // Delete Thought
  const deleteThought = (index) => {
    const newArray = [...thoughts];
    newArray.splice(index, 1);
    setThoughts(newArray);
  };

  // Handle goal form submit
  const handleGoalSubmit = (event) => {
    event.preventDefault();

    if (newGoal === "") return;

    if (editingGoal !== null) {
      // If we're editing a goal, update the existing goal
      const updatedGoals = [...goals];
      updatedGoals[editingGoal] = newGoal;
      setGoals(updatedGoals);
      setEditingGoal(null); // Reset the editing state
    } else {
      // If not editing, add a new goal
      setGoals([...goals, newGoal]);
    }

    // Clear the input field
    setNewGoal("");
  };

  // Edit a goal
  const editGoal = (index) => {
    setEditingGoal(index);
    setNewGoal(goals[index]);
  };

  // Delete a goal
  const deleteGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
  };

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  // Save data to local storage whenever there is a change
  useEffect(() => {
    localStorage.setItem("thoughts", JSON.stringify(thoughts));
  }, [thoughts]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("selectedMood", selectedMood);
  }, [selectedMood]);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedThoughts = localStorage.getItem("thoughts");
    if (storedThoughts) {
      setThoughts(JSON.parse(storedThoughts));
    }

    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }

    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }

    const storedSelectedMood = localStorage.getItem("selectedMood");
    if (storedSelectedMood) {
      setSelectedMood(storedSelectedMood);
    }

    // Initialize selected day and current date as before
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const currentDay = daysOfWeek[new Date().getDay()];
    setSelectedDay(currentDay);

    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setCurrentDate(today.toLocaleDateString(undefined, options));
  }, []);

  return (
    <>
      <div className="md:flex">
        {/* To-do Section */}
        <div className="mt-2 md:mt-0 md:w-[30%]">
          <h2 className="pb-4 text-lg font-bold lg:text-2xl">To-Do List:</h2>
          <div className="rounded-lg bg-teal-100 py-6 pr-10 shadow-sm">
            <ul className="pl-4">
              {todos.map((todo, index) => (
                <li key={index} className="flex items-center justify-between">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-green-500"
                    />
                    <span className="ml-2 text-sm font-semibold lg:text-lg">
                      {todo}
                    </span>
                  </label>
                  <FontAwesomeIcon
                    className="ml-4 cursor-pointer text-red-500 hover:text-red-600"
                    icon={faTrash}
                    onClick={() => deleteTodo(index)}
                  />
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center pl-3">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add New Task"
                className="w-full border-b-2 border-slate-300 bg-teal-100 p-2  text-sm font-medium outline-yellow-300"
                style={{ outline: "none" }}
              />
              <button
                onClick={addTodo}
                className="ml-2 rounded-lg bg-primary-100 px-4 py-1.5 text-xs font-medium text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className=" md:ml-12 md:w-[75%]">
          <h2 className="mt-4 pb-4 text-xl font-bold md:mt-0 lg:text-2xl">
            Mood Tracker:
          </h2>
          <div className="grid w-full grid-cols-3 items-center rounded-lg bg-teal-100 p-3 text-center md:flex md:h-40 md:gap-12 md:pl-7 md:pt-4">
            {[
              { label: "Happy", icon: HappyIcon },
              { label: "Neutral", icon: NeutralIcon },
              { label: "Emotional", icon: EmotionalIcon },
              { label: "Sad", icon: SadIcon },
              { label: "Angry", icon: AngryIcon },
              { label: "Overwhelming", icon: OverwhelmingIcon },
            ].map((mood, index) => (
              <label key={index} className="flex flex-col items-center">
                <input
                  type="radio"
                  value={mood.label}
                  checked={selectedMood === mood.label}
                  onChange={handleMoodChange}
                  className="hidden"
                />
                <img
                  src={mood.icon}
                  className="h-10 w-10  cursor-pointer object-fill md:h-16 md:w-16"
                  alt={mood.label}
                />
                <h2
                  className={`py-2 text-sm font-semibold lg:text-lg ${
                    selectedMood === mood.label ? "text-teal-500" : ""
                  }`}
                >
                  {mood.label}
                </h2>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* THIRED-SECTION */}

      <div className=" mt-1 md:mt-4">
        <div className=" grid-cols-1 md:flex ">
          <div className="w-full md:w-1/2 md:pr-8">
            <div className="  md:pb-2 ">
              <h2 className=" py-4 text-xl font-bold lg:text-2xl">
                Journalling:
              </h2>
              {/* <div className="rounded-xl bg-yellow-primary p-2 ">
                    <div className="">
                        <input
                        className=" w-full border-b-2 border-gray-500 bg-yellow-primary"
                        type="text"
                        style={{ outline: "none" }}
                        />
                    </div>
                    <div>
                        <input
                        className="h-9 w-full border-b-2 border-gray-500 bg-yellow-primary"
                        type="text"
                        style={{ outline: "none" }}
                        />
                    </div>
                    <div>
                        <input
                        className="h-9 w-full border-b-2 border-gray-500 bg-yellow-primary"
                        type="text"
                        style={{ outline: "none" }}
                        />
                    </div>
                    <div className="pb-6">
                        <input
                        className=" h-9 w-full border-b-2 border-gray-500 bg-yellow-primary"
                        type="text"
                        style={{ outline: "none" }}
                        />
                    </div>
                    </div> */}
              {/* <div className="  lg:p-4"> */}
              <div className="rounded-lg bg-yellow-300/25 p-4 md:mb-6">
                {/* <h4 className="font-bold">Write Your Thoughts...</h4> */}
                {thoughts.map((value, i) => {
                  return (
                    <p
                      key={i}
                      className="group flex justify-between border-b-[1px] border-slate-300 p-2 text-sm font-semibold outline-yellow-300"
                    >
                      <span>{value}</span>
                      <FontAwesomeIcon
                        className="hidden cursor-pointer text-red-500 hover:text-red-600 group-hover:block"
                        icon={faTrash}
                        onClick={() => deleteThought(i)}
                      />
                    </p>
                  );
                })}

                <form onSubmit={handleThoughtSubmit}>
                  <input
                    name="thought"
                    value={newThought}
                    onChange={updateNewThought}
                    placeholder="Add New Thought"
                    className="w-full border-b-[1px] border-slate-300 bg-transparent p-2 text-sm font-medium outline-yellow-300"
                  />
                  <div className="mt-2 text-right">
                    <button
                      type="submit"
                      className="rounded-lg bg-primary-100 px-4 py-1.5 text-xs font-medium text-white"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* </div> */}

          <div className="w-full md:w-1/2 ">
            <h2 className="py-4 text-xl font-bold md:py-4 lg:text-2xl">
              Goal Planner:
            </h2>
            <div className="rounded-lg bg-yellow-300/25 p-4">
              <ul className="ml-4 list-disc">
                {goals.map((goal, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg font-semibold"
                  >
                    <img
                      src={ArrowVector}
                      alt="Arrow Icon"
                      className="mr-2 h-4 w-4"
                    />
                    {goal}
                    <div className="ml-auto flex text-end">
                      <div
                        className="cursor-pointer text-teal-500 hover:text-teal-600"
                        onClick={() => editGoal(index)}
                      >
                        Edit
                      </div>
                      <FontAwesomeIcon
                        className="ml-2 cursor-pointer text-red-500 hover:text-red-600"
                        icon={faTrash}
                        onClick={() => deleteGoal(index)}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <form onSubmit={handleGoalSubmit}>
                <input
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  placeholder="Add New Goal"
                  className="w-full border-b-[1px] border-slate-300 bg-transparent p-2 text-sm font-medium outline-yellow-300"
                />
                <div className="mt-2 text-right">
                  <button
                    type="submit"
                    className="rounded-lg bg-primary-100 px-4 py-1.5 text-xs font-medium text-white"
                  >
                    {editingGoal !== null ? "Update" : "Save"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="grid-cols-1 md:flex">
        <div className="w-full md:w-1/2 md:pr-8">
          <h2 className="py-4 text-xl font-bold md:py-4 lg:text-2xl">
            Your Progress:
          </h2>
          <div className="rounded-lg bg-teal-100 p-2 text-end">
            <div className=" flex">
              <div className="ml-3 flex items-center  md:ml-7">
                {/* {selectedDay === "sunday" ? ( */}
                <img
                  src={Sunflower}
                  alt="Sunflower"
                  className="mr-2 h-12 w-12"
                />
                {/* ) : (
                    <div className="h-12 w-12"></div>
                  )} */}
                <h1 className="text-5xl font-bold text-teal-500">1</h1>
              </div>

              <div className="m-2">
                <h2 className="text-start font-bold">Mindful day</h2>
                <p className="font-medium">{currentDate}</p>
              </div>
            </div>
            <div className="flex justify-center gap-6  md:gap-12">
              {[
                "sunday",
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday",
                "saturday",
              ].map((day) => (
                <div className="text-center" key={day}>
                  <input
                    type="radio"
                    id={day}
                    name="day"
                    className="h-4 w-4 border-teal-500 bg-white lg:h-7 lg:w-7"
                    checked={selectedDay === day}
                    onChange={() => setSelectedDay(day)}
                  />
                  <label
                    htmlFor={day}
                    className="mx-auto mb-1 block cursor-pointer text-sm font-bold lg:text-base"
                  >
                    {day.charAt(0).toUpperCase()}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 w-full md:w-1/2">
          <h2 className="my-4 pb-2 text-xl font-bold md:mt-2 lg:text-2xl">
            Upcoming Events:
          </h2>
          <div className="rounded-lg bg-teal-100  py-3 text-end md:py-5">
            {/* <h3 className="font-semibold text-gray-">Oct 19 - Oct 25</h3> */}
            <div className="flex items-center justify-center text-center">
              <div className=" border-r border-slate-300 pr-4">
                <div className="flex">
                  <div>
                    <img src={Spark} className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-teal-500">1</span>
                    <span className="m-2 font-bold">Days</span>
                  </div>
                </div>
                <p className="font-bold">Current Streak</p>
              </div>
              <div className="pl-4">
                <div className="flex">
                  <div>
                    <img src={Album} className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-teal-500">0</span>
                    <span className="m-2 font-bold">Days</span>
                  </div>
                </div>
                <p className="font-bold">Therapies complete</p>
              </div>
            </div>

            <h2 className="py-2 text-center font-bold">
              Best streak{" "}
              <span className="font-bold text-teal-400"> 21 days</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
