// Data
import {
  activityBlogThumbnail,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
  feature11,
  feature12,
  musicalTherapyHeader,
  musicalTherapy1,
  musicalTherapy2,
  musicalTherapy3,
  musicalTherapy4,
  musicalTherapy5,
  musicalTherapy6,
  whyChooseTherapy1,
  whyChooseTherapy2,
  whyChooseTherapy3,
  whyChooseTherapy4,
  bestTherapy,
  specialist1,
  therapyHeader,
  psychiatristHeader,
  bestPsychiatrist,
  couplesTherapyHeader1,
  couplesTherapyHeader2,
  couplesTherapyHeader3,
} from "../assets";

// Services Page Features Blocks
export const servicesFeatures = [
  {
    name: "Express Music",
    image: feature7,
  },
  {
    name: "Inner Peace",
    image: feature5,
  },
  {
    name: "Emotional Support",
    image: feature8,
  },
];
export const couplesTherapyFeatures = [
  {
    name: "Express Love",
    image: feature4,
  },
  {
    name: "Feel Alive",
    image: feature5,
  },
  {
    name: "Reclaim Affection",
    image: feature6,
  },
];
export const musicalTherapyFeatures = [
  {
    name: "Cognitive Enhancement",
    image: feature11,
  },
  {
    name: "Stress Reduction",
    image: feature12,
  },
  {
    name: "Emotional Expression",
    image: feature8,
  },
];

// Services Categories
export const couplesTherapyData = {
  id: 1,
  name: "Couples Therapy",
  slug: "/services/couples-therapy",
  header: {
    title: [
      {
        color: false,
        text: "Harmonizing love via ",
      },
      {
        color: true,
        text: "Couples Therapy",
      },
    ],
    desc: "Rediscover the joy of togetherness with Relationship Revive, our personalized couple therapy program. Enhance communication, deepen intimacy, and overcome challenges alongside expert guidance. Invest in your relationship today for a stronger, more fulfilling connection.",
    images: [
      couplesTherapyHeader1,
      couplesTherapyHeader2,
      couplesTherapyHeader3,
    ],
  },
  blogs: [
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
  ],
};

export const MusicalTherapyData = {
  id: 2,
  name: "Musical Healing",
  slug: "/services/musical-healing",
  header: {
    title: [
      {
        color: false,
        text: "Discover the power of ",
      },
      {
        color: true,
        text: "Musical Healing",
      },
    ],
    desc: "Explore how music therapy offers a unique way to express emotions and heal. With its rhythms and tones, this therapy helps with different feelings, bringing more balance inside you. Discover profound insights and find more peace through the power of music.",
    image: musicalTherapyHeader,
  },
  activities: {
    title: "MUSICAL HEALING TECHNIQUES",
    desc: "Use music to improve mental and emotional well-being through techniques like active listening, improvisation, and songwriting with our top counselors.",
    types: [
      {
        title: "Guided Imagery and Music",
        thumbnail: musicalTherapy1,
        desc: "Listening to carefully selected music in a relaxed state to explore emotions, memories, and thoughts, gain insight, reduce stress, and promote self-awareness.",
        slug: "/",
      },
      {
        title: "Nordoff-Robbins Music Therapy",
        thumbnail: musicalTherapy2,
        desc: "Focuses on musical improvisation to enhance communication, skills, and emotional expression, beneficial for children and individuals with developmental problems.",
        slug: "/",
        class: ["order-2", "order-1"],
      },
      {
        title: "Bonny Method of Guided Imagery and Music",
        thumbnail: musicalTherapy3,
        desc: "Utilizes music to facilitate a deep unconscious, promoting personal growth & transformation,share their emotional experiences during and after the BMGIM listening sessions.",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Neurologic Music Therapy",
        thumbnail: musicalTherapy4,
        desc: "Applies evidence-based techniques to help neurological issues, utilizing rhythm, melody, and harmony to improve cognitive, motor, and speech in individuals.",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Songwriting Therapy",
        thumbnail: musicalTherapy5,
        desc: "Encourages clients to express through songs, gives an outlet for emotions, fosters creativity & enables personal growth through the process of composing & performing their music.",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Raaga Chikitsa",
        thumbnail: musicalTherapy6,
        desc: "A traditional form of musical healing in Indian classical music, where specific ragas and suras are used to evoke and influence specific emotions, moods, and states of mind.",
        slug: "/",
        class: ["order-1", "order-2"],
      },
    ],
  },
  blogs: [
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
  ],
};

export const TherapyData = {
  name: "Therapy",
  desc: "Discover transformative counseling and online therapy for growth, healing, and resilience, empowering you with compassionate support for renewed well-being.",
  slug: "/therapy",
  image: therapyHeader,
  bestTherapist: {
    heading: [
      {
        color: false,
        text: "Select the best ",
      },
      {
        color: true,
        text: "Therapist ",
      },
      {
        color: false,
        text: "Today",
      },
    ],
    featureImage: bestTherapy,
    features: [
      ["Consultations ", "anywhere, anytime"],
      ["Online ", "Consultations"],
      ["Trusted ", "Therapist"],
      ["Affordable ", "Help"],
    ],
    startBtn: ["Start the therapy", "/issues"],
  },
  whyChoose: [
    {
      title: "Emotional Support",
      desc: "Therapy provides a safe and supportive space to express & process emotions.",
      image: whyChooseTherapy1,
    },
    {
      title: "Problem Solving",
      desc: "Therapists offer  strategies to cope with challenges & find solutions.",
      image: whyChooseTherapy2,
    },
    {
      title: "Relationships",
      desc: "Therapy can enhance communication and interpersonal skills.",
      image: whyChooseTherapy3,
    },
    {
      title: "Mental Wellness",
      desc: "Therapy promotes overall mental health and well-being.",
      image: whyChooseTherapy4,
    },
  ],
};

export const psychiatristData = {
  name: "Psychiatrist",
  desc: "Discover transformative psychiatric care and personalized online counselling for effective treatment, renewed well-being, and empowered growth.",
  slug: "/psychiatrist",
  image: psychiatristHeader,
  bestTherapist: {
    heading: [
      {
        color: false,
        text: "Select the best ",
      },
      {
        color: true,
        text: "Psychiatrist ",
      },
      {
        color: false,
        text: "Today",
      },
    ],
    featureImage: bestPsychiatrist,
    features: [
      ["Best Psychiatrist ", "available", "left-0 top-0 lg:top-6 lg:left-16 "],
      ["Online ", "Consultations", " top-0 lg:top-6 right-0 lg:right-28 "],
      ["Affordable ", "Help", " -bottom-12 lg:bottom-0 left-0 lg:left-32"],
      [
        "Psychiatrist ",
        "just a all away",
        " -bottom-12 lg:-bottom-4 right-0 lg:right-28",
      ],
    ],
    startBtn: ["Start the treatment", "/treatments"],
    doctors: [
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: specialist1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
    ],
  },
};
