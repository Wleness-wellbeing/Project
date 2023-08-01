import React from "react";

export default function HeaderWithImage(props) {
  return (
    <header className="container mx-auto flex flex-col lg:flex-row items-center">
      <div className="lg:order-2 lg:w-1/2 py-4">
        <img src={props.data.image} alt="" />
      </div>
      <div className="lg:order-1 lg:w-1/2">
        <h1 className="subheading">
          <span className="heading-primary">{props.data.title}</span>
        </h1>
        <p className="para pt-1 lg:pt-6">{props.data.desc}</p>

        <div className="mb-8">
          <h2 className="text-primary-500 font-bold text-2xl pt-8 lg:pt-20">
            Variations:
          </h2>
          <p className="para">{props.data.var}</p>
        </div>
      </div>
    </header>
  );
}
