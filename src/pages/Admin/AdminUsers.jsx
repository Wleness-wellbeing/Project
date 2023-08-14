import React from "react";
import UserCard from "../../components/admin/Cards/UserCard";

export default function AdminUsers() {
  return (
    <div className="w-[824px] xl:w-[900px] p-6 bg-primary-50/50 rounded-lg">
      <article className="mb-6">
        <div className="flex justify-between mb-4">
          <span className="text-sm text-slate-400">Today</span>
          <span className="text-sm text-slate-400 hover:text-blue-600 cursor-pointer">
            View All
          </span>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </article>
      <article>
        <div className="flex justify-between mb-4">
          <span className="text-sm text-slate-400">2 May 2023</span>
          <span className="text-sm text-slate-400 hover:text-blue-600 cursor-pointer">
            View All
          </span>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </article>
    </div>
  );
}
