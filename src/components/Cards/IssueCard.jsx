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
      className="mx-auto w-full rounded-2xl rounded-br-[4rem] bg-gradient-to-br from-secondary to-tertiary p-1 lg:w-full"
      title={props.data.title}
    >
      <div className="flex h-full flex-col items-center justify-center rounded-xl rounded-br-[3.8rem] bg-[#FAFCE7] py-4 md:py-6">
        {/* <div className="flex h-full flex-col items-center justify-center rounded-2xl rounded-br-[3rem] bg-green-50 py-4 md:py-6"> */}
        <Link to={props.data.slug}>
          <h3 className="mb-4 text-center font-bold lg:text-2xl">
            {props.data.name}
          </h3>
          <img
            loading="lazy"
            src={props.data.image}
            alt="Avatar"
            className="mx-auto mb-2 block h-20 w-20 object-contain md:h-24 md:w-24 lg:h-40 lg:w-40 3xl:h-36 3xl:w-36"
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
