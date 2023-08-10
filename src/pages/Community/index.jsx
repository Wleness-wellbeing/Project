import React from "react";
import {
  bgDotsPattern,
  community1,
  community2,
  community3,
  community4,
  communityHeader,
  communitySupport1,
  communitySupport2,
} from "../../assets";

const communitySupport = [
  {
    title: "Dealing with addiction",
    image: communitySupport1,
    desc: "Discover a supportive community of individuals overcoming addiction, and provide believe,  encouragement & understanding as you take steps toward a healthier and happier life.",
  },
  {
    title: "Living with Depression",
    image: communitySupport2,
    desc: "Connect with others & experience the transformative power of support and understanding. You will find the strength & personal growth needed to navigate the challenges of depression,",
  },
  {
    title: "Dealing with addiction",
    image: communitySupport1,
    desc: "Discover a supportive community of individuals overcoming addiction, and provide believe,  encouragement & understanding as you take steps toward a healthier and happier life.",
  },
  {
    title: "Dealing with addiction",
    image: communitySupport1,
    desc: "Discover a supportive community of individuals overcoming addiction, and provide believe,  encouragement & understanding as you take steps toward a healthier and happier life.",
  },
  {
    title: "Dealing with addiction",
    image: communitySupport1,
    desc: "Discover a supportive community of individuals overcoming addiction, and provide believe,  encouragement & understanding as you take steps toward a healthier and happier life.",
  },
  {
    title: "Dealing with addiction",
    image: communitySupport1,
    desc: "Discover a supportive community of individuals overcoming addiction, and provide believe,  encouragement & understanding as you take steps toward a healthier and happier life.",
  },
];

export default function index() {
  return (
    <>
      <header className="overflow-x-hidden overflow-y-clip relative">
        <div className="container mx-auto">
          <h1 className="subheading text-center my-8">
            <span className="heading-primary">Escape, Heal and Thrive </span>
            <span>with the Wleness Community</span>
          </h1>

          <div className="mb-8 text-center">
            <img src={communityHeader} alt="" className="w-full mb-10" />
            <p className="text-xl font-bold px-44 mb-5">
              Let's come together and build a supportive community where we
              share, grow, and heal as one.
            </p>
            <button className="btn-one">Join Now</button>
          </div>
        </div>

        {/* Dots  */}
        <img
          src={bgDotsPattern}
          alt=""
          className="w-72 absolute top-24 -right-10 -z-10"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="w-80 absolute bottom-32 -left-20 -z-10"
        />
      </header>

      {/* Community Section */}
      <section className="container mx-auto flex gap-5">
        <div className="w-1/2 pr-16">
          <h3 className="subheading mb-3">
            <span className="heading-primary">Wleness </span>Community
          </h3>
          <p className="font-medium text-justify mb-4 text-lg">
            Through our community, individuals can find solace in knowing they
            are not alone in their struggles. Whether seeking advice, sharing
            stories, or simply finding comfort in the presence of others, our
            platform offers a supportive network that embraces diversity and
            encourages personal growth.
          </p>
          <p className="font-medium text-justify text-lg">
            We believe everyone deserves a space to be heard, understood, and
            supported without judgment. Join us and discover the power of
            community, where you can connect with like-minded individuals and
            embark on a journey of self-discovery and empowerment.
          </p>
        </div>

        <div className="w-1/2 grid grid-cols-2">
          <div className="bg-primary-400 p-4 rounded-2xl m-3 grid content-between">
            <h4 className="text-xl text-white font-bold text-center">
              Embrace Empathy:
            </h4>
            <img
              src={community1}
              alt=""
              className="mx-auto object-cover my-2"
            />
            <p className="text-sm font-semibold text-white text-justify">
              Find a compassionate community that embraces empathy & uplifts you
              through life's ups & downs.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/50 to-tertiary/50 p-4 rounded-2xl m-3 grid content-between">
            <h4 className="text-xl font-bold text-center">Share Freely:</h4>
            <img
              src={community2}
              alt=""
              className="mx-auto object-cover my-2"
            />
            <p className="text-sm font-semibold text-justify">
              Discover the freedom of sharing your struggles in an accepting
              space where authenticity is celebrated.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/50 to-tertiary/50 p-4 rounded-2xl m-3 grid content-between">
            <h4 className="text-xl font-bold text-center">Guided Support:</h4>
            <img
              src={community3}
              alt=""
              className="mx-auto object-cover my-2"
            />
            <p className="text-sm font-semibold text-justify">
              With expert moderation, we ensure a safe haven where genuine
              support is just a message away.
            </p>
          </div>
          <div className="bg-gradient-to-br from-secondary/50 to-tertiary/50 p-4 rounded-2xl m-3 grid content-between">
            <h4 className="text-xl font-bold text-center">Grow Together:</h4>
            <img
              src={community4}
              alt=""
              className="mx-auto object-cover my-2"
            />
            <p className="text-sm font-semibold text-justify">
              Join a vibrant community dedicated to personal growth, where we
              flourish as one united force.
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="container mx-auto py-8">
        <h2 className="subheading text-center">
          <span>Uncover your special heaven of </span>
          <span className="heading-primary">support and belonging</span>
        </h2>
        <p className="text-center text-lg py-2 font-semibold">
          Always remember sharing your struggles only makes you stronger.
        </p>

        <div>
          <figure>
            <h3>Dealing with Addiction</h3>
            <figcaption></figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
