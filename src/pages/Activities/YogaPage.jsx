import React, { useState } from "react";
// Components
import ActivityHeader from "../../components/ActivityHeader";
import ActivityForm from "../../components/Forms/ActivityForm";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import { Helmet } from "react-helmet";
import { get_canonical, get_title_text } from "../../utils";
import Confirmation from "../../components/Modals/Confirmation";
import YogaTechniques from "../../components/Activities/YogaTechniques";
import { activityYoga } from "../../data";
import HappyClient from "../../components/HappyClient";
import { coupleTherapyClient, yogaClients } from "../../data/clients";
import YogaSlider from "../../components/Carousels/YogaSlider";

export default function YogaPage() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [status, setStatus] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          {activityYoga.name +
            " | " +
            get_title_text(activityYoga.header.title)}
        </title>
        <meta name="description" content="yoga and meditation description" />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <ActivityHeader
        title={activityYoga.header.title}
        image={activityYoga.header.image}
        desc={activityYoga.header.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
        isEnquiry={true}
        displayButton={true}
        button={["Explore More"]}
        openEnquiry={toggleForm}
      />

      <YogaSlider />

      <YogaTechniques
        title={activityYoga.activities.title}
        desc={activityYoga.activities.desc}
        types={activityYoga.activities.types}
        slug={activityYoga.activities.types.slug}
        openEnquiry={toggleForm}
      />

      <ActivityForm
        purpose={activityYoga.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
        setConfirmation={setStatus}
      />

      <HappyClient data={yogaClients} />

      <Confirmation status={status} close={() => setStatus(false)} />
    </>
  );
}
