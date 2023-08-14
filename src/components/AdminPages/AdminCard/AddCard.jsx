import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons"

const AddCard = () => {
  return (
    <>
      <div className="bg-white shadow-2xl border-2 w-[225px] h-[354px] rounded-lg m-3 flex flex-col justify-center items-center ">
        <p>Add Issues</p>
        <FontAwesomeIcon className="mt-1 bg-[#B3F0E8] text-black rounded-full p-1 text-xs cursor-pointer" icon={faPlus} />
      </div>
    </>
  );
};

export default AddCard;
