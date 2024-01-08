import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function YogaTechniques(props) {
  return (
    <section className=" mb-10 bg-primary-10 pb-6">
      <div className="container mx-auto">
        <div className="rounded-2xl py-4 pt-8 text-center lg:mb-4 lg:mt-10">
          <h2 className="subheading heading-primary">{props.title}</h2>
          <p className="font-semibold lg:text-lg">{props.desc}</p>
        </div>

        {/* Yoga techniques */}
        <div className="grid justify-center gap-6 pb-4 lg:grid-cols-3 xl:gap-10">
          {props.types.map((value, index) => {
            return (
              <figure key={index} className="p-4">
                <div>
                  <img
                    src={value.thumbnail}
                    alt={value.title}
                    className="block w-full rounded-3xl border-2 border-primary-300 object-cover"
                  />
                </div>
                <figcaption>
                  <h4 className="py-4 text-center text-xl font-bold capitalize text-primary-400">
                    {value.title}
                  </h4>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex justify-end lg:w-1/2">
                      <Link
                        className="group flex w-32 items-center justify-center rounded-full border-2 border-primary-400 py-2 text-center text-xs font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white lg:text-sm"
                        to={value.slug}
                      >
                        <FontAwesomeIcon
                          className="mr-1 h-2 w-2 rounded-full bg-primary-400 p-1 text-xs text-white group-hover:bg-white group-hover:text-primary-400"
                          icon={faInfo}
                        />
                        <span className="font-bold">Info</span>
                      </Link>
                    </div>
                    <div className="lg:w-1/2">
                      <Link
                        className="block w-32 rounded-full bg-primary-400 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-primary-300 lg:py-2.5 lg:text-sm"
                        to={value.slug}
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default YogaTechniques;
