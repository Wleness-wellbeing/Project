import React from "react";
import { leaf } from "../../assets";

export default function CoachExpertise({ heading, image, lists }) {
  return (
    <section className="mx-auto flex flex-col-reverse border-4 border-secondary/10 md:flex-row">
      <div className="w-full bg-secondary/10 md:w-3/4">
        <div className="my-16 w-full text-center md:ml-60 md:mr-0 md:w-2/4 md:text-left">
          <div className="text-center">
            <h2 className="subheading ">{heading}</h2>
          </div>

          <ul class="list-disc">
            {lists.map((value, i) => {
              return (
                <li
                  class="flex items-center px-4 py-2 text-left font-medium lg:px-0"
                  key={i}
                >
                  <img src={leaf} alt="Icon 1" class=" mr-1 h-4 w-4" />
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-auto my-auto transform md:mt-0 md:translate-x-0 lg:my-auto lg:-translate-x-60 lg:text-center">
        <img
          src={image} // Replace with your image URL
          alt="Description of the image"
          className=""
        />
      </div>
    </section>
  );
}
