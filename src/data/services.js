// Data
import {
  feature5,
  activityBlogThumbnail,
  couplesTherapyHeader,
  feature7,
  feature8,
  musicalTherapyHeader,
  musicalTherapy1,
  musicalTherapy2,
  musicalTherapy3,
  musicalTherapy4,
  musicalTherapy5,
  musicalTherapy6,
  feature4,
  feature6,
  whyChooseTherapy1,
  whyChooseTherapy2,
  whyChooseTherapy3,
  whyChooseTherapy4,
  whyChooseTherapy5,
  bestTherapy,
  doctor1,
  therapyHeader,
  psychiatristHeader,
  bestPsychiatrist,
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
    desc: [
      {
        color: false,
        text: "Navigating Life's Challenges Hand in ",
      },
      {
        color: true,
        text: "Hand for a Stronger Us",
      },
    ],
    image: couplesTherapyHeader,
  },
  activities: {
    title: "Brain Games",
    desc: "Explore a range of brain-boosting exercises and activities, puzzles, techniques, and mental workouts tailored to enhance cognition and mental well-being, memory, focus, and overall brain health.",
    types: [
      {
        title: "The Turtle Hunter",
        thumbnail: "path/to/image",
        desc: "Welcome to Turtle Treasure Dash, an exciting adventure game where you control a brave and agile turtle on a quest to collect shimmering coins while navigating through a challenging obstacle course. Join our little hero on an epic journey through various terrains, from lush forests to treacherous caves and beyond, in search of precious treasure!",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Galaxy - The Space Adventure",
        thumbnail: "path/to/image",
        desc: "Embark on an interstellar journey beyond the boundaries of the known universe in Galactic Odyssey, an epic space adventure game that will take you to the stars and beyond. Strap into your advanced spaceship and prepare for an unforgettable voyage through dazzling galaxies, treacherous asteroid fields, and enigmatic wormholes.",
        slug: "/",
        class: ["order-2", "order-1"],
      },
      {
        title: "Treasure Chest",
        thumbnail: "path/to/image",
        desc: "Get ready for a thrilling and immersive treasure hunt like no other in 'Treasure Quest Adventures,' an action-packed game that will take you on a mesmerizing journey to uncover hidden riches and long-lost artifacts in mysterious lands. Embark on an epic quest filled with puzzles, challenges, and danger, as you set out to become the greatest treasure hunter the world has ever known!",
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

export const MusicalTherapyData = {
  id: 2,
  name: "Musical Therapy",
  slug: "/services/musical-therapy",
  header: {
    title: [
      {
        color: false,
        text: "Discover the power of ",
      },
      {
        color: true,
        text: "Musical Therapy",
      },
    ],
    desc: [
      {
        color: false,
        text: "Unlocking Inner Harmony and Emotional Well-being through Melodic Interventions ",
      },
    ],
    image: couplesTherapyHeader,
  },
  activities: {
    title: "MUSICAL THERAPY TECHNIQUES",
    desc: "Use music to improve mental and emotional well-being through techniques like active listening, improvisation, and songwriting with our top counselors.",
    types: [
      {
        title: "Guided Imagery and Music (GIM)",
        thumbnail: musicalTherapy1,
        desc: "GIM involves listening to carefully selected music while in a relaxed state to explore emotions, memories, and thoughts, helping clients gain insight, reduce stress, and promote self-awareness.",
        slug: "/",
      },
      {
        title: "Nordoff-Robbins Music Therapy",
        thumbnail: musicalTherapy2,
        desc: "This approach focuses on musical improvisation to enhance communication, social skills, and emotional expression, beneficial for children and individuals with developmental or emotional problems.",
        slug: "/",
        class: ["order-2", "order-1"],
      },
      {
        title: "Bonny Method of Guided Imagery and Music (BMGIM)",
        thumbnail: musicalTherapy3,
        desc: "BMGIM utilizes music to facilitate a deep exploration of the unconscious, promoting personal growth & transformation, as clients share their emotional experiences during and after the BMGIM listening sessions.",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Neurologic Music Therapy (NMT)",
        thumbnail: musicalTherapy4,
        desc: "This technique applies evidence-based techniques to address neurological conditions, utilizing rhythm, melody, and harmony to improve cognitive, motor, speech functions in individuals with neurological impairments.",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Songwriting Therapy",
        thumbnail: musicalTherapy5,
        desc: "This therapy encourages clients to express themselves through songs, gives an outlet for emotions, fostering creativity, & enabling personal growth through the process of composing & performing their music.",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Raaga Chikitsa",
        thumbnail: musicalTherapy6,
        desc: "Raga Chikitsa is a traditional form of musical therapy in Indian classical music, where specific ragas (melodic frameworks) are used to evoke and influence specific emotions, moods, and states of mind.",
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
      [
        "Consultations ",
        "anywhere, anytime",
        "top-0 lg:top-6 left-0 lg:left-16 ",
      ],
      ["Online ", "Consultations", " top-0 lg:top-6 right-0 lg:right-28 "],
      ["Affordable ", "Help", " -bottom-12 lg:bottom-0 left-0 lg:left-32 "],
      ["Trusted ", "Therapist", " -bottom-12 lg:bottom-2 right-0 lg:right-36 "],
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
      title: "Self Understanding",
      desc: "Therapy fosters self-awareness of thoughts, behaviors, and patterns",
      image: whyChooseTherapy3,
    },
    {
      title: "Improved Relationships",
      desc: "Therapy can enhance communication and interpersonal skills.",
      image: whyChooseTherapy4,
    },
    {
      title: "Mental Wellness",
      desc: "Therapy promotes overall mental health and well-being.",
      image: whyChooseTherapy5,
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
        text: "Therapist ",
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
        image: doctor1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
      {
        name: "Dr. Christina",
        image: doctor1,
        profession: "Psychiatrist",
        exp: "6+ years of experience",
        expertise: "Yoga, work-life",
        speaks: "German, English",
        price: "500",
      },
    ],
  },
};
