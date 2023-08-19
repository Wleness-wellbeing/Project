import React from "react";
import {
  avatarImage1,
  avatarImage2,
  avatarImage3,
  avatarImage4,
  avatarImage5,
  avatarImage6,
} from "../../assets";

export default function Avatar() {
  return (
    <div className="container mx-auto mt-12 grid justify-center">
      <div className="px-auto items-center">
        <h1 className="text-5xl font-bold text-primary-500">
          Choose your Avatar
        </h1>
      </div>
      <div className="mx-auto grid w-96 grid-cols-3 pt-4">
        <img
          src={avatarImage1}
          className="rounded-full border-red-500 hover:border-4"
          alt=""
        />
        <img
          src={avatarImage2}
          className="rounded-full border-red-500 hover:border-4"
          alt=""
        />
        <img
          src={avatarImage3}
          className="rounded-full border-red-500 hover:border-4"
          alt=""
        />
        <img
          src={avatarImage4}
          className="rounded-full border-red-500 hover:border-4"
          alt=""
        />
        <img
          src={avatarImage5}
          className="rounded-full border-red-500 hover:border-4"
          alt=""
        />
        <img
          src={avatarImage6}
          className="rounded-full border-red-500 hover:border-4"
          alt=""
        />
      </div>
      <div className="pt-4 ">
        <input
          className="h-12 w-full rounded-lg border-2 border-slate-400 px-4"
          type="text"
          placeholder="Create Username"
        />
      </div>
      <div className="mb-20 pt-4 ">
        <button className="btn-one !w-full !rounded-lg px-6 py-3">
          Let's go
        </button>
      </div>
    </div>
  );
}
