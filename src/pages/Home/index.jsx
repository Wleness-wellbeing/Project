import React, { useState } from "react";
import { Link } from "react-router-dom";
// Data
import {
  community,
  designRing,
  featuredIn1,
  featuredIn2,
  featuredIn3,
  featuredIn4,
  featuredIn5,
  featuredIn6,
  featuredIn7,
} from "../../assets";
import { homeFaqs } from "../../data/faqs";
import { homeTestimonials } from "../../data/testimonials";
import { homeServices, statistics, whyChooseUs } from "../../data";
// Components
import Assessment from "../../components/Assessment";
import RequestForm from "../../components/Forms/RequestForm";
import Testimonial from "../../components/testimonial/Testimonial";
import MainHeader from "../../components/headers/MainHeader";
import HomeFaq from "../../components/Faq/HomeFaq";
import ServicesCard from "../../components/Cards/ServicesCard";
import { homePageDoctors } from "../../data/doctors";
import DoctorSlider from "../../components/DoctorSlider";
import { Helmet } from "react-helmet";
import { HOME_META } from "../../data/meta";
import { get_canonical } from "../../utils";
import Objectives from "../../components/Objectives";
import YogaSlider from "../../components/Carousels/YogaSlider";
import WhatsappChat from "../../components/WhatsappChat";

const featuredIn = [
  [
    featuredIn1,
    "https://www.business-standard.com/content/press-releases-ani/discover-a-new-era-of-wellness-with-wleness-unveiling-innovative-solutions-for-your-health-and-happiness-123101600467_1.html",
  ],
  [
    featuredIn2,
    "https://republicnewsindia.com/discover-a-new-era-of-wellness-with-wleness-unveiling-innovative-solutions-for-your-health-and-happiness/",
  ],
  [
    featuredIn3,
    "https://aninews.in/news/business/business/discover-a-new-era-of-wellness-with-wleness-unveiling-innovative-solutions-for-your-health-and-happiness20231016140849/",
  ],
  [
    featuredIn5,
    "https://jionews.com/home/article/5/1087191419/Discover-a-New-Era-of-Wellness-with-WLENESS-Unveiling-Innovative-Solutions-for-Your-Health-and-Happiness",
  ],
  [
    featuredIn4,
    "https://m.dailyhunt.in/news/india/english/lokmattimes+english-epaper-lokmaten/discover+a+new+era+of+wellness+with+wleness+unveiling+innovative+solutions+for+your+health+and+happiness-newsid-n547715388?sm=Y",
  ],
  [
    featuredIn6,
    "https://timesofindia.indiatimes.com/business/india-business/indias-11-fastest-growing-businesses-in-2023/articleshow/106354579.cms",
  ],
  [
    featuredIn7,
    "https://www.hindustantimes.com/brand-stories/excellence-redefined-meet-the-10-businesses-setting-new-standards-in-2023-101701260465504.html",
  ],
];

export default function Home() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
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

      {/* ========== Services ========== */}
      <section>
        <div className="py-8 text-center sm:pt-6 lg:pb-14  2xl:pb-10">
          <div className="container mx-auto">
            <h2 className="sm:pb-0 xl:pb-1">
              <span className="subheading heading-primary">
                The World Is Your Stage
              </span>
            </h2>
            <p className="para">
              We are an integrated digital platform offering holistic wellness
              services with yoga, meditation, musical healing, brain games and a
              wealth of engaging resources. Join us on this unique path to
              well-being.
            </p>
          </div>
        </div>

        {/* Services */}
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
      </section>

      {/* ========== Objectives ========== */}
      <Objectives />

      {/* Doctors Slider */}
      <DoctorSlider
        data={homePageDoctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />

      <YogaSlider />

      {/* ========== Community ========== */}
      <section className="relative overflow-x-clip bg-primary-10 pt-6 3xl:py-10">
        <div className="container mx-auto">
          <div className="relative flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="relative mb-8 lg:order-2 lg:mb-0 lg:w-2/5">
              <div className="mx-auto w-64 lg:w-72">
                <img
                  src={community}
                  alt=""
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
          <p className="pb-12 text-lg font-medium text-slate-500 lg:mx-auto lg:w-[720px]">
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
                      alt={value.title}
                      loading="lazy"
                      className="mx-auto mb-4 w-20"
                    />
                  </div>
                  <figcaption>
                    <h2 className="heading-primary mb-3 inline-block text-xl font-bold text-primary-400">
                      {value.title}
                    </h2>
                    <p className="text-lg font-medium">{value.desc}</p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== Featured In ========== */}
      <section className="mb-4 bg-yellow-primary py-6 lg:mb-8 lg:py-10">
        <div className="container mx-auto">
          <h2 className="mb-5 text-center">
            <span className="subheading heading-primary">Featured In</span>
          </h2>
          <div className="flex items-center justify-center gap-4 lg:gap-10 lg:pb-3">
            {featuredIn.map((value, i) => {
              return (
                <Link
                  key={i}
                  to={value[1]}
                  className="place-self-center"
                  target="_blank"
                >
                  <img
                    src={value[0]}
                    key={i}
                    alt="India's Most Diverse Holistic Platform"
                    className="w-42 h-12 object-contain"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

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

      <WhatsappChat />
      {/* <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} /> */}
    </>
  );
}
