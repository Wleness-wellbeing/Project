import React from "react";

export default function SessionPricingItem({ data, selectPlan, selectedPlan }) {
  return (
    <div className="border-b-2 border-dotted border-slate-400 py-4">
      <label
        htmlFor={data.name}
        className="flex items-center justify-between text-lg font-bold"
      >
        <span>{data.name}</span>
        <span className="flex items-center space-x-2">
          <span>Rs. {data.price}</span>
          <input
            type="radio"
            name="plan"
            checked={selectedPlan}
            value={selectedPlan}
            onChange={selectPlan}
            id={data.name}
            className="cursor-pointer"
          />
        </span>
      </label>
    </div>
  );
}
