import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import JoinUs from "../JoinUs";
// Data
import { logo } from "../../assets";
import {
  activitiesMenuPages,
  footerFrequentIssues,
  menuPages,
  serviceMenuPages,
} from "../../data/navigation";
// Components
import MenuLink from "../links/MenuLink";
import Dropdown from "../links/Dropdown";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* ========== Navigation Bar ========== */}
      <nav className="sticky left-0 right-0 top-0 z-40 bg-white">
        <div className="container relative mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className=" w-32 pt-2 md:w-56 lg:w-64 xl:w-48">
            <Link to="/" className="outline-none">
              <img src={logo} alt="" className="w-full object-cover" />
            </Link>
          </div>

          {/* Menu list */}
          <ul
            className={
              "absolute right-4 top-20 w-56 justify-end rounded-xl border-[1px] border-slate-100 bg-white p-6 shadow-md xl:static xl:flex xl:w-fit xl:space-x-5 xl:border-none xl:p-0 xl:shadow-none" +
              (isMenuOpen ? " block " : "  hidden xl:flex ")
            }
          >
            <MenuLink url="/about-us" text="About Us" />
            <Dropdown url="" text="Services" pages={serviceMenuPages} />
            <MenuLink url="/experts" text="Experts" />
            <MenuLink url="/internship" text="Internship" />
            <MenuLink url="/blogs" text="Blogs" />
            <Dropdown
              url="/activities"
              text="Activities"
              pages={activitiesMenuPages}
            />
            <Dropdown url="/self-care" text="Self Care" pages={menuPages} />
          </ul>

          {/* Authentication */}
          <div className="hidden xl:flex xl:items-center">
            <button
              onClick={handleOpenModal}
              className="menu-link mr-2 rounded-full border-2 border-primary-400 !py-1.5 px-4 !font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white"
            >
              Join Us
            </button>
            <Link
              to="/signup"
              className="btn-primary !w-fit !rounded-full !bg-primary-400 !py-2 font-semibold hover:!bg-primary-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button className="xl:hidden" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-3xl" />
          </button>
        </div>
      </nav>
      <JoinUs isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

export default Navbar;
