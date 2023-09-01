import React, { useState } from "react";
import { Link } from "react-router-dom";
import Assessment from "../Assessment";

export default function IssueCard(props) {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };
  return (
    <div
      className="mx-auto w-64 rounded-2xl rounded-br-[3rem] bg-gradient-to-br from-secondary to-tertiary p-1 lg:w-full"
      title={props.data.title}
    >
      <div className="flex h-full flex-col items-center justify-center rounded-2xl rounded-br-[3rem] bg-[#FAFCE7] py-6">
        <Link to={props.data.slug}>
          <h3 className="mb-4 text-center text-2xl font-bold">
            {props.data.name}
          </h3>
          <img
            src={props.data.image}
            alt="Avatar"
            className="mx-auto mb-4 block h-24 w-24 rounded-2xl object-contain lg:h-40 lg:w-40 3xl:h-36 3xl:w-36"
          />
        </Link>

        <button
          className="btn-one bg-gradient-to-r from-secondary to-tertiary !text-sm !font-bold transition-colors hover:bg-gradient-to-br hover:from-tertiary hover:to-secondary hover:shadow-md"
          onClick={openAssessmentModal}
        >
          Book Now
        </button>
      </div>

      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />
    </div>
  );
}
