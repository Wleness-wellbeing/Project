import React from "react";

export default function AssessmentOption(props) {
  const { isSelected, setIsSelected, index } = props;

  const handleClick = () => {
    const newSelectedState = [...isSelected];
    newSelectedState[index] = !newSelectedState[index];
    setIsSelected(newSelectedState);
  };

  return (
    <div className="group box-border flex items-stretch rounded-lg bg-gradient-to-r from-secondary to-tertiary p-[3px]">
      <button
        onClick={handleClick}
        className={`flex w-full items-center justify-center rounded-md bg-white px-2 py-1.5 text-xs font-semibold hover:text-white md:text-sm lg:px-3 lg:py-2.5 lg:text-base ${
          isSelected[index]
            ? " !bg-primary-300 text-white"
            : "hover:bg-primary-300"
        }`}
      >
        <img src={props.image} alt="" className="mr-2 w-6 object-contain" />
        <span>{props.name}</span>
      </button>
    </div>
  );
}
