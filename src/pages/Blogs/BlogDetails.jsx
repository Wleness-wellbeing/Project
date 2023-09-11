import React from "react";
import { blogDetailsHero } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function BlogDetails() {
  return (
    <>
      <main className="container mx-auto lg:flex">
        <article className="lg:w-[70%]">
          <div className="mb-3">
            <img src={blogDetailsHero} alt="" className="w-full rounded-3xl" />
          </div>
          <h1 className="subheading">Blog Heading Goes Here</h1>

          <p className="mb-4 font-medium">
            The sun hung low in the sky, casting a warm golden hue over the
            tranquil meadow. Birds sang melodious tunes from the branches of
            ancient oak trees, their notes blending with the gentle rustling of
            leaves in the breeze. A babbling brook wound its way through the
            lush green grass, its crystal-clear waters reflecting the clear blue
            sky above. In the distance, a small cottage nestled among the
            wildflowers, its chimney releasing thin tendrils of smoke into the
            air. It was a scene of serene beauty, a snapshot of nature's perfect
            harmony.
          </p>
          <div>
            <h2 className="mb-2 text-2xl font-bold">
              Other blog heading goes here
            </h2>
            <p className="font-medium">
              The sun hung low in the sky, casting a warm golden hue over the
              tranquil meadow. Birds sang melodious tunes from the branches of
              ancient oak trees, their notes blending with the gentle rustling
              of leaves in the breeze. A babbling brook wound its way through
              the lush green grass, its crystal-clear waters reflecting the
              clear blue sky above. In the distance, a small cottage nestled
              among the wildflowers, its chimney releasing thin tendrils of
              smoke into the air. It was a scene of serene beauty, a snapshot of
              nature's perfect harmony.
            </p>
          </div>
        </article>

        <section className="px-5 lg:w-[30%]">
          <form
            action=""
            method="get"
            className="mx-auto flex w-full rounded-3xl border-2"
          >
            <label htmlFor="search" className="w-full">
              <input
                type="search"
                name="search"
                id="search"
                className="w-full rounded-3xl px-4 py-2 outline-none"
                placeholder="Search"
              />
            </label>

            <button className="rounded-3xl bg-primary-300 px-3 py-2 text-white transition-all hover:bg-primary-400">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>

          <div className="mt-4 space-y-3">
            <p className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-medium">
              Mental health
            </p>
            <p className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-medium">
              Issues
            </p>
            <p className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-medium">
              Relationship
            </p>
            <p className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-medium">
              Travel
            </p>
            <p className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-medium">
              Eating Disorder
            </p>
            <p className="w-full rounded-xl bg-primary-50/80 px-4 py-2 font-medium">
              Health Routine
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
