import { faArrowLeft, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Confirmation({ status, close }) {
  if (!status) {
    return null;
  }

  return (
    <section className="fixed inset-0 z-50 grid animate-fadeIn place-items-center bg-black/30 transition-all">
      <div className="enquiry-form animate-scaleIn relative w-4/5 rounded-xl bg-white p-6 shadow-lg transition-all lg:w-[480px]">
        <div className="text-center lg:px-8 lg:py-6">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mb-4 text-3xl text-primary-100 lg:text-6xl"
          />
          <h2 className="mb-4 text-xl font-semibold text-primary-300 lg:text-3xl">
            Thank You
          </h2>
          <p className="mb-5 font-semibold text-slate-500">
            Your request has been successfully received! We will get in touch
            within 2 days.
          </p>
          <button
            onClick={() => close()}
            className="btn-one mx-auto mb-3 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Confirmation;
