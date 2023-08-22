import React, { useRef, useState } from "react";
// Data
import {
  couplesTherapyData,
  couplesTherapyFeatures,
} from "../../data/services";
import { couplesTherapyDoctors } from "../../data/doctors";
import { coupleTherapyClient } from "../../data/clients";
import { coupleTherapyFaq } from "../../data/faqs";
import { textColorize } from "../../utils";
import { couplesTherapy1, couplesTherapy2 } from "../../assets";
// Components
import FeaturesBlock from "../../components/FeaturesBlock";
import ActivityHeader from "../../components/ActivityHeader";
import DoctorSlider from "../../components/DoctorSlider";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";
import Assessment from "../../components/Assessment";

function CouplesTherapy() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
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
  return (
    <>
      <ActivityHeader
        title={couplesTherapyData.header.title}
        image={couplesTherapyData.header.image}
        desc={couplesTherapyData.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={openAssessmentModal}
      />
      <p ref={ref}></p>
      <FeaturesBlock data={couplesTherapyFeatures} />

      {/* How Section  */}
      <section className="container mx-auto lg:!px-0">
        <div className="text-center">
          <h2 className="subheading py-12">
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

        <div>
          <figure className="gap-x-5 pb-6 pt-6 lg:flex lg:pt-12">
            <div className="mb-6 lg:mb-0 lg:w-2/5">
              <img
                src={couplesTherapy1}
                alt=""
                className="block w-full object-cover"
              />
            </div>
            <figcaption className="lg:w-3/5 lg:self-center">
              <div className="mr-14 rounded-2xl border-2 border-primary-50 px-6 py-3 lg:mr-20">
                <h6 className="text-lg font-bold text-primary-400">
                  Dedicated experts team:
                </h6>
                <p className="text-sm font-medium lg:text-base">
                  With years of specialized training and a compassionate
                  approach, our team of best counselors can guide you through
                  challenges and help you build a stronger, more fulfilling
                  connection.
                </p>
              </div>
              <div className="-mt-2 ml-14 rounded-2xl rounded-br-[4rem] bg-primary-50 px-6 py-3 shadow-lg lg:ml-20">
                <h6 className="text-lg font-bold text-primary-400">
                  Tailored Approach:
                </h6>
                <p className="text-sm font-medium lg:text-base">
                  We understand that every couple is unique, and there is no
                  one-size-fits-all solution. Our therapy sessions are
                  customized to address your specific needs, concerns, and
                  goals, ensuring you receive personalized support throughout
                  your journey.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="gap-x-5 pb-6 pt-6 lg:flex lg:pt-12">
            <div className="mb-6 lg:order-2 lg:mb-0 lg:w-2/5">
              <img
                src={couplesTherapy2}
                alt=""
                className="mx-auto block w-fit object-cover"
              />
            </div>
            <figcaption className="lg:order-1 lg:w-3/5 lg:self-center">
              <div className="mr-20 rounded-2xl border-2 border-primary-50 px-6 py-3">
                <h6 className="text-lg font-bold text-primary-400">
                  Accessibility:
                </h6>
                <p className="text-sm font-medium lg:text-base">
                  Get a one-to-one therapy session with the best therapist from
                  the comfort of your home through video, calls or chats, to
                  deal with your ongoing issues.
                </p>
              </div>
              <div className=" -mt-2 ml-20 rounded-2xl rounded-br-[4rem] bg-primary-50 px-6 py-3 shadow-lg">
                <h6 className="text-lg font-bold text-primary-400">
                  Safe and Non-Judgmental Space:
                </h6>
                <p className="text-sm font-medium lg:text-base">
                  Our therapy environment is a safe haven where you and your
                  partner can express yourselves openly without fear of
                  judgment. We foster a nurturing atmosphere, encouraging honest
                  communication and emotional vulnerability.
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Doctors */}
      <DoctorSlider data={couplesTherapyDoctors} />
      <HappyClient data={coupleTherapyClient} />
      <FaqWithImage data={coupleTherapyFaq} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />
    </>
  );
}

export default CouplesTherapy;
