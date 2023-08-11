import React from "react";
// Data
import { stressDoctors } from "../../data/doctors";
// Components
import HeaderWithButton from "../../components/HeaderWithButton";
import Symptoms from "../../components/Symptoms";
import DoctorSlider from "../../components/DoctorSlider";
import Community from "../../components/Community";

export default function IssueSubPageLayout({
  header,
  symptoms,
  doctors,
  quote,
}) {
  return (
    <>
      <HeaderWithButton
        title={header.title}
        desc={header.desc}
        image={header.image}
      />
      <Symptoms
        title={symptoms.title}
        image={symptoms.image}
        points={symptoms.points}
      />
      <DoctorSlider data={stressDoctors} />
      <Community />
    </>
  );
}
