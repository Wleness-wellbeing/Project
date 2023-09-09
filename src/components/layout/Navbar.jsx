import { React, useState } from "react";
import { Link } from "react-router-dom";
import JoinUs from "../JoinUs";
// Data
import { logo } from "../../assets";
// Components
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [openJoinUs, setJoinUsModal] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleJoinUs = () => {
    setJoinUsModal(!openJoinUs);
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
          <div className="w-40 py-2 md:w-56 lg:w-64 xl:w-48 xl:py-3">
            <Link to="/" className="outline-none">
              <img src={logo} alt="" className="w-full object-cover" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <DesktopNavbar toggleJoinUs={toggleJoinUs} />

          {/* Mobile Menu */}
          <MobileNavbar toggleJoinUs={toggleJoinUs} />
        </div>
      </nav>
      <JoinUs isOpen={openJoinUs} onClose={toggleJoinUs} />
    </>
  );
}

export default Navbar;
