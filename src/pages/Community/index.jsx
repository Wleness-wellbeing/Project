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
  communitySupport3,
  communitySupport4,
  communitySupport5,
  communitySupport6,
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
    title: "Tackling Anxiety",
    image: communitySupport3,
    desc: "Embrace the strength of togetherness & find support among others tackling anxiety. Let’s share experiences & provide understanding, empowering each other to overcome anxiety.",
  },
  {
    title: "Overcoming Traumas",
    image: communitySupport4,
    desc: "Find solace and support among fellow survivors on the path to overcoming traumas. Here, you'll discover a safe space to share your journey, heal, and grow stronger together.",
  },
  {
    title: "Adulating with ADHD",
    image: communitySupport5,
    desc: "Navigate the challenges of adulting with ADHD through our community. You'll find acceptance, practical tips, and shared experiences to help you thrive here.",
  },
  {
    title: "Learning Self Love",
    image: communitySupport6,
    desc: "Dismantle negative thought patterns and cultivate a positive self-image. Support each other as we navigate the healing process, fostering a sense of belonging and acceptance.",
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
            <p className="text-xl font-bold xl:px-44 mb-5">
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
          className="w-40 xl:w-72 absolute top-24 -right-10 -z-10"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="w-44 xl:w-80 absolute bottom-32 -left-20 -z-10"
        />
      </header>

      {/* Community Section */}
      <section className="container mx-auto xl:flex xl:gap-5">
        <div className="xl:w-1/2 xl:pr-16">
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

        <div className="xl:w-1/2 grid grid-cols-2">
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
      <section className="container mx-auto pt-8">
        <h2 className="subheading text-center">
          <span>Uncover your special heaven of </span>
          <span className="heading-primary">support and belonging</span>
        </h2>
        <p className="text-center text-lg py-2 font-semibold">
          Always remember sharing your struggles only makes you stronger.
        </p>

        <div className="grid xl:grid-cols-3 gap-x-14 gap-y-8 py-12">
          {communitySupport.map((value, index) => {
            return (
              <figure
                key={index}
                className="border-2 border-primary-300 p-5 rounded-xl rounded-br-[3rem] grid justify-between hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-primary-300 text-center">
                  {value.title}
                </h3>
                <div className="mx-auto w-32 h-32">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full object-contain h-full"
                  />
                </div>
                <figcaption>
                  <p className="text-justify font-semibold">{value.desc}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="text-center pb-8">
          <button className="btn-one">Join us now</button>
        </div>
      </section>

      <section className="container mx-auto text-center pb-10">
        <h2 className="subheading heading-primary">We are here to help you!</h2>
        <p className="para mb-4 xl:w-3/5 mx-auto">
          Helping you connect with like minded people. Find your ultimate
          support network today
        </p>
      </section>
    </>
  );
}
