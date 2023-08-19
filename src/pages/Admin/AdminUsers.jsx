import React from "react";
import UserCard from "../../components/admin/Cards/UserCard";

export default function AdminUsers() {
  return (
    <div className="w-[824px] rounded-lg bg-primary-50/50 p-6 xl:w-[900px]">
      <article className="mb-6">
        <div className="mb-4 flex justify-between">
          <span className="text-sm text-slate-400">Today</span>
          <span className="cursor-pointer text-sm text-slate-400 hover:text-blue-600">
            View All
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xl:grid-cols-4">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </article>
      <article>
        <div className="mb-4 flex justify-between">
          <span className="text-sm text-slate-400">2 May 2023</span>
          <span className="cursor-pointer text-sm text-slate-400 hover:text-blue-600">
            View All
          </span>
        </div>
        <div className="grid grid-cols-3 gap-5 xl:grid-cols-4">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </article>
    </div>
  );
}
