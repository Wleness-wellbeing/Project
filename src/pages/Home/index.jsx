import React, { useState } from "react";
import { Link } from "react-router-dom";
// Data
import { community, doodle2, designRing } from "../../assets";
import { homeFaqs } from "../../data/faqs";
import { homeTestimonials } from "../../data/testimonials";
import { homeServices, objectives, statistics, whyChooseUs } from "../../data";
// Components
import Assessment from "../../components/Assessment";
import RequestForm from "../../components/Forms/RequestForm";
import Testimonial from "../../components/testimonial/Testimonial";
import MainHeader from "../../components/headers/MainHeader";
import HomeFaq from "../../components/Faq/HomeFaq";
import ServicesCard from "../../components/Cards/ServicesCard";
import { homePageDoctors } from "../../data/doctors";
import DoctorSlider from "../../components/DoctorSlider";

export default function Home() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);

  // Assessment Slides
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
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
      <section className="bg-primary-100/20 lg:mb-6">
        <div className="container mx-auto grid grid-cols-5 gap-1 py-6 !pl-1 lg:py-6">
          {objectives.map((value, i) => {
            return (
              <figure className="self-center" key={i}>
                <img
                  loading="lazy"
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

      {/* Doctors Slider */}
      <DoctorSlider data={homePageDoctors} />

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
                alt=""
                loading="lazy"
                className="absolute right-1/2 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 scale-125 object-cover xs:w-80 md:w-96 lg:w-[520px] lg:scale-150 xl:scale-125"
              />
            </div>
            <article className="mx-auto pb-4 lg:order-1 lg:w-3/5 lg:pb-10">
              <hgroup className="mb-2">
                <h2 className="subheading">
                  <span className="heading-primary">Wleness Community</span>
                </h2>
                <p className="para ml-1 text-lg"></p>
              </hgroup>
              <p className="mb-6 ml-1 text-sm font-medium leading-6 lg:pr-28 lg:text-lg">
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
              <p className="mb-6 ml-1 text-sm font-medium leading-6 lg:pr-28 lg:text-lg">
                Let us together break the stigma around mental health, support
                each other and make the journey toward emotional well-being
                beautiful.
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
                      alt=""
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

      {/* ========== Our Testimonial ========== */}
      <section>
        <h2 className="mb-4 text-center">
          <span className="subheading heading-primary">Our Testimonials</span>
        </h2>
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
      />

      {/* <Feedback isOpen={isFeedbackOpen} onClose={closeFeedbackModal} /> */}
    </>
  );
}
