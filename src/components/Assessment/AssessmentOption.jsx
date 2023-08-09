import React from "react";

export default function AssessmentOption(props) {
  const { isSelected, setIsSelected, index } = props;

  const handleClick = () => {
    const newSelectedState = [...isSelected];
    newSelectedState[index] = !newSelectedState[index];
    setIsSelected(newSelectedState);
  };

  return (
    <div className="bg-gradient-to-r from-secondary to-tertiary rounded-lg flex items-stretch p-[3px] box-border group">
      <button
        onClick={handleClick}
        className={`flex items-center px-5 py-2.5 hover:text-white font-semibold bg-white rounded-md ${
          isSelected[index]
            ? "bg-primary-300 text-white"
            : "hover:bg-primary-300"
        }`}
      >
        <img src={props.image} alt="" className="w-6 object-contain mr-2" />
        {props.name}
      </button>
    </div>
  );
}
