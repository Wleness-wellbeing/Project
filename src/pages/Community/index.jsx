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
      <header className="relative overflow-x-hidden overflow-y-clip">
        <div className="container mx-auto">
          <h1 className="subheading my-8 text-center">
            <span className="heading-primary">Escape, Heal and Thrive </span>
            <span>with the Wleness Community</span>
          </h1>

          <div className="mb-8 text-center">
            <img src={communityHeader} alt="" className="mb-10 w-full" />
            <p className="mb-5 text-xl font-bold xl:px-44">
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
          className="absolute -right-10 top-24 -z-10 w-40 xl:w-72"
        />
        <img
          src={bgDotsPattern}
          alt=""
          className="absolute -left-20 bottom-32 -z-10 w-44 xl:w-80"
        />
      </header>

      {/* Community Section */}
      <section className="container mx-auto xl:flex xl:gap-5">
        <div className="xl:w-1/2 xl:pr-16">
          <h3 className="subheading mb-3">
            <span className="heading-primary">Wleness </span>Community
          </h3>
          <p className="mb-4 text-justify text-lg font-medium">
            Through our community, individuals can find solace in knowing they
            are not alone in their struggles. Whether seeking advice, sharing
            stories, or simply finding comfort in the presence of others, our
            platform offers a supportive network that embraces diversity and
            encourages personal growth.
          </p>
          <p className="text-justify text-lg font-medium">
            We believe everyone deserves a space to be heard, understood, and
            supported without judgment. Join us and discover the power of
            community, where you can connect with like-minded individuals and
            embark on a journey of self-discovery and empowerment.
          </p>
        </div>

        <div className="grid grid-cols-2 xl:w-1/2">
          <div className="m-3 grid content-between rounded-2xl bg-primary-400 p-4">
            <h4 className="text-center text-xl font-bold text-white">
              Embrace Empathy:
            </h4>
            <img
              src={community1}
              alt=""
              className="mx-auto my-2 object-cover"
            />
            <p className="text-justify text-sm font-semibold text-white">
              Find a compassionate community that embraces empathy & uplifts you
              through life's ups & downs.
            </p>
          </div>
          <div className="m-3 grid content-between rounded-2xl bg-gradient-to-br from-secondary/50 to-tertiary/50 p-4">
            <h4 className="text-center text-xl font-bold">Share Freely:</h4>
            <img
              src={community2}
              alt=""
              className="mx-auto my-2 object-cover"
            />
            <p className="text-justify text-sm font-semibold">
              Discover the freedom of sharing your struggles in an accepting
              space where authenticity is celebrated.
            </p>
          </div>
          <div className="m-3 grid content-between rounded-2xl bg-gradient-to-br from-secondary/50 to-tertiary/50 p-4">
            <h4 className="text-center text-xl font-bold">Guided Support:</h4>
            <img
              src={community3}
              alt=""
              className="mx-auto my-2 object-cover"
            />
            <p className="text-justify text-sm font-semibold">
              With expert moderation, we ensure a safe haven where genuine
              support is just a message away.
            </p>
          </div>
          <div className="m-3 grid content-between rounded-2xl bg-gradient-to-br from-secondary/50 to-tertiary/50 p-4">
            <h4 className="text-center text-xl font-bold">Grow Together:</h4>
            <img
              src={community4}
              alt=""
              className="mx-auto my-2 object-cover"
            />
            <p className="text-justify text-sm font-semibold">
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
        <p className="py-2 text-center text-lg font-semibold">
          Always remember sharing your struggles only makes you stronger.
        </p>

        <div className="grid gap-x-14 gap-y-8 py-12 xl:grid-cols-3">
          {communitySupport.map((value, index) => {
            return (
              <figure
                key={index}
                className="grid justify-between rounded-xl rounded-br-[3rem] border-2 border-primary-300 p-5 transition-all hover:shadow-xl"
              >
                <h3 className="text-center text-2xl font-bold text-primary-300">
                  {value.title}
                </h3>
                <div className="mx-auto h-32 w-32">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption>
                  <p className="text-justify font-semibold">{value.desc}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="pb-8 text-center">
          <button className="btn-one">Join us now</button>
        </div>
      </section>

      <section className="container mx-auto pb-10 text-center">
        <h2 className="subheading heading-primary">We are here to help you!</h2>
        <p className="para mx-auto mb-4 xl:w-3/5">
          Helping you connect with like minded people. Find your ultimate
          support network today
        </p>
      </section>
    </>
  );
}
