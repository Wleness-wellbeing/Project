import React, { useEffect, useState } from "react";
import {
  expertsIconAppointments,
  expertsIconDp,
  expertsIconTodayPatients,
  expertsIconTotalPatients,
  palmWave,
} from "../../assets";
import { EXPERTS_PROFILE_URI } from "../../data/api";
import axios from "axios";
import UpdateExpertSlots from "../../components/Admin/UpdateExpertSlots";
import { useNavigate } from "react-router-dom";
import useLogout from "../../components/Auth/useLogout";

export default function DoctorDashboard({ token, setToken }) {
  const { logout } = useLogout();
  const [loading, setLoading] = useState(true); // set loading screen
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ======== Get user appointments and details ===========
  let wleness_user = JSON.parse(localStorage.getItem("wleness_user"));

  if (
    token == null ||
    token == "" ||
    token == undefined ||
    wleness_user.type != "expert"
  ) {
    // Navigate to login
    useEffect(() => {
      navigate("/experts-login", {
        state: {
          successMessage: "Please Login",
        },
      });
    }, []);
    return null;
  }

  let url = EXPERTS_PROFILE_URI + wleness_user.user_id;
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setUser(response.data);
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle errors
        if (error.response.status == 401) {
          // Logout and redirect user
          logout();
          useEffect(() => {
            navigate("/experts-login", {
              state: {
                successMessage: "Session Expired Please Login",
              },
            });
          }, []);
          return null;
        } else {
          console.error(error);
        }
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <section className="ml gap-5 lg:flex">
      <div className="lg:w-[65%]">
        <div className="flex text-xl lg:text-3xl">
          <h1 className="py-2 font-bold text-teal-500 lg:mb-2 lg:py-6">
            <span>Hello </span>
            <span className="font-bold text-teal-500">
              {user ? user.name : "User"}
            </span>
          </h1>
          <img
            src={palmWave}
            alt="Your Image Description"
            className="h-8 w-8 object-contain lg:h-12 lg:w-12 "
          />
        </div>
        {/* Doctor Profile */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center rounded-2xl bg-teal-100 px-5 py-6">
            <img src={expertsIconTotalPatients} alt="" className="mr-4 w-8" />
            <div>
              <h4 className="font-semibold">Total Patients</h4>
              <h2 className="text-2xl font-semibold">
                <span>32</span>
                <span>+</span>
              </h2>
              <h3 className="text-sm font-medium">Till Today</h3>
            </div>
          </div>
          <div className="flex items-center rounded-2xl bg-teal-100 px-5 py-6">
            <img src={expertsIconTodayPatients} alt="" className="mr-4 w-8" />
            <div>
              <h4 className="font-semibold">Total Patients</h4>
              <h2 className="text-2xl font-semibold">
                <span>03</span>
              </h2>
              <h3 className="text-sm font-medium">Oct 24, 2023</h3>
            </div>
          </div>
          <div className="flex items-center rounded-2xl bg-teal-100 px-5 py-6">
            <img src={expertsIconAppointments} alt="" className="mr-4 w-8" />
            <div>
              <h4 className="font-semibold">Appointments</h4>
              <h2 className="text-2xl font-semibold">
                <span>12</span>
              </h2>
              <h3 className="text-sm font-medium">Oct 24, 2023</h3>
            </div>
          </div>
        </div>

        <div className="py-6">
          <h3 className="mb-6 text-xl font-bold">
            Update Your Available Slots
          </h3>
          <UpdateExpertSlots token={token} />
        </div>
      </div>
      <div className="p-4 lg:w-[35%]">
        <div className="mb-6 rounded-xl bg-[#FDFFE4] px-6 py-4 drop-shadow-md">
          <h5 className="mb-2 flex items-center justify-between">
            <span className="font-bold text-primary-400">
              Upcoming Appointments
            </span>
          </h5>

          <div>
            <div className="mb-3 flex justify-between font-semibold">
              <span>Patient Name</span>
              <span>Time</span>
            </div>
            <div>
              {[1, 2, 3, 4, 5].map((value, i) => (
                <div className="mb-3 flex justify-between" key={i}>
                  <div className="flex gap-3">
                    <img src={expertsIconDp} alt="" className="w-10" />
                    <div className="flex flex-col">
                      <h5 className="font-semibold text-primary-400">
                        Anamika
                      </h5>
                      <small className="-mt-1">Anxiety</small>
                    </div>
                  </div>
                  <span className="text-sm font-semibold">On Going</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-[#FDFFE4] px-6 py-4 drop-shadow-md lg:py-6">
          <h5 className="mb-2 flex items-center justify-between lg:mb-4">
            <span className="font-bold text-primary-400">
              Next Patient Details
            </span>
          </h5>

          <div className="space-y-3 lg:space-y-5">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img src={expertsIconDp} alt="" className="w-10" />
                <div className="flex flex-col">
                  <h5 className="font-semibold text-primary-400">Anamika</h5>
                  <small className="-mt-1">Anxiety</small>
                </div>
              </div>
              <span className="text-sm font-semibold">On Going</span>
            </div>

            <h5>
              <span className="block font-bold text-primary-400">
                Last Appointment
              </span>
              <small className="-mt-1 block font-semibold">
                October 15, 2023
              </small>
            </h5>

            <div>
              <h5 className="mb-1 block font-bold text-primary-400">
                Category
              </h5>

              <div className="flex flex-wrap gap-1">
                {["Panic Attack", "Anger", "Stress"].map((value, i) => (
                  <button className="rounded-lg bg-primary-300 px-4 py-1.5 text-sm text-white">
                    {value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h5 className="block font-bold text-primary-400">
                Mode of Therapy
              </h5>
              <span className="-mt-1 block text-sm font-semibold">
                Voice Call
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
