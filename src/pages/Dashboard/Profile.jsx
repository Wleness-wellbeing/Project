import React from "react";
import { avatars } from "../../data/dashboard";

export default function Profile() {
  return (
    <section className="mx-auto flex h-full flex-col justify-center lg:w-96">
      <h2 className="text-center text-2xl font-semibold text-primary-400">
        Edit Your Avatar
      </h2>
      <div className="grid grid-cols-3 pt-4">
        {avatars.map((value, i) => {
          return (
            <div
              key={i}
              className="mx-auto grid w-fit cursor-pointer place-items-center rounded-full"
            >
              <img
                src={value}
                className="block w-24 rounded-full border-red-500 hover:border-4"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="space-y-3 pt-4">
        <input
          className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
          type="text"
          name="username"
          placeholder="Enter You Username"
        />
        <input
          className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
          type="tel"
          maxLength={10}
          name="number"
          placeholder="98******78"
        />
        <input
          className="w-full rounded-lg border-2 border-slate-400 px-4 py-2"
          type="text"
          name="email"
          placeholder="hooman@gmail.com"
        />
        <select
          name="gender"
          id="gender"
          className="w-full rounded-lg border-2 border-slate-400  py-2"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="pt-4 ">
        <button className="btn-one !w-full !rounded-lg px-6 py-3">
          Update
        </button>
      </div>
    </section>
  );
}
