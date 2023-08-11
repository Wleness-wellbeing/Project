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
          }
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

  const handlePersonalDetailsSaveAndContinue = () => {
    setShowProfessionalDetails(true);
  };

  return (
    <div className="container mx-auto">
      <img
        src={Bubble}
        alt="Top Left"
        className="absolute top-0 left-0 hidden xl:block"
      />
      <form className="container mx-auto" onSubmit={handleFormSubmit}>
        {!showProfessionalDetails ? (
          <>
            <div className="w-3/4  mx-auto  shadow-lg shadow-slate-300 p-8 rounded-2xl">
              <h2 className="text-3xl mt-4 text-primary-400 text-center font-bold ">
                Therapist Joining Form - Personal Details
              </h2>
              <div className="grid grid-cols-2 gap-4 my-10">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    placeholder="email"
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    placeholder="Phonenumber"
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    placeholder="address"
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    placeholder="country"
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                    className="w-full rounded-xl border-2 border-primary-300 outline-none  px-4 py-2.5"
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
                  className="bg-primary-300    text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-primary-500"
                >
                  Save & Continue
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="w-3/4 mx-auto col-span-2 shadow-lg shadow-slate-300 p-2 px-6 rounded-2xl">
            <h2 className="text-3xl mt-4 text-primary-400 text-center font-bold">
              Psychiatrist Joining Form - Professional Details
            </h2>
            <div className="grid grid-cols-2 gap-2 my-10">
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Degree"
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
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
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
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
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
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
                  placeholder="Year of graduation"
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
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
                  placeholder="Total (yrs) of Experience"
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
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
                  className="block mb-2 font-medium text-gray-700"
                >
                  Upload Degree
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
                />
                <p className="text-gray-500 text-sm mt-2">
                  Please upload your degree in PDF format.
                </p>
              </div>

              <div>
                <label
                  htmlFor="fileInput"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Upload Degree
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
                />
                <p className="text-gray-500 text-sm mt-2">
                  Please upload your degree in PDF format.
                </p>
              </div>
              <div>
                <label
                  htmlFor="fileInput"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Upload Degree
                </label>

                <input
                  type="file"
                  id="fileInput"
                  name="fileInput"
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
                />
                <p className="text-gray-500 text-sm mt-2">
                  Please upload your degree in PDF format.
                </p>
              </div>
              <div className="mt-8">
                <input
                  type="Number"
                  placeholder="Current Salary"
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
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
                  className="w-full rounded-xl border-2 border-primary-300 outline-none px-4 py-2.5"
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
            <div className=" text-center">
              <button
                type="submit"
                className="bg-primary-300 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-primary-500"
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
          <div className="text-center mt-2 text-green-600">
            Form submitted successfully!
          </div>
        )}
      <img
        src={Bubble}
        alt="Bottom Right"
        className="absolute bottom-0 right-0 transform scale-x-[-1] hidden xl:block"
      />
    </div>
  );
};

export default PsychiatristJoiningForm;
