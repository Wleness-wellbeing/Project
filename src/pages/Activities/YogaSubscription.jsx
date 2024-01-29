import React, { useRef, useState } from "react";
import {
  benefits_of_yoga,
  dottedRing,
  portrait_benefits_of_yoga,
  yogaSubscriptionHeader,
  yoga__MeditationAndMinfullness,
  yoga__TherapauticYoga,
  yoga__montly_subscription,
  yoga__one_time_session,
} from "../../assets";
import YogaSlider from "../../components/Carousels/YogaSlider";
import { Helmet } from "react-helmet";
import { YOGA_SUBSCRIPTION_META } from "../../data/meta";
import FaqWithImage from "../../components/FaqWithImage";
import { yogaSubscriptionFaqs } from "../../data/faqs";
import YogaUserDetailsForm from "../../components/Forms/YogaUserDetailsForm";
import { get_canonical, textColorize } from "../../utils";
import useEnquiryForm from "../../hooks/useEnquiryForm";
import CoachRequestForm from "../../components/Forms/CoachRequestForm";
import FeaturedIn from "../../components/Sections/FeaturedIn";
import HappyClient from "../../components/HappyClient";
import { yogaSubscriptionClients } from "../../data/clients";

const pricingData = [
  {
    title: "One Time sessions",
    image: yoga__one_time_session,
    original_price: 199,
    desc: "Enjoy the Special Introductory Limited Period Offer that is curated only for you. Join us every weekend to feel the rejuvenation and detox your week, which was full of stress.",
    price: 99,
    features: [
      "Personalized relaxation and rejuvenation program.",
      "Flexible schedule with early morning and weekend options.",
      "Detoxify and destress on weekends for a positive start to the week.",
      "Limited-time introductory offer for exceptional value.",
      "Complimentary trial sessions to experience the program firsthand.",
      "No Community Connection Access",
    ],
  },
  {
    title: "Monthly Subscriptions",
    desc: "Subscribe to our monthly plan and enjoy hassle-free yoga sessions at your convenience. Experience the ease of maintaining your well-being with regular, guided practices delivered right to your doorstep, all at just Rs 1499. Join us today for a stress-free path to a healthier you! Perks",
    image: yoga__montly_subscription,
    original_price: 2499,
    price: 1499,
    features: [
      "20 minutes of yoga philosophy for managing thoughts and emotions.",
      "30 minutes of step-by-step asanas from Hatha and Ashtanga styles.",
      "Guided pranayama and meditation.",
      "10 minutes of doable, healthy lifestyle tips.",
      "Straightforward strategies for navigating life's ups and downs.",
      "Engaging teaching methods using exercises, stories, and analogies.",
      "Learn how foods can enhance yoga practice and prevent illnesses.",
      "A highly nutritious plant-based diet for daily energy.",
      "Backup of sessions for missed classes.",
      "Access to recorded sessions for catching up and maximizing benefits."
    ],
  },
];

const CURRICULUM_DATA = [
  {
    day: "Day 1",
    yoga: "Yoga Session:- Yoga For Thyroid"
  },
  {
    day: "Day 2",
    yoga: "Yoga Session:- Yoga For Diabetes"
  },
  {
    day: "Day 3",
    yoga: "Yoga Session:- Yoga For Hypertension",
  },
  {
    day: "Day 4",
    yoga: "Yoga Session:- Yoga For PCOS",
  },
  {
    day: "Day 5",
    yoga: "Knowledge Time : Talk on Ashtanga yoga",
  },
  {
    day: "Day 6",
    yoga: "Yoga Session:- Yoga for Prenatal Pregnancy",
  },
  {
    day: "Day 7",
    yoga: "Yoga Session:- Yoga for Weight Loss",
  },
  {
    day: "Day 8",
    yoga: "Yoga Session:- Yoga For Constipation",
  },
  {
    day: "Day 9",
    yoga: "Yoga Session:- Yoga for TB",
  },
  {
    day: "Day 10",
    yoga: "Knowledge Time:- Ashtanga yoga - What and Why?",
  },
  {
    day: "Day 11",
    yoga: "Yoga Session:- Yoga for Arthritis",
  },
  {
    day: "Day 12",
    yoga: "Yoga Session:- Yoga for Male Reproductive Health",
  },
  {
    day: "Day 13",
    yoga: "Yoga Session:- Yoga for Ashtama",
  },
  {
    day: "Day 14",
    yoga: "Yoga Session:- Yoga for Skin Health",
  },
  {
    day: "Day 15",
    yoga: "Knowledge Time : Talk on pranamayam",
  },
  {
    day: "Day 16",
    yoga: "Yoga Session:- Yoga for Tonsillitis",
  },
  {
    day: "Day 17",
    yoga: "Yoga Session:- Yoga for Cervical Pain",
  },
  {
    day: "Day 18",
    yoga: "Yoga Session:- Yoga for Stress and Anxiety",
  },
  {
    day: "Day 19",
    yoga: "Yoga Session:- Welcoming Hatha Yoga",
  },
  {
    day: "Day 20",
    yoga: "Knowledge Time:- Debunking Women’s Health",
  },
]

