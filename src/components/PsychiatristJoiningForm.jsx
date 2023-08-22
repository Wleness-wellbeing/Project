import React, { useState } from "react";
import { Bubble } from "../assets";
import axios from "axios";

const PsychiatristJoiningForm = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    dateOfBirth: "",
    language: "",
  });

  const [professionalDetails, setProfessionalDetails] = useState({
    degree: "",
    degreeUpload: null,
    language: "",
    institute: "",
    graduationYear: "",
    experienceYears: "",
    degreeUploads: [null, null, null],
    currentSalary: "",
    joiningReason: "",
  });
  const handleBackButton = () => {
    setShowProfessionalDetails(false);
  };

  const [showProfessionalDetails, setShowProfessionalDetails] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        personalDetails.firstName !== "" &&
        personalDetails.lastName !== "" &&
        personalDetails.email !== "" &&
        personalDetails.phoneNumber !== "" &&
        personalDetails.address !== "" &&
        personalDetails.city !== "" &&
        personalDetails.country !== "" &&
        personalDetails.dateOfBirth !== "" &&
        personalDetails.language !== "" &&
        personalDetails.postalCode !== "" &&
        personalDetails.state !== "" &&
        professionalDetails.degree !== "" &&
        professionalDetails.language !== "" &&
        professionalDetails.institute !== "" &&
        professionalDetails.degreeUpload !== "" &&
        professionalDetails.graduationYear !== "" &&
        professionalDetails.experienceYears !== "" &&
        professionalDetails.degreeUploads !== "" &&
        professionalDetails.currentSalary !== "" &&
        professionalDetails.joiningReason !== ""
      ) {
        const response = await axios.post(
          "http://localhost:3000/psychiatrist",
          {
            personalDetails,
            professionalDetails,
          },
        );

        if (response.status === 200) {
          setFormSubmitted(true);
        }
      } else {
        console.log("Please fill out all details before submitting.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  console.log(personalDetails, professionalDetails);
  const handlePersonalDetailsSaveAndContinue = () => {
    setShowProfessionalDetails(true);
  };

  return (
    <div className="container mx-auto">
      <img
        src={Bubble}
        alt="Top Left"
        className="absolute left-0 top-0 hidden xl:block"
      />
      <form className="container mx-auto" onSubmit={handleFormSubmit}>
        {!showProfessionalDetails ? (
          <>
            <div className="mx-auto  w-3/4  rounded-2xl p-8 shadow-lg shadow-slate-300">
              <h2 className="mt-4 text-center text-3xl font-bold text-primary-400 ">
                Psychiatrist Joining Form - Personal Details
              </h2>
              <div className="my-10 grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.firstName}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.lastName}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.email}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.phoneNumber}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        phoneNumber: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.address}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.city}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        city: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.state}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        state: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Postal/Zip code"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.postalCode}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        postalCode: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Country"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.country}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        country: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="date"
                    placeholder="Date of Birth"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.dateOfBirth}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        dateOfBirth: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className=" col-span-2">
                  <input
                    type="text"
                    placeholder="Language"
                    className="w-full rounded-xl border-2 border-primary-300 px-4  py-2.5 outline-none"
                    value={personalDetails.language}
                    onChange={(e) =>
                      setPersonalDetails((prev) => ({
                        ...prev,
                        language: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={handlePersonalDetailsSaveAndContinue}
                  className="rounded-xl    bg-primary-300 px-4 py-2.5 font-semibold text-white hover:bg-primary-500"
                >
                  Save & Continue
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-2 mx-auto w-3/4 rounded-2xl p-2 px-6 shadow-lg shadow-slate-300">
            <h2 className="mt-4 text-center text-3xl font-bold text-primary-400">
              Psychiatrist Joining Form - Professional Details
            </h2>
            <div className="my-10 grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Degree"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  value={professionalDetails.degree}
                  onChange={(e) =>
                    setProfessionalDetails((prev) => ({
                      ...prev,
                      degree: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Language"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  value={professionalDetails.language}
                  onChange={(e) =>
                    setProfessionalDetails((prev) => ({
                      ...prev,
                      language: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Institute"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  value={professionalDetails.institute}
                  onChange={(e) =>
                    setProfessionalDetails((prev) => ({
                      ...prev,
                      institute: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <input
                  type="Number"
                  placeholder="Year of Graduation"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  value={professionalDetails.graduationYear}
                  onChange={(e) =>
                    setProfessionalDetails((prev) => ({
                      ...prev,
                      graduationYear: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <input
                  type="Number"
                  placeholder="Total Experience (in years)"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  value={professionalDetails.experienceYears}
                  onChange={(e) =>
                    setProfessionalDetails((prev) => ({
                      ...prev,
                      experienceYears: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="fileInput"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Upload Degree
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  placeholder="Please upload your degree in PDF format."
                />
                <p className="mt-2 text-sm text-gray-500">
                  Please upload your degree in PDF format.
                </p>
              </div>

              <div>
                <label
                  htmlFor="fileInput"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Upload Certificate
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Please upload your Certificate in PDF format.
                </p>
              </div>
              <div>
                <label
                  htmlFor="fileInput"
                  className="mb-2 block font-medium text-gray-700"
                >
                  Upload Resume
                </label>

                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                />
                <p className="mt-2 text-sm text-gray-500">
                  Please upload your Resume in PDF format.
                </p>
              </div>
              <div className="mt-8">
                <input
                  type="Number"
                  min={0}
                  placeholder="Current Salary"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  value={professionalDetails.currentSalary}
                  onChange={(e) =>
                    setProfessionalDetails((prev) => ({
                      ...prev,
                      currentSalary: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col-span-2 ">
                <input
                  type="text"
                  placeholder="Why did you want to join Wleness?"
                  className="w-full rounded-xl border-2 border-primary-300 px-4 py-2.5 outline-none"
                  value={professionalDetails.joiningReason}
                  onChange={(e) =>
                    setProfessionalDetails((prev) => ({
                      ...prev,
                      joiningReason: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={handleBackButton} // Add this line to handle the back button click
                className="mr-2 rounded-xl border-2 border-primary-300 bg-white px-4 py-2 font-bold hover:bg-primary-300 hover:text-white"
              >
                Back
              </button>
              <button
                type="submit"
                className="rounded-xl bg-primary-300 px-4 py-2.5 font-semibold text-white hover:bg-primary-500"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
      {personalDetails.firstName !== "" &&
        personalDetails.lastName !== "" &&
        personalDetails.email !== "" &&
        personalDetails.phoneNumber !== "" &&
        personalDetails.address !== "" &&
        personalDetails.city !== "" &&
        personalDetails.country !== "" &&
        personalDetails.dateOfBirth !== "" &&
        personalDetails.language !== "" &&
        personalDetails.postalCode !== "" &&
        personalDetails.state !== "" &&
        professionalDetails.degree !== "" &&
        professionalDetails.language !== "" &&
        professionalDetails.institute !== "" &&
        professionalDetails.degreeUpload !== "" &&
        professionalDetails.graduationYear !== "" &&
        professionalDetails.experienceYears !== "" &&
        professionalDetails.degreeUploads !== "" &&
        professionalDetails.currentSalary !== "" &&
        professionalDetails.joiningReason !== "" &&
        formSubmitted && (
          <div className="mt-2 text-center text-green-600">
            Form submitted successfully!
          </div>
        )}
      <img
        src={Bubble}
        alt="Bottom Right"
        className="absolute bottom-0 right-0 hidden scale-x-[-1] transform xl:block"
      />
    </div>
  );
};

export default PsychiatristJoiningForm;
