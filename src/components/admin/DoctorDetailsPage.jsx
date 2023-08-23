import React, { useState, useEffect } from "react";
import { profile } from "../../assets";

const DoctorDetailPage = () => {
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    axios
      .get("")
      .then((res) => {
        const data = res.data.data;
        setFetchData(data.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  };

  return (
    <div class="rounded-xl px-4 py-6 sm:px-8 md:w-4/5 xl:w-[85%]">
      <div class="mx-auto lg:w-3/4">
        <div>
          <img src={profile} alt="" class="block w-36 object-cover" />
        </div>

        <form action="#" method="post" class="py-4">
          <label for="name" class="mb-4 block">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
            />
          </label>
          <label for="email" class="mb-4 block">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
            />
          </label>
          <label for="languages-known" class="mb-4 block">
            <input
              type="text"
              id="languages-known"
              name="languages-known"
              placeholder="Languages Known"
              class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
            />
          </label>
          <div class="gap-4 xs:flex">
            <label for="expertise" class="mb-4 block xs:w-1/2">
              <input
                type="text"
                id="expertise"
                name="expertise"
                placeholder="Expertise"
                class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
              />
            </label>
            <label for="exercise" class="mb-4 block xs:w-1/2">
              <input
                type="text"
                id="exercise"
                name="exercise"
                placeholder="Exercise"
                class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
              />
            </label>
          </div>
          <div class="gap-4 xs:flex">
            <label for="speciality" class="mb-4  block xs:w-1/2">
              <select
                name="speciality"
                id="speciality"
                class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
                placeholder="Speciality"
              >
                <option value="1">-- Speciality --</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
            </label>
            <label for="field" class="mb-4  block xs:w-1/2">
              <select
                name="field"
                id="field"
                class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
                placeholder="field"
              >
                <option value="1">-- Field --</option>
                <option value="1">Field 1</option>
                <option value="2">Field 2</option>
                <option value="3">Field 3</option>
                <option value="4">Field 4</option>
              </select>
            </label>
          </div>
          <label for="bio" class="mb-4 block">
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="10"
              class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
              placeholder="Tell Me More About Yourself

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nesciunt iure iste debitis, repudiandae blanditiis reprehenderit distinctio odit ipsa illum, corporis error exercitationem quis velit possimus eveniet dolorum. At, ad.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nesciunt iure iste debitis, repudiandae blanditiis reprehenderit distinctio odit ipsa illum, corporis error exercitationem quis velit possimus eveniet dolorum. At, ad.
                                "
            ></textarea>
          </label>
          <label for="why-choose-us" class="mb-4 block">
            <textarea
              name="why-choose-us"
              id="why-choose-us"
              cols="30"
              rows="10"
              class="block w-full rounded-lg border-2 border-slate-100 px-6 py-4"
              placeholder="Why Do You Want to choose Peacify?

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nesciunt iure iste debitis, repudiandae blanditiis reprehenderit distinctio odit ipsa illum, corporis error exercitationem quis velit possimus eveniet dolorum. At, ad.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nesciunt iure iste debitis, repudiandae blanditiis reprehenderit distinctio odit ipsa illum, corporis error exercitationem quis velit possimus eveniet dolorum. At, ad.
                                "
            ></textarea>
          </label>

          <div class="text-center">
            <button
              type="button"
              className="mb-3 mr-2 rounded-full bg-[#008080] px-8 py-1.5 text-lg font-medium text-white focus:outline-none"
            >
              Approve
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorDetailPage;
