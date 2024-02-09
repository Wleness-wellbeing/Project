import React from "react";
import { leaf } from "../../assets";

export default function CoachExpertise({ heading, image, lists }) {
  return (
    <section className="mx-auto flex flex-col-reverse border-4 border-secondary/10 md:flex-row">
      <div className="w-full bg-secondary/10 md:w-3/4">
        <div className="my-16 ml-4 w-full sm:ml-20 md:mr-0 md:text-left lg:ml-32 xl:ml-44">
          <div>
            <h2 className="subheading ">{heading}</h2>
          </div>

          <ul className="list-disc">
            {lists.map((value, i) => {
              return (
                <li
                  className="flex items-center px-4 py-2 text-left font-medium lg:px-0"
                  key={i}
                >
                  <img src={leaf} alt="Icon 1" className=" mr-1 h-4 w-4" />
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="m-auto md:-translate-x-20 lg:-translate-x-32 lg:text-center xl:-translate-x-44">
        <img
          src={image} // Replace with your image URL
          alt="Description of the image"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}
