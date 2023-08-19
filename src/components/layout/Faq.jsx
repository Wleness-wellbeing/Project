import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Faq({ question, answer }) {
  return (
    <details className="bg-200/30 cursor-pointer rounded-lg bg-primary-50 p-4 lg:p-6">
      <summary className="flex items-center justify-between">
        <h3 className="flex w-full items-center justify-between text-lg font-bold">
          <span>{question}</span>
          <FontAwesomeIcon icon={faPlus} />
        </h3>
      </summary>
      <p className="font-semibold">{answer}</p>
    </details>
  );
}
