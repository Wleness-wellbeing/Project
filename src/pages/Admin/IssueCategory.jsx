import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../../components/admin/Cards/Card";
import { placeholder } from "../../assets";

export default function IssueCategory() {
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
          <div className="flex flex-col items-center justify-center rounded-lg border-[1.4px] border-slate-200 bg-white p-3">
            <h3 className="pb-2 text-center">Add Category</h3>
            <button className="addIssueBtn flex h-7 w-7 items-center justify-center rounded-full bg-primary-300/50 transition-all hover:bg-primary-300">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <Card
            category="Category Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Category Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Category Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
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
          <Card
            category="Category Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Category Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Category Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Category Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
        </div>
      </article>
    </div>
  );
}
