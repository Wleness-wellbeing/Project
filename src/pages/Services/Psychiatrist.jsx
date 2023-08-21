import React, { useRef } from "react";
// Data
import { psychiatristData } from "../../data/services";
import { psychiatristClient } from "../../data/clients";
import { bulb } from "../../assets";
// Components
import GridHeader from "../../components/GridHeader";
import SelectBest from "../../components/SelectBest";
import HappyClient from "../../components/HappyClient";
import DoctorsCard from "../../components/DoctorsCard";

export default function Psychiatrist() {
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GridHeader
        name={psychiatristData.name}
        image={psychiatristData.image}
        handleScrollToComponent={() => handleScrollToComponent()}
      />
      <SelectBest
        ref={ref}
        name={psychiatristData.name}
        image={psychiatristData.bestTherapist.featureImage}
        features={psychiatristData.bestTherapist.features}
        btn={psychiatristData.bestTherapist.startBtn}
      />
      {/* Specialist Doctors */}
      <section>
        <div className="side-spacing grid-cols-[repeat(4, minmax(280, 1fr))] container mx-auto grid items-center gap-5 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 3xl:gap-10">
          {psychiatristData.bestTherapist.doctors.map((value, i) => {
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
      </section>

      <section className="container relative mx-auto my-8 mt-20 flex px-8 text-center">
        <div className="grid w-1/2">
          <div className="rounded-t-3xl bg-gradient-to-b from-secondary/50 to-transparent py-14">
            <h2 className="text-5xl font-bold text-primary-500">MYTHS</h2>
          </div>
          <div className="rounded-bl-3xl bg-gradient-to-t from-secondary/50 to-transparent px-10 pb-24">
            <p className="text-lg font-medium">
              Psychiatrists only prescribe medications and don't provide
              therapy.
            </p>
          </div>
        </div>
        <div className="grid w-1/2">
          <div className="rounded-t-3xl bg-gradient-to-b from-secondary/50 to-transparent py-14">
            <h2 className="text-5xl font-bold text-primary-500">FACTS</h2>
          </div>
          <div className="rounded-br-3xl bg-gradient-to-t from-secondary/50 to-transparent px-10 pb-24">
            <p className="text-lg font-medium">
              Psychiatrists are trained in medication management and various
              therapy approaches, offering a comprehensive treatment approach.
            </p>
          </div>
        </div>

        <img
          src={bulb}
          alt=""
          className="absolute -top-16 left-1/2 w-32 -translate-x-1/2"
        />
      </section>
      <HappyClient data={psychiatristClient} />
    </>
  );
}
