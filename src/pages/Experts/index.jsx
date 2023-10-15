import React, { useRef, useState } from "react";
// Data
import { expertsHeader, bubbles } from "../../assets";
import { doctorsPageClient } from "../../data/clients";
import { expertDoctors } from "../../data/doctors";
// Components
import HappyClient from "../../components/HappyClient";
import DoctorSlider from "../../components/DoctorSlider";
import { Link } from "react-router-dom";
import Assessment from "../../components/Assessment";
import ExpertsCard from "../../components/Cards/ExpertsCard";
import {
  expertsCoupleTherapy,
  expertsPsychiatrist,
  expertsTherapy,
} from "../../data/experts";

function Experts() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);

  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  const resetBookNow = () => {
    openAssessmentModal();

    setRediredurl({
      title: "Find a Therapist",
      name: "Find a Therapist",
      url: "/experts/all",
    });
  };

  const button = {
    slug: "/experts/all",
    text: "Find the Experts",
  };

  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ========== Header Bar ========== */}
      <header className="bg-primary-50/30">
        <div className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:flex-row lg:py-6 2xl:justify-between 2xl:py-16">
          <div className="lg:order-2 lg:mb-0 xl:w-1/2 2xl:flex 2xl:justify-end">
            {/* Desktop Image */}
            <img src={expertsHeader} alt="" className=" w-full object-cover" />
          </div>
          <div className="-m-5 mb-6 rounded-3xl p-5 text-center md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:rounded-none lg:text-left xl:w-1/2 xl:pl-4">
            <hgroup className="md:mb-3">
              <h1 className="subheading mb-2 text-center lg:text-left">
                <span className="heading-primary mr-2">
                  Mental Health Matters
                </span>
                <span className="text-[#383838] lg:block">Unlock your </span>
                <span className="heading-primary">well being </span>
                <span className="text-[#383838]">with </span>
                <span className="heading-primary">wleness</span>
              </h1>
            </hgroup>
            <p className="para mb-4 lg:mb-8">
              At Wleness, we provide a holistic approach to unlocking your
              wellness. Our team of dedicated psychologists and therapists is
              here to offer personalized guidance and support tailored to your
              unique needs. Whether you're seeking to manage stress, overcome
              challenges, or enhance your overall mental health, we're committed
              to empowering you on your path to wellness. Together, we'll unlock
              the potential for a healthier and happier you.
            </p>
            <div className="space-y-3 lg:flex lg:space-x-3 lg:space-y-0">
              <button
                className="btn-one !w-full lg:!w-fit lg:px-6"
                onClick={() => resetBookNow()}
              >
                Make an appointment
              </button>
              {/* <button
                className="btn-one !w-full border-2 !border-primary-400 !bg-transparent !text-[#383838] hover:!bg-primary-400 hover:!text-white lg:!w-fit"
                onClick={() => handleScrollToComponent()}
              >
                Explore More
              </button> */}
            </div>
          </div>
        </div>
      </header>

      {/* ========== Soul Healers ========== */}
      <DoctorSlider
        data={expertDoctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />

      {/* ========== Objectives ========== */}
      {/* <section className="container mx-auto mb-10 mt-5 grid items-center gap-5 rounded-2xl bg-primary-50/30 lg:grid-cols-3">
        <figure className="flex items-center px-5 pt-5 lg:py-10">
          <div className="mr-3 w-3/12 lg:w-20">
            <img src={featureIcon1} alt="" className="w-full object-cover" />
          </div>
          <figcaption className="w-3/4 text-lg text-[#464646] lg:w-fit">
            Get the best and assured service.
          </figcaption>
        </figure>
        <figure className="flex items-center px-5 pt-5 lg:py-10">
          <div className="mr-3 w-3/12 lg:w-20">
            <img src={featureIcon2} alt="" className="w-full object-cover" />
          </div>
          <figcaption className="w-3/4 text-lg text-[#464646] lg:w-fit">
            Have a good mental health at a price of pizza.
          </figcaption>
        </figure>
        <figure className="flex items-center px-5 py-5 lg:py-10">
          <div className="mr-3 w-3/12 lg:w-20">
            <img src={featureIcon3} alt="" className="w-full object-cover" />
          </div>
          <figcaption
            className="w-3/4 text-lg text-[#464646] lg:w-fit"
            ref={ref}
          >
            24X7 Quality service
          </figcaption>
        </figure>
      </section> */}

      {/* ========== Why Us ========== */}
      <section className="relative overflow-x-hidden overflow-y-clip px-5 lg:!px-0 lg:pb-14">
        <div className="container mx-auto mb-16 rounded-t-2xl bg-gradient-to-b from-primary-50/30 to-transparent pt-10 text-center">
          <h1 className="subheading mb-2">
            Why <span className="heading-primary">Wleness</span>
          </h1>
          <p className="text-center font-semibold text-[#383838] lg:px-24">
            Discover the power of personalized mental health care with our
            dedicated team of experts committed to helping you achieve your
            goals and improve your well-being.
          </p>
        </div>

        {/* ========== Our Services ========== */}
        <div className="container mx-auto">
          <ExpertsCard data={expertsTherapy} />
          <figure className="mb-12 flex flex-col items-center lg:mb-2 lg:flex-row">
            <figcaption className="order-2 lg:order-1 lg:w-[55%]">
              <Link to={expertsPsychiatrist.slug}>
                <h3 className="mb-3 text-2xl font-bold text-primary-400">
                  {expertsPsychiatrist.title}
                </h3>
              </Link>
              <p className="mb-8 text-justify font-medium">
                {expertsPsychiatrist.desc}
              </p>
              <p className="text-right">
                <span className="btn-one cursor-not-allowed">Coming Soon</span>
              </p>
            </figcaption>
            <div className="order-1 mb-5 lg:order-2 lg:ml-14 lg:w-[45%]">
              <Link to={expertsPsychiatrist.slug}>
                <img
                  src={expertsPsychiatrist.image}
                  alt="Therapy"
                  className="w-[90%] object-cover"
                />
              </Link>
            </div>
          </figure>
          <ExpertsCard data={expertsCoupleTherapy} />
        </div>

        <img src={bubbles} alt="" className="absolute -right-96 top-0 -z-10" />

        <img
          src={bubbles}
          alt=""
          className="absolute -left-96 top-[520px] -z-10 -scale-x-100"
        />
      </section>

      {/* ========== Appoinment ========== */}
      <section className="container mx-auto mb-12 rounded-2xl bg-primary-50/30 p-8 text-center lg:p-14">
        <h2 className="subheading mb-2">
          Book an <span className="heading-primary">appointment</span> now
        </h2>
        <p className="mb-6 text-center font-medium lg:text-lg">
          We are excited to embark on this wellness journey with you and are
          committed to providing you with the highest quality of care and
          support. Your health and well-being are our top priorities, and we
          look forward to assisting you in achieving your therapeutic goals.
        </p>
        <div className="text-center">
          <button className="btn-one" onClick={() => resetBookNow()}>
            Make an appointment
          </button>
        </div>
      </section>

      {/* Our Clients */}
      <HappyClient data={doctorsPageClient} />

      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      />
    </>
  );
}

export default Experts;
