import React, { useEffect } from "react";
import { avatars } from "../../data/dashboard";
import { USER_APPOINTMENTS, USER_PROFILE_URI } from "../../data/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile({ token }) {
  const navigate = useNavigate();

  // Redirect user if loggedin
  if (token == null || token == "" || token == undefined) {
    // Navigate to login
    useEffect(() => {
      navigate("/login", {
        state: {
          successMessage: "Please Login",
        },
      });
    }, []);
    return null;
  }

  // const [profileDetails, setProfileDetails] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   image: "",
  // });
  // const [loading, setLoading] = useState(true);

  // let login_type = localStorage.getItem("login_type");
  // let data, url;
  // if (login_type == "google") {
  //   data = localStorage.getItem("email");
  //   url = USER_APPOINTMENTS + "/" + data;
  // } else {
  //   data = localStorage.getItem("phone");
  //   url = USER_APPOINTMENTS + "/" + data;
  // }

  let wleness_user = JSON.parse(localStorage.getItem("wleness_user"));
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (wleness_user.type == "expert") {
    useEffect(() => {
      navigate("/doctor/dashboard");
    }, []);
  }
  // useEffect(() => {
  //   // Make a GET request using Axios
  //   axios
  //     .get(url, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((response) => {
  //       if (response.status == 200) {
  //         setProfileDetails({
  //           name: response.data.name,
  //           phone: response.data.phone,
  //           email: response.data.email,
  //           image: response.data.image,
  //         });
  //         setLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       // Handle errors
  //       console.error("Error fetching doctor details:", error);
  //     });
  // }, []);

  // if (loading) {
  //   return <div className="mb-5 text-center">Loading...</div>;
  // }

  return (
    <section className="mx-auto flex h-full flex-col justify-center lg:w-96">
      <h2 className="text-center text-2xl font-semibold text-primary-400">
        Edit Your Avatar
      </h2>
      <div className="grid grid-cols-3 pt-4">
        {avatars.map((value, i) => {
          return (
            <div
              key={i}
              className="mx-auto grid w-fit cursor-pointer place-items-center rounded-full"
            >
              <img
                src={value}
                className="block w-24 rounded-full border-red-500 hover:border-4"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="space-y-3 pt-4">
        <input
          className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
          type="text"
          name="name"
          id="name"
          placeholder="Enter You Username"
          defaultValue={userInfo.name}
        />
        <input
          className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
          type="tel"
          maxLength={10}
          name="phone"
          id="phone"
          placeholder="91******78"
          defaultValue={userInfo.phone}
        />
        <input
          className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
          type="text"
          name="email"
          id="email"
          placeholder="demo@gmail.com"
          defaultValue={userInfo.email}
        />
        <select
          name="gender"
          id="gender"
          className="w-full rounded-lg border-2 border-slate-400  py-2"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="pt-4 ">
        <button className="btn-one !w-full !rounded-lg px-6 py-3">
          Update
        </button>
      </div>
    </section>
  );
}
