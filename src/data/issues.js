import { doctor1, stressHeader, symptomsStress } from "../assets";

export const issuesData = [
  {
    slug: "/issues/stress",
    header: {
      title: [
        {
          color: false,
          text: "Master the Art of ",
        },
        {
          color: true,
          text: "Stress Management",
        },
      ],
      desc: [
        "Stress is the body's response to external pressures or demands, triggering physical, emotional, and cognitive reactions that can affect well-being and performance.",
        "It can range from motivating challenges to overwhelming strain.",
      ],
      image: stressHeader,
    },
    symptoms: {
      title: [
        {
          color: false,
          text: "Here's how Generalized ",
        },
        {
          color: true,
          text: "Stress Disorder symptoms ",
        },
        {
          color: false,
          text: "may appear: ",
        },
      ],
      points: [
        [
          "Feeling constant tiredness even after adequate rest",
          " top-0 left-1/4 ",
        ],
        ["Facing difficulty in concentrating", " top-28 right-10 "],
        ["Having trouble falling asleep", " bottom-36 right-32 "],
        [
          "Noticing muscles tensions or constant headaches",
          " bottom-0 left-1/4 ",
        ],
        [
          "Either overeating or experiencing a loss of appetite",
          " bottom-36 -left-20 ",
        ],
        [
          "Feeling easily irritable, frustrated or being short-tempered",
          " top-44 -left-20 ",
        ],
      ],
      image: symptomsStress,
    },
    doctors: [
      {
        name: "Dr. Christina",
        image: doctor1,
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        size: "w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-75",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        size: "w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-95",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        size: "w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-105",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        size: "w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-95",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        size: "w-fit hidden lg:block rounded-2xl p-[2px] shadow-2xl bg-gradient-to-tr from-secondary via-tertiary to-primary-300 scale-75",
      },
    ],
    quote:
      "Research published in the journal JAMA Internal Medicine indicates that practicing stress reduction techniques can lead to a 38% reduction in the likelihood of developing anxiety disorders.",
  },
];
