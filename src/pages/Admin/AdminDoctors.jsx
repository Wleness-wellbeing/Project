import React from "react";

export default function AdminDoctors() {
  return (
    <div className="w-[824px] xl:w-[900px] p-6 bg-primary-50/50 rounded-lg">
      <article className="mb-6">
        <div className="flex justify-between mb-4">
          <span className="text-sm text-slate-400">Today</span>
          <a href="#" className="text-sm text-slate-400 hover:text-blue-600">
            View All
          </a>
        </div>
      </article>
    </div>
  );
}
