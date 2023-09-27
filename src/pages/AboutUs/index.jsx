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
} from "../../assets";
import AboutUsdropbox from "../../components/AboutUsDrop";
import DummyComponent from "../../components/AboutUsDrop";
import TeamComponent from "./TeamComponent";

function AboutUs() {
  return (
    <main>
      <header
        className="relative  bg-cover bg-center py-36 brightness-90 sm:h-auto "
        style={{
          backgroundImage: `url(${aboutusbg}) `,
        }}
      >
        <div className="mx-auto flex flex-col lg:flex-row">
          {/* <div className="lg:order-2">
            <img
              src={aboutusbg}
              alt="Wleness"
              className="hidden w-full scale-y-150 object-cover object-left sm:block lg:w-auto"
            />
          </div> */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="px-4 text-justify sm:w-full lg:order-1 lg:ml-56 lg:w-1/2 lg:px-0">
            <h1 className="subheading text-white brightness-105">
              About <span className="heading-primary !text-white">Wleness</span>
            </h1>
            <br />
            <p className="brightness-10 relative z-10 w-full pt-4 font-semibold text-white">
              Wleness is a mental health startup dedicated to providing
              accessible and affordable therapy to individuals struggling with
              mental health issues.
            </p>
            <br />
            <p className="relative z-10 w-full font-semibold text-white">
              By leveraging technology, Wleness connects users with licensed
              mental health professionals via a secure online platform, making
              it easier for people to receive support from the comfort of their
              own homes.
            </p>
            <br />
            <p className="relative z-10 w-full font-semibold text-white">
              The organization aims to establish a comprehensive mental health
              ecosystem offering treatment and tailored care plans for a
              spectrum of mental health conditions, including but not limited to
              anxiety, depression, bipolar disorder, ADHD, OCD, schizophrenia,
              and addictions.
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-6 flex flex-col-reverse lg:flex-row">
        <div className="my-auto w-full text-center lg:order-2 lg:w-1/2 lg:text-left">
          <div>
            <h2 className="subheading text-left font-semibold">
              The <span className="heading-primary">Problem</span>
            </h2>
            <p className="font-semibold">
              Modern life can be demanding, and it’s not uncommon to feel
              stressed, anxious, and emotionally drained. Work, relationships,
              and personal expectations can make it challenging to maintain
              mental balance and happiness.
            </p>
            <br />
            <p className="font-semibold">
              However, finding help for your mental well-being can be tricky.
              For some people, therapy may not be affordable or may take up too
              much time. Others may fear asking for help because they’re worried
              about what others will think.
            </p>
            <br />
            <p className="font-semibold">
              Moreover, digital devices and social media can worsen the
              situation by making us feel even more alone, not good enough, and
              anxious. In this world of technology, we need simple and
              affordable ways to take care of our emotional and mental
              well-being.
            </p>
            <br />
            <p className="font-semibold">
              Unfortunately, geographical constraints and financial limitations
              exacerbate this problem, as many individuals may not have access
              to mental health services due to their location or inability to
              afford traditional therapy sessions.
            </p>
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
      <div className="mx-auto flex flex-col-reverse border-4 border-secondary/10 md:flex-row">
        <div className="w-full bg-secondary/10 md:w-3/4">
          <div className="my-16 w-full text-center md:ml-60 md:mr-0 md:w-2/4 md:text-justify">
            <h2 className="subheading font-semibold">
              The <span className="heading-primary">Solution</span>
            </h2>
            <p className="font-semibold">
              Wleness helps you find affordable support for your mental wellness
              with a two-pronged approach. We use advanced telehealth technology
              to connect you with licensed professionals, no matter where you
              are, so you don’t have to worry about geographical barriers. We
              also offer flexibility and affordability for everyone, so you can
              get the help you need without spending too much.
            </p>
            <br />
            <p className="font-semibold">
              We have a large network of qualified therapists and use smart
              matching algorithms to create a personalized treatment plan for
              you. This makes sure that you get the customized care that you
              need. We also want to reduce the stigma around mental wellness. We
              have services like music therapy, meditation, yoga, and sadhana.
              We encourage open conversations and provide a supportive,
              anonymous community where you can talk about your mental wellness
              without fear.
            </p>
            <br />
            <p className="font-semibold">
              We understand the value of life and executive coaching in helping
              people grow personally and professionally. These types of coaching
              offer helpful support and insights, helping people unlock their
              full potential, overcome challenges, and reach their goals. In
              simple terms, they act as guides, leading people to success in
              life and work.
            </p>
            <br />
            <p className="font-semibold">
              "At every stage of your mental well-being journey, Wleness stands
              by your side, partnering in your well-being."
            </p>
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

      <div className="container mx-auto flex flex-col items-center gap-4 sm:flex-row">
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <DummyComponent />
        </div>
        <div className="mb-4 flex w-full items-center justify-center sm:w-1/2 lg:order-2">
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

      <div className="grid h-full place-items-center py-5">
        <h2 className="subheading">
          <span className="heading-primary ">Reach out</span> to us
        </h2>

        <div className="h-ful container mx-auto grid grid-cols-1 items-center justify-center gap-4  sm:grid-cols-2 md:grid-cols-3">
          <div className="text-center hover:p-4 hover:shadow-xl">
            <img className="mx-auto" src={about1}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              Contact us
            </h2>
            <p className="font-semibold">
              Unsure about what is the proper mental health support for you?
            </p>
          </div>
          <div className="text-center hover:p-4 hover:shadow-xl">
            <img className="mx-auto" src={about4}></img>
            <h2 className="text-lg font-semibold text-primary-400">
              Partner with us
            </h2>
            <p className="font-semibold ">
              Want to integrate mental health support at your workplace
            </p>
          </div>
          <Link to="/internship">
            <div className="text-center hover:p-4 hover:shadow-xl ">
              <img className="mx-auto" src={meeting}></img>
              <h2 className="text-lg font-semibold text-primary-400">
                Work with us
              </h2>
              <p className="font-semibold">
                Looking to be part of the Wleness Team?
                {/* make it responsive to the mobile devices as it is not responsive to the screen of that */}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
