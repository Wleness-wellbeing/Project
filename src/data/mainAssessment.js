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
    levels: {
      low: "You may find it easy to relax during leisure time. Daily life demands are manageable, and there's minimal disruption to sleep, appetite, and mood. Physical symptoms or unhealthy coping mechanisms are infrequent",
      mild: "You may occasionally struggle to relax during leisure time and some muscle tension. Sleep may be periodically disrupted, and daily life demands could create occasional overwhelm. Changes in appetite and mild difficulty focusing might be present, along with infrequent mood swings. Seeking support contributes to overall well-being.",
      moderate:
        "You may frequently struggle to relax, experience regular muscle tension, and find daily life demands often overwhelming. Sleep disruptions, changes in appetite, and difficulty focusing become more noticeable. Mood swings or irritability may occur regularly, affecting social interactions. Seeking professional support is advisable at this level.",
      severe:
        "You persistently struggle to relax, frequent muscle tension, and overwhelming daily life demands. Sleep disruptions, significant changes in appetite, and consistent difficulty focusing are common. Mood swings and irritability are more pronounced, impacting social interactions. Physical symptoms like headaches or stomach aches may be frequent, and unhealthy coping mechanisms might emerge as a regular response to stress. Balancing work, personal life, and self-care becomes particularly challenging, and racing thoughts or an inability to quiet the mind are frequent. Seeking professional support is advisable at this level. Note: Keep in mind that this is a broad categorization and not a substitute for a professional diagnosis. If you resonate with many of these statements, it's advisable to consult with a healthcare professional or mental health specialist for a thorough evaluation and appropriate guidance.",
    },
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
    levels: {
      low: "You may be experiencing occasional feelings of sadness or low mood, but these emotions do not significantly disrupt your overall well-being. Daily functioning remains largely unaffected, allowing for regular engagement in work, relationships, and activities. Sleep patterns may show minimal disturbances, and energy levels generally remain stable, with occasional instances of fatigue. Seeking professional guidance is advisable to ensure an accurate assessment and appropriate support.",
      mild: "You may be experiencing feelings of low mood or disinterest in daily activities lasting for a few days or a week, try incorporating lifestyle adjustments like regular physical activity and spending time with loved ones. While mild depression may not heavily impact your daily routine, ongoing symptoms could signal the importance of seeking professional care. Prioritize your well-being and reach out for support if necessary.",
      moderate:
        "Moderate depression goes beyond daily struggles, impacting relationships, performance, and self-care. You may be experiencing difficulties in these areas, it's crucial to seek professional support. Ignoring depression can worsen its effects, and a combination of therapy and, in some cases, medication can make a significant difference. Seeking professional support is advisable at this level.",
      severe:
        "Severe depression involves persistent symptoms over months, with a key indicator being a pervasive loss of joy in once-enjoyable activities, you may grapple with overwhelming feelings of worthlessness, guilt, physical discomfort, fatigue, and even thoughts of self-harm or suicide. Recognizing these signs is vital, and seeking support is essential to interrupt the negative cycle. You deserve and need assistance to navigate through this challenging time. Seeking professional support is advisable at this level.",
    },
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
    levels: {
      low: "You may experience minimal symptoms characterized by low anxiety, with occasional, fleeting worries. Daily life is generally calm, and routine activities remain unaffected. Sleep, energy levels, and mood stay stable. Individuals who score in this range can manage normal challenges comfortably, experiencing minimal disruption. Seeking support if needed contributes to overall well-being.",
      mild: "You may experience occasional or subtle signs of worry. Daily functioning may be somewhat impacted, but individuals who score in this range can still manage their routine activities. Seeking support if needed contributes to overall well-being.",
      moderate:
        " You may experience persistent worry and restlessness, influencing your daily life and activities. Energy levels may be affected, and concentration on tasks may require extra effort. Seeking support contributes to overall well-being.",
      severe:
        "You may experience intense and prolonged feelings of worry and restlessness, significantly impacting daily functioning. Individuals who score in this range may struggle with fatigue, difficulty concentrating, and an increased sense of unease. Seeking professional support is advisable at this level.",
    },
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
    levels: {
      low: "You may occasionally find it challenging to stay focused on tasks requiring sustained attention. Distractions are infrequent and don't significantly impact your ability to complete activities. Careless mistakes are rare, and organizing tasks, while not effortless, is generally manageable. Forgetfulness occurs occasionally but is typically limited to minor responsibilities.",
      mild: "You may experience noticeable difficulty in sustaining focus, especially during tasks that demand concentration. Distractions occur more frequently, impacting activities that require attention. Careless mistakes become more common, and organizing tasks, both at work and in personal life, presents a moderate challenge. Forgetfulness increases, occasionally affecting completion of daily responsibilities. Seeking support contributes to overall well-being.",
      moderate:
        "You may experience consistent difficulty in sustaining focus significantly which impacts daily tasks, and distractions are frequent, affecting activities requiring concentration. Careless mistakes become more prevalent at work or school, and organizing tasks becomes a considerable challenge. Forgetfulness is more frequent, impacting completion of daily responsibilities and commitments. Seeking professional support is advisable at this level.",
      severe:
        "You may experience persistent and significant difficulty in staying focused on tasks requiring sustained attention that significantly hampers daily functioning.. Impulsive decisions and difficulty waiting one's turn become more pronounced. Restlessness and difficulty sitting still are noticeable, and regulating emotions becomes a challenge, contributing to mood swings. Despite possessing the ability, a pattern of underachievement becomes evident in various areas of life. Seeking professional support is advisable at this level.",
    },
  },
];
