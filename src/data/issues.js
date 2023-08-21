import {
  adhdHeader,
  biopolarDisorderHeader,
  cdHeader,
  depressionHeader,
  doctor1,
  eatingDisorderHeader,
  ocdHeader,
  oddHeader,
  panicAttacksHeader,
  paranoiaHeader,
  schizophreniaHeader,
  stressHeader,
  symptomsAdhd,
  symptomsAnxiety,
  symptomsBiopolarDisorder,
  symptomsCd,
  symptomsDepression,
  symptomsEatingDisorder,
  symptomsOcd,
  symptomsOdd,
  symptomsPanic,
  symptomsParanoia,
  symptomsSchizophrenia,
  symptomsStress,
} from "../assets";

export const therapiesData = [
  {
    slug: "/therapy/stress",
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
      highlight: "Stress Disorder symptoms",
      points: [
        [
          "Feeling constant tiredness even after adequate rest",
          " top-0 left-1/4 ",
        ],
        ["Facing difficulty in concentrating", " top-28 right-10 "],
        ["Having trouble falling asleep", " bottom-36 right-20 "],
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
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Research published in the journal JAMA Internal Medicine indicates that practicing stress reduction techniques can lead to a 38% reduction in the likelihood of developing anxiety disorders.",
  },
  {
    slug: "/therapy/depression",
    header: {
      title: [
        {
          color: false,
          text: "Explore Effective Strategies to ",
        },
        {
          color: true,
          text: "Overcome Depression",
        },
      ],
      desc: [
        "Depression is a mood disorder characterized by persistent sadness, hopelessness, and a lack of interest or pleasure in once-used activities.",
        "It can also manifest as sleep, appetite, energy levels, and concentration changes.",
      ],
      image: depressionHeader,
    },
    symptoms: {
      highlight: " Depression symptoms ",
      points: [
        ["Trouble concentrating", " top-0 left-1/4 "],
        ["Facing difficulty in concentrating", " top-28 right-10 "],
        [
          "Persistent sadness & Feeling of worthlessness",
          " bottom-36 right-20 ",
        ],
        ["Loss of interest in activities", " bottom-0 left-1/4 "],
        ["Changes in appetite or weight", " bottom-36 -left-20 "],
        ["Fatigue or low energy", " top-44 -left-20 "],
      ],
      image: symptomsDepression,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Over 80% of people with depression can experience significant improvement through therapy, medication, or a combination of both.",
  },
  {
    slug: "/therapy/panic-attack",
    header: {
      title: [
        {
          color: false,
          text: "Empowering Strategies to Overcome ",
        },
        {
          color: true,
          text: "Panic Attacks",
        },
      ],
      desc: [
        "A panic attack is a sudden onset of intense fear or discomfort, accompanied by physical and psychological symptoms such as rapid heartbeat, shortness of breath, trembling, and a sense of impending doom.",
        "These attacks can be overwhelming and may last a few minutes to an hour.",
      ],
      image: panicAttacksHeader,
    },
    symptoms: {
      highlight: " Panic Attack symptoms ",
      points: [
        ["Rapid heartbeat or palpitations", " top-0 left-1/4 "],
        ["Shortness of breath", " top-28 right-10 "],
        ["Feeling dizzy or lightheaded", " bottom-36 right-20 "],
        ["Fear of losing control or going crazy", " bottom-0 left-1/4 "],
        ["Chest pain or discomfort", " bottom-36 -left-20 "],
        ["Sweating and trembling", " top-44 -left-20 "],
      ],
      image: symptomsPanic,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Panic attacks are more common than you might think, affecting approximately 2-3% of the global population at some point in their lives.",
  },
  {
    slug: "/therapy/anxiety",
    header: {
      title: [
        {
          color: false,
          text: "Discovering Effective Approaches to Conquer ",
        },
        {
          color: true,
          text: "Anxiety",
        },
      ],
      desc: [
        "Anxiety is a feeling of unease, worry, or fear, often accompanied by physical sensations like increased heart rate and tension.",
        "It is a natural stress response, but excessive or persistent anxiety can indicate an anxiety disorder.",
      ],
      image: stressHeader,
    },
    symptoms: {
      highlight: " Anxiety symptoms ",
      points: [
        [
          "Excessive worry and apprehension about everyday events or situations.",
          " top-0 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-1/4 px-2 xl:px-0 ",
        ],
        [
          "Avoidance of triggering situations or activities.",
          " top-16 xl:top-28 right-0 xl:right-10 w-28 ",
        ],
        [
          "Fatigue or difficulty concentrating due to racing thoughts.",
          " bottom-36 right-20 ",
        ],
        [
          "Physical symptoms like increased heart rate, sweating, trembling, or muscle tension.",
          " bottom-0 left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-1/4 px-2 xl:px-0 ",
        ],
        [
          "Restlessness, feeling on edge, or having difficulty relaxing.",
          " bottom-36 -left-20 ",
        ],
        [
          "Sleep disturbances, such as difficulty falling asleep or staying asleep.",
          " top-44 -left-20 ",
        ],
      ],
      image: symptomsAnxiety,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Research published in the Journal of Consulting and Clinical Psychology demonstrates that therapy interventions for anxiety can lead to significant improvements in as little as 8 to 12 weeks.",
  },
  {
    slug: "/therapy/ocd",
    header: {
      title: [
        {
          color: false,
          text: "Discovering Effective Strategies to Overcome ",
        },
        {
          color: true,
          text: "OCD",
        },
      ],
      desc: [
        "Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by persistent, distressing thoughts (obsessions) and repetitive behaviours or rituals (compulsions) performed to alleviate anxiety or discomfort.",
        "",
      ],
      image: ocdHeader,
    },
    symptoms: {
      highlight: " OCD symptoms ",
      points: [
        ["Intrusive, Distressing Thoughts", " top-0 left-1/4 "],
        ["Repetitive Rituals or Behaviors", " top-28 right-10 "],
        ["Fear of Contamination or Germs", " bottom-36 right-20 "],
        ["Need for Symmetry or Order", " bottom-0 left-1/4 "],
        ["Unwanted Taboo or Aggressive Thoughts", " bottom-36 -left-20 "],
        ["Excessive Doubting and Checking", " top-44 -left-20 "],
      ],
      image: symptomsOcd,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Effective treatments for OCD, such as Cognitive Behavioral Therapy (CBT) and medication, have success rates of around 70-80%. Seeking help increases your chances of achieving significant improvement.",
  },
  {
    slug: "/therapy/bipolar-disorder",
    header: {
      title: [
        {
          color: false,
          text: "Embrace Quality Care Navigating ",
        },
        {
          color: true,
          text: "Bipolar Disorder ",
        },
        {
          color: false,
          text: "with Support",
        },
      ],
      desc: [
        "Bipolar disorder is a mental health condition characterized by extreme mood swings, encompassing periods of elevated energy and mood (mania) and depressive episodes.",
        "These fluctuations can significantly impact daily functioning and well-being.",
      ],
      image: biopolarDisorderHeader,
    },
    symptoms: {
      highlight: " Bipolar Disorder symptoms ",
      points: [
        ["Intense Euphoria and Energy", " top-0 left-1/4 "],
        ["Severe Irritability or Agitation", " top-28 right-10 "],
        ["Decreased Need for Sleep", " bottom-36 right-20 "],
        ["Changes in Appetite and Weight", " bottom-0 left-1/4 "],
        ["Grandiose Beliefs or Ideas", " bottom-36 -left-20 "],
        ["Hopelessness and Fatigue", " top-44 -left-20 "],
      ],
      image: symptomsBiopolarDisorder,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Up to 60% of individuals with bipolar disorder experience co-occurring substance abuse. Seeking help can address these complex challenges.",
  },
  {
    slug: "/therapy/schizophrenia",
    header: {
      title: [
        {
          color: false,
          text: "Navigate ",
        },
        {
          color: true,
          text: "Schizophrenia ",
        },
        {
          color: false,
          text: "with Quality Care",
        },
      ],
      desc: [
        "Schizophrenia is a chronic mental disorder characterized by a disconnection from reality, involving hallucinations, delusions, disorganized thinking, and impaired social functioning.",
        "It often requires comprehensive treatment and support.",
      ],
      image: schizophreniaHeader,
    },
    symptoms: {
      highlight: " Schizophrenia symptoms ",
      points: [
        ["Hallucinations", " top-0 left-1/4 "],
        ["Impaired Social Functioning", " top-28 right-10 "],
        ["Disorganized Behavior", " bottom-36 right-20 "],
        ["Negative Symptoms", " bottom-0 left-1/4 "],
        ["Disorganized Speech", " bottom-36 -left-20 "],
        ["Delusions", " top-44 -left-20 "],
      ],
      image: symptomsSchizophrenia,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Many individuals with schizophrenia can achieve significant recovery, with studies indicating that about 20-30% complete remission of symptoms and improved psychosocial functioning over time.",
  },
  {
    slug: "/therapy/eating-disorder",
    header: {
      title: [
        {
          color: false,
          text: "Build Better Life with Right Treatment for ",
        },
        {
          color: true,
          text: "Eating Disorder",
        },
      ],
      desc: [
        "An eating disorder is a complex mental health condition characterized by persistent eating patterns and body image disturbances, often leading to severe physical and emotional consequences",
        "Seeking professional help is vital for effective treatment and recovery.",
      ],
      image: eatingDisorderHeader,
    },
    symptoms: {
      highlight: " Eating Disorder symptoms ",
      points: [
        ["Social Withdrawal and Isolation", " top-0 left-1/4 "],
        ["Obsession with Weight and Body Shape", " top-28 right-10 "],
        ["Restrictive Eating or Extreme Dieting", " bottom-36 right-20 "],
        ["Binge Eating and Loss of Control", " bottom-0 left-1/4 "],
        ["Compulsive Exercising", " bottom-36 -left-20 "],
        ["Self-Induced Vomiting or Laxative Use", " top-44 -left-20 "],
      ],
      image: symptomsEatingDisorder,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Continued treatment and post-treatment support reduce relapse rates, with studies indicating that relapse rates can be as low as 10% with ongoing care.",
  },
  {
    slug: "/therapy/paranoia",
    header: {
      title: [
        {
          color: false,
          text: "Overcome ",
        },
        {
          color: true,
          text: "Paranoia ",
        },
        {
          color: false,
          text: "with Quality Care",
        },
      ],
      desc: [
        "Paranoia is a mental health condition characterized by persistent, irrational beliefs of harm, suspicion, or persecution, often leading to mistrust and heightened vigilance in daily interactions.",
        "Seeking help is essential to address and manage these distressing thoughts.",
      ],
      image: paranoiaHeader,
    },
    symptoms: {
      highlight: " Paranoia symptoms ",
      points: [
        ["Social withdrawal due to fear.", " top-0 left-1/4 "],
        ["Persistent mistrust of others' intentions.", " top-28 right-10 "],
        [
          "The constant expectation of betrayal or harm.",
          " bottom-36 right-20 ",
        ],
        [
          "The firm false belief of being singled out for harm",
          " bottom-0 left-1/4 ",
        ],
        [
          "Interpreting innocent actions as threatening.",
          " bottom-36 -left-20 ",
        ],
        ["Being excessively watchful and cautious.", " top-44 -left-20 "],
      ],
      image: symptomsParanoia,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Virtual therapy has demonstrated a 30-40% reduction in paranoia severity, showcasing the potential of technology-based treatments.",
  },
  {
    slug: "/therapy/adhd",
    header: {
      title: [
        {
          color: false,
          text: "Accessing Adult ",
        },
        {
          color: true,
          text: "ADHD ",
        },
        {
          color: false,
          text: "Mental Health Support ",
        },
      ],
      desc: [
        "ADHD (Attention Deficit Hyperactivity Disorder) is a neurodevelopmental disorder characterized by persistent inattention, hyperactivity, and impulsivity that can impact daily functioning and quality of life.",
        "Seeking appropriate help can lead to effective management and improved well-being.",
      ],
      image: adhdHeader,
    },
    symptoms: {
      highlight: " ADHD symptoms ",
      points: [
        [
          "Poor Time Management: Struggling to manage time effectively.",
          " top-0 left-1/4 ",
        ],
        [
          "Inattention: Struggling to focus on tasks or details.",
          " top-28 right-10 ",
        ],
        [
          "Hyperactivity: Being overly restless or constantly active.",
          " bottom-36 right-20 ",
        ],
        [
          "Impulsivity: Acting without thinking about consequences.",
          " bottom-0 left-1/4 ",
        ],
        [
          "Disorganization: Needs to be more efficient in organizing tasks or activities.",
          " bottom-36 -left-20 ",
        ],
        [
          "Forgetfulness: Frequently losing items and forgetting appointments.",
          " top-44 -left-20 ",
        ],
      ],
      image: symptomsAdhd,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Up to 70% of children with ADHD experience academic difficulties, affecting their educational progress and future opportunities.",
  },
  {
    slug: "/therapy/odd",
    header: {
      title: [
        {
          color: false,
          text: "Empowering Individuals with ",
        },
        {
          color: true,
          text: "ODD ",
        },
        {
          color: true,
          text: "through Effective Treatment ",
        },
      ],
      desc: [
        "Oppositional Defiant Disorder (ODD) is a psychiatric disorder characterized by a persistent pattern of defiant, disobedient, and hostile behaviour toward authority figures, often causing significant impairment in social, academic, and occupational functioning.",
        "",
      ],
      image: oddHeader,
    },
    symptoms: {
      highlight: " ODD symptoms ",
      points: [
        [
          "Vindictiveness and seeking revenge when feeling wronged.",
          " top-0 left-1/4 ",
        ],
        [
          "Easily angered, resentful, or spiteful behavior.",
          " top-28 right-10 ",
        ],
        ["Blaming others for mistakes or misbehavior.", " bottom-36 right-20 "],
        [
          "Deliberate attempts to annoy or provoke others.",
          " bottom-0 left-1/4 ",
        ],
        [
          "Frequent arguments and conflicts with authority figures.",
          " bottom-36 -left-20 ",
        ],
        [
          "Persistent defiance and refusal to comply with rules or requests.",
          " top-44 -left-20 ",
        ],
      ],
      image: symptomsOdd,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Approximately 70-80% of children with ODD also meet the criteria for another mental health disorder, such as ADHD or conduct disorder.",
  },
  {
    slug: "/therapy/contact-disorder",
    header: {
      title: [
        {
          color: false,
          text: "Unlock Potential: Treat ",
        },
        {
          color: true,
          text: "Conduct Disorder",
        },
        {
          color: true,
          text: "Effectively",
        },
      ],
      desc: [
        "Conduct Disorder (CD) is a psychiatric disorder characterized by persistent patterns of aggressive, antisocial behaviour that violates the rights of others and societal norms, often leading to significant impairment in social, academic, and occupational functionin",
        "",
      ],
      image: cdHeader,
    },
    symptoms: {
      highlight: " Conduct Disorder symptoms ",
      points: [
        ["Aggression towards people and animals.", " top-0 left-1/4 "],
        [
          "Frequent bullying, intimidation, or physical fights.",
          " top-28 right-10 ",
        ],
        ["Destruction of property and vandalism.", " bottom-36 right-20 "],
        ["Deceitfulness, lying, and theft.", " bottom-0 left-1/4 "],
        ["Serious violations of rules and laws.", " bottom-36 -left-20 "],
        [
          "Lack of empathy and disregard for the feelings and rights of others.",
          " top-44 -left-20 ",
        ],
      ],
      image: symptomsCd,
    },
    doctors: {
      heading: [
        {
          color: false,
          text: "Speak to our ",
        },
        {
          color: true,
          text: " Specialist",
        },
      ],
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
      button: {
        text: "Book Now",
        slug: "/experts/all",
      },
    },
    quote:
      "Research indicates that individuals with CD are more likely to develop antisocial personality disorder in adulthood.",
  },
];
