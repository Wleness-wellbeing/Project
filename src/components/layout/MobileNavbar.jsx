import React, { useEffect, useState } from "react";
import {
  resourcesSubpages,
  seldCareSubpages,
  serviceMenuPages,
} from "../../data/navigation";
import MobileMenuLink from "../links/MobileMenuLink";
import MobileDropdown from "../links/MobileDropdown";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function MobileNavbar({ toggleJoinUs }) {
  const [isMenuOpen, setMenuOpen] = useState(false); // Menu Modal

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close navigation bar on clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest(".navbar")) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <div
        className={`fixed inset-0 xl:hidden xl:w-full ${
          isMenuOpen ? " block" : " hidden"
        }`}
      >
        <div className="navbar flex h-full w-56 flex-col  border-slate-100 bg-white shadow-xl xl:h-auto xl:w-full xl:flex-row xl:shadow-none">
          <ul
            className={
              "divide-y-2 border-[1px] xl:flex xl:h-fit xl:w-fit xl:space-x-5 xl:divide-y-0 xl:self-center xl:border-none xl:shadow-none"
            }
          >
            <MobileMenuLink url="/" text="Home" />
            <MobileDropdown url="" text="Services" pages={serviceMenuPages} />
            <MobileDropdown
              url="/self-care"
              text="Self Care"
              pages={seldCareSubpages}
            />
            <MobileDropdown url="" text="Resources" pages={resourcesSubpages} />
            <MobileMenuLink url="/about-us" text="About Us" />
            <MobileMenuLink url="/internship" text="Internship" />
          </ul>

          {/* Authentication */}
          <div className="mt-6 flex flex-col items-center space-y-3 px-4 lg:flex-row lg:px-0 xl:w-fit xl:space-y-0">
            <button
              onClick={toggleJoinUs}
              className="mr-2 !w-full rounded-full border-2 border-primary-400 !py-1.5 px-4 !font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white xl:!w-fit"
            >
              Join Us
            </button>
            <Link
              to="/signup"
              className="btn-primary !w-full !rounded-full !bg-primary-400 !py-2.5 !text-base font-semibold hover:!bg-primary-300 xl:!w-fit xl:!py-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Hamburger Icon */}
      <button className="xl:hidden">
        {isMenuOpen ? (
          <FontAwesomeIcon
            icon={faClose}
            className="text-3xl"
            onClick={() => closeMenu()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className="text-3xl"
            onClick={() => openMenu()}
          />
        )}
      </button>
    </>
  );
}
