import { useState } from "react";

export default function useEnquiryForm() {
  const [enquiryForm, setEnquiryForm] = useState(false);

  // Toggle Enquiry Form form
  const toggleForm = () => {
    setEnquiryForm(!enquiryForm);
  };

  return {
    enquiryForm,
    toggleForm,
  };
}
