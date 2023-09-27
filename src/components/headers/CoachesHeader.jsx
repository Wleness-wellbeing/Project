import React from "react";

export default function CoachesHeader({ name, profession, desc, image }) {
  return (
    <>
      <header className=" relative overflow-x-clip bg-secondary/10  lg:py-28 ">
        <div class="container mx-auto my-8 flex flex-col md:flex-row">
          <div class="flex items-center justify-center md:w-2/5 md:justify-start">
            <img src={image} alt="Saloni Header" class="" />
          </div>
          <div class="w-full md:w-3/5">
            <h2 class="subheading py-4">{name}</h2>
            <h3 class="py-4 text-lg font-bold">{profession}</h3>
            <p class="para text-justify">{desc}</p>
          </div>
        </div>
      </header>
    </>
  );
}
