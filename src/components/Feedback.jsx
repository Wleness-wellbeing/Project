import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Feedback({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-30 flex justify-center items-center backdrop-brightness-50">
      <div className="w-[640px] bg-white p-6 h-fit rounded-xl">
        <h4 className="text-center text-2xl font-bold text-primary-300 mb-4">
          Feedback Form
        </h4>
        <p className="text-center font-medium text-sm">
          Your valuable feedback is important to us !
        </p>

        <form action="" className="pt-6">
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="w-full">
              <span className="font-bold block mb-1 text-primary-300">
                How effective was the session*
              </span>
              <span className="text-center block py-3">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
              </span>
            </label>
          </div>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="w-full">
              <span className="font-bold block mb-1 text-primary-300">
                After the event how do you feel*
              </span>
              <span className="text-center block py-3">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
              </span>
            </label>
          </div>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="w-full">
              <span className="font-bold block mb-1 text-primary-300">
                Were our experts able to understand your concerns*
              </span>
              <span className="text-center block py-3">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl text-yellow-400"
                />
              </span>
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
                placeholder="Give your valuable feedback minimum of 50 words"
              ></textarea>
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
