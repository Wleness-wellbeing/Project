import React,{useState,useEffect} from "react";
import ProfileImg from "../../assets/profile.png";

const DoctorDetailPage = () => {

  const[fetchData,setFetchData]=useState();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    axios
      .get("")
      .then((res) => {
        const data = res.data.data;
        setFetchData(data.slice(0,3));
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  };

  return (
    <div class="md:w-4/5 px-4 sm:px-8 py-6 rounded-xl xl:w-[85%]">
      <div class="lg:w-3/4 mx-auto">
        <div>
          <img src={ProfileImg} alt="" class="w-36 object-cover block" />
        </div>

        <form action="#" method="post" class="py-4">
          <label for="name" class="mb-4 block">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
            />
          </label>
          <label for="email" class="mb-4 block">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
            />
          </label>
          <label for="languages-known" class="mb-4 block">
            <input
              type="text"
              id="languages-known"
              name="languages-known"
              placeholder="Languages Known"
              class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
            />
          </label>
          <div class="xs:flex gap-4">
            <label for="expertise" class="mb-4 xs:w-1/2 block">
              <input
                type="text"
                id="expertise"
                name="expertise"
                placeholder="Expertise"
                class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
              />
            </label>
            <label for="exercise" class="mb-4 xs:w-1/2 block">
              <input
                type="text"
                id="exercise"
                name="exercise"
                placeholder="Exercise"
                class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
              />
            </label>
          </div>
          <div class="xs:flex gap-4">
            <label for="speciality" class="mb-4  xs:w-1/2 block">
              <select
                name="speciality"
                id="speciality"
                class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
                placeholder="Speciality"
              >
                <option value="1">-- Speciality --</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
              </select>
            </label>
            <label for="field" class="mb-4  xs:w-1/2 block">
              <select
                name="field"
                id="field"
                class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
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
              class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
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
              class="py-4 px-6 border-2 border-slate-100 rounded-lg block w-full"
              placeholder="Why Do You Want to choose Peacify?

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nesciunt iure iste debitis, repudiandae blanditiis reprehenderit distinctio odit ipsa illum, corporis error exercitationem quis velit possimus eveniet dolorum. At, ad.

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nesciunt iure iste debitis, repudiandae blanditiis reprehenderit distinctio odit ipsa illum, corporis error exercitationem quis velit possimus eveniet dolorum. At, ad.
                                "
            ></textarea>
          </label>

          <div class="text-center">
            <button
              type="button"
              className="text-white bg-[#008080] py-1.5 px-8 mr-2 mb-3 text-lg font-medium focus:outline-none rounded-full"
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
