import React from "react";

const benefits = [
  "Yoga promotes relaxation, reducing the impact of daily stressors.",
  "Regular practice enhances flexibility, helping in better overall body movement.",
  "Yoga encourages mindfulness, sharpening mental clarity and concentration.",
  "It boosts energy by improving circulation and promoting a sense of energy.",
  "Yoga poses strengthen core muscles, contributing to improved posture.",
  "The combination of breath control and movement helps regulate emotions.",
  "Yoga provides a holistic approach, benefiting both body and mind.",
];

function YogaBenefits() {
  return (
    <section className="container mx-auto mb-4">
      <div className="mb-4 rounded-xl bg-primary-10 p-5 lg:mb-0 lg:p-10">
        <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
          Why Wellness through Yoga ?
        </h2>
        <ul className="pl-5">
          {benefits.map((value, i) => {
            return (
              <li key={i} className="mb-2 list-disc pl-4 font-semibold">
                {value}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default YogaBenefits;
