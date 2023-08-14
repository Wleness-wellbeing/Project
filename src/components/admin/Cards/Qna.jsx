import React from "react";

export default function Qna() {
  return (
    <form className="p-3 border-[1.4px] border-slate-200 rounded-lg bg-white mb-4">
      <label htmlFor="question">
        <input
          type="text"
          name="question"
          id="question"
          defaultValue="This is a question?"
          className="form-input"
        />
      </label>
      <textarea
        name="answer"
        id="answer"
        cols={30}
        rows={5}
        className="form-input"
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid in vero assumenda veritatis a officiis corrupti laudantium iure impedit at porro, eaque quis sequi alias aperiam deserunt necessitatibus tempora blanditiis."
        defaultValue={""}
      />
      <div className="text-right">
        <button className="btn-one">Post</button>
      </div>
    </form>
  );
}
