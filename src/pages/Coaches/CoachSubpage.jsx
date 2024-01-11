import React from "react";
import CoachesHeader from "../../components/headers/CoachesHeader";
import AboutCoach from "../../components/Coach/AboutCoach";
import WhyCoach from "../../components/Coach/WhyCoach";
import CoachExpertise from "../../components/Coach/CoachExpertise";
import CoachCertificates from "../../components/Coach/CoachCertificates";
import CoachRequestForm from "../../components/Forms/CoachRequestForm";
import HappyClient from "../../components/HappyClient";

const reviewsHeading = {
  heading: [
    {
      color: false,
      text: "Our Special ",
    },
    {
      color: true,
      text: "Testimonials ",
    },
  ],
};

export default function CoachSubpage(props) {
  return (
    <>
      <CoachesHeader
        name={props.data.name}
        profession={props.data.profession}
        image={props.data.image}
        desc={props.data.desc}
      />
      <AboutCoach name={props.data.about.title} paras={props.data.about.desc} />
      <WhyCoach
        name={props.data.whyCoach.title}
        image={props.data.whyCoach.image}
        lists={props.data.whyCoach.reason}
      />
      <CoachExpertise
        heading="Expertise"
        image={props.data.expertise.image}
        lists={props.data.expertise.list}
      />
      <CoachCertificates certificates={props.data.certifications} />

      {props.data.reviews ? (
        <HappyClient
          data={{ ...reviewsHeading, clients: props.data.reviews }}
        />
      ) : null}

      <CoachRequestForm name={props.data.name} />
    </>
  );
}
