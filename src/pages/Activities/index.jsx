import { React } from "react";
import {
  brainExercise,
  goalPlan,
  meditation,
  sadhna,
  yoga,
  activitiesHeader,
  activitiesExplore1,
  activitiesExplore2,
  activitiesExplore3,
} from "../../assets";
import { Link } from "react-router-dom";

function Activities() {
  return (
    <>
      <header className="container mx-auto flex flex-col items-center rounded-3xl py-2 lg:py-6 lg:flex-row 2xl:justify-between 2xl:pt-14 2xl:pb-10">
        <div className="lg:order-2 xl:w-[45%] 2xl:flex 2xl:justify-end mb-6 lg:mb-0">
          {/* Desktop Image */}
          <img src={activitiesHeader} alt="" className="w-full object-cover" />
        </div>
        <div className="lg:order-1 mb-6 md:mb-6 lg:mb-0 xl:w-[55%] xl:pl-0 -m-5 lg:m-0 p-5 rounded-3xl lg:rounded-none">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 lg:mb-10 text-center lg:text-left lg:leading-[4rem]">
              <span className="text-[#383838] lg:block">Discover the </span>
              <span className="heading-primary">healing </span>
              <span className="text-[#383838]">power of </span>
              <span className="heading-primary">Meditation</span>
            </h1>
          </hgroup>
        </div>
      </header>

      {/* Sliders Section */}
      <section className="hidden container mx-auto md:flex h-44 lg:h-64 xl:h-80 my-20 relative">
        <div className="w-44 lg:w-64 xl:w-80 absolute left-5 top-0 drop-shadow-xl hover:z-20 hover:scale-105 transition-all">
          <Link to="/activities/meditation">
            <h2 className="text-xl font-semibold text-[#bbaef8]">Meditation</h2>
            <div className="cursor-pointer w-full flex justify-center items-center bg-gradient-to-r from-[#D2C9FE] to-[#D9BFFF] h-44 lg:h-64 xl:h-72  rounded-3xl">
              <img src={meditation} className="m-auto w-24 lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="w-44 lg:w-64 xl:w-80 absolute left-[125px] lg:left-[177px] xl:left-[205px] z-10 hover:z-20 top-0 drop-shadow-xl hover:scale-105 transition-all">
          <Link to="/activities/yoga">
            <h2 className="text-xl font-semibold text-[#90d244] pl-8">Yoga</h2>
            <div className="cursor-pointer w-full flex bg-gradient-to-r from-[#E5FDCA] to-[#A7ECF7] h-44 lg:h-64 xl:h-72 rounded-3xl">
              <img src={yoga} className="m-auto w-24 lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="absolute w-44 lg:w-64 xl:w-80 left-[230px] lg:left-[334px] xl:left-[390px] z-10 top-0 drop-shadow-xl  hover:z-20 hover:scale-105 transition-all">
          <Link to="/activities/sadhna">
            <h2 className="text-xl font-semibold text-[#f0b4c4] pl-8">
              Sadhna
            </h2>
            <div className="cursor-pointer w-full flex bg-gradient-to-r from-[#F8D2DC] to-[#D1F1F8] h-44 lg:h-64 xl:h-72 rounded-3xl">
              <img src={sadhna} className="m-auto w-24  lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="absolute w-44 lg:w-64 xl:w-80 left-[335px] lg:left-[491px] xl:left-[575px] z-10 top-0 drop-shadow-xl hover:z-20 hover:scale-105 transition-all">
          <Link to="/activities/goal-plan">
            <h2 className="text-xl font-semibold text-[#f2ceae] pl-8">
              Goal Plan
            </h2>
            <div className="cursor-pointer w-full flex bg-gradient-to-r from-[#FBDFC6] to-[#FED1D2] h-44 lg:h-64 xl:h-72  rounded-3xl">
              <img src={goalPlan} className="m-auto  w-24 lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="absolute w-44 lg:w-64 xl:w-80 left-[440px] lg:left-[648px] xl:left-[760px] z-10 top-0 drop-shadow-xl hover:z-20 hover:scale-105 transition-all">
          <Link to="/activities/brain-exercise">
            <h2 className="text-xl font-semibold text-[#9fe3f3] pl-8">
              Brain Exercise
            </h2>
            <div className="cursor-pointer w-full flex bg-gradient-to-r from-[#CFF4FC] to-[#F9E6F5] h-44 lg:h-64 xl:h-72  rounded-3xl">
              <img src={brainExercise} className="m-auto w-24  lg:w-36" />
            </div>
          </Link>
        </div>
      </section>

      <section className="container mx-auto">
        <figure className="flex flex-col lg:flex-row items-center mb-12 lg:mb-2">
          <figcaption className="order-2 lg:order-1 lg:w-[55%] lg:pr-10">
            <h3 className="text-4xl font-bold heading-primary mb-3">
              Challenge Your Body
            </h3>
            <p className="text-justify mb-5 lg:mb-10 font-medium">
              A psychiatry is grounded in the principles of empathy, compassion,
              and evidence-based practice. Our psychiatrists employ a holistic
              view of mental health, considering biological, psychological, and
              social factors that may impact an individual's well-being.
            </p>
            <Link to="/activities/yoga" className="btn-one">
              Explore Your Body
            </Link>
          </figcaption>
          <div className="order-1 lg:order-2 lg:w-[45%] lg:ml-14 mb-5">
            <img
              src={activitiesExplore1}
              alt="Therapy"
              className="w-full object-cover"
            />
          </div>
        </figure>
        <figure className="lg:flex items-center mb-12 lg:mb-2">
          <div className="lg:w-[45%] lg:mr-14 mb-5">
            <img
              src={activitiesExplore2}
              alt="Therapy"
              className="w-full object-cover"
            />
          </div>
          <figcaption className="lg:w-[55%] lg:pl-10">
            <h3 className="text-4xl font-bold heading-primary mb-3">
              Rejuvenate
            </h3>
            <p className="text-justify mb-5 lg:mb-10 font-medium">
              A holistic approach to therapy that considers the whole person –
              mind, body, and spirit. Our therapeutic services are tailored to
              meet the individual needs of each client, ensuring personalized
              and effective care.
            </p>
            <Link to="/activities/meditation" className="btn-one">
              Explore Your Body
            </Link>
          </figcaption>
        </figure>
        <figure className="flex flex-col lg:flex-row items-center mb-12 lg:mb-2">
          <figcaption className="order-2 lg:order-1 lg:w-[55%] lg:pr-10">
            <h3 className="text-4xl font-bold heading-primary mb-3">
              Power of self - care
            </h3>
            <p className="text-justify mb-5 lg:mb-10 font-medium">
              In this fast-paced world, take time for inner balance. Step into a
              world of self-discovery, where self-care becomes a delightful
              journey. Indulge in moments of pampering yourself. Empower and
              embrace the beauty of self-love, and watch your inner radiance
              shine. Remember, you deserve it! Treat yourself to self-care
              today.
            </p>
            <Link to="" className="btn-one">
              Explore
            </Link>
          </figcaption>
          <div className="order-1 lg:order-2 lg:w-[45%] lg:ml-14 mb-5">
            <img
              src={activitiesExplore3}
              alt="Therapy"
              className="w-full object-cover"
            />
          </div>
        </figure>
      </section>
    </>
  );
}

export default Activities;
