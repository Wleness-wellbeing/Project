import React, { useRef } from "react";
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

function CouplesTherapy() {
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
      />
      <FeaturesBlock data={couplesTherapyFeatures} />

      {/* How Section  */}
      <section className="container mx-auto !px-0" ref={ref}>
        <h2 className="subheading text-center py-12">
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

        <div>
          <figure className="flex pt-12 pb-6 gap-x-5">
            <div className="w-2/5">
              <img
                src={couplesTherapy1}
                alt=""
                className="block w-full object-cover"
              />
            </div>
            <figcaption className="w-3/5 self-center">
              <div className="border-2 border-primary-50 px-6 py-3 rounded-2xl mr-20">
                <h6 className="font-bold text-lg text-primary-400">
                  Dedicated experts team:
                </h6>
                <p className="font-medium">
                  With years of specialized training and a compassionate
                  approach, our team of best counselors can guide you through
                  challenges and help you build a stronger, more fulfilling
                  connection.
                </p>
              </div>
              <div className=" bg-primary-50 shadow-lg px-6 py-3 rounded-2xl rounded-br-[4rem] ml-20 -mt-2">
                <h6 className="font-bold text-lg text-primary-400">
                  Tailored Approach:
                </h6>
                <p className="font-medium">
                  We understand that every couple is unique, and there is no
                  one-size-fits-all solution. Our therapy sessions are
                  customized to address your specific needs, concerns, and
                  goals, ensuring you receive personalized support throughout
                  your journey.
                </p>
              </div>
            </figcaption>
          </figure>
          <figure className="flex py-12 gap-x-5">
            <figcaption className="w-3/5 self-center">
              <div className="border-2 border-primary-50 px-6 py-3 rounded-2xl mr-20">
                <h6 className="font-bold text-lg text-primary-400">
                  Accessibility:
                </h6>
                <p className="font-medium">
                  Get a one-to-one therapy session with the best therapist from
                  the comfort of your home through video, calls or chats, to
                  deal with your ongoing issues.
                </p>
              </div>
              <div className=" bg-primary-50 shadow-lg px-6 py-3 rounded-2xl rounded-br-[4rem] ml-20 -mt-2">
                <h6 className="font-bold text-lg text-primary-400">
                  Safe and Non-Judgmental Space:
                </h6>
                <p className="font-medium">
                  Our therapy environment is a safe haven where you and your
                  partner can express yourselves openly without fear of
                  judgment. We foster a nurturing atmosphere, encouraging honest
                  communication and emotional vulnerability.
                </p>
              </div>
            </figcaption>
            <div className="w-2/5">
              <img
                src={couplesTherapy2}
                alt=""
                className="block w-fit mx-auto object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Doctors */}
      <DoctorSlider data={couplesTherapyDoctors} />
      <HappyClient data={coupleTherapyClient} />
      <FaqWithImage data={coupleTherapyFaq} />
    </>
  );
}

export default CouplesTherapy;
