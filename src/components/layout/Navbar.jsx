import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import JoinUs from "../JoinUs";
// Data
import { logo } from "../../assets";
import MenuLink from "../links/MenuLink";
import SubmenuLink from "../links/SubmenuLink";
import {
  activitiesMenuPages,
  menuPages,
  serviceMenuPages,
} from "../../data/navigation";

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
      <nav className="sticky top-0 left-0 right-0 bg-white z-40">
        <div className="container mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <div className=" pt-2 w-32 xl:w-48 md:w-56 lg:w-64">
            <Link to="/" className="outline-none">
              <img src={logo} alt="" className="w-full object-cover" />
            </Link>
          </div>

          {/* Menu list */}
          <ul
            className={
              "absolute xl:static w-56 bg-white top-20 right-4 justify-end xl:space-x-5 xl:flex p-6 rounded-xl border-[1px] border-slate-100 xl:p-0 shadow-md xl:shadow-none xl:border-none xl:w-fit" +
              (isMenuOpen ? " block " : "  hidden xl:flex ")
            }
          >
            <MenuLink url="/about-us" text="About Us" />
            <SubmenuLink
              url="javascript:void()"
              text="Services"
              pages={serviceMenuPages}
            />
            <MenuLink url="/experts" text="Experts" />
            <MenuLink url="/internship" text="Internship" />
            <MenuLink url="/blogs" text="Blogs" />
            <SubmenuLink
              url="/activities"
              text="Activities"
              pages={activitiesMenuPages}
            />
            <SubmenuLink
              url="javascript:void()"
              text="Pages"
              pages={menuPages}
            />
          </ul>

          {/* Authentication */}
          <div className="hidden xl:flex xl:items-center">
            <button
              onClick={handleOpenModal}
              className="menu-link mr-2 text-primary-400 !font-semibold border-2 px-4 border-primary-400 hover:bg-primary-400 hover:text-white transition-all !py-1.5 rounded-full"
            >
              Join Us
            </button>
            <Link
              to="/signup"
              className="btn-primary !w-fit !rounded-full !bg-primary-400 hover:!bg-primary-300 !py-2 font-semibold"
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
