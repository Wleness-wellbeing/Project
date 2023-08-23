import React from "react";

export default function CommunityCard(props) {
  return (
    <div className="m-3 grid content-between rounded-2xl bg-gradient-to-br from-secondary/50 to-tertiary/50 p-4 transition-colors hover:bg-primary-400">
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