function YogaSubscription() {
  const ref = useRef(null);
  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [plan, setPlan] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState("week1");

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const userDetailsForm = (title, price) => {
    setPlan({
      title: title,
      price: price,
    });

    toggleForm();
  };

  return (
    <>
      <Helmet>
        <title>{YOGA_SUBSCRIPTION_META.title}</title>
        <meta name="description" content={YOGA_SUBSCRIPTION_META.description} />
        <link rel="canonical" href={get_canonical(window.location)} />
      </Helmet>

      <header className="relative overflow-hidden bg-primary-50/40 py-2 lg:py-6 2xl:mb-4 2xl:py-16">
        <div className="container mx-auto flex flex-col items-center lg:flex-row 2xl:justify-between">
          <div className="relative mx-auto mb-6 lg:order-2 lg:mb-0 lg:w-[450px]">
            {/* Desktop Image */}
            <img
              src={yogaSubscriptionHeader}
              alt="Yoga header image"
              className="w-full object-cover"
            />
            <img
              src={dottedRing}
              alt="dotted ring"
              className="absolute -right-10 -top-10 -z-10 w-52 opacity-50 lg:w-72"
            />
            <div className="absolute bottom-2 left-5 flex h-24 w-24 -rotate-12 flex-col items-center justify-center rounded-full bg-primary-400 text-center">
              <p className="text-lg font-bold text-white">JUST @</p>
              <p className=" text-white">
                ₹ <span className="text-2xl font-extrabold">99</span>
              </p>
            </div>
          </div>
          <div className="mb-6 md:mb-6 lg:order-1 lg:mb-0 lg:w-1/2 lg:pr-16 xl:pl-4">
            <hgroup>
              <h1 className="subheading">
                {textColorize([
                  {
                    color: false,
                    text: "An Asana a Day ",
                  },
                  {
                    color: true,
                    text: "Keeps the Stress Away",
                  },
                ])}
              </h1>
            </hgroup>
            <ul className="list-disc pl-4 text-xs font-semibold lg:flex lg:space-x-6">
              <li>Beginner friendly</li>
              <li>Yoga for stress & anxiety</li>
              <li>Yoga for diabetes</li>
            </ul>
            <div className="my-6 font-medium lg:my-10 xl:pr-12">
              Unlock a happier and healthier version of yourself with our easy
              and enjoyable yoga classes. Boost your happiness and well-being
              through simple practices. Join us on this journey to a better you!
            </div>
            <div className="mb-6 flex justify-center space-x-5 text-sm md:justify-start lg:mb-8 lg:space-x-14">
              <div className="rounded-xl bg-primary-400 px-6 py-3 xl:px-8 xl:py-5">
                <p className="mb-2 rounded-lg bg-white px-2 text-center font-semibold text-primary-400">
                  Duration
                </p>
                <p className="text-lg font-semibold text-white">60 mins</p>
              </div>
              <div className="rounded-xl bg-primary-400 px-6 py-3 xl:px-8 xl:py-5">
                <p className="mb-2 rounded-lg bg-white px-2 text-center font-semibold text-primary-400">
                  Day
                </p>
                <p className="text-lg font-semibold text-white">Sat-Sun</p>
              </div>
            </div>

            <div className="text-center xl:text-left">
              <button
                className="btn-one lg:!px-14"
                onClick={() => handleScrollToComponent()}
              >
                Book Your Session
              </button>
            </div>
          </div>
        </div>

        <img
          src={dottedRing}
          alt="design ring"
          className="absolute -bottom-20 -left-20 -z-10 w-72 opacity-50 lg:w-96"
        />
      </header>

      <div ref={ref}></div>

      <section className="container relative mx-auto mb-5 pt-4 lg:mb-10">
        <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            {textColorize([
              {
                color: false,
                text: "Book Your ",
              },
              {
                color: true,
                text: "Session ",
              },
            ])}
          </h1>
          <span className="mx-auto block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div className="grid items-center gap-4 lg:gap-8">
          {pricingData.map((value, i) => {
            return (
              <div key={i} className="mb-6">
                <p className="para mb-6 text-left">{value.desc}</p>
                <figure
                  key={i}
                  className="group rounded-2xl text-center shadow-md transition-all hover:cursor-pointer lg:flex"
                >
                  <div className="flex flex-col items-center justify-between rounded-l-xl bg-primary-300 lg:w-2/5">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="h-full w-full rounded-l-lg object-cover"
                    />
                  </div>

                  <div className="rounded-r-xl border-y-2 border-r-2 border-slate-200 py-6 lg:w-3/5">
                    <h3 className="mb-4 pl-5 text-left text-xl font-extrabold transition-all xl:text-2xl">
                      {value.title}
                    </h3>
                    <ul className="mb-4 list-disc space-y-1 pl-9 text-left lg:mb-6 lg:pl-12">
                      {value.features.map((element, j) => (
                        <li
                          className="text-sm font-medium text-slate-500"
                          key={j}
                        >
                          {element}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between px-4 lg:px-8">
                      <button
                        onClick={() =>
                          userDetailsForm(value.title, value.price)
                        }
                        className="rounded-xl bg-primary-300 px-4 py-2.5 text-sm font-medium text-white lg:px-6"
                      >
                        Book Now
                      </button>
                      <h2 className="flex flex-col items-end lg:flex-row">
                        <p className="flex items-end justify-between">
                          <span className="font-medium">@ Rs.</span>
                          <span className="text-3xl font-extrabold lg:text-4xl xl:text-5xl">
                            {value.price}
                          </span>
                        </p>

                        <p className="flex justify-between text-sm">
                          <span></span>
                          <del>Rs. {value.original_price}</del>
                        </p>
                      </h2>
                    </div>
                  </div>
                </figure>
              </div>
            );
          })}
        </div>

        <div className="p-2 mt-6 pt-4 pb-6">
          <div className="mb-8">
            <p className="font-bold text-3xl text-center mb-3">Your Guided <span className="heading-primary"> Yoga Path</span></p>
            <p className="para mb-6 text-left">A 20-day program designed to make yoga accessible and enjoyable for you. With expert guidance, you'll explore relaxation, strength-building, and mindfulness, guiding a fulfilling mental and physical wellness journey.</p>
            <div className="flex justify-center">
              <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
            </div>
          </div>
          {/* weeks */}
          <div className="flex justify-center gap-10 mb-10">
            <p className={`font-bold sm:text-2xl text-center ${selectedWeek === 'week1' && 'heading-primary'}`} onClick={() => setSelectedWeek("week1")}>Week 1</p>
            <p className={`font-bold sm:text-2xl text-center ${selectedWeek === 'week2' && 'heading-primary'}`} onClick={() => setSelectedWeek("week2")}>Week 2</p>
            <p className={`font-bold sm:text-2xl text-center ${selectedWeek === 'week3' && 'heading-primary'}`} onClick={() => setSelectedWeek("week3")}>Week 3</p>
            <p className={`font-bold sm:text-2xl text-center ${selectedWeek === 'week4' && 'heading-primary'}`} onClick={() => setSelectedWeek("week4")}>Week 4</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {/* curriculum */}
            {selectedWeek === 'week1' && CURRICULUM_DATA?.slice(0, 5)?.map((el, index) => (
              <>
                <div className="bg-[#289C8F] text-lg flex items-center justify-center xs:block xs:text-xl text-white font-semibold col-span-1 rounded-lg p-2 xs:p-5">
                  <p className="">{el?.day}</p>
                </div>
                <div className="bg-[#2FC4B1] text-lg xs:text-xl text-white font-semibold col-span-2 rounded-lg p-2 xs:p-5">
                  <p>{el?.yoga}</p>
                </div>
              </>
            ))}
            {selectedWeek === 'week2' && CURRICULUM_DATA?.slice(5, 10)?.map((el, index) => (
              <>
                <div className="bg-[#289C8F] text-lg flex items-center justify-center xs:block xs:text-xl text-white font-semibold col-span-1 rounded-lg p-2 xs:p-5">
                  <p className="">{el?.day}</p>
                </div>
                <div className="bg-[#2FC4B1] text-lg xs:text-xl text-white font-semibold col-span-2 rounded-lg p-2 xs:p-5">
                  <p>{el?.yoga}</p>
                </div>
              </>
            ))}
            {selectedWeek === 'week3' && CURRICULUM_DATA?.slice(10, 15)?.map((el, index) => (
              <>
                <div className="bg-[#289C8F] text-lg flex items-center justify-center xs:block xs:text-xl text-white font-semibold col-span-1 rounded-lg p-2 xs:p-5">
                  <p className="">{el?.day}</p>
                </div>
                <div className="bg-[#2FC4B1] text-lg xs:text-xl text-white font-semibold col-span-2 rounded-lg p-2 xs:p-5">
                  <p>{el?.yoga}</p>
                </div>
              </>
            ))}
            {selectedWeek === 'week4' && CURRICULUM_DATA?.slice(15, 21)?.map((el, index) => (
              <>
                <div className="bg-[#289C8F] text-lg flex items-center justify-center xs:block xs:text-xl text-white font-semibold col-span-1 rounded-lg p-2 xs:p-5">
                  <p className="">{el?.day}</p>
                </div>
                <div className="bg-[#2FC4B1] text-lg xs:text-xl text-white font-semibold col-span-2 rounded-lg p-2 xs:p-5">
                  <p>{el?.yoga}</p>
                </div>
              </>
            ))}

          </div>
        </div>
      </section>


      <section className="container relative mx-auto mb-5 lg:mb-10">
        <div className="pb-6 pt-4 text-center sm:pt-6 lg:pb-14 2xl:pb-8">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            {textColorize([
              {
                color: false,
                text: "Yoga ",
              },
              {
                color: true,
                text: "Benefits ",
              },
            ])}
          </h1>
          <p className="para">Here's a list of why you should join a course</p>
          <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div className="grid items-center lg:grid-cols-3">
          <div>
            <ul className="mb-7 list-disc pl-6 font-semibold text-slate-500 lg:mb-0 lg:list-none lg:space-y-3 lg:pl-0 lg:text-right xl:text-lg">
              <li>Learn essential yoga</li>
              <li>Spend 15 minutes a day</li>
              <li>Develops and equlibro your chakras</li>
              <li>Learn seven energy levels</li>
              <li>Refreshens your body and soul</li>
              <li>Learn meditation techniques</li>
            </ul>
          </div>
          <div>
            <img
              src={portrait_benefits_of_yoga}
              className="mx-auto w-96 object-cover"
              alt="Benefits of yoga"
            />
          </div>
          <div>
            <ul className="mt-7 list-disc pl-6 font-semibold text-slate-500 lg:mt-0 lg:list-none lg:space-y-3 xl:text-lg">
              <li>Heal your emotions, be happy</li>
              <li>Transform your thinking habits</li>
              <li>Strengthen your health and body</li>
              <li>Learn about ayurvedic medicines</li>
              <li>Studied and applied in everday life</li>
              <li>And much more</li>
            </ul>
          </div>
        </div>
      </section>

      <FeaturedIn />
      <YogaSlider />

      <section className="container relative mx-auto mb-5 lg:mb-10">
        <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            {textColorize([
              {
                color: false,
                text: "About ",
              },
              {
                color: true,
                text: "Yoga Classes ",
              },
            ])}
          </h1>
          <p className="para">
            An experienced trainer who will teach the best.
          </p>
          <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div className="grid items-center md:grid-cols-2">
          <div>
            <img
              src={yoga__TherapauticYoga}
              className="mx-auto mb-6 w-80 lg:mb-0"
              alt="about yoga instructor"
            />
          </div>
          <div className="space-y-5 lg:pr-14">
            <p className="font-semibold">
              <strong className="text-primary-300">
                Best Yoga Instructor:
              </strong>
              Discover the goodness of yoga with our skilled teachers. Whether
              you're a beginner or somewhere between, our sessions are
              personalised. Improve your well-being, flexibility, strength, and
              focus while reducing stress. Join us for a fulfilling journey
              towards a healthier you!
            </p>
            <p className="font-semibold">
              <strong className="text-primary-300">Transform Yourself: </strong>
              Join us for a unique experience and get ready to do more advanced
              yoga. These classes help you match what you want with what you do.
              Perfect for people who wish yoga to be a regular part of their
              life.
            </p>
            <p className="font-semibold">
              <strong className="text-primary-300">Beginners Friendly: </strong>
              Our classes are made to help you learn about your mind and body
              through easy steps. Each lesson teaches the basics of yoga for
              good health. It's all about building a solid foundation in yoga
              poses, breathing, and meditation in a friendly learning
              environment.
            </p>
          </div>
        </div>
      </section>

      <section className="container relative mx-auto mb-5 hidden lg:mb-10">
        <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
          <h1 className="subheading sm:pb-0 lg:mb-4">
            {textColorize([
              {
                color: false,
                text: "Watch ",
              },
              {
                color: true,
                text: "Yoga ",
              },
              {
                color: false,
                text: "Video",
              },
            ])}
          </h1>
          <p className="para">
            Have a sneak peak to what you get from our yoga class
          </p>
          <span className="inline-block h-[3px] w-8 rounded-full bg-primary-300"></span>
        </div>
        <div></div>
      </section>

      <CoachRequestForm name="Yoga Subscription" title="Book Yoga Session" />
      <HappyClient data={yogaSubscriptionClients} />
      <FaqWithImage data={yogaSubscriptionFaqs} />

      {/* Modals */}
      <YogaUserDetailsForm
        plan={plan}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}

export default YogaSubscription;
