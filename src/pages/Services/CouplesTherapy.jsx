import React, { useRef, useState } from "react";
// Data
import { couplesTherapyData } from "../../data/services";
import { couplesTherapyDoctors } from "../../data/doctors";
import { coupleTherapyClient } from "../../data/clients";
import { coupleTherapyFaq } from "../../data/faqs";
import { textColorize } from "../../utils";
import { couplesTherapy1, couplesTherapy2 } from "../../assets";
// Components
import DoctorSlider from "../../components/DoctorSlider";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";
import Assessment from "../../components/Assessment";
import TherapyHeader from "../../components/TherapyHeader";

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
      <TherapyHeader
        title={couplesTherapyData.header.title}
        images={couplesTherapyData.header.images}
        desc={couplesTherapyData.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={openAssessmentModal}
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

          {/* <div>
            <figure className="gap-x-5 pb-6 pt-6 lg:flex lg:pt-12">
              <div className="mb-6 lg:mb-0 lg:w-2/5">
                <img
                  src={couplesTherapy1}
                  alt=""
                  className="block w-full object-cover"
                />
              </div>
              <figcaption className="lg:w-3/5">
                <div className="mr-8 rounded-2xl border-2 border-primary-50 px-6 py-3 lg:mr-20">
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
                <div className="-mt-2 ml-8 rounded-2xl rounded-br-[4rem] bg-primary-50 px-6 py-3 shadow-lg lg:ml-20">
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
                  className="mx-auto block object-cover lg:w-52"
                />
              </div>
              <figcaption className="lg:order-1 lg:w-3/5">
                <div className="mr-10 rounded-2xl border-2 border-primary-50 px-6 py-3 lg:mr-20">
                  <h6 className="text-lg font-bold text-primary-400">
                    Accessibility:
                  </h6>
                  <p className="text-sm font-medium lg:text-base">
                    Get a one-to-one therapy session with the best therapist
                    from the comfort of your home through video, calls or chats,
                    to deal with your ongoing issues.
                  </p>
                </div>
                <div className="-mt-2 ml-10 rounded-2xl rounded-br-[4rem] bg-primary-50 px-6 py-3 shadow-lg lg:ml-20">
                  <h6 className="text-lg font-bold text-primary-400">
                    Safe and Non-Judgmental Space:
                  </h6>
                  <p className="text-sm font-medium lg:text-base">
                    Our therapy environment is a safe haven where you and your
                    partner can express yourselves openly without fear of
                    judgment. We foster a nurturing atmosphere, encouraging
                    honest communication and emotional vulnerability.
                  </p>
                </div>
              </figcaption>
            </figure>
          </div> */}

          <div className="grid-cols-2 gap-10 pb-6 pt-6 lg:grid lg:pt-12">
            <div className="cursor-pointer rounded-2xl border-2 border-primary-50 px-6 py-3 hover:bg-primary-50">
              <h6 className="text-lg font-bold">Dedicated experts team:</h6>
              <p className="text-sm font-medium lg:text-base">
                With years of specialized training and a compassionate approach,
                our team of best counselors can guide you through challenges and
                help you build a stronger, more fulfilling connection.
              </p>
            </div>
            <div className="rounded-2xl rounded-br-[4rem] bg-primary-50 px-6 py-3 shadow-lg">
              <h6 className="text-lg font-bold">Tailored Approach:</h6>
              <p className="text-sm font-medium lg:text-base">
                We understand that every couple is unique, and there is no
                one-size-fits-all solution. Our therapy sessions are customized
                to address your specific needs, concerns, and goals, ensuring
                you receive personalized support throughout your journey.
              </p>
            </div>
            <div className="cursor-pointer rounded-2xl border-2 border-primary-50 px-6 py-3 hover:bg-primary-50">
              <h6 className="text-lg font-bold ">Accessibility:</h6>
              <p className="text-sm font-medium lg:text-base">
                Get a one-to-one therapy session with the best therapist from
                the comfort of your home through video, calls or chats, to deal
                with your ongoing issues.
              </p>
            </div>
            <div className="rounded-2xl rounded-br-[4rem] bg-primary-50 px-6 py-3 shadow-lg">
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
