// ProfessionalDetails.js
import React from "react";

const ProfessionalDetails = () => {
  return (
    <div className="w-3/4 mx-auto col-span-2 shadow-lg shadow-slate-300 p-2 px-6 rounded-2xl">
      <h2 className="text-3xl mt-4 text-primary-400 text-center font-bold">
        Psychiatrist Joining Form - Professional Details
      </h2>
      <div className="grid grid-cols-2 gap-2 my-10">
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Degree"
            className="w-full rounded-xl  border-2 border-primary-300 outline-none px-4 py-2.5"
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Language"
            className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Institute"
            className="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-2.5"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Year of Graduation"
            className="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-2.5"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Total Experience(in yrs)"
            className="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-2.5"
          />
        </div>
        <div>
          <label for="fileInput" class="block mb-2 font-medium text-gray-700">
            Upload Degree
          </label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            class="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-2.5"
          />
          <p class="text-gray-500 text-sm mt-2">
            Please upload your degree in PDF format.
          </p>
        </div>

        <div>
          <label for="fileInput" class="block mb-2 font-medium text-gray-700">
            Upload Degree
          </label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            class="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-2.5"
          />
          <p class="text-gray-500 text-sm mt-2">
            Please upload your degree in PDF format.
          </p>
        </div>
        <div>
          <label for="fileInput" class="block mb-2 font-medium text-gray-700">
            Upload Degree
          </label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            class="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-2.5"
          />
          <p class="text-gray-500 text-sm mt-2">
            Please upload your degree in PDF format.
          </p>
        </div>
        <div className="mt-8">
          <input
            type="number"
            placeholder="Current Salary"
            className="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-3"
          />
        </div>
        <div className="col-span-2 ">
          <input
            type="text"
            placeholder="Why did you want to join Wleness?"
            className="w-full border-2 rounded-xl border-primary-300 outline-none px-4 py-6"
          />
        </div>
      </div>
      <div className=" text-center">
        <button className="bg-primary-300 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-primary-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
