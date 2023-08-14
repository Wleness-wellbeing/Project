import React from "react";
import Card from "../../components/admin/Cards/Card";
import { placeholder } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AdminBlogs() {
  return (
    <div className="w-[824px] xl:w-[900px] p-6 bg-primary-50/50 rounded-lg">
      <article className="mb-6">
        <div className="flex justify-between mb-4">
          <span className="text-sm text-slate-400">Today</span>
          <a href="#" className="text-sm text-slate-400 hover:text-blue-600">
            View All
          </a>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="p-3 border-[1.4px] border-slate-200 rounded-lg bg-white flex justify-center items-center flex-col">
            <h3 className="pb-2 text-center">Add Blog</h3>
            <button className="w-7 flex justify-center items-center h-7 rounded-full bg-primary-300/50 hover:bg-primary-300 transition-all addIssueBtn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <Card
            category="Title"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Title"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Title"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
        </div>
      </article>
      <article>
        <div className="flex justify-between mb-4">
          <span className="text-sm text-slate-400">2 May 2023</span>
          <a href="#" className="text-sm text-slate-400 hover:text-blue-600">
            View All
          </a>
        </div>
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-5">
          <Card
            category="Title"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Title"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Title"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Title"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
        </div>
      </article>
    </div>
  );
}
