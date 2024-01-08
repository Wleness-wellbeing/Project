import React, { useState } from "react";
import CoachesHeader from "../../components/headers/CoachesHeader";
import AboutCoach from "../../components/Coach/AboutCoach";
import WhyCoach from "../../components/Coach/WhyCoach";
import CoachExpertise from "../../components/Coach/CoachExpertise";
import CoachCertificates from "../../components/Coach/CoachCertificates";
import CoachRequestForm from "../../components/Forms/CoachRequestForm";
import Confirmation from "../../components/Modals/Confirmation";

export default function CoachSubpage(props) {
  const [status, setStatus] = useState(false);

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
      <CoachRequestForm setConfirmation={setStatus} name={props.data.name} />
      <Confirmation status={status} close={() => setStatus(false)} />
    </>
  );
}
