import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Faq({ question, answer }) {
  return (
    <details className="bg-200/30 p-4 lg:p-6 rounded-lg cursor-pointer bg-primary-50">
      <summary className="flex justify-between items-center">
        <h3 className="text-lg font-bold flex justify-between items-center w-full">
          <span>{question}</span>
          <FontAwesomeIcon icon={faPlus} />
        </h3>
      </summary>
      <p className="font-semibold">{answer}</p>
    </details>
  );
}
