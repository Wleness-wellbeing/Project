import React from "react";

export default function BlogModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form data
    const title = event.target.title.value;
    const description = event.target.desc.value;

    const newIssue = {
      title,
      description,
    };

    onClose();
  };

  return (
    <div>
      <div
        id="addIssueModal"
        className="fixed inset-0 hidden h-full w-full items-center justify-center overflow-y-scroll bg-black/40"
      >
        <div>
          <div className="mx-4 mt-8 h-full w-full rounded-xl bg-white p-4 xs:w-4/5 xs:p-6 md:w-3/4 lg:mx-auto lg:w-[720px]">
            <div className="mb-2">
              <img
                src="https://www.thesun.co.uk/wp-content/uploads/2019/08/NINTCHDBPICT000514309806.jpg"
                alt="object-cover block w-full"
              />
            </div>
            <form onSubmit={handleSubmit} className="py-4">
              <label for="name">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Title"
                  className="form-input"
                />
              </label>
              <label for="title">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className="form-input"
                />
              </label>
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="5"
                placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae aut odit quo cum impedit praesentium, enim iste saepe tempora blanditiis, atque deserunt? Atque, ex aliquid. Laborum eveniet est optio quia."
                className="form-input"
              ></textarea>

              <div className="text-center">
                <button
                  className="btn-transparent addIssueBtn !px-14 lg:mr-4"
                  onClick={onClose}
                >
                  Close
                </button>
                <button type="submit" className="btn-sm !px-14 lg:mr-4">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
