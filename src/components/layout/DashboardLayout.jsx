import React, { useEffect, useState } from "react";
import AdminSideBar from "../admin/AdminSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { palmWave } from "../../assets";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout({ children, token }) {
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
  const wleness_user = JSON.parse(localStorage.getItem("wleness_user"));
  if (wleness_user.type != "expert") {
    useEffect(() => {
      navigate("/");
    }, []);
    return null;
  }

  // Handle Navigation bar
  const [isMenuOpen, setMenuOpen] = useState(false); // Menu Modal

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <main className="justify-end md:flex">
      <AdminSideBar
        user={userInfo}
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />

      <div className="px-4 md:w-[80%] lg:px-8">
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <button className="mr-3 lg:hidden">
            {isMenuOpen ? (
              <FontAwesomeIcon
                icon={faClose}
                className="text-3xl text-primary-400"
                onClick={() => closeMenu()}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-2xl text-primary-400"
                onClick={() => openMenu()}
              />
            )}
          </button>
        </div>
        {children}
      </div>
    </main>
  );
}
