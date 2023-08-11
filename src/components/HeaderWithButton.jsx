import React from "react";
import { issuesHeader } from "../assets";

export default function HeaderWithButton() {
  return (
    <header className="container mx-auto flex flex-col items-center rounded-3xl !px-5 py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:pt-14 2xl:pb-0">
      <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem] lg:hidden">
        <span className="heading-primary block lg:inline-block pb-1">
          Facing Issues
        </span>
        <span className="text-[#383838] lg:block">Let's Talk</span>
      </h1>
      <div className="lg:order-2 lg:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
        {/* Desktop Image */}
        <img src={issuesHeader} alt="" className="w-full object-cover" />
      </div>
      <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 lg:w-[55%] xl:pl-4 lg:pr-16">
        <hgroup className="md:mb-3">
          <h1 className="subheading mb-4 text-center lg:text-left lg:leading-[4rem] hidden lg:block">
            <span className="heading-primary block lg:inline-block pb-1">
              Facing Issues
            </span>
            <span className="text-[#383838] lg:block">Let's Talk</span>
          </h1>
        </hgroup>
        <p className="mb-8 text-justify font-semibold">
          Mental health is just as important as physical health; seeking help is
          a sign of strength. Our team of top therapists understands that
          everyone's mental health journey is different and strives to provide
          individualized care and support. We can help you find the resources
          and support you need to improve your mental well-being.
        </p>
      </div>
    </header>
  );
}
