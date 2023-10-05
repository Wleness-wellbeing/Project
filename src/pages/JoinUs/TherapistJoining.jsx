import React from "react";
// Data
import { THERAPIST_JOIN_URI } from "../../data/api";
// Components
import ApplyHeader from "../../components/JoinUs/ApplyHeader";
import ApplyForm from "../../components/JoinUs/ApplyForm";
import HowItWorks from "../../components/JoinUs/HowItWorks";
import { therapistApplyHeader } from "../../assets";

export default function TherapistJoining() {
  return (
    <>
      <ApplyHeader name="Therapists" image={therapistApplyHeader} />
      <ApplyForm name="Therapist" url={THERAPIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
