import React from "react";

export default function CommunityCard(props) {
  return (
    <div className="m-3 grid cursor-pointer content-between rounded-2xl p-4 transition-colors hover:bg-gradient-to-br hover:from-secondary/50 hover:to-tertiary/50 hover:shadow-xl hover:shadow-primary-50">
      <h4 className="text-center text-xl font-bold">{props.data.title}</h4>
      <img
        src={props.data.image}
        alt=""
        className="mx-auto my-2 object-cover"
      />
      <p className="text-center text-sm font-semibold">{props.data.desc}</p>
    </div>
  );
}
