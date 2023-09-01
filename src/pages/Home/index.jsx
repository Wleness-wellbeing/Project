import React, { useState } from "react";
import { Link } from "react-router-dom";
// Data
import {
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
  servicesIcon1,
  servicesIcon2,
  servicesIcon3,
  servicesIcon4,
  servicesIcon5,
  servicesIcon6,
  designRing,
} from "../../assets";
import { homeFaqs } from "../../data/faqs";
import { homeTestimonials } from "../../data/testimonials";
import { objectives, statistics, therapies, whyChooseUs } from "../../data";
// Components
import Assessment from "../../components/Assessment";
import RequestForm from "../../components/Forms/RequestForm";
import Feedback from "../../components/Feedback";
import Testimonial from "../../components/testimonial/Testimonial";
import IssueCard from "../../components/Cards/IssueCard";
import Faq from "../../components/layout/Faq";
import MainHeader from "../../components/headers/MainHeader";
import HomeFaq from "../../components/Faq/HomeFaq";

// Our Services
const services = [
  [
    {
      name: "Lifestyle Coaching",
      slug: "/lifestyle-coaching",
      image: servicesIcon1,
      desc: "Lifestyle coaching empowers well-being, productivity, and balance. It encourages health, reduces stress, boosts motivation, and enhances performance.",
    },
    {
      name: "Executive Coaching",
      slug: "/executive-coaching",
      image: servicesIcon2,
      desc: "Executive coaching elevates leadership, empowers high-level staff, & drives positive results. It maximizes potential, navigates challenges,  enhances performance.",
    },
    {
      name: "Corporate",
      image: servicesIcon3,
      slug: "/corporate",
      desc: "Corporate mental wellness services prioritize employee psychological well-being. They address challenges, reduce stress, and foster emotional resilience in the workplace.",
    },
  ],
  [
    {
      name: "Musical Therapy",
      image: servicesIcon4,
      slug: "/services/musical-therapy",
      desc: "Music therapy addresses diverse needs through music. Therapists use musical interventions to achieve goals, including listening, creating, singing, and playing instruments.",
    },
    {
      name: "Yoga",
      image: servicesIcon5,
      slug: "/activities/yoga",
      desc: "Yoga combines postures, breathing, meditation, and mindfulness for mental wellness. It enhances mental health by nurturing the mind-body connection.",
    },
    {
      name: "Meditation",
      image: servicesIcon6,
      slug: "/activities/meditation",
      desc: "Meditation fosters mental wellness by focusing the mind and reducing cluttered thoughts. It enhances clarity, relaxation, and self-awareness.",
    },
  ],
];

