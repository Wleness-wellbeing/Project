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
      <header className="container mx-auto flex flex-col items-center rounded-3xl py-2 lg:flex-row lg:py-6 2xl:justify-between 2xl:pb-10 2xl:pt-14">
        <div className="mb-6 lg:order-2 lg:mb-0 xl:w-[45%] 2xl:flex 2xl:justify-end">
          {/* Desktop Image */}
          <img src={activitiesHeader} alt="" className="w-full object-cover" />
        </div>
        <div className="-m-5 mb-6 rounded-3xl p-5 text-center md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:rounded-none lg:text-left xl:w-[55%] xl:pl-0">
          <hgroup className="md:mb-3">
            <h1 className="subheading mb-4 text-center lg:text-left">
              <span className="text-[#383838] lg:block">Discover the </span>
              <span className="heading-primary">healing </span>
              <span className="text-[#383838]">power of </span>
              <span className="heading-primary">Meditation</span>
            </h1>
            <p className="mb-8 text-center text-lg font-semibold lg:text-left">
              Discover a world of well-being through meditation, sadhana, brain
              exercises, and more. Nurture your mind, body, and spirit with our
              diverse activities designed for a balanced and fulfilling life.
              Start your transformative journey today.
            </p>
          </hgroup>
          <button className="btn-one">Book an appointment Now</button>
        </div>
      </header>

      {/* Sliders Section */}
      <section className="container relative mx-auto my-20 hidden h-44 md:flex lg:h-64 xl:h-80">
        <div className="absolute left-5 top-0 w-44 drop-shadow-xl transition-all hover:z-20 hover:scale-105 lg:w-64 xl:w-80">
          <Link to="/activities/meditation">
            <h2 className="text-xl font-semibold text-[#bbaef8]">Meditation</h2>
            <div className="flex h-44 w-full cursor-pointer items-center justify-center rounded-3xl bg-gradient-to-r from-[#D2C9FE] to-[#D9BFFF] lg:h-64  xl:h-72">
              <img src={meditation} className="m-auto w-24 lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="absolute left-[125px] top-0 z-10 w-44 drop-shadow-xl transition-all hover:z-20 hover:scale-105 lg:left-[177px] lg:w-64 xl:left-[205px] xl:w-80">
          <Link to="/activities/yoga">
            <h2 className="pl-8 text-xl font-semibold text-[#90d244]">Yoga</h2>
            <div className="flex h-44 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-[#E5FDCA] to-[#A7ECF7] lg:h-64 xl:h-72">
              <img src={yoga} className="m-auto w-24 lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="absolute left-[230px] top-0 z-10 w-44 drop-shadow-xl transition-all hover:z-20 hover:scale-105 lg:left-[334px]  lg:w-64 xl:left-[390px] xl:w-80">
          <Link to="/activities/sadhna">
            <h2 className="pl-8 text-xl font-semibold text-[#f0b4c4]">
              Sadhna
            </h2>
            <div className="flex h-44 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-[#F8D2DC] to-[#D1F1F8] lg:h-64 xl:h-72">
              <img src={sadhna} className="m-auto w-24  lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="absolute left-[335px] top-0 z-10 w-44 drop-shadow-xl transition-all hover:z-20 hover:scale-105 lg:left-[491px] lg:w-64 xl:left-[575px] xl:w-80">
          <Link to="/activities/self-care">
            <h2 className="pl-8 text-xl font-semibold text-[#f2ceae]">
              Self Care
            </h2>
            <div className="flex h-44 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-[#FBDFC6] to-[#FED1D2] lg:h-64  xl:h-72">
              <img src={goalPlan} className="m-auto  w-24 lg:w-36" />
            </div>
          </Link>
        </div>
        <div className="absolute left-[440px] top-0 z-10 w-44 drop-shadow-xl transition-all hover:z-20 hover:scale-105 lg:left-[648px] lg:w-64 xl:left-[760px] xl:w-80">
          <Link to="/activities/brain-exercise">
            <h2 className="pl-8 text-xl font-semibold text-[#9fe3f3]">
              Brain Exercise
            </h2>
            <div className="flex h-44 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-[#CFF4FC] to-[#F9E6F5] lg:h-64  xl:h-72">
              <img src={brainExercise} className="m-auto w-24  lg:w-36" />
            </div>
          </Link>
        </div>
      </section>

      <section className="container mx-auto">
        <figure className="mb-12 flex flex-col items-center lg:mb-2 lg:flex-row">
          <figcaption className="order-2 lg:order-1 lg:w-[55%] lg:pr-10">
            <h3 className="heading-primary mb-3 text-4xl font-bold">
              <Link to="/activities/yoga">Challenge Your Body</Link>
            </h3>
            <p className="mb-5 text-justify font-medium lg:mb-10">
              A psychiatry is grounded in the principles of empathy, compassion,
              and evidence-based practice. Our psychiatrists employ a holistic
              view of mental health, considering biological, psychological, and
              social factors that may impact an individual's well-being.
            </p>
            <Link to="/activities/yoga" className="btn-one">
              Explore Your Body
            </Link>
          </figcaption>
          <div className="order-1 mb-5 lg:order-2 lg:ml-14 lg:w-[45%]">
            <img
              src={activitiesExplore1}
              alt="Therapy"
              className="w-full object-cover"
            />
          </div>
        </figure>
        <figure className="mb-12 items-center lg:mb-2 lg:flex">
          <div className="mb-5 lg:mr-14 lg:w-[45%]">
            <img
              src={activitiesExplore2}
              alt="Therapy"
              className="w-full object-cover"
            />
          </div>
          <figcaption className="lg:w-[55%] lg:pl-10">
            <h3 className="heading-primary mb-3 text-4xl font-bold">
              <Link to="/activities/yoga">Rejuvenate</Link>
            </h3>
            <p className="mb-5 text-justify font-medium lg:mb-10">
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
        <figure className="mb-12 flex flex-col items-center lg:mb-2 lg:flex-row">
          <figcaption className="order-2 lg:order-1 lg:w-[55%] lg:pr-10">
            <h3 className="heading-primary mb-3 text-4xl font-bold">
              <Link to="/activities/yoga">Power of self - care</Link>
            </h3>
            <p className="mb-5 text-justify font-medium lg:mb-10">
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
          <div className="order-1 mb-5 lg:order-2 lg:ml-14 lg:w-[45%]">
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
