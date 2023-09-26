import React from "react";

const CertificateList = ({ certificatesData }) => {
  return (
    <div className="certificate-container grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {certificatesData.map((certificate, index) => (
        <div
          key={index}
          className="rounded-xl border-2 border-teal-400 bg-white p-4 text-teal-400 shadow-md hover:bg-teal-400 hover:text-white"
        >
          <p className="  ">{certificate.certificate}</p>
        </div>
      ))}
    </div>
  );
};

export default CertificateList;
