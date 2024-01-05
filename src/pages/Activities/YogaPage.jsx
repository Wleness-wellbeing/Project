import React, { useEffect, useState } from "react";
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
import { coupleTherapyClient } from "../../data/clients";
import YogaSlider from "../../components/Carousels/YogaSlider";
import { YOGA_EXPERTS_URI } from "../../data/api";
import axios from "axios";

export default function YogaPage() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [status, setStatus] = useState(false);
  const [experts, setExperts] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Doctors list
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(YOGA_EXPERTS_URI)
      .then((response) => {
        let data = response.data["experts"];
        if (response.status == 200) {
          setExperts(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

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

      <YogaSlider data={experts} />

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

      <HappyClient data={coupleTherapyClient} />

      <Confirmation status={status} close={() => setStatus(false)} />
    </>
  );
}
