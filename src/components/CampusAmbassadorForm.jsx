import React, { useState } from "react";
import axios from "axios";

export default function CampusAmbassadorForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    qualification: "",
    role: "",
    resume: "",
    interest: "",
    agreement: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/register", // Update the URL to your backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Handle successful submission
        console.log("Application submitted successfully");
        alert("Application submitted successfully!");

        onClose();
      } else {
        // Handle submission error
        console.error("An error occurred while submitting the application");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-40 flex justify-center backdrop-brightness-50 pt-8">
      <div className="w-[640px] bg-white p-6 overflow-y-scroll rounded-t-lg">
        <h4 className="text-center text-2xl font-bold text-primary-300 mb-4">
          Campus Ambassador Form
        </h4>
        <p className="text-center font-medium text-sm">
          Thank you for your interest in working with us. We are always looking
          for the best talent to join our team. Send the application by filling
          out the form.
        </p>

        <form action="" className="pt-6" onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <label htmlFor="" className="self-end w-1/2">
              <span className="font-bold block mb-1 text-primary-300">
                Name:
              </span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    firstName: e.target.value,
                  }))
                }
                placeholder="First Name"
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
              />
            </label>
            <label htmlFor="" className="self-end w-1/2">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    lastName: e.target.value,
                  }))
                }
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
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    email: e.target.value,
                  }))
                }
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
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    phoneNumber: e.target.value,
                  }))
                }
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
                name="address"
                id="address"
                value={formData.address}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    address: e.target.value,
                  }))
                }
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
                name="qualification"
                id="qualification"
                value={formData.qualification}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    qualification: e.target.value,
                  }))
                }
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
                name="role"
                id="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    role: e.target.value,
                  }))
                }
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
                name="resume"
                id="resume"
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
                name="interest"
                id="interest"
                cols="30"
                rows="3"
                value={formData.interest}
                onChange={(e) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    interest: e.target.value,
                  }))
                }
                className="w-full border-2 border-primary-50 px-4 py-2 rounded-lg outline-none"
                placeholder="Give a brief not more than 300 words"
              ></textarea>
            </label>
          </div>
          <div className="flex gap-4 mb-6">
            <label htmlFor="" className="w-full flex items-start">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
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
