import React from "react";
import { g1, g2, g3, g4, g5, g6, g7, g8 } from "../assets";

const dummyData = [
  {
    id: 1,
    image: g1,
    heading: "Stress Reduction:",
    description:
      "Music can lower stress levels & induce relaxation, reducing anxiety, promote calmness.",
  },
  {
    id: 2,
    image: g2,
    heading: "Emotional Expression:",
    description:
      "It provides creative channel for the expression of emotions and facilitates the processing of trauma.",
  },
  {
    id: 3,
    image: g3,
    heading: "Pain Management:",
    description:
      "Music has the ability to divert attention away from pain and discomfort, aiding in pain management.",
  },
  {
    id: 4,
    image: g4,
    heading: "Cognitive Enhancement:",
    description:
      "It can improve memory, attention, & cognitive skills, particularly in individuals with cognitive impairments.",
  },
  {
    id: 5,
    image: g5,
    heading: "Mood Regulation:",
    description:
      "Music helps regulate mood, boosting feelings of happiness and reducing depression.",
  },
  {
    id: 6,
    image: g6,
    heading: "Social Connection:",
    description:
      "Group music therapy fosters social interaction and fosters a profound sense of community.",
  },
  {
    id: 7,
    image: g7,
    heading: "Physical Rehabilitation:",
    description:
      "It aids in physical rehabilitation by synchronizing movements with rhythmic cues.",
  },
  {
    id: 8,
    image: g8,
    heading: "Self-Exploration:",
    description:
      "Music therapy serves as a powerful catalyst, inspiring profound self-reflection and personal growth.",
  },
];

export default function MusicalTherapyComponent() {
  const Card = ({ image, heading, description }) => (
    <div className="mx-auto mt-4 max-w-md overflow-hidden rounded-xl">
      <img src={image} alt={heading} className="mx-auto" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-primary-500">{heading}</h2>
        <p className=" font-semibold">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-x-clip bg-secondary/10 pb-4 pt-6 xl:pb-6 xl:pt-10">
      <h1 className="pb-4 text-center text-3xl font-bold text-primary-500">
        Benefits of <span className="heading-primary">Music Healing</span>
      </h1>
      <div className=" container mx-auto grid grid-cols-1 justify-center gap-2 text-center md:grid-cols-2 lg:grid-cols-4">
        {dummyData.map((data) => (
          <Card
            key={data.id}
            image={data.image}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
}
