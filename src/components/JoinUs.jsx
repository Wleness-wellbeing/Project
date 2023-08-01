import React, { useState } from "react";
import { Elipse1, Elipse2, Elipse3 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Routes, Link, Route } from "react-router-dom";
// Import necessary components from react-router-dom

import TherapistJoiningForm from "./TherapistJoiningForm.jsx";
import PsychiatristJoiningForm from "./PsychiatristJoiningForm";
import CampusAmbassadorJoiningForm from "./CampusAmbassdorJoiningForm";

function JoinUs({ isOpen, onClose }) {
  const [selectedRole, setSelectedRole] = useState(null);

  if (!isOpen) return null;

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-none backdrop-brightness-50">
      <div className="bg-white p-6 md:p-20 rounded-lg shadow-md flex flex-col md:flex-row items-center md:w-1/2">
        <div className="">
          <h2 className="text-primary-500 font-extrabold text-4xl md:text-7xl text-center mb-4">
            Join Us
          </h2>
          <p className="text-center text-sm font-semibold md:text-base">
            Do you wish to become a mental health warrior? Save lives and make a
            difference! Join our noble cause, choose your expertise, and be part
            of an amazing team dedicated to improving mental well-being
            worldwide today.
          </p>
          <div className="flex flex-col md:flex-row mt-4">
            <div className="flex flex-col items-center md:items-center md:w-1/3">
              {/* Use Link instead of onClick */}

              <img
                src={Elipse1}
                alt="elip1"
                className="md:mb-0 object-scale-down h-24 w-24 md:h-32 md:w-32 hover:scale-105"
              />
              <p className="text-primary-500 font-semibold text-xs md:text-base">
                Campus Ambassador
              </p>
            </div>
            <div className="flex flex-col items-center md:items-center md:w-1/3">
              {/* Use Link instead of onClick */}
              <Link to="/join-therapist">
                <img
                  src={Elipse2}
                  alt="elip2"
                  className="object-scale-down h-24 w-24 md:h-32 md:w-32  md:mb-0 hover:scale-105"
                />
                <p className="text-primary-500 font-semibold text-xs md:text-base">
                  Therapist
                </p>
              </Link>
            </div>
            <div className="flex flex-col items-center md:items-center md:w-1/3">
              {/* Use Link instead of onClick */}
              <Link to="/join-psychiatrist">
                <img
                  src={Elipse3}
                  alt="elip3"
                  className="object-scale-down h-24 w-24 md:h-32 md:w-32  md:mb-0 hover:scale-105"
                />
                <p className="text-primary-500 font-semibold text-xs md:text-base">
                  Psychiatrist
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
