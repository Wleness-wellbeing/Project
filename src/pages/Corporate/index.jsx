import React from "react";
import {
  blueDots1,
  blueDots2,
  blueFlower,
  circleArt,
  corporateHeader,
  employeeTriangleHub,
} from "../../assets";
import { ourOfferings, prioritizeCorporate } from "../../data/corporate";

export default function index() {
  return (
    <>
      <header className="py-6 relative overflow-x-clip">
        <div className="container mx-auto">
          <h1 className="subheading text-center mb-2">
            <span>Foster a </span>
            <span className="text-[#0A99D6]">Healthy and thriving work </span>
            <span>environment with Wleness</span>
          </h1>
          <div className="lg:w-4/5 mx-auto pb-2 text-center">
            <img src={corporateHeader} alt="" className="w-full mb-4" />
            <div>
              <p className="lg:px-24 font-semibold text-xl mb-6">
                Create a Mental Health-Friendly Work Environment with Customized
                Solutions for Your Unique Workplace
              </p>

              <button className="btn-one !bg-[#0A99D6] hover:!bg-[#0F7CAB]">
                Join Now
              </button>
            </div>
          </div>
        </div>
        {/* Dots  */}
        <img
          src={blueDots1}
          alt=""
          className="w-44 lg:w-96 absolute -bottom-6 lg:bottom-10 -left-20 z-10"
        />
        <img
          src={blueDots2}
          alt=""
          className="w-44 lg:w-96 absolute top-36 lg:top-20 -right-20 z-10"
        />
      </header>

      <section className="container mx-auto pt-6 lg:py-6">
        <h2 className="subheading text-center lg:px-24 mb-4 lg:mb-8">
          <span>Why prioritize </span>
          <span className="text-[#0A99D6]">Corporate Well-being</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {prioritizeCorporate.map((value, i) => {
            return (
              <figure key={i}>
                <div className="mb-2 lg:mb-4">
                  <img src={value.image} alt="" className="w-full" />
                </div>
                <figcaption>
                  <p className="font-semibold text-xs md:text-sm lg:text-base text-justify px-2">
                    {value.desc.map((element, j) => {
                      return element.status ? (
                        <span className="text-[#0A99D6]">{element.text}</span>
                      ) : (
                        <span>{element.text}</span>
                      );
                    })}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="text-center py-5">
          <button className="btn-one !bg-[#0A99D6] hover:!bg-[#0F7CAB]">
            Join Us Now
          </button>
        </div>
      </section>

      <section>
        <div className="relative overflow-x-clip">
          <div className="container mx-auto mb-8 lg:py-6">
            <h2 className="text-xl lg:text-5xl font-bold text-center py-4 grid">
              <span className="text-[#0A99D6] mr-2">
                Navigating from Burnout to Breakthrough:
              </span>
              <span>
                Prioritizing Employee Well-being Amid Rising Organizational
                Stress
              </span>
            </h2>

            <p className="font-medium text-lg lg:text-xl text-center py-2 lg:px-8">
              Nourishing employee health and happiness helps to create a recipe
              for success and unleashes the full potential of a thriving
              workforce. Let our Workplace Wleness reveal the path to a better
              workplace for your team.
            </p>
          </div>

          <img
            src={blueFlower}
            alt=""
            className="absolute -top-24 lg:-top-44 -right-20 w-32 lg:w-72"
          />

          <img
            src={blueFlower}
            alt=""
            className="absolute -bottom-44 -left-20 w-32 lg:w-72"
          />
        </div>

        <div className="container mx-auto">
          <h2 className="subheading text-center grid">
            <span>Comprehensive Employee</span>
            <span className="text-[#0A99D6]"> Well-being Hub</span>
          </h2>

          <div className="lg:flex items-center pb-6">
            <div className="lg:w-1/2 lg:order-2 py-4 lg:py-0">
              <img
                src={employeeTriangleHub}
                alt=""
                className="w-4/5 mx-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:order-1 text-center">
              <p className="font-semibold text-sm lg:text-base lg:px-8 pb-6">
                Discover a seamless solution for your employee well-being needs
                with our integrated corporate wellness platform. Equipped with
                state-of-the-art features, it offers a holistic approach to
                caring for your workforce. From physical wellness to mental
                health, our platform ensures all aspects of employee well-being
                are addressed effectively. Elevate productivity, satisfaction,
                and engagement through this cutting-edge tool, designed to meet
                your company's unique requirements.
              </p>
              <button className="btn-one !bg-[#0A99D6] hover:!bg-[#0F7CAB]">
                Explore the Packages Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 relative overflow-x-clip">
        <div className="container mx-auto">
          <h2 className="subheading text-center lg:px-24">
            <span className="text-[#0A99D6]">Our Offerings </span>To Your
            Employees
          </h2>

          {/* <div className="bg-[#FFE0F6] p-2 lg:p-4 grid grid-cols-4 gap-2 lg:gap-6 my-6 lg:my-10 rounded-xl"> */}
          <div className="bg-blue-100 p-2 lg:p-4 grid grid-cols-4 gap-2 lg:gap-6 my-6 lg:my-10 rounded-xl">
            {ourOfferings.map((value, i) => {
              return (
                <div className="relative z-20 group" key={i}>
                  <div className="bg-white rounded-xl group-hover:text-[#0A99D6] lg:py-4 p-1 lg:px-8 grid place-items-center lg:text-lg text-xs font-semibold text-center cursor-pointer z-20 h-full group-hover:rounded-none">
                    <span>{value}</span>
                  </div>
                  <div className="bg-[#0A99D6] absolute transition-all rounded-xl inset-0 group-hover:-inset-y-6 group-hover:lg:-inset-y-10 -z-10"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="btn-one !bg-[#0A99D6] hover:!bg-[#0F7CAB]">
              Book Us Now
            </button>
          </div>
        </div>

        <img
          src={circleArt}
          alt=""
          className="absolute -bottom-24 lg:bottom-0 -right-80"
        />
        <img
          src={circleArt}
          alt=""
          className="absolute -top-56 lg:-top-[380px] -left-80"
        />
      </section>
    </>
  );
}
