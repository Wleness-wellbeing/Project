import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  footerAboutWleness,
  footerOurServices,
  footerFocusAreas,
  footerOurExperts,
  socialLinks,
  footerLocation,
} from "../../data/navigation";
import { Link } from "react-router-dom";
import { logoIAF, logoISO, startUpIndiaLogo } from "../../assets";

export default function Footer() {
  return (
    <>
      {/* ========== Footer ========== */}
      <footer className="border-b-[1px] bg-[#E9FBF9] font-medium">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:gap-4 sm:space-y-0 lg:grid-cols-5 xl:pb-0">
            <div className="2xl:pr-5">
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                Location
              </h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLocation.map((value, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={value[1]}
                        className="flex items-center text-sm md:text-base"
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
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                About Wleness
              </h4>
              <ul className="md:space-y-1">
                {footerAboutWleness.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-sm md:text-base" to={value[1]}>
                        {value[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:pl-3">
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                Our Services
              </h4>
              <ul className="md:space-y-1">
                {footerOurServices.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-sm md:text-base" to={value[1]}>
                        {value[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                Situations
              </h4>
              <ul className="md:space-y-1">
                {footerFocusAreas.map((value, index) => {
                  return (
                    <li key={index}>
                      <Link className="text-sm md:text-base" to={value[1]}>
                        {value[0]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-span-2 grid grid-cols-2 lg:col-span-1 lg:grid-cols-none">
              <div>
                <h4 className="mb-2 text-lg font-semibold md:mb-4 lg:text-xl">
                  Our Experts
                </h4>
                <ul className="md:space-y-1">
                  {footerOurExperts.map((value, index) => {
                    return (
                      <li key={index}>
                        <Link className="text-sm md:text-base" to={value[1]}>
                          {value[0]}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="my-2 text-xl font-semibold">Library</h4>
                <ul className="md:space-y-1">
                  <li>
                    <Link className="text-sm md:text-base" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link className="text-sm md:text-base" to="">
                      Assessments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto pb-1 lg:pb-4">
          <div className="pb-2 text-center lg:text-right">
            <Link to="/privacy-policy" className="text-sm">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link to="/terms-and-conditions" className="text-sm">
              Terms & Conditions
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="gap-x-4 lg:flex">
              <img
                src={startUpIndiaLogo}
                alt=""
                className="w-32 object-contain"
              />
              <img src={logoIAF} alt="" className="w-14 object-contain" />
              <img src={logoISO} alt="" className="w-10 object-contain" />
            </div>
            <div className="flex items-center gap-x-1">
              {socialLinks.map((value, i) => {
                return (
                  <Link to={value[1]} key={i} target="_blank">
                    <img
                      src={value[0]}
                      alt="whatsapp"
                      className="h-6 w-6 lg:h-7 lg:w-7"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <p className="pb-5 text-center text-sm font-medium lg:pt-3">
          @2023 Wleness || All Rights Reserved
        </p>
      </footer>
    </>
  );
}
