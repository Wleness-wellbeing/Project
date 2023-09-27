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
    <div className="container mx-auto grid grid-cols-2 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {teamMembers.map((member, index) => (
        <div key={index} className="mx-auto my-auto w-3/4 lg:w-2/3  ">
          <img
            src={member.imageSrc}
            alt={member.name}
            className="mx-auto mb-2 rounded-full"
            style={{}}
          />
          <h2 className="text-sm font-bold lg:text-xl">{member.name}</h2>
          <p className="text-xs font-semibold">{member.designation}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamComponent;
