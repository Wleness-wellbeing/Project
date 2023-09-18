import { React, useState } from "react";
import { Link } from "react-router-dom";
import JoinUs from "../JoinUs";
// Data
import { logo } from "../../assets";
// Components
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import useToken from "../../utils/useToken";

function Navbar() {
  const [userName, setUserName] = useState("User");
  const [openJoinUs, setJoinUsModal] = useState(false);
  const { token, setToken } = useToken();

  // try {
  //   const response = axios.get(USER_PROFILE_URI, {
  //     Authorization: "Bearer" + token,
  //   });
  //   const res = response.data;
  //   if (res.status == "success") {
  //     res.access_token && setToken(res.access_token);
  //     setUserName(res.user_name);
  //   }
  // } catch (error) {
  //   console.error(error);
  // }

  const toggleJoinUs = () => {
    setJoinUsModal(!openJoinUs);
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
          <DesktopNavbar
            token={token}
            toggleJoinUs={toggleJoinUs}
            userName={userName}
          />

          {/* Mobile Menu */}
          <MobileNavbar
            token={token}
            toggleJoinUs={toggleJoinUs}
            userName={userName}
          />
        </div>
      </nav>
      <JoinUs isOpen={openJoinUs} onClose={toggleJoinUs} />
    </>
  );
}

export default Navbar;
