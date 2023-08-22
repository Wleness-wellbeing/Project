import React, { useState } from "react";
import Card from "../../components/admin/Cards/Card";
import { placeholder } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BlogModal from "../../components/admin/Modal/BlogModal";

export default function AdminIssues() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <h3 className="pb-2 text-center">Add Issue</h3>

            <button className="addIssueBtn flex h-7 w-7 items-center justify-center rounded-full bg-primary-300/50 transition-all hover:bg-primary-300">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() => setIsModalOpen(true)}
              />
            </button>
            <BlogModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)} // Close the modal
            />
            <div>
              <div
                id="addIssueModal"
                class="fixed inset-0 hidden h-full w-full items-center justify-center overflow-y-scroll bg-black/40"
              >
                <div>
                  <div class="mx-4 mt-8 h-full w-full rounded-xl bg-white p-4 xs:w-4/5 xs:p-6 md:w-3/4 lg:mx-auto lg:w-[720px]">
                    <div class="mb-2">
                      <img
                        src="https://www.thesun.co.uk/wp-content/uploads/2019/08/NINTCHDBPICT000514309806.jpg"
                        alt="object-cover block w-full"
                      />
                    </div>
                    <form action="javascript:void()" class="py-4">
                      <label for="name">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Title"
                          class="form-input"
                        />
                      </label>
                      <label for="title">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          placeholder="Title"
                          class="form-input"
                        />
                      </label>
                      <textarea
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="5"
                        placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aut odit quo cum impedit praesentium, enim iste saepe tempora blanditiis, atque deserunt? Atque, ex aliquid. Laborum eveniet est optio quia."
                        class="form-input"
                      ></textarea>

                      <div class="text-center">
                        <button class="btn-transparent addIssueBtn !px-14 lg:mr-4">
                          Close
                        </button>
                        <button class="btn-sm !px-14 lg:mr-4">Add</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card
            category="Issue Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Issue Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Issue Name"
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
            category="Issue Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Issue Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Issue Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
          <Card
            category="Issue Name"
            image={placeholder}
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Molestias inventore iure voluptate, quos tempora error. Nisi distinctio praesentium autem architecto?"
          />
        </div>
      </article>
    </div>
  );
}
