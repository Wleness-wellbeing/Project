import React from "react";
import { Link } from "react-router-dom";
import {
  about1,
  about2,
  about3,
  about4,
  about5,
  about6,
  meeting,
  pgsir,
  asissir,
  kamalsir,
  pavansir,
  salonimaam,
  sreyashsir,
  aboutusbg,
  problem,
  leaf,
  approveIcon,
} from "../../assets";
import AboutUsdropbox from "../../components/AboutUsDrop";
import DummyComponent from "../../components/AboutUsDrop";
import TeamComponent from "./TeamComponent";

function AboutUs() {
  return (
    <main>
      <header
        className="relative bg-cover bg-fixed bg-center  py-24  brightness-90 sm:h-auto"
        style={{
          backgroundImage: `url(${aboutusbg}) `,
        }}
      >
        <div className="mx-auto mt-9 flex flex-col lg:flex-row">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="px-4 text-justify sm:w-full lg:order-1 lg:ml-56 lg:w-1/2 lg:px-0">
            <h1 className="mt-8 text-[42px] font-semibold text-white brightness-105">
              About <span className="heading-primary !text-white">Wleness</span>
            </h1>
            <br />
            <p className="brightness-10 relative z-10 mt-6 w-full font-semibold text-white">
              Wleness is a mental health startup dedicated to providing
              accessible and affordable therapy to individuals struggling with
              mental health issues.
            </p>
            <br />
            <p className="relative z-10 mt-6 w-full font-semibold text-white">
              By leveraging technology, Wleness connects users with licensed
              mental health professionals via a secure online platform, making
              it easier for people to receive support from the comfort of their
              own homes.
            </p>
            <br />
            <p className="relative z-10 mt-6 w-full font-semibold text-white">
              The organization aims to establish a comprehensive mental health
              ecosystem offering treatment and tailored care plans for a
              spectrum of mental health conditions, including but not limited to
              anxiety, depression, bipolar disorder, ADHD, OCD, schizophrenia,
              and addictions.
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto mt-5 text-center lg:mt-7 ">
        <h2 className="subheading  font-semibold">
          The <span className="heading-primary">Problem</span>
        </h2>
      </div>
      <div className="container mx-auto   flex flex-col-reverse lg:flex-row">
        <div className="my-auto w-full text-center lg:order-2 lg:w-1/2 lg:text-left">
          <div>
            <div className="flex items-start py-2">
              {" "}
              {/* Use a flex container */}
              <img
                src={leaf}
                alt="Leaf Icon"
                className="mr-2 h-4 w-4 object-contain"
              />
              <p className=" font-semibold">
                Modern life can be demanding, leading to stress, anxiety, and
                emotional exhaustion.
              </p>
            </div>

            <div className="flex items-start py-2">
              {" "}
              {/* Use a flex container */}
              <img
                src={leaf}
                alt="Leaf Icon"
                className="mr-2 h-4 w-4 object-contain"
              />
              <p className="font-semibold">
                Digital devices and social media can exacerbate feelings of
                isolation, inadequacy, and anxiety.
              </p>
            </div>
            <div className="flex items-start py-2">
              {" "}
              {/* Use a flex container */}
              <img
                src={leaf}
                alt="Leaf Icon"
                className="mr-2 h-4 w-4 object-contain"
              />
              <p className="font-semibold">
                Therapy may not be affordable or feasible for everyone, and some
                may fear societal judgment.
              </p>
            </div>
            <div className="flex items-start py-2">
              {" "}
              {/* Use a flex container */}
              <img
                src={leaf}
                alt="Leaf Icon"
                className="mr-2 h-4 w-4 object-contain"
              />
              <p className="font-semibold">
                Geographical constraints and financial limitations can hinder
                access to mental health services.
              </p>
            </div>
            <div className="flex items-start py-2">
              {" "}
              {/* Use a flex container */}
              <img
                src={leaf}
                alt="Leaf Icon"
                className="mr-2 h-4 w-4 object-contain"
              />
              <p className="font-semibold">
                In the technological era, there’s a need for simple and
                affordable mental health solutions.
              </p>
            </div>
            <div className="flex items-start py-2">
              {" "}
              {/* Use a flex container */}
              <img
                src={leaf}
                alt="Leaf Icon"
                className="mr-2 h-4 w-4 object-contain"
              />
              <p className="font-semibold">
                No platform addresses holistic wellness, one has to scout
                different forums.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto my-auto w-full lg:order-1 lg:w-1/2">
          {/* Added ml-4 to shift the image to the left */}
          <img
            src={problem} // Replace with your image URL
            alt="Description of the image"
            className=""
          />
        </div>
      </div>

      <div className="mx-auto flex flex-col-reverse justify-center border-4 border-secondary/10 md:flex-row">
        <div className="mx-auto my-auto w-full bg-secondary/10 text-center md:w-3/4">
          <div className="mr-40 mt-8 text-end">
            <h2 className="subheading">
              The <span className="heading-primary">Solution</span>
            </h2>
          </div>
          <div className="my-12  w-full text-center md:ml-60 md:mr-0 md:w-2/4 md:text-justify">
            <ul class="list-disc ">
              <li class="item-start  flex ">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />
                <span className="font-semibold">
                  Wleness addresses the concerns with a 360-degree view and
                  provides a single platform for all one needs.{" "}
                </span>
              </li>
              <li class=" flex items-start py-2">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  Wleness uses advanced telehealth technology to connect users
                  with licensed professionals, overcoming geographical barriers
                  and offering personalised solutions.{" "}
                </span>
              </li>
              <li class="flex items-start py-2">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  {" "}
                  Wleness offers alternative healing techniques like Music
                  Healing and Sadhna, differing from the traditional
                  counseling-only
                </span>
                approach.{" "}
              </li>
              <li class="flex items-start py-2">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />
                <spna className="font-semibold">
                  It provides a supportive, anonymous community for open
                  conversations about mental wellness.
                </spna>
              </li>
              <li class="flex items-start py-2">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  Wleness recognises the value of life and executive coaching in
                  personal and professional growth.{" "}
                </span>
              </li>
              <li class="flex items-start py-2">
                <img
                  src={leaf}
                  alt="Leaf Icon"
                  className="mr-2 h-4 w-4 object-contain"
                />{" "}
                <span className="font-semibold">
                  Life and executive coaching services are available to help
                  users unlock their potential, overcome challenges, and reach
                  their
                </span>
                goals.{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto my-auto transform md:mt-0 md:translate-x-0 lg:my-auto lg:-translate-x-60 lg:text-center">
          <img
            src={about6} // Replace with your image URL
            alt="Description of the image"
            className=""
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="px-6 py-6 text-lg font-semibold text-emerald-600 sm:px-12 sm:py-10 sm:text-xl md:px-24 md:py-14 md:text-2xl lg:px-48">
          "At every stage of your mental health journey, Wleness stands by your
          side, committed to helping you not just feel better, but truly become
          better and remain better."
        </p>
        <h2 className="subheading mx-auto mb-2 text-lg sm:mb-4 sm:text-xl md:text-4xl">
          <span className="heading-primary">Wleness’s</span> way of crafting
          your journey
        </h2>
      </div>

      <div className="container  mx-auto flex flex-col items-center gap-4 pb-6 sm:flex-row">
        <div className="order-2 w-full sm:w-1/2 lg:w-1/2">
          <DummyComponent />
        </div>
        <div className="order-1 mb-4 flex w-full items-center justify-center sm:w-1/2 lg:order-2">
          <img src={about3} alt="Your image" className="w-2/3 lg:w-full" />
        </div>
      </div>

      <div className="relative overflow-x-clip bg-secondary/20 pb-6 pt-4 xl:pb-4 xl:pt-4">
        <div className="container mx-auto my-4 text-center">
          <h2 className="subheading mx-auto mb-2 text-lg sm:mb-4 sm:text-xl md:text-4xl">
            Meet the <span className="heading-primary">Visionaries</span> behind
            Wleness
          </h2>
          <p className="para">
            Wleness is guided, shaped, and overseen by a diverse collective of
            individuals united by a shared mission: providing exceptional mental
            healthcare to all in need.
          </p>
        </div>
        <TeamComponent />
      </div>

      <div className="grid h-full place-items-center  gap-4  pb-6">
        <h2 className="subheading py-6">
          <span className="heading-primary ">Reach out</span> to us
        </h2>
        <div className="h-ful container mx-auto grid grid-cols-1 items-center justify-center  gap-16   sm:grid-cols-2 md:grid-cols-3">
          <Link to="/contact-us">
            <div className="text-center hover:p-4 hover:shadow-xl">
              <img className="mx-auto" src={about1}></img>
              <h2 className="py-2 text-lg font-semibold text-primary-400">
                Contact us
              </h2>
              <p className="font-semibold">
                Unsure about what is the proper mental health support for you?
              </p>
              <p className="font-bold">Contact us</p>
            </div>
          </Link>
          <Link to="/corporate-wellbeing">
            <div className="text-center hover:p-4 hover:shadow-xl">
              <img className="mx-auto" src={about4}></img>
              <h2 className="py-2 text-lg font-semibold text-primary-400">
                Partner with us
              </h2>
              <p className="font-semibold ">
                Want to integrate mental health support at your workplace
              </p>
              <p className="font-bold">Partner with us</p>
            </div>
          </Link>
          <Link to="/internship">
            <div className="text-center hover:p-4 hover:shadow-xl ">
              <img className="mx-auto" src={meeting}></img>
              <h2 className="py-2 text-lg font-semibold text-primary-400">
                Work with us
              </h2>
              <p className="font-semibold">
                Looking to be part of the Wleness Team?
                {/* make it responsive to the mobile devices as it is not responsive to the screen of that */}
              </p>
              <p className="font-bold">Work with us</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