export default function Home() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [isFeedbackOpen, setFeedback] = useState(false);

  // Assessment Slides
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
      {/* Hero Section */}
      <MainHeader openAssessmentModal={openAssessmentModal} />

      {/* ========== Issues ========== */}
      <section>
        <div className="container mx-auto py-8 text-center sm:pt-6 lg:pb-14 2xl:pb-10">
          <h2 className="sm:pb-0 xl:pb-1">
            <span className="subheading heading-primary">
              Discover A Path To Well-Being
            </span>
          </h2>
          <p className="para">
            Discover engaging mental health resources, including articles,
            videos, self-assessments, and interactive tools, to support your
            journey towards better mental health.
          </p>
        </div>
        {/* Issues */}
        <div className="bg-gradient-to-br from-primary-10 to-white pb-6 font-quicksand lg:pb-10">
          <div className="container mx-auto grid gap-4 py-6 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-10 lg:pt-12 xl:grid-cols-4 2xl:grid-cols-4 2xl:gap-5">
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

      {/* ========== Our Services ========== */}
      <section className="relative py-10">
        <div className="container mx-auto text-center">
          <h2 className="subheading heading-primary mb-7">
            Our services for you
          </h2>
          <div className="mb-14 grid gap-y-8 md:grid-cols-3 lg:gap-12 lg:gap-y-0">
            {services[0].map((value, i) => {
              return (
                <figure key={i}>
                  <div>
                    <Link to={value.slug}>
                      <img
                        src={value.image}
                        alt=""
                        className="mx-auto inline-block transition-all hover:drop-shadow-md lg:w-28"
                      />
                    </Link>
                  </div>
                  <figcaption>
                    <Link to={value.slug}>
                      <h2 className="mb-3 inline-block text-xl font-bold text-primary-400">
                        {value.name}
                      </h2>
                    </Link>
                    <p className="font-medium">{value.desc}</p>
                  </figcaption>
                </figure>
              );
            })}

            {/* Background Lines */}
            <div className="absolute left-0 right-0 top-40 -z-10 hidden lg:block 4xl:top-44">
              <div className="mb-2 h-[2px] w-full bg-primary-50"></div>
              <div className="mb-2 h-[2px] w-full bg-primary-50"></div>
              <div className="h-[2px] w-full bg-primary-50"></div>
            </div>
          </div>
          <div className="grid gap-y-8 md:grid-cols-3 lg:gap-12 lg:gap-y-0">
            {services[1].map((value, i) => {
              return (
                <figure key={i}>
                  <div>
                    <Link to={value.slug}>
                      <img
                        src={value.image}
                        alt=""
                        className="mx-auto inline-block transition-all hover:drop-shadow-md lg:w-28"
                      />
                    </Link>
                  </div>
                  <figcaption>
                    <Link to={value.slug}>
                      <h2 className="mb-3 inline-block text-xl font-bold text-primary-400">
                        {value.name}
                      </h2>
                    </Link>
                    <p className="font-medium">{value.desc}</p>
                  </figcaption>
                </figure>
              );
            })}

            {/* Background Lines */}
            <div className="absolute bottom-[270px] left-0 right-0 -z-10 hidden lg:block xl:bottom-60 4xl:bottom-56">
              <div className="mb-2 h-[2px] w-full bg-primary-50"></div>
              <div className="mb-2 h-[2px] w-full bg-primary-50"></div>
              <div className="h-[2px] w-full bg-primary-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Community ========== */}
      <section className="relative overflow-x-clip 3xl:py-10">
        <div className="container mx-auto">
          <div className="relative flex flex-col justify-between lg:flex-row lg:items-center">
            <div className="relative mb-8 lg:order-2 lg:mb-0 lg:w-2/5">
              <div className="mx-auto w-64 lg:w-72">
                <img src={community} alt="" className="w-full object-cover" />
              </div>

              <img
                src={designRing}
                alt=""
                className="absolute right-0 top-0 -z-10 w-20 object-cover xs:w-32 sm:w-40 md:w-56 lg:top-20 lg:w-[520px] lg:scale-150 xl:-right-20 xl:top-0 xl:scale-125 3xl:scale-150"
              />
            </div>
            <article className="mx-auto pb-4 lg:order-1 lg:w-3/5 lg:pb-10">
              <hgroup className="mb-6 lg:mb-10">
                <h2 className="subheading">
                  <span className="heading-primary">Wleness Community</span>
                </h2>
                <p className="para ml-1 text-lg"></p>
              </hgroup>
              <p className="mb-6 ml-1 text-lg font-medium lg:pr-28">
                <span className="mb-4 mr-1 block font-bold">
                  Wleness is all about the beginning of happiness in your life.
                </span>
                <span className="mr-1 font-bold text-primary-300">
                  Embrace yourself,
                </span>
                <span className="mr-1 font-bold text-primary-300">
                  Empower your well-being,
                </span>
                <span className="font-bold text-primary-300">
                  Elevate your mental health
                </span>
                : Join our highly curated community dedicated to mental
                well-being. A safe space for you to share, heal and grow as all
                your queries will be answered by our top mental health experts
                available just for you!
              </p>
              <p className="mb-6 ml-1 text-lg font-medium lg:pr-28">
                Let us together break the stigma around mental health support
                each other and make the journey toward emotional well-being
                beautiful.
              </p>
              <Link to="/community" className="btn-one inline-block">
                Join Us Now
              </Link>
            </article>
          </div>
        </div>
        {/* Doodles */}
        <img
          src={doodle2}
          alt=""
          className="absolute bottom-0 left-0 -z-10 w-20 object-cover opacity-20 xs:w-32 sm:w-40 md:w-56 lg:w-72 xl:w-80"
        />
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
                    <img src={value.image} alt="" className="mx-auto lg:w-28" />
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
        {statistics.map((value, i) => {
          return (
            <div
              key={i}
              className={
                value.background +
                " flex flex-col rounded-2xl p-2 text-center md:p-4"
              }
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

      {/* ========== Our Partners ========== */}
      <section className="container mx-auto pb-8 pt-4 lg:pb-16 lg:pt-6">
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
      <HomeFaq data={homeFaqs} />

      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />

      <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} />
    </>
  );
}
