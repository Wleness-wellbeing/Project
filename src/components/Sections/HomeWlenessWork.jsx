import React from "react";
import { Link } from "react-router-dom";
import { home_how_wleness_works } from "../../data";
import { howWlenessWorks } from "../../assets";

function HomeWlenessWork() {
  return (
    // <section className="px-3 lg:p-16">
    //   <div className="container mx-auto grid gap-x-5 gap-y-6 rounded-xl bg-teal-600 !px-0 py-5 lg:grid-cols-4 lg:gap-y-14 lg:py-14">
    //     <div className="px-5 text-center lg:col-span-3 lg:pl-16 lg:text-left">
    //       <h2 className="subheading text-white">How Wleness Works</h2>
    //       <p className="para ">
    //         <span className="text-slate-200">
    //           Wellness focuses on overall health and happiness, emphasising
    //           habits that support physical, mental, and emotional well-being. It
    //           involves eating nutritious foods, exercising regularly, managing
    //           stress, and creating positive relationships to live a balanced and
    //           fulfilling life.
    //         </span>
    //       </p>
    //     </div>
    //     <div className="flex items-end justify-center text-right lg:justify-end lg:pr-16">
    //       <Link
    //         to="/services/therapy"
    //         className="btn-one !bg-white !text-black shadow-xl hover:!bg-primary-50"
    //       >
    //         Explore services
    //       </Link>
    //     </div>

    //     <div className="mb-8 space-y-4 lg:col-span-2 lg:mb-0">
    //       {home_how_wleness_works.map((value, i) => {
    //         return (
    //           <div className="px-5 py-4 even:bg-gradient-to-r even:from-teal-700 even:to-transparent lg:pl-16">
    //             <span className="font-bold text-slate-300">0{i + 1}</span>
    //             <h3 className="mb-2 mt-1 text-xl font-semibold text-white">
    //               {value.title}
    //             </h3>
    //             <p className="text-sm font-semibold text-slate-200">
    //               {value.desc}
    //             </p>
    //           </div>
    //         );
    //       })}
    //     </div>

    //     <div className="flex items-end px-8 lg:col-span-2 lg:px-20">
    //       <img
    //         src={howWlenessWorks}
    //         alt="Why wleness wellbeing"
    //         className="rounded-3xl shadow-[30px_-30px_3px_-8px] shadow-primary-50/20 lg:shadow-[50px_-50px_4px_-10px] lg:shadow-primary-50/20"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="container mx-auto mb-12">
      <div className="mb-12 text-center lg:py-10">
        <h2 className="subheading">
          How Wleness <span className="heading-primary">Works</span>
        </h2>
        <p className="para">
          Wellness focuses on overall health and happiness, emphasising habits
          that support physical, mental, and emotional well-being. It involves
          eating nutritious foods, exercising regularly, managing stress, and
          creating positive relationships to live a balanced and fulfilling
          life.
        </p>
      </div>
      <div className="grid gap-x-5 gap-y-6 rounded-xl bg-teal-600 !px-0 py-5 lg:grid-cols-4 lg:gap-y-14 lg:py-8">
        <div className="mb-8 space-y-4 lg:col-span-2 lg:mb-0">
          {home_how_wleness_works.map((value, i) => {
            return (
              <div className="px-5 py-4 transition-all hover:bg-gradient-to-r hover:from-teal-700 hover:to-transparent lg:pl-16">
                <span className="font-bold text-slate-300">0{i + 1}</span>
                <h3 className="mb-2 mt-1 text-xl font-semibold text-white">
                  {value.title}
                </h3>
                <p className="text-sm font-semibold text-slate-200">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex items-center px-8 lg:col-span-2 lg:px-20">
          <img
            src={howWlenessWorks}
            alt="Why wleness wellbeing"
            className="rounded-3xl shadow-[30px_-30px_3px_-8px] shadow-primary-50/20 lg:shadow-[50px_-50px_4px_-10px] lg:shadow-primary-50/20"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeWlenessWork;
