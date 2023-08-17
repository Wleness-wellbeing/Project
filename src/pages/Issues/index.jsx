import React from "react";
import { issuesHeader } from "../../assets";
import { issues } from "../../data";
import { Link } from "react-router-dom";

function Issues() {
  return (
    <>
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
            Mental health is just as important as physical health; seeking help
            is a sign of strength. Our team of top therapists understands that
            everyone's mental health journey is different and strives to provide
            individualized care and support. We can help you find the resources
            and support you need to improve your mental well-being.
          </p>
        </div>
      </header>

      <section className="container mx-auto lg:py-10 p-4 xl:pt-0">
        <div className="flex flex-wrap justify-center mb-6">
          <span className="text-3xl font-semibold text-primary-300">
            Find a Therapist in
          </span>
          <select
            name="languages"
            id="languages-select"
            className="px-3 py-1.5 border-2 border-primary-300 rounded-full outline-none mx-2 w-fit text-primary-300 font-semibold cursor-pointer"
          >
            <option value="">Your Language</option>
            <option value="hindi">Hindi</option>
            <option value="english">English</option>
            <option value="marathi">Marathi</option>
          </select>
          <span className="text-3xl font-semibold text-primary-300">in </span>
          <select
            name="issues"
            id="issues-select"
            className="px-3 py-1.5 border-2 border-primary-300 rounded-full outline-none mx-2 w-fit text-primary-300 font-semibold cursor-pointer"
          >
            <option value="">Your Issue</option>
            <option value="stress">Stress</option>
            <option value="depression">Depression</option>
            <option value="panic-attacks">Panic Attacks</option>
            <option value="anxiety">Anxiety</option>
            <option value="ocd">OCD</option>
            <option value="biopolar-disorder">Biopolar Disorder</option>
          </select>
        </div>
        <h2 className="subheading text-center heading-primary">
          Most Common Health Issues
        </h2>

        <ul className="flex flex-wrap gap-x-4 gap-y-6 py-4 2xl:pt-8 justify-center">
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-900 font-bold bg-primary-50 rounded-3xl"
            >
              All Categories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Social Life
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Relationship
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Depressed
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6 text-slate-400 font-bold rounded-3xl  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Stress
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2.5 px-6  font-bold rounded-3xl text-slate-400  hover:text-slate-900 hover:bg-primary-50 transition-all"
            >
              Health
            </a>
          </li>
        </ul>
        {/* https://www.w3schools.com/howto/howto_css_flip_card.asp - Flip card */}
        {/* Issues */}
        <div className="pb-8">
          <div className="grid gap-4 py-6 pt-8 lg:pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pb-12 xl:gap-10 xl:pb-16 2xl:gap-16 xl:grid-cols-3 mx-auto">
            {issues.map((value, index) => {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br p-1 from-secondary to-tertiary rounded-2xl rounded-br-[3rem]"
                >
                  <div className="bg-[#FAFCE7] h-full rounded-2xl flex flex-col items-center justify-center py-8 rounded-br-[3rem]">
                    <h3 className="font-bold text-center text-2xl mb-4">
                      {value.name}
                    </h3>
                    <Link to={value.slug}>
                      <img
                        src={value.image}
                        alt="Avatar"
                        className="mx-auto block w-24 h-24 lg:h-40 lg:w-40 object-cover rounded-2xl 2xl:w-48 2xl:h-48 mb-4"
                      />
                    </Link>
                    <button className="btn-one">Book Now</button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button className="btn-one">View More</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Issues;

{
  /* <div className="perpective-1000 flip-container">
  <div className="preserve-3d flip-card relative">
    <div className="relative preserve-3d">
      <div className="bg-gradient-to-r overflow-hidden from-secondary via-tertiary to-primary-300 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem] hover:shadow-xl shadow-slate-300 cursor-pointer backface-hidden transition-transform">
        <div className="py-4 lg:py-6 bg-[#FAFCE7] m-1 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem]">
          <h4 className="text-center lg:text-2xl font-semibold mb-2">
            {value.name}
          </h4>
          <img
            src={value.image}
            alt=""
            className="mx-auto block w-24 h-24 lg:h-40 lg:w-40 object-cover rounded-2xl 2xl:w-48 2xl:h-48 mb-4"
          />
          <div className="text-center">
            <button className="btn-one">Book Now</button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r overflow-hidden from-secondary via-tertiary to-primary-300 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem] hover:shadow-xl shadow-slate-300 cursor-pointer absolute inset-0 rotate-y-180 backface-hidden transition-transform">
        <div className="py-4 lg:py-6 bg-[#FAFCE7] m-1 rounded-2xl rounded-br-[5rem] lg:rounded-br-[5rem]">
          <h6 className="text-center font-semibold mb-2">
            Depression is a mental health condition characterized by persistent
            feelings of sadness, loss of interest, and a lack of energy.
          </h6>
          <div className="text-center">
            <button className="btn-one">Book then</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>; */
}
