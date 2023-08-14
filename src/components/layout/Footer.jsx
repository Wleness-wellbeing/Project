import React from "react";
import {
  iconFacebook,
  iconInstagram,
  iconLinkedin,
  iconTwitter,
  iconWhatsapp,
  logoTransparent,
} from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  footerExplore,
  footerFrequentIssues,
  footerQuickLinks,
  serviceMenuPages,
  socialLinks,
} from "../../data/navigation";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* ========== Footer ========== */}
      <footer className="bg-[#8EE5DC] pt-14 pb-10 border-b-[1px] font-medium">
        <div className="container mx-auto">
          <div>
            <img src={logoTransparent} alt="" className="w-44 xl:w-64" />
          </div>
          <div className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:grid-cols-5 xl:pt-12 xl:pb-0">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Location</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="mr-3" />
                  <span className="font-medium">
                    1, DLF Phase 5, Sec 43, Gurgaon, 122022.
                  </span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faGlobe} className="mr-3" />
                  <span className="font-medium">www.wleness.com</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-3" />
                  <span className="font-medium">+91 8764387421</span>
                </li>
              </ul>
            </div>
            <div className="lg:pl-7">
              <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
              <ul className="space-y-1">
                {serviceMenuPages.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:pl-8">
              <h4 className="text-2xl font-semibold mb-6">Explore</h4>
              <ul className="space-y-1">
                {footerExplore.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-1">
                {footerQuickLinks.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-6">Frequent Issues</h4>
              <ul className="space-y-1">
                {footerFrequentIssues.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link to={value[1]}>{value[0]}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex mt-4 xl:mt-0 lg:justify-end">
          {socialLinks.map((value, i) => {
            return (
              <Link to={value[1]} key={i}>
                <img src={value[0]} alt="whatsapp" className="w-10" />
              </Link>
            );
          })}
        </div>
      </footer>
      <p className="text-center bg-[#8EE5DC] py-3 font-medium">
        @2023 Wleness || All Rights Reserved
      </p>
    </>
  );
}
