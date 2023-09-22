import React from "react";
import {
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  image3,
  meeting,
} from "../../assets";

function AboutUs() {
  return (
    <main>
      <div className="container mx-auto my-16 flex flex-col lg:flex-row">
        <div className="my-4 lg:w-1/2">
          <h1 className="subheading">
            About <span className="heading-primary">Wleness</span>
          </h1>
          <br />
          <p className="font-semibold">
            Wleness is a mental health startup dedicated to providing accessible
            and affordable therapy to individuals struggling with mental health
            issues.
          </p>
          <br />
          <p className="font-semibold">
            By leveraging technology, Wleness connects users with licensed
            mental health professionals via a secure online platform, making it
            easier for people to receive support from the comfort of their own
            homes.
          </p>
          <br />
          <p className="font-semibold">
            The organization aims to establish a comprehensive mental health
            ecosystem offering treatment and tailored care plans for a spectrum
            of mental health conditions, including but not limited to anxiety,
            depression, bipolar disorder, ADHD, OCD, schizophrenia, and
            addictions.
          </p>
        </div>
        <div className="pl-2 lg:w-1/2">
          <img src={about2} alt="Wleness" className="h-auto w-full" />
        </div>
      </div>

      <div className="mx-auto flex ">
        <div className="mx-auto mb-4 h-96 w-1/4 border-4 border-[#E9FBF8]">
          <img
            src={about6} // Replace with your image URL
            alt="Description of the image"
            className=" h-full translate-x-52 drop-shadow-lg"
          />
        </div>

        <div className="h-96 w-3/4 bg-[#E9FBF8]">
          <div className="my-16 w-3/5 translate-x-60 items-center">
            <h2 className="subheading  text-left font-semibold">
              The <span className="heading-primary">Problem </span>
            </h2>
            <p className="  font-semibold">
              Despite the growing recognition and awareness of the importance of
              mental health, access to affordable and accessible therapy remains
              a significant challenge for many individuals.
            </p>
            <p className="  font-semibold">
              Traditional in-person therapy sessions often involve long wait
              times, high costs, and limited availability of mental health
              professionals, discouraging individuals from seeking the help they
              need.
            </p>
            <p className="  font-semibold">
              Additionally, mental health issues' stigma can deter people from
              reaching out for support.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex py-4">
        <div className="h-96 w-3/4 bg-[#E9FBF8]">
          <div className="my-16 w-3/5 translate-x-60 text-left">
            <h2 className="subheading  font-semibold">
              The <span className="heading-primary">Solution</span>
            </h2>
            <p className="  font-semibold">
              The Wleness Solution addresses limited access to affordable mental
              health support with a dual approach. We connect individuals to
              licensed professionals through advanced telehealth technology,
              breaking geographical barriers.
            </p>
            <p className=" font-semibold">
              Our flexible pricing model ensures affordability for all. We've
              built a vast network of specialized therapists using an
              intelligent matching system, reducing wait times and offering
              tailored treatment.
            </p>
          </div>
        </div>
        <div className="mx-auto h-96 w-1/4 border-4 border-[#E9FBF8]">
          <img
            src={about6} // Replace with your image URL
            alt="Description of the image"
            className=" my-auto h-full -translate-x-52 drop-shadow-lg"
          />
        </div>
      </div>

      <div className="container mx-auto flex  flex-col items-center justify-center">
        <p className="px-48 py-14 text-center text-2xl font-semibold text-emerald-600">
          "At every stage of your mental health journey, Wleness stands by your
          side, committed to helping you not just feel better, but truly become
          better and remain better."
        </p>
        <h2 className="subheading  mx-auto mb-4 text-center">
          <span className="heading-primary">Wleness’s</span> way of crafting
          your journey
        </h2>
      </div>
      {/* journey is begain so lets start  */}

      <div className="grid h-full place-items-center py-5">
        <h2 className="subheading">
          <span className="heading-primary ">Reach out</span> to us
        </h2>

        <div className="h-ful container mx-auto grid grid-cols-1 items-center justify-center gap-4  sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center">
            <img className="mx-auto" src={about1}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              Contact us
            </h2>
            <p className="font-semibold">
              Unsure about what is the proper mental health support for you?
            </p>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={about4}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              Partner with us
            </h2>
            <p className="font-semibold">
              Want to integrate mental health support at your workplace
            </p>
          </div>
          <div className="text-center">
            <img className="mx-auto" src={meeting}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              Work with us
            </h2>
            <p className="font-semibold">
              Looking to be part of the Wleness Team?
              {/* make it responsive to the mobile devices as it is not responsive to the screen of that */}
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </main>
  );
}

export default AboutUs;
