import React from "react";
import {
  pgsir,
  asissir,
  kamalsir,
  pavansir,
  salonimaam,
  sreyashsir,
} from "../../assets";

const TeamComponent = () => {
  const teamMembers = [
    {
      name: "Prasenjit Gupta",
      designation: "CEO",
      imageSrc: pgsir,
    },
    {
      name: "Kamal Arora",
      designation: "COO",
      imageSrc: kamalsir,
    },
    {
      name: "Pawan Kumar Singh",
      designation: "Technlogy Lead",
      imageSrc: pavansir,
    },
    {
      name: "Saloni Gupta",
      designation: "Chief Knowledge Officer",
      imageSrc: salonimaam,
    },
    {
      name: "Dr. Sreyash Satpathy",
      designation: "Mentor (IIM C - Alumnus)",
      imageSrc: sreyashsir,
    },
    {
      name: "Asis Ray",
      designation: "Mentor (IIT Kanpur)",
      imageSrc: asissir,
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-2 gap-2 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {teamMembers.map((member, index) => (
        <div key={index} className="w-full p-4">
          <img
            src={member.imageSrc}
            alt={member.name}
            className="mx-auto mb-2 rounded-full"
            style={{ maxWidth: "100px" }}
          />
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <p className="text-sm font-medium text-gray-600">
            {member.designation}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TeamComponent;
