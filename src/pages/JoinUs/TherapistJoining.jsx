import React from "react";
// Data
import { therapistApplyHeader } from "../../assets";
import { THERAPIST_JOIN_URI } from "../../data/api";
// Components
import ApplyHeader from "../../components/JoinUs/ApplyHeader";
import ApplyForm from "../../components/JoinUs/ApplyForm";
import HowItWorks from "../../components/JoinUs/HowItWorks";

export default function TherapistJoining() {
  return (
    <>
      <ApplyHeader
        name="Therapist"
        image={therapistApplyHeader}
        specialist="Dr. Richa"
      />
      <ApplyForm name="Therapist" url={THERAPIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
