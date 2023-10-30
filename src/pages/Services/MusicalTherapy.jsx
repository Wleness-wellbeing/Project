import React, { useRef, useState } from "react";
// Data
import { MusicalTherapyData } from "../../data/services";
import { musicalTherapyClient } from "../../data/clients";
import { musicalTherapyFaq } from "../../data/faqs";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ServicesTechniques from "../../components/ServicesTechniques";
import HappyClient from "../../components/HappyClient";
import FaqWithImage from "../../components/FaqWithImage";
import Assessment from "../../components/Assessment";
import MusicalTherapyComponent from "../../components/MusicalTherapyComponent";
import ActivityForm from "../../components/Forms/ActivityForm";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import { Link } from "react-router-dom";

export default function MusicalTherapy() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

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
        title={MusicalTherapyData.header.title}
        image={MusicalTherapyData.header.image}
        desc={MusicalTherapyData.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={openAssessmentModal}
        isEnquiry={true}
        displayButton={true}
        button={["Explore More"]}
        openEnquiry={toggleForm}
      />
      <p ref={ref}></p>
      <ServicesTechniques
        title={MusicalTherapyData.activities.title}
        desc={MusicalTherapyData.activities.desc}
        types={MusicalTherapyData.activities.types}
        openAssessmentModal={openAssessmentModal}
        openEnquiry={toggleForm}
      />

      <section className="mb-6 bg-primary-50/30 py-5">
        <div className="container mx-auto">
          <h2 className="mb-2 text-center text-lg font-medium">
            Explore our music tracks for calm and meditative mind which brings a
            sense of direction and clarity as well
          </h2>
          <div>
            <Link
              to="/services/music-healing/tracks"
              className="block text-center font-bold uppercase text-primary-400 transition-all hover:underline lg:text-xl"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>

      <MusicalTherapyComponent />
      <HappyClient data={musicalTherapyClient} />
      <FaqWithImage data={musicalTherapyFaq} />
      <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
      />

      <ActivityForm
        purpose={MusicalTherapyData.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}
