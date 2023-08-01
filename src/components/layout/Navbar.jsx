import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import JoinUs from "../JoinUs";
// Data
import { logo } from "../../assets";
import { activities } from "../../data";

function Navbar() {
  // Activities Submenu
  const [isJoinUsOpen, setJoinUsOpen] = useState(false);

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
      <nav className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="w-32 xl:w-48 md:w-56 lg:w-64">
          <Link to="/" className="outline-none">
            <img src={logo} alt="" className="w-full object-cover" />
          </Link>
        </div>

        {/* Menu list */}
        <ul className="hidden justify-end space-x-6 xl:space-x-5 xl:flex">
          <li>
            <Link to="/about-us" className="menu-link">
              About
            </Link>
          </li>
          <li className="group relative inline-block">
            <Link to="/services" className="menu-link">
              Services <FontAwesomeIcon icon={faAngleDown} />
            </Link>

            {/* Submenu */}
            <ul className="absolute hidden w-60 z-10 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
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
                  to="/services/psychiatry"
                  className="menu-link inline-block py-2"
                >
                  Psychiatry
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
          <li className="group relative inline-block">
            <Link to="/issues" className="menu-link">
              Issues <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            {/* Submenu */}
            <ul className="absolute hidden z-20 w-60 rounded-xl border-[1px] border-slate-100 bg-white px-6 py-4 shadow-md group-hover:block">
              <li>
                <Link to="/depression" className="menu-link inline-block py-2">
                  Depression
                </Link>
              </li>
              <li>
                <Link to="/anxiety" className="menu-link inline-block py-2">
                  Anxiety
                </Link>
              </li>
              <li>
                <Link to="/adult-adhd" className="menu-link inline-block py-2">
                  Adult ADHD
                </Link>
              </li>
              <li>
                <Link to="/stress" className="menu-link inline-block py-2">
                  Stress
                </Link>
              </li>
              <li>
                <Link to="/feeling-low" className="menu-link inline-block py-2">
                  Feeling Low
                </Link>
              </li>
            </ul>
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
                  to="/brain-exercise"
                  className="menu-link inline-block py-2"
                >
                  Brain Exercise
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/blogs" className="menu-link">
              Blogs
            </Link>
          </li>
        </ul>

        {/* Authentication */}
        <div className="hidden xl:flex xl:items-center">
          <button
            onClick={() => setJoinUsOpen(true)}
            className="menu-link mr-2 text-primary-400 !font-bold border-2 px-4 border-primary-400 hover:bg-primary-400 hover:text-white transition-all !py-1.5 rounded-full"
          >
            Join Us
          </button>
          <Link
            to="/patient-signup"
            className="btn-primary !w-fit !rounded-full !bg-primary-400 hover:!bg-primary-300 !py-2 font-medium"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button className="xl:hidden">
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </button>
      </nav>
      <JoinUs isOpen={isJoinUsOpen} onClose={() => setJoinUsOpen(false)} />
    </>
  );
}

export default Navbar;
