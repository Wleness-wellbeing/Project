// ProfessionalDetails.js
import React from "react";

const ProfessionalDetails = () => {
  return (
    <div className="col-span-2 mx-auto w-3/4 rounded-2xl p-2 px-6 shadow-lg shadow-slate-300">
      <h2 className="mt-4 text-center text-3xl font-bold text-primary-400">
        Therapist Joining Form - Professional Details
      </h2>
      <div className="my-10 grid grid-cols-2 gap-2">
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Degree"
            className="w-full rounded-xl  border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Language"
            className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Institute"
            className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Year of Graduation"
            className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Total Experience(in yrs)"
            className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
        </div>
        <div>
          <label for="fileInput" class="mb-2 block font-medium text-gray-700">
            Upload Degree
          </label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            class="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
          <p class="mt-2 text-sm text-gray-500">
            Please upload your degree in PDF format.
          </p>
        </div>

        <div>
          <label for="fileInput" class="mb-2 block font-medium text-gray-700">
            Upload Degree
          </label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            class="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
          <p class="mt-2 text-sm text-gray-500">
            Please upload your degree in PDF format.
          </p>
        </div>
        <div>
          <label for="fileInput" class="mb-2 block font-medium text-gray-700">
            Upload Degree
          </label>
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            class="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
          />
          <p class="mt-2 text-sm text-gray-500">
            Please upload your degree in PDF format.
          </p>
        </div>
        <div className="mt-8">
          <input
            type="number"
            placeholder="Current Salary"
            className="w-full rounded-xl border-2 border-primary-300 px-4 py-3 outline-none"
          />
        </div>
        <div className="col-span-2 ">
          <input
            type="text"
            placeholder="Why did you want to join Wleness?"
            className="w-full rounded-xl border-2 border-primary-300 px-4 py-6 outline-none"
          />
        </div>
      </div>
      <div className=" text-center">
        <button className="rounded-xl bg-primary-300 px-4 py-2.5 font-semibold text-white hover:bg-primary-500">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
