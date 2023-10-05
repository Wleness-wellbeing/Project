import React, { useState } from "react";
import { mainforteRight, suggestionRight, leaf } from "../assets";

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState("mainForte");

  const switchToMainForte = () => {
    setActiveTab("mainForte");
  };

  const switchToSuggestions = () => {
    setActiveTab("suggestions");
  };

  return (
    <div className="container mx-auto">
      <div className="flex ">
        <button
          className={`px-8 text-xl  font-bold md:px-40 lg:py-4 ${
            activeTab === "mainForte"
              ? "bg-teal-500 text-white"
              : "border-b-4 border-b-teal-500 bg-teal-50"
          }`}
          onClick={switchToMainForte}
        >
          <span
            className={activeTab === "mainForte" ? "text-white" : "text-black"}
          >
            Expert's{" "}
            <span
              className={activeTab !== "mainForte" ? "heading-primary" : ""}
            >
              Main Forte
            </span>
          </span>
        </button>

        <button
          className={`px-8 py-2 text-xl font-bold md:px-44 ${
            activeTab === "suggestions"
              ? "bg-teal-500 text-white"
              : "border-b-4 border-b-teal-500 bg-teal-50"
          }`}
          onClick={switchToSuggestions}
        >
          <span
            className={
              activeTab === "suggestions" ? "text-white" : "text-black"
            }
          >
            Expert{" "}
            <span
              className={activeTab !== "suggestions" ? "heading-primary" : ""}
            >
              Suggestion's
            </span>
          </span>
        </button>
      </div>

      {/* <hr className="h-1 bg-teal-500 "></hr> */}
      {/* Content for the active tab */}
      <div className=" my-4 ml-4 w-full">
        {activeTab === "mainForte" && (
          <div className="flex">
            <div className="para   my-auto w-1/2 text-left">
              {/* <h2 className="mb-2 text-lg font-semibold">
                Expert’s Main Forte{" "}
              </h2> */}
              <ul>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-3">Evidence-based therapy expertise</p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-3">Holistic approach to wellness </p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-3">Coping skill cultivation </p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-3">
                      Empathetic & self environment creation
                    </p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="">Resilience </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="my-auto ml-4 w-1/2">
              {/* Add your image here */}
              <img src={mainforteRight} alt="Main Forte" />
            </div>
          </div>
        )}
        {activeTab === "suggestions" && (
          <div className=" flex">
            <div className="para my-4 w-1/2  text-left">
              <ul className="">
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2">Stay Connected</p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2">Healthy Lifestyle</p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2">Prioritize Self Care</p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2">Limit Screen Time</p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2">Stay Mindfull</p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="6-8 mr-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-2">Seek Professional Help</p>
                  </div>
                </li>
                <li className="flex space-x-2">
                  <div className="">
                    <img
                      src={leaf}
                      alt="Leaf Icon"
                      className="mr-6 h-6 w-6 object-contain"
                    />
                  </div>
                  <div>
                    <p className="mb-0">Learn To Say No</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="my-auto ml-4 w-1/2 ">
              {/* Add your image here */}
              <img src={suggestionRight} alt="Main Forte" className="w-3/4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabSwitcher;
