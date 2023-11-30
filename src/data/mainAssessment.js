import {
  AssessmentAdhdIcon,
  AssessmentAnxietyIcon,
  AssessmentDepressionIcon,
  AssessmentStressIcon,
  resultAdhd,
  resultStress,
} from "../assets";

// Answerable options
export const answers = ["Never", "Sometimes", "Often", "Always"];

// ======= Questions =======
export const stressQuestions = [
  "I struggle to relax, even during leisure time.",
  "I often have muscle tension or physical discomfort due to stress.",
  "Sleep is disrupted by worries and stress.",
  "Daily life demands frequently overwhelm me.",
  "My appetite changes, either overeating or undereating, due to stress.",
  "Focusing on tasks is challenging due to stress-related preoccupation.",
  "Mood swings or irritability are common stress-related experiences.",
  "I worry about future events beyond my control.",
  "Decision-making is difficult due to heightened stress levels.",
  "Social interactions change; I may withdraw from friends or family.",
  "Physical symptoms like headaches or stomach aches arise from stress.",
  "I constantly feel pressure to meet deadlines and obligations.",
  "Balancing work, personal life, and self-care is challenging.",
  "Unhealthy coping mechanisms, like excessive drinking, arise from stress.",
  "Racing thoughts or an inability to quiet my mind are frequent.",
];

export const anxietyQuestions = [
  "I often feel restless or on edge.",
  "Excessive worry about everyday problems is common.",
  "I struggle to control my worries.",
  "Fatigue is frequent, even without physical exertion.",
  "Muscle tension, especially in the neck and shoulders, is common.",
  "Sleep is disrupted by worrisome thoughts.",
  "Easily startled or on edge in non-threatening situations.",
  "Avoidance of certain places or situations due to unease.",
  "Physical symptoms like headaches or stomach aches without clear cause.",
  "Overly conscious of others' thoughts about me.",
  "Engaging in repetitive behaviors to manage unease.",
  "Excessive self-consciousness or fear of embarrassment in social situations.",
  "Sense of impending doom or fear of something bad happening.",
  "Changes in appetite, overeating, or undereating occur.",
  "Difficulty concentrating or experiencing a blank mind.",
];

export const depressionQuestions = [
  "Persistent overwhelming sadness lasts most of the day.",
  "Lack of interest or pleasure in once enjoyable activities.",
  "Appetite changes, either significantly increased or decreased.",
  "Disrupted sleep patterns, insomnia, or excessive sleep.",
  "Difficulty concentrating or making decisions.",
  "Constant fatigue and changes in energy levels.",
  "Feelings of guilt or worthlessness.",
  "Increased irritability or agitation.",
  "Thoughts of death or suicide.",
  "Social withdrawal or isolation from friends and family.",
  "Physical symptoms like headaches or digestive issues without a clear cause.",
  "Neglect of personal appearance or hygiene.",
  "Difficulty experiencing joy or happiness.",
  "Sleep disturbances, including difficulty falling or staying asleep.",
  "Decreased libido or sexual interest.",
];

export const adhdQuestions = [
  "I struggle to stay focused on tasks that require sustained attention.",
  "I easily get distracted during activities that need concentration.",
  "Careless mistakes at work or school are common due to a lack of attention to detail.",
  "Organizing tasks, both at work and in my personal life, is challenging.",
  "I often forget to complete daily responsibilities like paying bills or returning calls.",
  "I make impulsive decisions without fully considering the consequences.",
  "Waiting my turn in situations is difficult for me.",
  "I frequently shift between incomplete tasks without finishing any.",
  "Maintaining a consistent work or study routine is a struggle.",
  "Procrastination is a common behavior, even when it harms my goals.",
  "I feel restless and have difficulty sitting still for extended periods.",
  "I'm forgetful, losing items or missing appointments in daily activities.",
  "Following through on commitments and promises is challenging.",
  "I struggle with regulating my emotions and experience mood swings.",
  "Despite having the ability, I've noticed a pattern of underachievement in various areas of my life.",
];

// Assessment Categories
export const assessments = [
  {
    name: "Stress",
    image: AssessmentStressIcon,
    slug: "stress",
    questions: stressQuestions,
    about: [
      "It can range from motivating challenges to overwhelming strain.",
      "Facing difficulty in concentrating",
      "Having trouble falling asleep",
      "Noticing muscle tension or constant headaches",
      "Either overeating or experiencing a loss of appetite",
      "Feeling easily irritable, frustrated or being short-tempered",
    ],
    result_image: resultStress,
  },
  {
    name: "Depression",
    image: AssessmentDepressionIcon,
    slug: "depression",
    questions: depressionQuestions,
    about: [
      "Trouble concentrating",
      "Facing difficulty in concentrating",
      "Persistent sadness & Feeling of worthlessness",
      "Loss of interest in activities",
      "Changes in appetite or weight",
      "Fatigue or low energy",
    ],
    result_image: resultAdhd,
  },
  {
    name: "Anxiety",
    image: AssessmentAnxietyIcon,
    slug: "anxiety",
    questions: anxietyQuestions,
    about: [
      "Excessive worry and apprehension about everyday events or situations.",
      "Avoidance of triggering problems or activities.",
      "Fatigue or difficulty concentrating due to racing thoughts.",
      "Physical symptoms include increased heart rate, sweating, trembling, or muscle tension.",
      "Restlessness, feeling on edge, or having difficulty relaxing.",
      "Sleep disturbances, such as difficulty falling asleep or staying asleep.",
    ],
    result_image: resultStress,
  },
  {
    name: "ADHD",
    image: AssessmentAdhdIcon,
    slug: "adhd",
    questions: adhdQuestions,
    about: [
      "Poor Time Management: Struggling to manage time effectively",
      "Inattention: Struggling to focus on tasks or details",
      "Hyperactivity: Being overly restless or constantly active",
      "Impulsivity: Acting without thinking about consequences",
      "Disorganization: Needs to be more efficient in organizing tasks or activities",
      "Forgetfulness: Frequently losing items and forgetting appointments",
    ],
    result_image: resultAdhd,
  },
];
