import React, { useState } from "react";
// Data
import { psychiatristApplyHeader } from "../../assets";
import { PSYCHIATRIST_JOIN_URI } from "../../data/api";
// Components
import ApplyHeader from "../../components/JoinUs/ApplyHeader";
import ApplyForm from "../../components/JoinUs/ApplyForm";
import HowItWorks from "../../components/JoinUs/HowItWorks";
import { get_canonical } from "../../utils";
import { Helmet } from "react-helmet";
import { JOIN_PSYCHIATRIST } from "../../data/meta";
import Confirmation from "../../components/Modals/Confirmation";

export default function PsychiatristJoining() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Helmet>
        <title>{JOIN_PSYCHIATRIST.title}</title>
        <meta name="description" content={JOIN_PSYCHIATRIST.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>
      <ApplyHeader name="Psychiatrists" image={psychiatristApplyHeader} />
      <ApplyForm
        name="Psychiatrist"
        url={PSYCHIATRIST_JOIN_URI}
        setConfirmation={setStatus}
      />
      <HowItWorks />

      <Confirmation status={status} close={() => setStatus(false)} />
    </>
  );
}
