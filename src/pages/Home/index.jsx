import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faCaretLeft,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  headerMobile,
  headerDesktop,
  iconCommunity,
  iconEasyAccess,
  iconEffective,
  iconSafe,
  iconSecure,
  iconInternshipAnnouncement,
  iconInternshipBoy,
  iconInternshipBriefcase,
  iconInternshipCheck,
  iconInternshipHandshake,
  iconInternshipYout,
  testimonial1,
  community,
  doodle1,
  doodle2,
  iconCommitment,
  iconExperience,
  iconFacilities,
  leaf1,
  leaf2,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  requestCallback,
  bigLeaf1,
  bigLeaf2,
  smallLeaf1,
  smallLeaf2,
  homeAnxiety,
  homeAdsd,
  homeConfusion,
  homeDepression,
  homeHyperTension,
  homeStress,
} from "../../assets";
import Assessment from "../../components/Assessment";

function Home() {
  return (
    <>
      {/* ========== Header Bar ========== */}
      <header className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:bg-primary-50/30 lg:py-6 lg:flex-row 2xl:justify-between 2xl:py-8">
        <div className="lg:order-2 xl:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0 lg:translate-x-20 lg:translate-y-10">
          {/* Desktop Image */}
          <img
            src={headerDesktop}
            alt=""
            className="w-full object-cover hidden lg:block scale-[1.1] xl:scale-[1.3]"
          />
          {/* Mobile Image */}
          <img
            src={headerMobile}
            alt=""
            className="w-full object-cover lg:hidden"
          />
        </div>
        <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 xl:w-[55%] xl:pl-4 2xl:pl-10 bg-primary-50/30 lg:bg-transparent -m-5 lg:m-0 p-5 rounded-3xl lg:rounded-none">
          <hgroup className="md:mb-3">
            <h1 className="text-[1.3rem] sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-[2.5rem] font-quicksand font-bold heading-primary pb-1">
              Partnering Your Well Being
            </h1>
          </hgroup>
          <p className="mb-5 font-[600] lg:text-lg !leading-6 md:mb-10 text-base text-justify">
            We fuse the powers of self-nurturing, expert guidance, and social
            connectivity to offer you a mental health care experience that is
            life.
          </p>
          <button className="btn-one !w-fit block mx-auto lg:mx-0">
            Schedule an appointment
          </button>
        </div>
      </header>
      {/* ========== Issues ========== */}
      <section>
        <div className="container mx-auto pb-6 sm:pt-6 lg:pb-14 2xl:py-10">
          <h2 className="subheading sm:pb-0 xl:pb-1">
            <span className="heading-primary">Seeking Support?</span>
          </h2>
          <p className="para">
            Discover engaging mental health resources, including articles,
            videos, self-assessments, and interactive
          </p>
        </div>
        {/* Issues */}
        <div className="bg-gradient-to-br from-primary-10 to-white pb-6 lg:pb-10 font-quicksand">
          <div className="container mx-auto grid gap-4 px-4 py-6 grid-cols-2 lg:grid-cols-3 lg:py-12 lg:gap-8 xl:gap-10 xl:py-16 2xl:pb-10">
            <div className="rounded-2xl bg-[#FAFCE7] p-2 lg:py-6 shadow-md">
              <img src={homeStress} alt="" className="issue-card" />
              <h4 className="text-center text-lg lg:text-3xl font-semibold">
                Stress
              </h4>
            </div>
            <div className="rounded-2xl bg-[#FAFCE7] p-2 lg:py-6 shadow-md">
              <img src={homeConfusion} alt="" className="issue-card" />
              <h4 className="text-center text-lg lg:text-3xl font-semibold">
                Confusion
              </h4>
            </div>
            <div className="rounded-2xl p-2 bg-[#FAFCE7] py-4 lg:py-6 shadow-md">
              <img src={homeAnxiety} alt="" className="issue-card" />
              <h4 className="text-center text-lg lg:text-3xl font-semibold">
                Anxiety
              </h4>
            </div>
            <div className="rounded-2xl p-2 bg-[#FAFCE7] py-4 lg:py-6 shadow-md">
              <img src={homeDepression} alt="" className="issue-card" />
              <h4 className="text-center text-lg lg:text-3xl font-semibold">
                Depression
              </h4>
            </div>
            <div className="rounded-2xl p-2 bg-[#FAFCE7] py-4 lg:py-6 shadow-md">
              <img src={homeHyperTension} alt="" className="issue-card" />
              <h4 className="text-center text-lg lg:text-3xl font-semibold">
                Hypertension
              </h4>
            </div>
            <div className="rounded-2xl p-2 bg-[#FAFCE7] py-4 lg:py-6 shadow-md">
              <img src={homeAdsd} alt="" className="issue-card" />
              <h4 className="text-center text-lg lg:text-3xl font-semibold">
                ADSD
              </h4>
            </div>
          </div>
          <div className="text-center">
            <button className="btn-one">Get Started</button>
          </div>
        </div>
      </section>
      {/* ========== Objectives ========== */}
      <section className="bg-primary-100/20">
        <div className="container mx-auto py-6 lg:py-10 grid grid-cols-5 gap-1 !pl-1">
          <figure className="self-center">
            <img
              src={iconSafe}
              alt=""
              className="mx-auto mb-2 h-6 w-6 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16"
            />
            <figcaption>
              <h4 className="text-center text-xs font-medium md:text-xl lg:text-2xl">
                Safe
              </h4>
            </figcaption>
          </figure>
          <figure className="self-center">
            <img
              src={iconSecure}
              alt=""
              className="mx-auto mb-2 h-6 w-6 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16"
            />
            <figcaption>
              <h4 className="text-center text-xs font-medium md:text-xl lg:text-2xl">
                Secure
              </h4>
            </figcaption>
          </figure>
          <figure className="self-center">
            <img
              src={iconEffective}
              alt=""
              className="mx-auto mb-2 h-6 w-6 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16"
            />
            <figcaption>
              <h4 className="text-center text-xs font-medium md:text-xl lg:text-2xl">
                Effective
              </h4>
            </figcaption>
          </figure>
          <figure className="self-center">
            <img
              src={iconEasyAccess}
              alt=""
              className="mx-auto mb-2 h-6 w-6 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16"
            />
            <figcaption>
              <h4 className="text-center text-xs font-medium md:text-xl lg:text-2xl">
                Easy Access
              </h4>
            </figcaption>
          </figure>
          <figure className="self-center">
            <img
              src={iconCommunity}
              alt=""
              className="mx-auto mb-2 h-6 w-6 object-cover sm:h-12 sm:w-12 lg:h-16 lg:w-16"
            />
            <figcaption>
              <h4 className="text-center text-xs font-medium md:text-xl lg:text-2xl">
                Community
              </h4>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* ========== Internship ========== */}
      <section className="relative my-6 px-4 sm:py-8">
        <div className="xl:py-2 border-2 w-fit xl:px-8 rounded-[100%] mx-auto relative">
          <div className="border-2 w-fit lg:py-8 xl:mx-10 lg:m-16 m-4 sm:m-10 xl:py-10 xl:px-8 rounded-[100%] relative">
            <div className="text-center lg:py-24 lg:mx-12 lg:my-8 py-10 px-2 m-4 sm:m-10 border-2 xl:w-fit xl:mx-10 xl:px-8 rounded-[100%] relative">
              <div className="translate-y-3">
                <h3 className="heading-primary text-lg sm:text-2xl lg:text-4xl font-bold px-2 pb-1 text-center">
                  Looking for an internship?
                </h3>
                <p className="mb-4 text-xs leading-4 sm:text-base md:mb-4 md:text-lg lg:w-[640px] px-10">
                  Upload your CV and make a positive impact on peoples life by
                  joining our internship program.
                </p>
                <button className="btn-one">Get Started</button>
              </div>
              {/* Figures */}
              <img
                src={iconInternshipAnnouncement}
                alt=""
                className="w-8 sm:w-12 lg:w-16 object-cover absolute top-0 lg:top-10 left-14"
              />
            </div>
            {/* Figures */}
            <img
              src={iconInternshipHandshake}
              alt=""
              className="w-10 sm:w-14 lg:w-20 object-cover absolute left-8 -bottom-2 lg:bottom-10 -translate-y-1/2"
            />
            <img
              src={iconInternshipCheck}
              alt=""
              className="w-6 sm:w-8 lg:w-10 object-cover absolute right-20 lg:right-40 top-5"
            />
            <img
              src={iconInternshipYout}
              alt=""
              className="w-8 sm:w-14 lg:w-20 object-cover absolute bottom-12 lg:bottom-36 right-0"
            />
          </div>
          {/* Figures */}
          <img
            src={iconInternshipBriefcase}
            alt=""
            className="w-8 lg:w-16 sm:w-12 object-cover absolute -left-5 lg:-left-10 top-1/2 -translate-y-1/2"
          />
          <img
            src={iconInternshipBoy}
            alt=""
            className="w-8 lg:w-16 sm:w-12 sm:right-10 object-cover absolute right-5 lg:right-16 top-8 lg:top-20"
          />
        </div>
        {/* Doodles */}
        <img
          src={doodle1}
          alt=""
          className="absolute right-0 top-0 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80 -z-10"
        />
        <img
          src={doodle2}
          alt=""
          className="absolute bottom-0 left-0 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80 -z-10"
        />
      </section>
      {/* ========== Community ========== */}
      <section className="overflow-x-hidden relative">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between lg:flex-row lg:items-center relative">
            <article className="mx-auto pb-4 lg:pb-10 lg:w-3/5">
              <hgroup className="mb-6 lg:mb-14">
                <h2 className="subheading">
                  <span className="heading-primary">Wleness Community</span>
                </h2>
                <p className="para ml-1 text-lg">
                  Wleness is beginning of happiness of your life.
                </p>
              </hgroup>
              <p className="text-lg mb-6 lg:pr-28 ml-1 font-medium">
                "<span className="text-primary-300 font-bold">Embrace</span>,
                <span className="text-primary-300 font-bold">Empower</span>,
                <span className="text-primary-300 font-bold">Elevate</span>:
                Join our mental health community app and discover a safe space
                to share, heal, and grow together. Let's break the stigma and
                support each other on this journey towards emotional well-being.
              </p>
              <button className="btn-one">Join Us Now</button>
            </article>
            <div className="p-4 lg:px-10 lg:w-2/5">
              <div className="">
                <img src={community} alt="" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        {/* Doodles */}
        <img
          src={doodle2}
          alt=""
          className="absolute right-0 top-0 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80 -scale-x-[1] opacity-20"
        />
        <img
          src={doodle2}
          alt=""
          className="absolute bottom-0 left-0 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80 opacity-20"
        />
      </section>
      {/* ========== Why Choose Us ========== */}
      <section className="container mx-auto pb-7 pt-10 lg:pt-12 overflow-x-hidden">
        <div className="flex flex-col items-end">
          <hgroup className="mb-4 lg:w-3/5 lg:text-center">
            <h2 className="subheading heading-primary">Why Choose Us?</h2>
            <p className="para">
              Our platform is built by psychiatrists, psychologists and mental
              health experts with immense global experience.
            </p>
          </hgroup>
        </div>
        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="order-2 box-border p-4 lg:p-10 sm:mx-auto sm:w-4/5 lg:order-1 2xl:w-[45%]">
            <div className="relative mx-auto grid grid-cols-2 gap-3 sm:gap-5">
              <div className="grid gap-3">
                <img src={bigLeaf1} alt="" className="w-full object-cover" />
                <img src={smallLeaf1} alt="" className="w-full object-cover" />
              </div>
              <div className="grid gap-3">
                <img src={smallLeaf2} alt="" className="w-full object-cover" />
                <img src={bigLeaf2} alt="" className="w-full object-cover" />
              </div>
              {/* Leaves */}
              <img
                src={leaf1}
                alt=""
                className="absolute -left-14 -top-16 -z-10 w-24 object-cover xs:-left-16 xs:-top-20 md:w-28"
              />
              <img
                src={leaf2}
                alt=""
                className="absolute -bottom-6 -right-32 -z-10 w-60 object-cover xs:-right-36 md:w-64"
              />
            </div>
          </div>
          <article className="order-1 mx-auto sm:w-[580px] lg:order-2 2xl:w-[55%] pb-10 2xl:pb-0">
            <div className="space-y-3 lg:ml-12">
              <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                  <img
                    src={iconExperience}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                  <h4 className="mb-1 text-sm sm:text-2xl font-bold heading-primary">
                    Experience
                  </h4>
                  <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                    Expand your skills and knowledge by working alongside
                    experienced professionals.
                  </p>
                </figcaption>
              </figure>
              <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                  <img
                    src={iconCommitment}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                  <h4 className="mb-1 text-sm sm:text-2xl font-bold heading-primary">
                    Commitment
                  </h4>
                  <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                    Expand your skills and knowledge by working alongside
                    experienced professionals.
                  </p>
                </figcaption>
              </figure>
              <figure className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 lg:p-5 shadow-md xs:flex-row lg:items-center lg:py-3 xl:py-6">
                <div className="mr-4 xs:w-1/5 w-1/5 xl:w-1/5">
                  <img
                    src={iconFacilities}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <figcaption className="xs:w-4/5 w-4/5 xl:w-4/5">
                  <h4 className="mb-1 text-sm sm:text-2xl font-bold heading-primary">
                    Facilities
                  </h4>
                  <p className="lg:pr-5 text-xs leading-4 text-slate-600 font-medium xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                    Expand your skills and knowledge by working alongside
                    experienced professionals.
                  </p>
                </figcaption>
              </figure>
            </div>
          </article>
        </div>
      </section>
      {/* ========== Our Testimonial ========== */}
      <section>
        <h2 className="subheading mb-8 text-center">
          <span className="heading-primary">Our Testimonials</span>
        </h2>
        <div className="bg-gradient-to-b from-primary-300/20 to-white py-7 lg:py-14">
          <div className="container mx-auto relative lg:!pr-0 pb-14 lg:pb-0">
            {/* Testimonials */}
            <figure className="lg:flex items-center">
              <div className="lg:w-2/5 p-4">
                <img
                  src={testimonial1}
                  alt=""
                  className="object-cover w-full"
                />
              </div>
              <figcaption className="lg:pl-24 lg:w-3/5">
                <h4 className="text-lg font-semibold sm:text-xl lg:text-3xl 2xl:text-4xl">
                  Soumili
                </h4>
                <h6 className="font-medium text-slate-400 2xl:text-xl mb-2">
                  Full stack web developer
                </h6>
                <p className="mb-1 text-sm sm:text-lg md:text-base 2xl:text-xl md:leading-5 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt laudantium mollitia id. Incidunt laudantium mollitia
                  id. id. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Incidunt laudantium mollitia id. Incidunt laudantium
                  mollitia id. id. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>
              </figcaption>
            </figure>
            {/* Arrow Buttons  */}
            <div className="absolute translate-x-1/2 right-1/2 lg:right-0 lg:translate-x-0 bottom-0">
              <button className="w-12 h-12 border-2 border-primary-300 rounded-full mr-6">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="text-primary-300 text-4xl"
                />
              </button>
              <button className="bg-primary-300 w-12 h-12 rounded-full">
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  className="text-white text-4xl"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Statistics ========== */}
      <section className="py-4 lg:py-12 container mx-auto grid grid-cols-4 gap-2 lg:gap-8">
        <div className="bg-primary-400 flex flex-col p-2 md:p-8 rounded-2xl text-center 2xl:py-10">
          <span className="text-xl md:text-5xl font-bold mb-1 lg:mb-4">
            24/7
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Online Support
          </span>
        </div>
        <div className="bg-primary-50 flex flex-col p-2 md:p-8 rounded-2xl text-center 2xl:py-10">
          <span className="text-xl md:text-5xl font-bold mb-1 lg:mb-4">
            100+
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Doctors
          </span>
        </div>
        <div className="bg-primary-400 flex flex-col p-2 md:p-8 rounded-2xl text-center 2xl:py-10">
          <span className="text-xl md:text-5xl font-bold mb-1 lg:mb-4">
            1M+
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Active Patients
          </span>
        </div>
        <div className="bg-primary-50 flex flex-col p-2 md:p-8 rounded-2xl text-center 2xl:py-10">
          <span className="text-xl md:text-5xl font-bold mb-1 lg:mb-4">
            5M+
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Interested
          </span>
        </div>
      </section>
      {/* ========== Our Partners ========== */}
      <section className="container mx-auto py-8 lg:py-20">
        <div className="grid gap-2 grid-cols-5 md:gap-8 xl:gap-12 2xl:gap-20">
          <div className="flex justify-center items-center">
            <img
              src={partner1}
              className="object-contain h-5 lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={partner2}
              className="object-contain h-5 lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={partner3}
              className="object-contain h-5 lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={partner4}
              className="object-contain h-5 lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={partner5}
              className="object-contain h-5 lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
        </div>
      </section>
      {/* ========== Request Form ========== */}
      <section className="container mx-auto mb-6 lg:mb-28 py-12 px-6 xs:px-8 xs:py-14 grid md:grid-cols-2 rounded-3xl lg:px-8 bg-[#FAFCE7] lg:py-16 2xl:py-20">
        <div className="md:px-6 md:flex md:flex-col md:justify-between md:h-full">
          <div>
            <h3 className="font-medium opacity-80 text-[#464646] lg:text-lg">
              Need a doctor consulting?
            </h3>
            <h1 className="text-4xl font-bold font-quicksand text-[#464646] opacity-90 xl:text-5xl">
              Request a Call Back Now
            </h1>
            <p className="pt-2 pb-4 text-slate-700 opacity-90 lg:text-xl">
              Talk to your mental health professional.
            </p>
          </div>
          <div className="sm:flex items-center">
            <img
              className="w-24 object-cover mb-2 sm:mr-6"
              src={requestCallback}
              alt="contact"
            />
            <p className="text-slate-700 font-medium leading-5">
              Our Doctors are waiting
              <br />
              for your service.
            </p>
          </div>
        </div>
        <form className="flex flex-col md:px-6 pt-10 md:pt-0">
          <label className="mb-6">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="px-6 block py-4 w-full rounded-md shadow-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
            />
          </label>
          <label className="mb-6">
            <input
              type="digit"
              placeholder="Your number "
              className="px-6 block py-4 w-full rounded-md shadow-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
            />
          </label>
          <label className="mb-6">
            <input
              rows={3}
              type="date"
              placeholder="Date"
              className="px-6 block py-4 w-full rounded-md shadow-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-white"
            />
          </label>
          <button type="button" className="btn-one mx-auto">
            Submit
          </button>
        </form>
      </section>
      {/* ========== FAQ's ========== */}
      <section className="container lg:flex px-4 gap-2 mx-auto my-6 lg:my-14">
        <div className="mx-auto lg:w-1/2 mb-5 lg:mb-0">
          <h2 className="subheading heading-primary mb-2">FAQs</h2>
          <p className="mb-4 para">
            Everything you need to know right here at Wleness. Ask questions and
            browse around for answers.
          </p>
          <button className="btn-one">Goes to FAQ’s</button>
        </div>
        <div className="flex flex-col lg:w-1/2 gap-4">
          <details className="bg-200/30 p-4 lg:p-6 rounded-lg cursor-pointer bg-[#52D0C2]">
            <summary className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex justify-between items-center w-full">
                <span>This is question</span> <FontAwesomeIcon icon={faPlus} />
              </h3>
            </summary>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus tempore blanditiis, dolorem explicabo doloremque
              debitis aperiam! Exercitationem eaque, cumque accusamus impedit
              assumenda labore odit, sunt architecto quia, magnam ipsam
              voluptates?
            </p>
          </details>
          <details className="bg-200/30 p-4 lg:p-6 rounded-lg cursor-pointer bg-[#52D0C2]">
            <summary className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex justify-between items-center w-full">
                <span>This is question</span> <FontAwesomeIcon icon={faPlus} />
              </h3>
            </summary>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus tempore blanditiis, dolorem explicabo doloremque
              debitis aperiam! Exercitationem eaque, cumque accusamus impedit
              assumenda labore odit, sunt architecto quia, magnam ipsam
              voluptates?
            </p>
          </details>
          <details className="bg-200/30 p-4 lg:p-6 rounded-lg cursor-pointer bg-[#52D0C2]">
            <summary className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex justify-between items-center w-full">
                <span>This is question</span> <FontAwesomeIcon icon={faPlus} />
              </h3>
            </summary>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus tempore blanditiis, dolorem explicabo doloremque
              debitis aperiam! Exercitationem eaque, cumque accusamus impedit
              assumenda labore odit, sunt architecto quia, magnam ipsam
              voluptates?
            </p>
          </details>
          <details className="bg-200/30 p-4 lg:p-6 rounded-lg cursor-pointer bg-[#52D0C2]">
            <summary className="flex justify-between items-center">
              <h3 className="text-lg font-bold flex justify-between items-center w-full">
                <span>This is question</span> <FontAwesomeIcon icon={faPlus} />
              </h3>
            </summary>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus tempore blanditiis, dolorem explicabo doloremque
              debitis aperiam! Exercitationem eaque, cumque accusamus impedit
              assumenda labore odit, sunt architecto quia, magnam ipsam
              voluptates?
            </p>
          </details>
        </div>
      </section>

      <Assessment />
    </>
  );
}

export default Home;
