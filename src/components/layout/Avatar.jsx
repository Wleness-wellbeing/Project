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
    <div className="container grid mx-auto mt-12 justify-center">
      <div className="px-auto items-center">
        <h1 className="text-primary-500 font-bold text-5xl">
          Choose your Avatar
        </h1>
      </div>
      <div className="grid grid-cols-3 w-96 pt-4 mx-auto">
        <img
          src={avatarImage1}
          className="hover:border-4 border-red-500 rounded-full"
          alt=""
        />
        <img
          src={avatarImage2}
          className="hover:border-4 border-red-500 rounded-full"
          alt=""
        />
        <img
          src={avatarImage3}
          className="hover:border-4 border-red-500 rounded-full"
          alt=""
        />
        <img
          src={avatarImage4}
          className="hover:border-4 border-red-500 rounded-full"
          alt=""
        />
        <img
          src={avatarImage5}
          className="hover:border-4 border-red-500 rounded-full"
          alt=""
        />
        <img
          src={avatarImage6}
          className="hover:border-4 border-red-500 rounded-full"
          alt=""
        />
      </div>
      <div className="pt-4 ">
        <input
          className="border-slate-400 border-2 rounded-lg h-12 w-full px-4"
          type="text"
          placeholder="Create Username"
        />
      </div>
      <div className="pt-4 mb-20 ">
        <button className="btn-one !rounded-lg !w-full px-6 py-3">
          Let's go
        </button>
      </div>
    </div>
  );
}
