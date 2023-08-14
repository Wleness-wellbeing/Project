import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../../components/admin/Cards/Card";
import { placeholder } from "../../assets";

export default function IssueCategory() {
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
          <div className="p-3 border-[1.4px] border-slate-200 rounded-lg bg-white flex justify-center items-center flex-col">
            <h3 className="pb-2 text-center">Add Category</h3>
            <button className="w-7 flex justify-center items-center h-7 rounded-full bg-primary-300/50 hover:bg-primary-300 transition-all addIssueBtn">
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
        <div className="flex justify-between mb-4">
          <span className="text-sm text-slate-400">2 May 2023</span>
          <span className="text-sm text-slate-400 hover:text-blue-600 cursor-pointer">
            View All
          </span>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
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
