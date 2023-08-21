import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// Data
import {
  headerMobile,
  headerDesktop,
  iconInternshipAnnouncement,
  iconInternshipBoy,
  iconInternshipBriefcase,
  iconInternshipCheck,
  iconInternshipHandshake,
  iconInternshipYout,
  community,
  doodle1,
  doodle2,
  leaf1,
  leaf2,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  bigLeaf1,
  bigLeaf2,
  smallLeaf1,
  smallLeaf2,
  faq3Lg,
} from "../../assets";
import { homeFaqs } from "../../data/faqs";
// Components
import Assessment from "../../components/Assessment";
import { Link } from "react-router-dom";
import RequestForm from "../../components/RequestForm";
import Feedback from "../../components/Feedback";
import Testimonial from "../../components/testimonial/Testimonial";
import { objectives, therapies, whyChooseUs } from "../../data";
import IssueCard from "../../components/Cards/IssueCard";
import { homeTestimonials } from "../../data/testimonials";

export default function Home() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [isFeedbackOpen, setFeedback] = useState(false);

  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  const openFeedbackModal = () => {
    setFeedback(true);
  };

  const closeFeedbackModal = () => {
    setFeedback(false);
  };

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phoneNumber, selectedDate }),
      });

      if (response.ok) {
        // Handle success, maybe show a success message
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      {/* ========== Header Bar ========== */}
      <header className="container mx-auto flex flex-col items-center overflow-x-clip rounded-3xl !px-5 py-2 lg:flex-row lg:bg-primary-50/30 lg:py-6 xl:py-24 2xl:justify-between">
        <div className="mb-6 lg:order-2 lg:mb-0 lg:translate-x-20 lg:translate-y-10 xl:w-[45%] 2xl:flex 2xl:justify-end">
          {/* Desktop Image */}
          <img
            src={headerDesktop}
            alt=""
            className="hidden w-full scale-[1.1] object-cover lg:block xl:scale-[1.3]"
          />
          {/* Mobile Image */}
          <img
            src={headerMobile}
            alt=""
            className="w-full object-cover lg:hidden"
          />
        </div>

        <div className="-m-5 mb-6 rounded-3xl bg-primary-50/30 p-5 md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:rounded-none lg:bg-transparent xl:w-[55%] xl:pl-4 2xl:pl-10">
          <hgroup className="md:mb-3">
            <h1 className="heading-primary pb-1 font-quicksand text-[1.3rem] font-bold sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-[2.5rem]">
              Partnering Your Well Being
            </h1>
          </hgroup>
          <p className="mb-5 text-base font-[600] !leading-6 md:mb-10 lg:w-80 lg:text-lg">
            Nurturing mind, body and soul for a lasting fulfillment
          </p>
          <button
            className="btn-one mx-auto !mr-2 inline-block !w-fit lg:mx-0"
            onClick={openAssessmentModal}
          >
            Schedule an appointment
          </button>
          {/* <button
            className="btn-one mx-auto inline-block !w-fit lg:mx-0"
            onClick={openFeedbackModal}
          >
            Feedback
          </button> */}
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
            videos, self-assessments, and interactive tools, to support your
            journey towards better mental health.
          </p>
        </div>
        {/* Issues */}
        <div className="bg-gradient-to-br from-primary-10 to-white pb-6 font-quicksand lg:pb-10">
          <div className="container mx-auto grid gap-4 py-6 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-10 lg:pt-12 xl:grid-cols-3 xl:gap-10 2xl:grid-cols-4 2xl:gap-5">
            {therapies.slice(0, 8).map((value, index) => {
              return <IssueCard key={index} data={value} />;
            })}
          </div>
          <div className="text-center">
            <Link to="/services/therapy" className="btn-one">
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* ========== Objectives ========== */}
      <section className="bg-primary-100/20">
        <div className="container mx-auto grid grid-cols-5 gap-1 py-6 !pl-1 lg:py-6">
          {objectives.map((value, i) => {
            return (
              <figure className="self-center" key={i}>
                <img
                  src={value.image}
                  alt=""
                  className="mx-auto mb-2 h-6 w-6 object-cover sm:h-12 sm:w-12 lg:h-14 lg:w-14"
                />
                <figcaption>
                  <h4 className="text-center text-xs font-medium md:text-xl">
                    {value.name}
                  </h4>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* ========== Internship ========== */}
      <section className="relative my-6 px-4 sm:py-8 3xl:pt-14">
        <div className="relative mx-auto w-fit rounded-[100%] border-2 xl:px-8">
          <div className="relative m-4 w-fit rounded-[100%] border-2 sm:m-10 lg:m-16 lg:py-8 xl:mx-10 xl:px-8">
            <div className="relative m-4 rounded-[100%] border-2 px-2 py-10 text-center sm:m-10 lg:mx-12 lg:my-8 lg:py-20 xl:mx-10 xl:w-fit xl:px-8">
              <div className="translate-y-3">
                <h3 className="heading-primary px-2 pb-1 text-center text-lg font-bold sm:text-2xl lg:text-4xl">
                  Looking for an internship?
                </h3>
                <p className="mb-4 px-10 text-xs leading-4 sm:text-base md:mb-4 md:text-lg lg:w-[640px]">
                  Upload your CV and make a positive impact on peoples life by
                  joining our internship program.
                </p>
                <Link to="/internship" className="btn-one">
                  Explore More
                </Link>
              </div>
              {/* Figures */}
              <img
                src={iconInternshipAnnouncement}
                alt=""
                className="absolute left-14 top-0 w-8 object-cover sm:w-12 lg:top-10 lg:w-16"
              />
            </div>
            {/* Figures */}
            <img
              src={iconInternshipHandshake}
              alt=""
              className="absolute -bottom-2 left-8 w-10 -translate-y-1/2 object-cover sm:w-14 lg:bottom-10 lg:w-20"
            />
            <img
              src={iconInternshipCheck}
              alt=""
              className="absolute right-20 top-5 w-6 object-cover sm:w-8 lg:right-40 lg:w-10"
            />
            <img
              src={iconInternshipYout}
              alt=""
              className="absolute bottom-12 right-0 w-8 object-cover sm:w-14 lg:bottom-36 lg:w-20"
            />
          </div>
          {/* Figures */}
          <img
            src={iconInternshipBriefcase}
            alt=""
            className="absolute -left-5 top-1/2 w-8 -translate-y-1/2 object-cover sm:w-12 lg:-left-10 lg:w-16"
          />
          <img
            src={iconInternshipBoy}
            alt=""
            className="absolute right-5 top-8 w-8 object-cover sm:right-10 sm:w-12 lg:right-16 lg:top-20 lg:w-16"
          />
        </div>
        {/* Doodles */}
        <img
          src={doodle1}
          alt=""
          className="absolute right-0 top-0 -z-10 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80"
        />
        <img
          src={doodle2}
          alt=""
          className="absolute bottom-0 left-0 -z-10 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80"
        />
      </section>
      {/* ========== Community ========== */}
      <section className="relative overflow-x-hidden 3xl:py-10">
        <div className="container mx-auto">
          <div className="relative flex flex-col justify-between lg:flex-row lg:items-center">
            <article className="mx-auto pb-4 lg:w-3/5 lg:pb-10">
              <hgroup className="mb-6 lg:mb-14">
                <h2 className="subheading">
                  <span className="heading-primary">Wleness Community</span>
                </h2>
                <p className="para ml-1 text-lg">
                  Wleness is beginning of happiness of your life.
                </p>
              </hgroup>
              <p className="mb-6 ml-1 text-lg font-medium lg:pr-28">
                "<span className="font-bold text-primary-300">Embrace</span>,
                <span className="font-bold text-primary-300">Empower</span>,
                <span className="font-bold text-primary-300">Elevate</span>:
                Join our mental health community app and discover a safe space
                to share, heal, and grow together. Let's break the stigma and
                support each other on this journey towards emotional well-being.
              </p>
              <Link to="/community" className="btn-one inline-block">
                Join Us Now
              </Link>
            </article>
            <div className="lg:w-2/5">
              <div className="lg:w-72">
                <img src={community} alt="" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        {/* Doodles */}
        <img
          src={doodle2}
          alt=""
          className="absolute right-0 top-0 -z-10 w-20 -scale-x-[1] object-cover opacity-20 xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80"
        />
        <img
          src={doodle2}
          alt=""
          className="absolute bottom-0 left-0 -z-10 w-20 object-cover opacity-20 xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80"
        />
      </section>
      {/* ========== Why Choose Us ========== */}
      <section className="container mx-auto overflow-x-hidden pb-7 pt-10 lg:pt-12">
        <div className="flex flex-col items-end">
          <hgroup className="lg:w-3/5 lg:text-center">
            <h2 className="subheading heading-primary">Why Choose Us?</h2>
            <p className="para">
              Our platform is built by psychiatrists, psychologists and mental
              health experts with immense global experience.
            </p>
          </hgroup>
        </div>
        <div className="flex flex-col justify-between lg:flex-row lg:items-center">
          <div className="order-2 box-border p-4 sm:mx-auto sm:w-4/5 lg:order-1 lg:px-10 lg:py-2 2xl:w-[45%] 3xl:px-16">
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
          <article className="order-1 mx-auto pb-10 sm:w-[580px] lg:order-2 2xl:w-[55%] 2xl:pb-0">
            <div className="space-y-3 lg:ml-12">
              {whyChooseUs.map((value, i) => {
                return (
                  <figure
                    key={i}
                    className="flex rounded-xl rounded-br-[5rem] border-2 border-slate-200 bg-white p-4 shadow-md xs:flex-row lg:items-center lg:p-5 lg:py-3 xl:py-6"
                  >
                    <div className="mr-4 w-1/5 xs:w-1/5 xl:w-1/5 3xl:w-[15%]">
                      <img
                        src={value.image}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <figcaption className="w-4/5 xs:w-4/5 xl:w-4/5 3xl:w-[85%]">
                      <h4 className="heading-primary mb-1 text-sm font-bold sm:text-xl">
                        {value.title}
                      </h4>
                      <p className="text-xs font-medium leading-4 text-slate-600 xs:text-xs xs:leading-4 sm:text-base sm:leading-5 lg:pr-5 lg:text-sm lg:leading-4 xl:text-base xl:leading-5">
                        {value.desc}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </article>
        </div>
      </section>
      {/* ========== Our Testimonial ========== */}
      <section>
        <h2 className="mb-8 text-center">
          <span className="subheading heading-primary">Our Testimonials</span>
        </h2>
        <div className="bg-gradient-to-b from-primary-300/20 to-white py-7 lg:py-8">
          <Testimonial data={homeTestimonials} />
        </div>
      </section>
      {/* ========== Statistics ========== */}
      <section className="container mx-auto grid grid-cols-4 gap-2 py-4 lg:gap-8 lg:py-12">
        <div className="flex flex-col rounded-2xl bg-primary-400 p-2 text-center md:p-8 2xl:py-10">
          <span className="mb-1 text-xl font-bold md:text-5xl lg:mb-4">
            24/7
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Online Support
          </span>
        </div>
        <div className="flex flex-col rounded-2xl bg-primary-50 p-2 text-center md:p-8 2xl:py-10">
          <span className="mb-1 text-xl font-bold md:text-5xl lg:mb-4">
            100+
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Doctors
          </span>
        </div>
        <div className="flex flex-col rounded-2xl bg-primary-400 p-2 text-center md:p-8 2xl:py-10">
          <span className="mb-1 text-xl font-bold md:text-5xl lg:mb-4">
            1M+
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Active Patients
          </span>
        </div>
        <div className="flex flex-col rounded-2xl bg-primary-50 p-2 text-center md:p-8 2xl:py-10">
          <span className="mb-1 text-xl font-bold md:text-5xl lg:mb-4">
            5M+
          </span>
          <span className="block text-center text-xs leading-3 lg:text-xl lg:font-semibold">
            Interested
          </span>
        </div>
      </section>
      {/* ========== Our Partners ========== */}
      <section className="container mx-auto py-8 lg:py-16">
        <div className="grid grid-cols-5 gap-2 md:gap-8 xl:gap-12 2xl:gap-20">
          <div className="flex items-center justify-center">
            <img
              src={partner1}
              className="h-5 object-contain lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={partner2}
              className="h-5 object-contain lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={partner3}
              className="h-5 object-contain lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={partner4}
              className="h-5 object-contain lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={partner5}
              className="h-5 object-contain lg:h-8 xl:h-10"
              alt="Partners"
            />
          </div>
        </div>
      </section>
      {/* ========== Request Form ========== */}
      <RequestForm />
      {/* ========== FAQ's ========== */}
      <section className="container mx-auto my-6 gap-2 px-4 lg:mb-14 lg:flex">
        <div className="mx-auto mb-5 lg:mb-0 lg:w-1/2">
          <h2 className="subheading heading-primary mb-2">FAQs</h2>
          <p className="para mb-4">
            Everything you need to know right here at Wleness. Ask questions and
            browse around for answers.
          </p>
          <img src={faq3Lg} alt="" />
          <Link to="/faqs" className="btn-one inline-block">
            Goes to FAQ's
          </Link>
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2">
          {homeFaqs.map((value, index) => {
            return (
              <details
                key={index}
                className="bg-200/30 cursor-pointer rounded-lg bg-[#52D0C2] p-4 lg:p-6"
              >
                <summary className="flex items-center justify-between">
                  <h3 className="flex w-full items-center justify-between text-lg font-bold">
                    <span>{value.question} </span>
                    <FontAwesomeIcon icon={faPlus} />
                  </h3>
                </summary>
                <p className="font-medium">{value.answer}</p>
              </details>
            );
          })}
        </div>
      </section>

      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />

      <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} />
    </>
  );
}
