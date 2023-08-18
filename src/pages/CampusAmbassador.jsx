import React, { useState } from "react";
// Data
import {
  bgCircles,
  campusAmbassadorHeader,
  campusAmbassadorTeam,
  campusWhyToApply,
  cloudWithDots,
  doodle2,
  dots1,
  dots2,
  dottedLinesLarge,
  dottedLinesSmall,
  dottedPlane,
  roleCampus,
  roleProgram,
  roleSMM,
  roleSpreadAwareness,
} from "../assets";
import CampusAmbassadorForm from "../components/CampusAmbassadorForm";

const roles = [
  [roleSMM, "Social Media & Public Marketing"],
  [roleSpreadAwareness, "Spread Awareness About Wlness"],
  [roleCampus, "Develop an ecosystem around the campus"],
  [roleProgram, "Suggest ways to make better program"],
];

export default function CampusAmbassador() {
  const [campusModal, setcampusModal] = useState(false);

  const openCampusModal = () => {
    setcampusModal(true);
  };

  const closeCampusModal = () => {
    setcampusModal(false);
  };
  return (
    <main>
      <header className="py-6 relative overflow-x-hidden overflow-y-auto">
        <h1 className="subheading text-center mb-4">
          <span className="heading-primary">Campus Ambassador</span>
        </h1>
        <div className="container mx-auto">
          <img src={campusAmbassadorHeader} alt="" className="w-full" />
        </div>
        {/* Dots  */}
        <img src={dots1} alt="" className="w-96 absolute top-20 left-0 -z-10" />
        <img
          src={dots2}
          alt=""
          className="w-96 absolute bottom-0 -right-20 -z-10"
        />
      </header>

      {/* Our Program */}
      <section className="container mx-auto pt-4 pb-10">
        <h2 className="text-4xl font-bold text-primary-300 text-center px-44">
          Welcome to our Health and Wellness Campus Ambassador Program!
        </h2>
        <p className="para my-8 px-12 text-center">
          Are you passionate about promoting a peaceful & stress free lifestyle
          and inspiring others to prioritize their well-being? Join our dynamic
          team of Campus Ambassadors and become a driving force for positive
          change on your campus.
        </p>
        <div className="text-center mb-6">
          <button className="btn-one" onClick={openCampusModal}>
            Join Us Now
          </button>
        </div>
        <div>
          <figure className="flex py-12 gap-x-5">
            <figcaption className="w-3/5 self-center">
              <div className="border-2 border-primary-50 px-6 py-3 rounded-2xl mr-20">
                <p className="font-medium">
                  As an ambassador, you will have the opportunity to engage with
                  fellow students, organize exciting health-focused events,
                  share valuable wellness tips, and contribute to a thriving
                  community dedicated to fostering physical, mental, and
                  emotional wellness.
                </p>
              </div>
              <div className=" bg-primary-50 shadow-lg px-6 py-3 rounded-2xl rounded-br-[4rem] ml-20 -mt-2">
                <p className="font-medium">
                  By becoming a part of our Wellness Campus Ambassador Program,
                  you're not just joining a team - you're joining a movement.
                  Your passion for wellness will have a ripple effect, touching
                  the lives of your peers and creating a lasting legacy of
                  health consciousness.
                </p>
              </div>
            </figcaption>
            <div className="w-2/5">
              <img
                src={campusAmbassadorTeam}
                alt=""
                className="block w-fit mx-auto object-cover"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* Why to Apply */}
      <section className="relative">
        <h2 className="subheading text-center">
          Why you should <span className="heading-primary">Apply?</span>
        </h2>
        <div className="flex container mx-auto pt-8 relative">
          <div className="w-1/2">
            <img src={campusWhyToApply} alt="" className="" />
          </div>
          <div className="w-1/2">
            <div className="flex absolute top-20 left-40">
              <img
                src={dottedLinesLarge}
                alt=""
                className="object-contain w-96 mr-4"
              />
              <span className="text-xl font-bold">
                Learning <span className="heading-primary">Opportunities</span>
              </span>
            </div>
            <div className="flex absolute top-60 left-80">
              <img
                src={dottedLinesSmall}
                alt=""
                className="object-contain w-72 mr-4"
              />
              <span className="text-xl font-bold">
                Career <span className="heading-primary">Counselling</span>
              </span>
            </div>
            <div className="flex absolute bottom-60 left-80">
              <img
                src={dottedLinesSmall}
                alt=""
                className="object-contain w-72 mr-4"
              />
              <span className="text-xl font-bold">
                Goodies from <span className="heading-primary">Wleness</span>
              </span>
            </div>
            <div className="flex absolute bottom-16 left-40">
              <img
                src={dottedLinesLarge}
                alt=""
                className="object-contain w-96 mr-4"
              />
              <span className="text-xl font-bold">
                Certificate <span className="heading-primary">Leadership</span>
              </span>
            </div>
          </div>
          <img src={bgCircles} alt="" className="absolute bottom-10 right-40" />
        </div>
        <img
          src={dottedPlane}
          alt=""
          className="absolute top-10 right-20 w-64"
        />
        <img
          src={doodle2}
          alt=""
          className="absolute -bottom-40 right-0 w-64 -scale-100 opacity-25"
        />
      </section>

      {/* Roles */}
      <section className="relative py-10">
        <h2 className="subheading text-center mb-10">
          Roles and <span className="heading-primary">Responsibility</span>
        </h2>
        <div className="flex container mx-auto gap-8">
          {roles.map((value, index) => {
            return (
              <figure key={index}>
                <div>
                  <img
                    src={value[0]}
                    alt=""
                    className="mx-auto object-contain w-56 h-52"
                  />
                </div>
                <figcaption>
                  <h5 className="font-bold text-center text-primary-400 text-xl">
                    {value[1]}
                  </h5>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <img
          src={dottedPlane}
          alt=""
          className="w-52 absolute top-0 left-0 -scale-x-100"
        />
      </section>

      {/* Who can join */}
      <section className="py-20 relative overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto">
          <h2 className="subheading text-center mb-4">
            Who can join <span className="heading-primary">Wleness</span>
          </h2>
          <p className="text-xl font-semibold text-center px-10 mb-8">
            An energetic passionate Psychology Students pursuing
            under-graduation & post-graduation from any university or college
            across India.
          </p>
          <div className="text-center">
            <button className="btn-one">Join Us Now</button>
          </div>
        </div>
        <img
          src={cloudWithDots}
          alt=""
          className="absolute -right-40 top-0 w-[400px]"
        />
        <img
          src={cloudWithDots}
          alt=""
          className="absolute -left-40 bottom-0 w-[400px]"
        />
      </section>

      <CampusAmbassadorForm isOpen={campusModal} onClose={closeCampusModal} />
    </main>
  );
}
