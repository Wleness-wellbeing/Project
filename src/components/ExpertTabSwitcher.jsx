import React, { useState } from "react";
import { mainforteRight, suggestionRight, leaf } from "../assets";
import ExpertsButton from "./Buttons/ExpertsButton";

const mainFortes = [
  "Evidence-based therapy expertise",
  "Holistic approach to wellness",
  "Coping skill cultivation",
  "Empathetic & self environment creation",
  "Resilience",
];

const suggestions = [
  "Stay Connected",
  "Healthy Lifestyle",
  "Prioritize Self Care",
  "Limit Screen Time",
  "Stay Mindfull",
  "Seek Professional Help",
  "Learn To Say No",
];

const TabSwitcher = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2">
        <ExpertsButton
          text="Main Forte"
          isActive={active}
          switchTo={() => setActive(true)}
        />
        <ExpertsButton
          text="Suggestions"
          isActive={!active}
          switchTo={() => setActive(false)}
        />
      </div>

      {/* <hr className="h-1 bg-teal-500 "></hr> */}
      {/* Content for the active tab */}
      <div className="my-4">
        {active && (
          <div className="flex lg:items-center lg:py-4">
            <div className="para lg:w-1/2">
              <ul>
                {mainFortes.map((value, i) => {
                  return (
                    <li key={i} className="flex space-x-2">
                      <div className="">
                        <img
                          src={leaf}
                          alt="Leaf Icon"
                          className="mr-6 h-6 w-6 object-contain"
                        />
                      </div>
                      <div>
                        <p className="mb-3">{value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="ml-4 hidden lg:block lg:w-1/2">
              {/* Add your image here */}
              <img
                src={mainforteRight}
                alt="Main Forte"
                className="lg:mx-auto"
              />
            </div>
          </div>
        )}

        {!active && (
          <div className="flex lg:items-center lg:py-4">
            <div className="para lg:w-1/2">
              <ul>
                {suggestions.map((value, i) => {
                  return (
                    <li className="flex space-x-2" key={i}>
                      <div>
                        <img
                          src={leaf}
                          alt="Leaf Icon"
                          className="mr-6 h-6 w-6 object-contain"
                        />
                      </div>
                      <div>
                        <p className="mb-2">{value}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="ml-4 hidden lg:block lg:w-1/2">
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
