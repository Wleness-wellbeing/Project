import React from "react";
import Qna from "../../components/admin/Cards/Qna";

export default function AdminQuestions() {
  return (
    <div className="w-[824px] rounded-lg bg-primary-50/50 p-6 xl:w-[900px]">
      <article className="mb-6">
        <div className="mb-4 flex justify-between">
          <span className="text-sm text-slate-400">Today</span>
          <span className="cursor-pointer text-sm text-slate-400 hover:text-blue-600">
            View All
          </span>
        </div>

        <div>
          <Qna />
          <Qna />
          <Qna />
        </div>
      </article>{" "}
      <article className="mb-6">
        <div className="mb-4 flex justify-between">
          <span className="text-sm text-slate-400">2 May 2023</span>
          <span className="cursor-pointer text-sm text-slate-400 hover:text-blue-600">
            View All
          </span>
        </div>

        <div>
          <Qna />
          <Qna />
          <Qna />
        </div>
      </article>
    </div>
  );
}
