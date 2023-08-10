import React from "react";

export default function InternshipApply({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-30 flex justify-center backdrop-brightness-50">
      <div className="w-[640px] bg-white p-6 overflow-y-scroll">
        <h4 className="text-center text-2xl font-bold text-primary-300 mb-4">
          Internship Form
        </h4>
        <p className="text-center font-medium text-sm">
          Thank you for your interest in working with us. We are always looking
          for the best talent to join our team. Send the application by filling
          out the form.
        </p>

        <form action="" className="pt-6">
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="self-end w-1/2">
              <span className="font-bold block mb-1 text-primary-300">
                Name:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
            <label htmlFor="" className="self-end w-1/2">
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
          </div>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="self-end w-1/2">
              <span className="font-bold block mb-1 text-primary-300">
                Email:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter email address"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
            <label htmlFor="" className="self-end w-1/2">
              <span className="font-bold block mb-1 text-primary-300">
                Phone Number:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your phone number"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
          </div>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="w-full">
              <span className="font-bold block mb-1 text-primary-300">
                Address:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Your Complete Address"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
          </div>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="self-end w-1/2">
              <span className="font-bold block mb-1 text-primary-300">
                Educational Qualification :
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your degree"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
            <label htmlFor="" className="self-end w-1/2">
              <span className="font-bold block mb-1 text-primary-300">
                Role you are looking for:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Select"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
          </div>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="w-full">
              <span className="font-bold block mb-1 text-primary-300">
                Resume:
              </span>
              <input
                type="file"
                name=""
                id=""
                placeholder="Enter Your Complete Address"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
          </div>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="w-full">
              <span className="font-bold block mb-1 text-primary-300">
                Tell us about your interest:
              </span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
                placeholder="Give a brief not more than 300 words"
              ></textarea>
            </label>
          </div>
          <div className="flex gap-4 mb-6">
            <label htmlFor="" className="w-full flex items-start">
              <input
                type="checkbox"
                name=""
                id=""
                placeholder="Enter Your Complete Address"
                className="mr-3 mt-1"
              />
              <p className="text-sm font-medium">
                I understand & agree that the information submitted in this form
                will be transmitted to, stored and processed by Wleness, in
                accordance with their Privacy Policy.
              </p>
            </label>
          </div>
          <div className="text-center">
            <button
              onClick={onClose}
              type="button"
              className="btn-one !bg-transparent !border-2 !border-primary-300 !text-black !py-2 mr-3"
            >
              Close
            </button>
            <button className="btn-one" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
