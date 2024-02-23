import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Data
import { community, designRing, whyWleness } from "../../assets";
import { get_canonical } from "../../utils";
import { homeFaqs } from "../../data/faqs";
import { homeTestimonials } from "../../data/testimonials";
import {
  homeServices,
  home_service_banner,
  home_services,
  home_why_wleness,
  statistics,
  whyChooseUs,
} from "../../data";
import { HOME_META } from "../../data/meta";
import { homePageDoctors } from "../../data/doctors";
// Components
import Assessment from "../../components/Assessment";
import RequestForm from "../../components/Forms/RequestForm";
import Testimonial from "../../components/testimonial/Testimonial";
import MainHeader from "../../components/headers/MainHeader";
import HomeFaq from "../../components/Faq/HomeFaq";
import ServicesCard from "../../components/Cards/ServicesCard";
import DoctorSlider from "../../components/DoctorSlider";
import Objectives from "../../components/Objectives";
import YogaSlider from "../../components/Carousels/YogaSlider";
import FeaturedIn from "../../components/Sections/FeaturedIn";
import SelfAssessment from "../../components/Modals/SelfAssessment";
import InternshipBanner from "../Internship/InternshipBanner";
import {
  faArrowRight,
  faCheck,
  faCheckCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeServiceCard from "../../components/Cards/HomeServiceCard";

export default function Home() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [assessmentModal, setAssessmentModal] = useState(true);
  const [rediredurl, setRediredurl] = useState(null);

  // Assessment Slides
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

  return (
    <>
      <Helmet>
        <title>{HOME_META.title}</title>
        <meta name="description" content={HOME_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      {/* Hero Section */}
      <MainHeader openAssessmentModal={() => resetBookNow()} />

      {/* ========== Services Banner ========== */}
      <section className="container mx-auto -translate-y-24">
        <div className="grid rounded-xl bg-primary-100 px-8 py-10 drop-shadow-lg md:grid-cols-2 xl:grid-cols-4">
          {home_service_banner.map((value, i) => {
            return (
              <div key={i} className="flex">
                <FontAwesomeIcon
                  icon={value.icon}
                  className="mr-3 mt-1 block font-semibold text-primary-200"
                />
                <div>
                  <h2 className="mb-3 font-semibold text-white">
                    {value.name}
                  </h2>
                  <p className="mb-4 text-sm font-medium text-teal-100">
                    {value.description}
                  </p>
                  <Link
                    to={value.slug}
                    className="group inline-block rounded-2xl border-2 border-primary-50 px-4 py-[2px] hover:bg-primary-50"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-sm text-white group-hover:text-black"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========== Why Wleness ========== */}
      <section className="container mx-auto mb-10 grid gap-5 lg:grid-cols-2">
        <div className="p-6">
          <img src={whyWleness} alt="Why wleness wellbeing" />
        </div>
        <div>
          <h3 className="grid text-4xl font-bold">
            <span>Why wleness and </span>
            <span>what it solves for you</span>
          </h3>
          <p className="mb-8 mt-4 text-lg font-medium">
            Wleness is growing community working towards changing the way
            individuals think & act about problems related to Mental Health.
            Managed by the current generation.
          </p>
          <div className="space-y-4">
            {home_why_wleness.map((value, i) => {
              return (
                <div
                  className="flex cursor-pointer rounded-xl bg-slate-100 px-6 py-4 transition-all hover:bg-slate-200"
                  key={i}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-3 mt-1 block font-semibold"
                  />
                  <div>
                    <h2 className="font-semibold">{value.name}</h2>
                    <p className="my-4 hidden text-sm font-medium text-slate-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== Our Services ========== */}
      <section className="space-y-20 bg-primary-10 py-24">
        {home_services.map((value, i) => {
          return <HomeServiceCard data={value} key={i} />;
        })}
      </section>

      {/* <section>
        <div className="bg-gradient-to-br from-primary-10 to-white pb-6 font-quicksand lg:pb-10">
          <div className="container mx-auto grid grid-cols-2 gap-x-2 gap-y-8 py-6 pt-8 lg:grid-cols-3 lg:gap-6 lg:pb-10 lg:pt-12 xl:gap-x-14 xl:gap-y-20 xl:pt-24">
            {homeServices.map((value, index) => {
              // Show community card only on desktop
              return value.slug == "/community" &&
                window.screen.width > 600 ? null : (
                <ServicesCard key={index} data={value} />
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ========== How wleness work ========== */}
      <section className="p-16">
        <div className="container mx-auto mb-10 grid gap-5 rounded-xl bg-primary-500 !px-16 py-14 lg:grid-cols-2">
          <div>
            <h2 className="subheading text-primary-50">How Wleness Works</h2>
            <p className="font-semibold text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex items-end justify-end text-right">
            <button className="btn-one">Explore our services</button>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis fuga, illum similique animi consequuntur corporis
            molestiae cumque temporibus laborum suscipit nostrum quaerat
            exercitationem repudiandae nesciunt possimus magni quos quia a et
            rem dolores quae obcaecati. Provident recusandae ullam quia neque
            unde. Quo, sapiente illo quisquam libero est a? Itaque, minima!
          </div>
          <div className="p-20 text-right">
            <img
              src={whyWleness}
              alt="Why wleness wellbeing"
              className="rounded-3xl shadow-[50px_-50px_4px_-10px] shadow-primary-50"
            />
          </div>
        </div>
      </section>

      <br />
      <br />
      <InternshipBanner url="/internship" new_page={false} />
      <br />
      <br />

      {/* Doctors Slider */}
      <DoctorSlider
        data={homePageDoctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />

      {/* ========== Objectives ========== */}
      <br />
      <Objectives />
      <YogaSlider />

      {/* ========== Community ========== */}
      <section className="relative overflow-x-clip bg-primary-10 pt-6 3xl:py-10">
        <div className="container mx-auto">
          <div className="relative flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="relative mb-8 lg:order-2 lg:mb-0 lg:w-2/5">
              <div className="mx-auto w-64 lg:w-72">
                <img
                  src={community}
                  alt="Join the community - Wleness"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>

              <img
                src={designRing}
                alt="India's Most Diverse Holistic Platform"
                loading="lazy"
                className="absolute right-1/2 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 scale-125 object-cover xs:w-80 md:w-96 lg:w-[520px] lg:scale-150 xl:scale-125"
              />
            </div>
            <article className="mx-auto pb-4 lg:order-1 lg:w-3/5 lg:pb-10">
              <hgroup className="mb-2">
                <h1 className="subheading">
                  <span className="heading-primary">JOIN THE COMMUNITY</span>
                </h1>
                <p className="para ml-1 text-lg"></p>
              </hgroup>
              <p className="mb-6 ml-1 text-sm font-medium leading-6 lg:pr-28 lg:text-lg">
                At Wleness, community is at the heart of our mission. We're more
                than a platform; we're a vibrant collective of individuals
                united by the pursuit of holistic well-being. Join us to
                connect, share, and grow together.
              </p>
              <p className="mb-6 ml-1 text-sm font-medium leading-6 lg:pr-28 lg:text-lg">
                Together, we embark on a path towards personal evolution. Share
                in each other's successes, celebrate milestones, and draw
                inspiration from the diverse experiences
              </p>
              <p className="mb-6 ml-1 text-sm font-medium leading-6 lg:pr-28 lg:text-lg">
                Here, you'll find more than just a group; you'll find a
                sanctuary—a place where wellness thrives and friendships
                flourish. Join us and be part of a community committed to
                holistic living.
              </p>
              <Link to="/community" className="btn-one inline-block">
                Join Us Now
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ========== Why Choose Us ========== */}
      <section className="py-6">
        <div className="container mx-auto text-center">
          <h2 className="subheading heading-primary">Why Choose Us?</h2>
          <p className="pb-12 text-sm font-medium text-slate-500 md:text-lg lg:mx-auto lg:w-[720px]">
            Our platform is built by psychiatrists, psychologists and mental
            health experts with immense global experience.
          </p>
          <div className="mb-14 grid gap-y-8 md:grid-cols-3 lg:gap-12 lg:gap-y-0">
            {whyChooseUs.map((value, i) => {
              return (
                <figure key={i}>
                  <div>
                    <img
                      src={value.image}
                      alt={value.alt}
                      loading="lazy"
                      className="mx-auto mb-4 w-20"
                    />
                  </div>
                  <figcaption>
                    <h2 className="heading-primary mb-3 inline-block text-xl font-bold text-primary-400">
                      {value.title}
                    </h2>
                    <p className="text-sm font-medium md:text-lg">
                      {value.desc}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== Featured In ========== */}
      <FeaturedIn />

      {/* ========== Our Testimonial ========== */}
      <section>
        <h1 className="mb-4 py-4 text-center">
          <span className="subheading heading-primary">Our Testimonials</span>
        </h1>
        <div className="bg-gradient-to-b from-primary-300/20 to-white py-4">
          <Testimonial data={homeTestimonials} />
        </div>
      </section>

      {/* ========== Statistics ========== */}
      <section className="container mx-auto grid grid-cols-4 gap-2 py-4 pt-10 lg:gap-8 lg:py-12">
        {statistics.map((value, i) => {
          return (
            <div
              key={i}
              className="flex flex-col rounded-2xl bg-primary-50 p-2 text-center md:p-4"
            >
              <span className="mb-1 text-xl font-bold md:text-2xl">
                {value.value}
                {value.suffix}
              </span>
              <span className="block text-center text-xs leading-3 lg:text-base lg:font-semibold">
                {value.title}
              </span>
            </div>
          );
        })}
      </section>

      {/* ========== Request Form ========== */}
      <RequestForm />

      {/* ========== FAQ's ========== */}
      <HomeFaq data={homeFaqs} />

      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      />

      {/* <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} /> */}
      <SelfAssessment
        assessmentModal={assessmentModal}
        setAssessmentModal={setAssessmentModal}
      />
    </>
  );
}
