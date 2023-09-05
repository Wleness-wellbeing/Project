import React from "react";
import FaqWithImage from "../../components/FaqWithImage";
import { musicalTherapyFaq } from "../../data/faqs";
import PoliciesHeader from "../../components/headers/PoliciesHeader";
// import {
//   grp1,
//   grp2,
//   grp3,
//   rectangle1,
//   rectangle2,
//   rectangle3,
// } from "../../assets";
export default function LifeCoching() {
  return (
    <main>
      <header className="relative overflow-x-clip bg-gradient-to-b from-secondary/10 to-transparent py-24">
        <div>
          <h1>Unleash Your Inner Champion</h1>
          <h2>
            Through Wleness <span>Life Coaching</span>
          </h2>
        </div>
        <div></div>
      </header>

      <FaqWithImage data={musicalTherapyFaq} />
    </main>
  );
}
