import React from "react";
// Data
import { psychiatristData } from "../../data/services";
import { psychiatristClient } from "../../data/clients";
// Components
import GridHeader from "../../components/GridHeader";
import SelectBest from "../../components/SelectBest";
import HappyClient from "../../components/HappyClient";
import { bulb } from "../../assets";

export default function Psychiatrist() {
  return (
    <>
      <GridHeader name={psychiatristData.name} image={psychiatristData.image} />
      <SelectBest
        name={psychiatristData.name}
        image={psychiatristData.bestTherapist.featureImage}
        features={psychiatristData.bestTherapist.features}
        btn={psychiatristData.bestTherapist.startBtn}
        doctors={psychiatristData.bestTherapist.doctors}
      />
      <section className="container mx-auto flex my-8 px-8 relative text-center mt-20">
        <div className="w-1/2 grid">
          <div className="bg-gradient-to-b from-secondary/50 to-transparent py-14 rounded-t-3xl">
            <h2 className="text-5xl font-bold text-primary-500">MYTHS</h2>
          </div>
          <div className="bg-gradient-to-t from-secondary/50 to-transparent px-10 pb-24 rounded-bl-3xl">
            <p className="text-lg font-medium">
              Psychiatrists only prescribe medications and don't provide
              therapy.
            </p>
          </div>
        </div>
        <div className="w-1/2 grid">
          <div className="bg-gradient-to-b from-secondary/50 to-transparent py-14 rounded-t-3xl">
            <h2 className="text-5xl font-bold text-primary-500">FACTS</h2>
          </div>
          <div className="bg-gradient-to-t from-secondary/50 to-transparent px-10 pb-24 rounded-br-3xl">
            <p className="text-lg font-medium">
              Psychiatrists are trained in medication management and various
              therapy approaches, offering a comprehensive treatment approach.
            </p>
          </div>
        </div>

        <img
          src={bulb}
          alt=""
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-32"
        />
      </section>
      <HappyClient data={psychiatristClient} />
    </>
  );
}
