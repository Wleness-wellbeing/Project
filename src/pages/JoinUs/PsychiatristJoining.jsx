import React from "react";
// Data
import { psychiatristApplyHeader } from "../../assets";
import { PSYCHIATRIST_JOIN_URI } from "../../data/api";
// Components
import ApplyHeader from "../../components/JoinUs/ApplyHeader";
import ApplyForm from "../../components/JoinUs/ApplyForm";
import HowItWorks from "../../components/JoinUs/HowItWorks";

export default function PsychiatristJoining() {
  return (
    <>
      <ApplyHeader name="Psychiatrists" image={psychiatristApplyHeader} />
      <ApplyForm name="Psychiatrist" url={PSYCHIATRIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
