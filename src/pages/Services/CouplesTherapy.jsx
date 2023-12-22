import React, { useRef, useState } from "react";
// Data
import { couplesTherapyData } from "../../data/services";
import { couplesTherapyDoctors } from "../../data/doctors";
import { coupleTherapyClient } from "../../data/clients";
import { coupleTherapyFaq } from "../../data/faqs";
import { get_canonical, textColorize } from "../../utils";
// Components
import DoctorSlider from "../../components/DoctorSlider";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";
import Assessment from "../../components/Assessment";
import TherapyHeader from "../../components/TherapyHeader";
import { Helmet } from "react-helmet";
import { COUPLE_THERAPY_META } from "../../data/meta";

function CouplesTherapy() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);

  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
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
        <title>{COUPLE_THERAPY_META.title}</title>
        <meta name="description" content={COUPLE_THERAPY_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <TherapyHeader
        title={couplesTherapyData.header.title}
        images={couplesTherapyData.header.images}
        desc={couplesTherapyData.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={() => resetBookNow()}
      />
      <p ref={ref}></p>

      {/* How Section  */}
      <section className="mt-8 bg-primary-10 pb-10">
        <div className="container mx-auto mt-5 rounded-2xl lg:!px-0">
          <div className="text-center">
            <h2 className="subheading py-16">
              {textColorize([
                {
                  color: false,
                  text: "How can ",
                },
                {
                  color: true,
                  text: "Wleness ",
                },
                {
                  color: false,
                  text: "help you?",
                },
              ])}
            </h2>
          </div>

          <div className="grid gap-6 pb-6 pt-6 lg:grid-cols-2 lg:gap-10 lg:pt-12">
            <div className="cursor-pointer rounded-2xl border-2 border-primary-50  px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold">Dedicated experts team:</h6>
              <p className="text-sm font-medium lg:text-base">
                With years of specialized training and a compassionate approach,
                our team of best counselors can guide you through challenges and
                help you build a stronger, more fulfilling connection.
              </p>
            </div>
            <div className="rounded-2xl rounded-br-[4rem] border-2 border-primary-50 bg-transparent px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold">Tailored Approach:</h6>
              <p className="text-sm font-medium lg:text-base">
                We understand that every couple is unique, and there is no
                one-size-fits-all solution. Our therapy sessions are customized
                to address your specific needs, concerns, and goals, ensuring
                you receive personalized support throughout your journey.
              </p>
            </div>
            <div className="cursor-pointer  rounded-2xl border-2 border-primary-50 px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold ">Accessibility:</h6>
              <p className="text-sm font-medium lg:text-base">
                Get a one-to-one therapy session with the best therapist from
                the comfort of your home through video, calls or chats to deal
                with your ongoing issues.
              </p>
            </div>
            <div className="rounded-2xl rounded-br-[4rem] border-2 border-primary-50 bg-transparent px-6 py-3 shadow-lg hover:bg-primary-50">
              <h6 className="text-lg font-bold">
                Safe and Non-Judgmental Space:
              </h6>
              <p className="text-sm font-medium lg:text-base">
                Our therapy environment is a safe haven where you and your
                partner can express yourselves openly without fear of judgment.
                We foster a nurturing atmosphere, encouraging honest
                communication and emotional vulnerability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <DoctorSlider
        data={couplesTherapyDoctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />
      <HappyClient data={coupleTherapyClient} />
      <FaqWithImage data={coupleTherapyFaq} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      />
    </>
  );
}

export default CouplesTherapy;
