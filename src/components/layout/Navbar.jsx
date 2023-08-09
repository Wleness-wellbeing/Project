import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import JoinUs from "../JoinUs";
// Data
import { logo } from "../../assets";
import { activities, brainExercise } from "../../data";

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

  const activitiesMenu = activities.map((value, index) => {
    return (
      <li key={index}>
        <Link to={value.slug} className="menu-link inline-block py-2">
          {value.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      {/* ========== Navigation Bar ========== */}
      <nav className="sticky top-0 left-0 right-0 bg-white z-20 shadow-sm">
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
              "absolute xl:static w-72 bg-white top-20 right-4 justify-end xl:space-x-5 xl:flex p-8 xl:p-0 border-2 border-slate-200 xl:border-none xl:w-fit" +
              (isMenuOpen ? " block " : "  hidden xl:flex ")
            }
          >
            <li>
              <Link to="/about-us" className="menu-link">
                About
              </Link>
            </li>
            <li className="group relative inline-block">
              <span to="/services" className="menu-link cursor-pointer">
                Services <FontAwesomeIcon icon={faAngleDown} />
              </span>

              {/* Submenu */}
              <ul className="absolute hidden w-60 z-10 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
                <li>
                  <Link to="/issues" className="menu-link inline-block py-2">
                    Issues
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/therapy"
                    className="menu-link inline-block py-2"
                  >
                    Therapy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/psychiatrist"
                    className="menu-link inline-block py-2"
                  >
                    Psychiatrist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/musical-therapy"
                    className="menu-link inline-block py-2"
                  >
                    Musical Therapy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/couples-therapy"
                    className="menu-link inline-block py-2"
                  >
                    Couples Therapy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/self-care"
                    className="menu-link inline-block py-2"
                  >
                    Self-Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/community"
                    className="menu-link inline-block py-2"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/experts" className="menu-link">
                Experts
              </Link>
            </li>
            <li>
              <Link to="/internship" className="menu-link">
                Internship
              </Link>
            </li>
            <li className="group relative inline-block">
              <Link to="/activities" className="menu-link">
                Activities <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              {/* Submenu */}
              <ul className="absolute hidden w-60 z-20 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
                {activitiesMenu}
                <li>
                  <Link
                    to={brainExercise.slug}
                    className="menu-link inline-block py-2"
                  >
                    {brainExercise.name}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blogs" className="menu-link">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/corporate" className="menu-link">
                Corporate
              </Link>
            </li>
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
