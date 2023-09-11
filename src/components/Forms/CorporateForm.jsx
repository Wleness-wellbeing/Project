import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CorporateForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Close assessment modal on clicking outside of the box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".corporate-form")) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <section className="fixed inset-0 z-50 grid place-items-center bg-black/20">
      <div className="corporate-form w-4/5 rounded-2xl bg-white p-6 lg:w-[620px]">
        <div className="text-center">
          <h2 className="subheading mb-4">Corporate Join</h2>
        </div>
        <form action="" method="post">
          <label htmlFor="org_name">
            <input
              type="text"
              name="org_name"
              id="org_name"
              placeholder="Name of Your Organization *"
              className="form-input"
            />
          </label>
          <label htmlFor="website">
            <input
              type="text"
              name="website"
              id="website"
              placeholder="Your Website *"
              className="form-input"
            />
          </label>
          <label htmlFor="role">
            <input
              type="text"
              name="role"
              id="role"
              placeholder="Your Role *"
              className="form-input"
            />
          </label>
          <label htmlFor="full_name">
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Full Name *"
              className="form-input"
            />
          </label>
          <label htmlFor="phone">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number *"
              className="form-input"
            />
          </label>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email *"
              className="form-input"
            />
          </label>
          <label htmlFor="policy-accept" className="flex px-2 pb-4">
            <input
              type="checkbox"
              name="policy-accept"
              className="mr-2"
              id="policy-accept"
            />
            <span className="text-xs font-medium">
              I understand & agree that the information submitted in this form
              will be transmitted to, stored and processed by Wleness, in
              accordance with their &nbsp;
              <Link to="/privacy-policy" className="text-primary-400">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          <div className="grid grid-cols-2 justify-center lg:flex">
            <button
              type="reset"
              onClick={onClose}
              className="mr-2 rounded-2xl border-2 border-[#0F7CAB] px-5 py-2 font-semibold text-[#0A99D6] transition-all hover:bg-[#0F7CAB] hover:text-white"
            >
              Close
            </button>
            <button
              type="submit"
              className="rounded-2xl border-2 border-[#0A99D6] bg-[#0A99D6] px-5 py-2 font-semibold text-white  transition-all hover:border-[#0F7CAB] hover:bg-[#0F7CAB]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
