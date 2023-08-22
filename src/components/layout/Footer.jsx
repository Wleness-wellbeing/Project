import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  footerAboutWleness,
  footerOurServices,
  footerFocusAreas,
  footerOurExperts,
  socialLinks,
  footerLocation,
} from "../../data/navigation";
import { Link } from "react-router-dom";
import { startUpIndiaLogo } from "../../assets";

export default function Footer() {
  return (
    <>
      {/* ========== Footer ========== */}
      <footer className="border-b-[1px] bg-[#E9FBF9] font-medium">
        <div className="container mx-auto py-12">
          <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-5 xl:pb-0">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Location</h2>
              <ul className="space-y-4">
                {footerLocation.map((value, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={value[1]}
                        className="flex items-center"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={value[2]} className="mr-3" />
                        <span className="font-medium">{value[0]}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:pl-7">
              <h2 className="mb-4 text-xl font-semibold">About Wleness</h2>
              <ul className="space-y-1">
                {footerAboutWleness.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:pl-3">
              <h4 className="mb-4 text-xl font-semibold">Our Services</h4>
              <ul className="space-y-1">
                {footerOurServices.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Focus Area's</h4>
              <ul className="space-y-1">
                {footerFocusAreas.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-semibold">Our Experts</h4>
              <ul className="space-y-1">
                {footerOurExperts.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
              <h4 className="my-2 text-xl font-semibold">Library</h4>
              <ul className="space-y-1">
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="">Assessments</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto pb-4">
          <div className="pb-2 text-right">
            <Link to="/privacy-policy" className="text-sm">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link to="/terms-and-conditions" className="text-sm">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <img src={startUpIndiaLogo} alt="" />
            </div>
            <div className="flex gap-x-1">
              {socialLinks.map((value, i) => {
                return (
                  <Link to={value[1]} key={i} target="_blank">
                    <img src={value[0]} alt="whatsapp" className="h-7 w-7" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <p className="pb-5 pt-3 text-center text-sm font-medium">
          @2023 Wleness || All Rights Reserved
        </p>
      </footer>
    </>
  );
}
