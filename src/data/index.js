// Data
import {
  issueAnxiety,
  issueAdhd,
  issueBiopolarDisorder,
  issueCd,
  issueDepression,
  issueEatingDisorder,
  issueOcd,
  issueOdd,
  issuePanicAttack,
  issueParanoia,
  issueSchizophrenia,
  issueStress,
  meditationHeader,
  meditationType1,
  meditationType2,
  meditationType3,
  meditationType4,
  meditationType5,
  meditationType6,
  activityBlogThumbnail,
  sadhnaHeader,
  sadhnaType1,
  sadhnaType2,
  sadhnaType3,
  sadhnaType4,
  sadhnaType5,
  sadhnaType6,
  sadhnaType7,
  sadhnaType8,
  yogaHeader,
  yogaType1,
  yogaType2,
  yogaType3,
  yogaType4,
  yogaType5,
  yogaType6,
  yogaType7,
  yogaType8,
  yogaType9,
  yogaType10,
  yogaType11,
  yogaType12,
  brainExerciseHeader,
  brainGameGalaxy,
  brainGameTreasure,
  brainGameHunter,
  feature1,
  feature2,
  feature3,
  blogThumbnail1,
  blogThumbnail2,
  blogThumbnail3,
  blogThumbnail4,
  blogThumbnail5,
  blogThumbnail6,
  adhvmukhaHeader,
  adhvVariationOne,
  adhvVariationTwo,
  adhvVariationThree,
  virabhadrasanaHeader,
  virabhadrasanaVariation1,
  virabhadrasanaVariation2,
  virabhadrasanaVariation3,
  trikonasanaHeader,
  trikonasanaVariation1,
  trikonasanaVariation2,
  trikonasanaVariation3,
  vrkasanaHeader,
  vrkasanaVariation1,
  vrkasanaVariation2,
  ustrasanaHeader,
  iconSafe,
  iconCommunity,
  iconEasyAccess,
  iconEffective,
  iconSecure,
  homeExperienceIcon,
  homeCommitmentIcon,
  homeFacilitiesIcon,
  meditationType7,
  meditationType8,
  issueRelationship,
  issueLgbtq,
  issueAnger,
  homeTherapy,
  homeExecutiveCoaching,
  homeCorporate,
  homeLifestyleCoaching,
  homeYoga,
  homeMeditation,
  homeInternship,
  homeSelfcare,
  one,
  two,
  three,
  four,
  grp1,
  grp2,
  grp3,
  issueParenting,
} from "../assets";
// Components
import HeaderWithImage from "../components/HeaderWithImage";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import LeftVideoList from "../components/LeftVideoList";
import RightImageList from "../components/RightImageList";
import LeftImageList from "../components/LeftImageList";
import ActivityBlogs from "../components/ActivityBlogs";

// Therapies data for landing page
export const therapies = [
  {
    name: "Stress",
    title: "Stress",
    image: issueStress,
    slug: "/therapy/stress",
  },
  {
    name: "Depression",
    title: "Depression",
    image: issueDepression,
    slug: "/therapy/depression",
  },
  {
    name: "Panic Attacks",
    title: "Panic Attacks",
    image: issuePanicAttack,
    slug: "/therapy/panic-attack",
  },
  {
    name: "Anxiety",
    title: "Anxiety",
    image: issueAnxiety,
    slug: "/therapy/anxiety",
  },
  {
    name: "Eating Disorder",
    title: "Eating Disorder",
    image: issueEatingDisorder,
    slug: "/therapy/eating-disorder",
  },
  {
    name: "Relationship",
    title: "Relationship",
    image: issueRelationship,
    slug: "/therapy/relationship",
  },
  {
    name: "Bipolar Disorder",
    title: "Bipolar Disorder",
    image: issueBiopolarDisorder,
    slug: "/therapy/bipolar-disorder",
  },
  {
    name: "OCD",
    title: "Obsessive-compulsive disorder",
    image: issueOcd,
    slug: "/therapy/ocd",
  },
  {
    name: "Schizophrenia",
    title: "Schizophrenia",
    image: issueSchizophrenia,
    slug: "/therapy/schizophrenia",
  },
  {
    name: "Parenting",
    title: "Parenting",
    image: issueParenting,
    slug: "/therapy/parenting",
  },
  {
    name: "Paranoia",
    title: "Paranoia",
    image: issueParanoia,
    slug: "/therapy/paranoia",
  },
  {
    name: "Anger",
    title: "Anger",
    image: issueAnger,
    slug: "/therapy/anger",
  },
  {
    name: "ADHD",
    title: "Attention deficit hyperactivity disorder",
    image: issueAdhd,
    slug: "/therapy/adhd",
  },
  {
    name: "ODD",
    title: "Oppositional defiant disorder",
    image: issueOdd,
    slug: "/therapy/odd",
  },
  {
    name: "Conduct Disorder",
    title: "Conduct Disorder",
    image: issueCd,
    slug: "/therapy/conduct-disorder",
  },
  {
    name: "LGBTQ",
    title: "LGBTQ",
    image: issueLgbtq,
    slug: "/therapy/lgbtq",
  },
];

// Meditation Types for meditation page
export const meditationTypes = [
  {
    image: meditationType1,
    title: "Mindfulness Meditation",
    desc: "Originated from Hindu shastras, a practise involving attention to present,focusing on breath and thoughts without judgment fostering heightened awareness, acceptance.",
  },
  {
    image: meditationType2,
    title: "Breath Awareness Meditation",
    desc: "Observing the natural rhythm of breath, Close attention to inhalation and exhalation, redirecting the mind back to the breath. Calms mind, enhances focus, and reduces anxiety.",
  },
  {
    image: meditationType3,
    title: "Kundalini Meditation",
    desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to  Balance the chakras and achieve heightened spiritual awakening.",
  },
  {
    image: meditationType4,
    title: "Zen Meditation (Zazen)",
    desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath observing thoughts and sensations without attachment or judgment. Cultivate mindfulness, into true reality.",
  },
  {
    image: meditationType5,
    title: "Spiritual meditation",
    desc: "Activating one's consciousness. Spiritual meditation involves bonding at a higher consciencel. Highly beneficial to those seeking spiritual growth and oneness with supreme self.",
  },
  {
    image: meditationType6,
    title: "Walking Meditation",
    desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
  },
  {
    image: meditationType6,
    title: "Walking Meditation",
    desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
  },
  {
    image: meditationType6,
    title: "Walking Meditation",
    desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
  },
];

// All activities data for activities subpages
export const activities = [
  {
    id: 1,
    name: "Yoga",
    slug: "/activities/yoga",
    header: {
      title: [
        {
          color: false,
          text: "Exploring Mind Harmony through ",
        },
        {
          color: true,
          text: "Yoga",
        },
      ],
      desc: "Yoga is a path to feeling better in both your body and mind. Doing yoga regularly makes you less stressed and more mindful and brings balance to your life. Start your journey with yoga for a refreshed body, calm mind, and a more harmonious life.",
      image: yogaHeader,
    },
    activities: {
      title: "Yoga Techniques",
      desc: "Let's embark on a journey to explore various types of yoga poses, guiding us toward inner harmony.",
      types: [
        {
          title: "Adho Mukha Svanasana",
          thumbnail: yogaType1,
          desc: "Adho Mukha Svanasana is a foundational yoga pose that profoundly benefits the body and mind. It is a beautiful combination of strength, flexibility, and relaxation.",
          slug: "/activities/yoga/adho-mukha-svanasana",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Adho Mukha Svanasana",
                desc: "Adho Mukha Svanasana, also known as Downward-Facing Dog Pose, is one of the most recognizable yoga postures. This pose is a great way to stretch your hamstrings, calves, and spine and strengthen your arms, shoulders, and legs. It can also help calm your mind and reduce stress. In this article, we will explore the benefits, techniques, and variations of Adho Mukha Svanasana.",
                image: adhvmukhaHeader,
                var: "There are several variations of Adho Mukha Svanasana that you can try depending on your skill level and flexibility. Here are a few:",
              },
            },
            {
              component: RightImage,
              data: {
                title: "Dolphin Pose: ",
                desc: "This variation is similar to Adho Mukha Svanasana, but instead of straightening your arms, you bend your elbows and rest your forearms on the ground. This pose is excellent for strengthening the shoulders and upper back.",
                image: adhvVariationOne,
              },
            },
            {
              component: LeftImage,
              data: {
                title: "Three-Legged Dog Pose: ",
                desc: "To practice this variation, start in Adho Mukha Svanasana and lift one leg towards the ceiling. Hold for a few breaths, then switch sides. This pose helps build strength in the legs and core.",
                image: adhvVariationTwo,
              },
            },
            {
              component: RightImage,
              data: {
                title: "Puppy Pose: ",
                desc: "This variation is a gentle shoulder and spine stretch. Start on your hands and knees, then walk your hands forward as you lower your chest toward the ground. Keep your hips above your knees and your arms extended in front of you.",
                image: adhvVariationThree,
              },
            },
            {
              component: LeftVideoList,
              data: {
                title: "Steps of Adho Mukha Svanasana: ",
                desc: "To practice Adho Mukha Svanasana, follow these steps: ",
                videoUrl: "https://www.youtube.com/embed/cCEK6XrcUx0",
                list: [
                  {
                    subtitle: "",
                    desc: "Start on your hands and knees with your wrists under your shoulders and your knees under your hips. Spread your fingers wide and press firmly into the palms of your hands.",
                  },
                  {
                    subtitle: "",
                    desc: "Inhale and tuck your toes under, lifting your knees off the ground. Exhale and lift your hips up and back, straightening your arms and legs",
                  },
                  {
                    subtitle: "",
                    desc: "Keep your hands shoulder-width apart and your feet hip-width apart. Press your heels down towards the ground and lengthen your spine.",
                  },
                  {
                    subtitle: "",
                    desc: "Relax your head and neck and gaze towards your belly button.",
                  },
                  {
                    subtitle: "",
                    desc: "Hold the pose for 5-10 deep breaths, then exhale and release back to the starting position.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Benefits of Adho Mukha Svanasana: ",
                desc: "There are numerous benefits to practicing Adho Mukha Svanasana, including:",
                list: [
                  {
                    subtitle: "Increases flexibility: ",
                    desc: "This pose stretches the hamstrings, calves, and spine, which can help increase flexibility in these areas.",
                  },
                  {
                    subtitle: "Strengthens the upper body: ",
                    desc: "Adho Mukha Svanasana is an excellent pose for strengthening the arms, shoulders, and upper back.",
                  },
                  {
                    subtitle: "Relieves stress: ",
                    desc: "This pose can help calm the mind and reduce stress and anxiety.",
                  },
                  {
                    subtitle: "Improves digestion: ",
                    desc: "The inversion of the pose can help improve digestion and relieve constipation.",
                  },
                  {
                    subtitle: "Energizes the body: ",
                    desc: "Adho Mukha Svanasana can help boost energy levels by increasing blood flow to the brain.",
                  },
                ],
              },
            },
            {
              component: LeftImageList,
              data: {
                desc: "While Adho Mukha Svanasana is a safe and beneficial pose for most people, there are a few precautions to remember: ",
                info: "Adho Mukha Svanasana is a versatile pose that yogis of all skill levels can practice. Whether you want to increase your flexibility, strengthen your upper body, or reduce stress, this pose has much to offer. You can safely practice this pose and enjoy its many benefits by following the proper technique and taking necessary precautions. So next time you step onto your yoga mat, include Adho Mukha Svanasana in your practice!",
                list: [
                  "Avoid this pose if you have a wrist, shoulder, or back injury.",
                  "If you have high blood pressure, keep your head at or above heart level to avoid a sudden increase in blood pressure.",
                  "If you have a neck injury, keep your head aligned with your spine instead of looking towards your belly button.",
                  "If you have tight hamstrings, bend your knees slightly to avoid straining your lower back.",
                ],
              },
            },
            {
              component: ActivityBlogs,
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
            },
          ],
        },
        {
          title: "Virabhadrasana II",
          thumbnail: yogaType2,
          desc: "Virabhadrasana emanates strength and grace. This yoga asana cultivates stability, balance, and a sense of inner courage, making it a powerful addition to any yoga sequence.",
          slug: "/activities/yoga/virabhadrasana",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Virabhadrasana",
                desc: "Virabhadrasana II, also known as Warrior II Pose, is a powerful and energizing yoga asana that offers numerous physical and mental benefits. This pose is named after the fierce warrior Virabhadra, who is said to have been created by the god Shiva. In this blog, we will explore the many benefits of Virabhadrasana II, how to practice the pose, and precautions to keep in mind.",
                image: virabhadrasanaHeader,
                var: "You can try several variations of Virabhadrasana II, depending on your skill level and flexibility. Here are a few:",
              },
            },
            {
              component: RightImage,
              data: {
                title: "Reverse Warrior Pose: ",
                desc: "This variation is a gentle backbend stretching the body's side. Start in Virabhadrasana II, then reach your right arm up and back as you extend your left arm down towards your left leg. Keep your right knee bent and your gaze towards the ceiling.",
                image: virabhadrasanaVariation1,
              },
            },
            {
              component: LeftImage,
              data: {
                title: "Extended Side Angle Pose: ",
                desc: "This variation is a deeper stretch for the hips and side of the body. Start in Virabhadrasana II, then reach your right arm forward and down, placing your hand on the ground or a block outside your right foot. Extend your left arm towards the ceiling and gaze towards your left fingertips.",
                image: virabhadrasanaVariation2,
              },
            },
            {
              component: RightImage,
              data: {
                title: "Bound Warrior Pose: ",
                desc: "This variation is an advanced variation that requires both strength and flexibility. Start in Virabhadrasana II, then reach your right arm behind your back and clasp your hands together. Lift your chest and gaze towards the ceiling, keeping your shoulders relaxed.",
                image: virabhadrasanaVariation3,
              },
            },
            {
              component: LeftVideoList,
              data: {
                title: "Steps for Virabhadrasana II: ",
                desc: "To practice Virabhadrasana II, follow these steps: ",
                videoUrl: "https://www.youtube.com/embed/cCEK6XrcUx0",
                list: [
                  {
                    subtitle: "",
                    desc: "Begin in Tadasana (Mountain Pose) at the front of your mat.",
                  },
                  {
                    subtitle: "",
                    desc: "Step your left foot back about 3-4 feet, keeping your toes pointing forward. Your right foot should be pointing straight ahead.",
                  },
                  {
                    subtitle: "",
                    desc: "Inhale and lift your arms to shoulder height, keeping them parallel to the ground. Your palms should be facing down.",
                  },
                  {
                    subtitle: "",
                    desc: "Exhale and bend your right knee above your ankle. Your left leg should be straight behind you, with your left foot at a 45-degree angle.",
                  },
                  {
                    subtitle: "",
                    desc: "Press down through your feet and engage your thigh muscles. Keep your hips facing forward, and your shoulders relaxed.",
                  },
                  {
                    subtitle: "",
                    desc: "Gaze over your proper fingertips, keeping your neck aligned with your spine.",
                  },
                  {
                    subtitle: "",
                    desc: "Hold the pose for several deep breaths, then release and repeat on the other side.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Benefits of Virabhadrasana II: ",
                desc: "Virabhadrasana II offers many benefits for the body and mind, including",
                list: [
                  {
                    subtitle: "Strengthens the legs: ",
                    desc: "This pose strengthens the muscles in the legs, including the quadriceps, hamstrings, and calves.",
                  },
                  {
                    subtitle: "Improves balance: ",
                    desc: "By focusing on one point in front of you, Virabhadrasana II can help improve balance and stability.",
                  },
                  {
                    subtitle: "Increases flexibility: ",
                    desc: "This pose stretches the hips and groin, which can help increase flexibility in these areas.",
                  },
                  {
                    subtitle: "Stimulates circulation: ",
                    desc: "Virabhadrasana II can help increase blood flow to the legs and hips, improving circulation and reducing swelling.",
                  },
                  {
                    subtitle: "Builds endurance: ",
                    desc: "Holding the pose for several breaths can help build endurance and stamina.",
                  },
                ],
              },
            },
            {
              component: LeftImageList,
              data: {
                desc: "While Virabhadrasana II is a safe and beneficial pose for most people, there are a few precautions to remember: ",
                info: "Virabhadrasana II is a powerful, energizing yoga pose with numerous bodily and mental benefits. Practicing this pose regularly can strengthen your legs, improve your balance, increase your flexibility, and build endurance. Always listen to your body and take precautions if you have any injuries or medical conditions. Consistent practice and patience can deepen your understanding of this pose and reap its many benefits.",
                list: [
                  "Avoid this pose if you have a knee, hip, or shoulder injury.",
                  "If you have high blood pressure, avoid holding the pose for too long or come out of the carriage if you feel dizzy or lightheaded",
                  "Refrain from overstretching these areas if you have tight hips or groin muscles.",
                  "Always listen to your body, and don't push yourself beyond your limits. Remember that yoga is about finding a balance between effort and ease and never forcing your body into a pose that feels uncomfortable or painful.",
                ],
              },
            },
            {
              component: ActivityBlogs,
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
            },
          ],
        },
        {
          title: "Trikonasana",
          thumbnail: yogaType3,
          desc: "Trikonasana is a radiant and dynamic yoga posture that stretches and opens the entire body. With its triangular shape, it offers a blend of strength, expansion, and tranquility",
          slug: "/activities/yoga/trikonasana",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Trikonasana",
                desc: "Trikonasana, or Triangle Pose, is a foundational yoga asana that offers numerous physical and mental benefits. This pose is named after the shape that your body creates when practicing it, resembling a triangle. In this blog, we will explore the many benefits of Trikonasana, how to practice the pose, and precautions to keep in mind.",
                image: trikonasanaHeader,
                var: "There are several variations of Trikonasana that you can try depending on your skill level and flexibility. Here are a few:",
              },
            },
            {
              component: RightImage,
              data: {
                title: "Revolved Triangle Pose: ",
                desc: "This variation is a more profound twist that requires more flexibility. Start in Trikonasana, then place your left hand on your right hip as you twist your torso towards the ceiling. Extend your right arm towards the top, keeping your gaze towards your fingertips.",
                image: trikonasanaVariation1,
              },
            },
            {
              component: LeftImage,
              data: {
                title: "Extended Triangle Pose: ",
                desc: "This variation is a deeper stretch for the legs and hips. Start in Trikonasana, then place your right hand on a block or the floor outside your right foot. Extend your left arm towards the ceiling, keeping your gaze towards your fingertips.",
                image: trikonasanaVariation2,
              },
            },
            {
              component: RightImage,
              data: {
                title: "Half Triangle Pose: ",
                desc: "This variation is a modified version of Trikonasana that is more accessible for beginners or those with limited flexibility. Start in Trikonasana, then place your right hand on your right shin instead of reaching the floor.",
                image: trikonasanaVariation3,
              },
            },
            {
              component: LeftVideoList,
              data: {
                title: "Steps for Trikonasana: ",
                desc: "To practice Trikonasana, follow these steps: ",
                videoUrl: "https://www.youtube.com/embed/cCEK6XrcUx0",
                list: [
                  {
                    subtitle: "",
                    desc: "Begin in Tadasana (Mountain Pose) at the front of your mat.",
                  },
                  {
                    subtitle: "",
                    desc: "Step your left foot back about 3-4 feet, keeping your toes pointing forward. Your right foot should be pointing straight ahead.",
                  },
                  {
                    subtitle: "",
                    desc: "Inhale and lift your arms to shoulder height, keeping them parallel to the ground. Your palms should be facing down.",
                  },
                  {
                    subtitle: "",
                    desc: "Exhale and reach your right arm forward, then down towards your right shin, ankle, or the floor outside your right foot. Your left arm should be reaching up toward the ceiling.",
                  },
                  {
                    subtitle: "",
                    desc: "Keep your legs strong and engaged, pressing down through your feet. Keep your hips facing forward and your chest open.",
                  },
                  {
                    subtitle: "",
                    desc: "Gaze towards your left fingertips, keeping your neck aligned with your spine.",
                  },
                  {
                    subtitle: "",
                    desc: "Hold the pose for several deep breaths, then release and repeat on the other side.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Benefits of Trikonasana: ",
                desc: "Trikonasana offers many benefits for the body and mind, including",
                list: [
                  {
                    subtitle: "Stretches the hamstrings and hips: ",
                    desc: "This pose stretches the muscles in the back of the legs, including the hamstrings, hips, and groin.",
                  },
                  {
                    subtitle: "Strengthens the legs: ",
                    desc: "By pressing down through the feet and engaging the leg muscles, Trikonasana can help build strength in the legs.",
                  },
                  {
                    subtitle: "Opens the chest and shoulders:  ",
                    desc: "This pose can help spread the chest and shoulders, improving posture and breathing.",
                  },
                  {
                    subtitle: "Stimulates digestion: ",
                    desc: "Trikonasana can help stimulate the abdominal organs, promoting healthy digestion.",
                  },
                  {
                    subtitle: "Calms the mind: ",
                    desc: "Practicing Trikonasana can help calm the mind and reduce stress and anxiety.",
                  },
                ],
              },
            },
            {
              component: LeftImageList,
              data: {
                desc: "While Trikonasana is a safe and beneficial pose for most people, remember a few precautions: ",
                info: "Trikonasana is a foundational yoga pose that offers numerous bodily and mental benefits. Practicing this pose regularly can improve your flexibility, strength, and balance while promoting healthy digestion and reducing stress and anxiety. Listen to your body and take precautions if you have any injuries or medical conditions. Consistent practice and patience can deepen your understanding of this pose and enjoy its many benefits.",
                list: [
                  "Avoid this pose if you have a knee or hip injury.",
                  "If you have low blood pressure, avoid holding the pose for too long or come out of the carriage if you feel dizzy or lightheaded.",
                  "Don't overstretch these areas if you have tight hamstrings or hips.",
                  "Always listen to your body, and don't push yourself beyond your limits. Remember that yoga is about finding a balance between effort and ease and never forcing your body into a pose that feels uncomfortable or painful.",
                ],
              },
            },
            {
              component: ActivityBlogs,
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
            },
          ],
        },
        {
          title: "Vrksasna",
          thumbnail: yogaType4,
          desc: "Vrksasana embodies the essence of balance and rootlessness in yoga. This graceful and standing posture cultivates stability, concentration, and a profound connection with nature.",
          slug: "/activities/yoga/vrksasna",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Vrksasna",
                desc: "Vrksasna, also known as Tree Pose, is a popular yoga asana that offers numerous physical and mental benefits. This pose is named after the shape that your body creates when practicing it, resembling a tree with its roots extending into the ground and its branches reaching up toward the sky. In this blog, we will explore the many benefits of Vrksasana, how to practice the pose, and precautions to keep in mind.",
                image: vrkasanaHeader,
                var: "There are several variations of Vrksasana that you can try depending on your skill level and flexibility. Here are a few:",
              },
            },
            {
              component: RightImage,
              data: {
                title: "Half Lotus Tree Pose: ",
                desc: "This variation is a deeper stretch for the hips and requires more flexibility. Start in Vrksasana, then bring your right foot onto your left thigh in Half Lotus Pose.",
                image: vrkasanaVariation1,
              },
            },
            {
              component: LeftImage,
              data: {
                title: "Revolved Tree Pose: ",
                desc: "This variation is a more profound twist that requires more flexibility. Start in Vrksasana, then bring your hands to your heart and twist your torso towards your right knee.",
                image: vrkasanaVariation2,
              },
            },
            {
              component: RightImage,
              data: {
                title: "One-Legged Mountain Pose: ",
                desc: "This variation is a modified version of Vrksasana that is more accessible for beginners or those with limited flexibility. Lift one foot off the ground and balance on the other foot, keeping your hands at your heart center or extending them overhead.",
                image: vrkasanaVariation2,
              },
            },
            {
              component: LeftVideoList,
              data: {
                title: "Steps for Vrkasana: ",
                desc: "To practice Vrksasana, follow these steps: ",
                videoUrl: "https://www.youtube.com/embed/cCEK6XrcUx0",
                list: [
                  {
                    subtitle: "",
                    desc: "Begin in Tadasana (Mountain Pose) at the front of your mat.",
                  },
                  {
                    subtitle: "",
                    desc: "Shift your weight onto your left foot and lift your right foot off the ground",
                  },
                  {
                    subtitle: "",
                    desc: "Place the sole of your right foot onto the inside of your left thigh, as high up as possible. You can also place your foot on your left calf if it's challenging to balance.",
                  },
                  {
                    subtitle: "",
                    desc: "Press your right foot into your left thigh or calf and your thigh or calf into your foot to create a stable foundation.",
                  },
                  {
                    subtitle: "",
                    desc: "Bring your hands together at your heart center in Namaste mudra, or extend your arms overhead, keeping them parallel to the ground.",
                  },
                  {
                    subtitle: "",
                    desc: "Gaze at a fixed point before you, keeping your neck aligned with your spine.",
                  },
                  {
                    subtitle: "",
                    desc: "Hold the pose for several deep breaths, then release and repeat on the other side.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Benefits of Vrksasana: ",
                desc: "Vrksasana offers many benefits for the body and mind, including",
                list: [
                  {
                    subtitle: "Improves balance: ",
                    desc: "This pose requires you to stand on one leg, which can help improve your balance and coordination.",
                  },
                  {
                    subtitle: "Strengthens the legs: ",
                    desc: "By pressing down through the standing foot and engaging the leg muscles, Vrksasana can help build strength in the legs",
                  },
                  {
                    subtitle: "Stretches the hips and groin: ",
                    desc: "This pose can help extend the muscles in the hips and groin, promoting flexibility and mobility.",
                  },
                  {
                    subtitle: "Improves posture: ",
                    desc: "By standing tall and rooting down through the feet, Vrksasana can help improve your posture and alignment.",
                  },
                  {
                    subtitle: "Calms the mind: ",
                    desc: "Practicing Vrksasana can help calm the mind and reduce stress and anxiety.",
                  },
                ],
              },
            },
            {
              component: LeftImageList,
              data: {
                desc: "While Vrksasana is a safe and beneficial pose for most people, remember a few precautions: ",
                info: "Vrksasana is a beautiful and empowering pose that can benefit the body and mind. Practicing this pose regularly can improve your balance, strength, flexibility, and posture while reducing stress and anxiety. Remember to start slowly and take precautions if you have any injuries or medical conditions. Consistent practice and patience can deepen your understanding of this pose and help you enjoy its many benefits.",
                list: [
                  "Avoid this pose if you have a knee or ankle injury.",
                  "If you have low blood pressure, avoid holding the pose for too long or come out of the carriage if you feel dizzy or lightheaded.",
                  "Refrain from overstretching these areas if you have tight hips or groin muscles.",
                  "Always listen to your body, and don't push yourself beyond your limits. Remember that yoga is about finding a balance between effort and ease and never forcing your body into a pose that feels uncomfortable or painful.",
                ],
              },
            },
            {
              component: ActivityBlogs,
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
            },
          ],
        },
        {
          title: "Ustrasana",
          thumbnail: yogaType5,
          desc: "Ustrasana opens the heart center and stimulates the entire front body, offering a profound stretch and release. This bring a sense of liberation & vulnerability, to embrace courage. ",
          slug: "/activities/yoga/ustrasana",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Ustrasana",
                desc: "Ustrasana, also known as Camel Pose, is a popular yoga posture practiced by many enthusiasts worldwide. It is a backbend asana named after the Sanskrit word 'ustra,' which means camel, and 'asana,' which means posture. The pose resembles the shape of a camel, hence the name. The Ustrasana posture stretches the entire front of the body, particularly the chest, abdomen, and quadriceps. This posture is beneficial in opening up the heart and increasing lung capacity, which can help alleviate respiratory problems. It also helps to strengthen the back muscles, shoulders, and neck.",
                image: ustrasanaHeader,
                var: "",
              },
            },
          ],
        },
        {
          title: "Matsyasana",
          thumbnail: yogaType6,
          desc: "Matsyasana gracefully arches the back and opens the chest, offering a deep stretch to the neck and throat. It symbolizes receptivity and renewal, inviting a sense of tranquility.",
          slug: "/activities/yoga/matsyasana",
        },
        {
          title: "Sirsasana",
          thumbnail: yogaType7,
          desc: "Sirsasana is the king of all yoga poses, promoting balance, focus, and inner strength. This inverted posture invigorates the mind while enhancing circulation and building confidence.",
          slug: "/activities/yoga/sirsasana",
        },
        {
          title: "Sarvangasana",
          thumbnail: yogaType8,
          desc: "Sarvangasana is a revered yoga pose that offers many benefits for the body and mind. This promotes rejuvenation, improved circulation, and a calming effect on the nervous system.",
          slug: "/activities/yoga/sarvangasana",
        },
        {
          title: "Setu Bandhasana",
          thumbnail: yogaType9,
          desc: "Setu Bandhasana gracefully opens up the chest and hip flexors while strengthening the back and glutes. This yoga posture stimulates the spine and brings a sense of balance and stability",
          slug: "/activities/yoga/setu-bandhasana",
        },
        {
          title: "Uttanasana",
          thumbnail: yogaType10,
          desc: "Uttanasana involves bending forward with straight or bent legs, providing a stretch to lower back and hamstrings. It's often integrated into yoga  for its calming and grounding effects.",
          slug: "/activities/yoga/uttanasana",
        },
        {
          title: "Navasana",
          thumbnail: yogaType11,
          desc: "Navasana involves balancing on the sit bones while lifting the legs and torso to form the 'V' shape. This pose engages the core muscles, strengthens the abdomen, and improves stability.",
          slug: "/activities/yoga/navasana",
        },
        {
          title: "Ardha Chandrasana",
          thumbnail: yogaType12,
          desc: "Ardha Chandrasana is a balancing yoga standing on one leg while extending the opposite arm parallel to the ground. This pose tones the legs, improves balance, and enhances core stability.",
          slug: "/activities/yoga/ardha-chandrasana",
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
  },
  {
    id: 2,
    name: "Meditation",
    slug: "/activities/meditation",
    header: {
      title: [
        {
          color: true,
          text: "Meditation ",
        },
        {
          color: false,
          text: "heals the mind",
        },
      ],
      desc: "Meditation is like a peaceful escape that can help the mind in our busy world. Science proves it can lower stress and anxiety and help us handle emotions better. Just sitting quietly and looking within can do wonders for the mind, making us feel better overall.",
      image: meditationHeader,
    },
    activities: {
      title: "MEDITATION TECHNIQUES",
      desc: "Join us in this journey with our world-class meditation gurus and experts just for you at your fingertips.",
      types: [
        {
          title: "Mindfulness Meditation",
          thumbnail: meditationType1,
          desc: "Originated from Hindu shastras,a practise involving attention to present,focusing on breath and thoughts without judgment fostering heightened awareness, acceptance.",
          slug: "/activities/meditation/mindfulness-meditation",
        },
        {
          title: "Awareness Meditation",
          thumbnail: meditationType2,
          desc: "Observing the natural rhythm of breath.Close attention to inhalation and exhalation, redirecting the mind back to the breath.Calms mind, enhances focus, and reduces anxiety.",
          slug: "/activities/meditation/breath-awareness-meditation",
        },
        {
          title: "Kundalini Meditation",
          thumbnail: meditationType3,
          desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to  Balancethe chakras and achieve heightened spiritual awakening. ",
          slug: "/activities/meditation/kundalini-meditation",
        },
        {
          title: "Zen Meditation (Zazen)",
          thumbnail: meditationType4,
          desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath observing thoughts and sensations without attachment or judgment. Cultivate mindfulness,  into true reality.",
          slug: "/activities/meditation/zen-meditation",
        },
        {
          title: "Spiritual Meditation",
          thumbnail: meditationType5,
          desc: "Activating one's consciousness. Spiritual meditation involves bonding at a higher consciencel. Highly beneficial to those seeking spiritual growth and oneness with supreme self.",
          slug: "/activities/meditation/spiritual-meditation",
        },
        {
          title: "Walking Meditation",
          thumbnail: meditationType6,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/activities/meditation/walking-meditation",
        },
        {
          title: "Vipassana Meditation",
          thumbnail: meditationType7,
          desc: "The insight meditation practice of vipassana calls for very attentive observation of feelings, ideas, and sensations. Its goal is to help people comprehend how fleeting and ultimately unsatisfying life is.",
          slug: "/activities/meditation/vipassana-meditation",
        },
        {
          title: "Concentrate Meditation",
          thumbnail: meditationType8,
          desc: "Focusing all your attention on singularity. Train your mind to focus on a particular vibration or sensation, which enhances your capacity for concentration and decreases distractions.",
          slug: "/activities/meditation/concentrative-meditation",
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
  },
  {
    id: 3,
    name: "Sadhna",
    slug: "/activities/sadhna",
    header: {
      title: [
        {
          color: true,
          text: "Sadhna: ",
        },
        {
          color: false,
          text: "A Journey of Spiritual Growth",
        },
      ],
      desc: "Sadhna is like a journey that helps you grow spiritually, connecting you to deeper insights. When you embrace Sadhna, you're on a quest that takes care of your soul, helps you spiritually evolve, and makes your life more meaningful.",
      image: sadhnaHeader,
    },
    activities: {
      title: "Sadhna Techniques",
      desc: "Explore transformative Sadhna techniques for emotional healing, leading you to a brighter tomorrow, even amid life's darkestmoments.",
      types: [
        {
          title: "Yoga Sadhana",
          thumbnail: sadhnaType1,
          desc: "Originated from Hindu shastras,a practise involving attention to present,focusing on breath and thoughts without judgment fostering heightened awareness, acceptance.",
          slug: "/",
        },
        {
          title: "Meditation Sadhana",
          thumbnail: sadhnaType2,
          desc: "Observing the natural rhythm of breath.Close attention to inhalation and exhalation, redirecting the mind back to the breath.Calms mind, enhances focus, and reduces anxiety.",
          slug: "/",
        },
        {
          title: "Mantra Sadhana",
          thumbnail: sadhnaType3,
          desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to  Balancethe chakras and achieve heightened spiritual awakening. ",
          slug: "/",
        },
        {
          title: "Japa Sadhana",
          thumbnail: sadhnaType4,
          desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath observing thoughts and sensations without attachment or judgment. Cultivate mindfulness,  into true reality.",
          slug: "/",
        },
        {
          title: "Bhakti Sadhana",
          thumbnail: sadhnaType5,
          desc: "Activating one's consciousness. Spiritual meditation involves bonding at a higher consciencel. Highly beneficial to those seeking spiritual growth and oneness with supreme self.",
          slug: "/",
        },
        {
          title: "Kundalini Sadhana",
          thumbnail: sadhnaType6,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/",
        },
        {
          title: "Seva Sadhana",
          thumbnail: sadhnaType7,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/",
        },
        {
          title: "Nature Sadhana",
          thumbnail: sadhnaType8,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/",
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
  },
];

export const brainExercise = {
  id: 1,
  name: "Brain Exercise",
  slug: "/activities/brain-exercise",
  header: {
    title: [
      {
        color: false,
        text: "Nurturing mental health through ",
      },
      {
        color: true,
        text: "brain exercises",
      },
    ],
    desc: "Boost your mental health with our brain exercises program. These fun activities help your thinking and concentration. Join this journey to a sharper mind and more robust mental well-being.",
    image: brainExerciseHeader,
  },
  activities: {
    title: "Brain Games",
    desc: "Explore a range of brain-boosting exercises and activities, puzzles, techniques, and mental workouts tailored to enhance cognition and mental well-being, memory, focus, and overall brain health.",
    types: [
      {
        title: "The Turtle Hunter",
        thumbnail: brainGameHunter,
        desc: "Welcome to Turtle Treasure Dash, an exciting adventure game where you control a brave and agile turtle on a quest to collect shimmering coins while navigating through a challenging obstacle course. Join our little hero on an epic journey through various terrains, from lush forests to treacherous caves and beyond, in search of precious treasure!",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Galaxy - The Space Adventure",
        thumbnail: brainGameGalaxy,
        desc: "Embark on an interstellar journey beyond the boundaries of the known universe in Galactic Odyssey, an epic space adventure game that will take you to the stars and beyond. Strap into your advanced spaceship and prepare for an unforgettable voyage through dazzling galaxies, treacherous asteroid fields, and enigmatic wormholes.",
        slug: "/",
        class: ["order-2", "order-1"],
      },
      {
        title: "Treasure Chest",
        thumbnail: brainGameTreasure,
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

// Activity Features Blocks
export const activityFeatures = [
  {
    name: "Available Exercises",
    image: feature1,
  },
  {
    name: "Flexible Schedule",
    image: feature2,
  },
  {
    name: "Proper Demonstration",
    image: feature3,
  },
];

export const blogsData = [
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail1,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail2,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail3,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail4,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail5,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail6,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail5,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail6,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail3,
  },
];

// Home Page data
// Objectives
export const homeServices = [
  {
    title: "Therapy",
    desc: "Transform through therapy with caring, skilled therapists in a supportive, confidential setting. Enhance mental health and personal growth for a happier life.",
    image: homeTherapy,
    slug: "/services/therapy",
  },
  {
    title: "Executive Coaching",
    desc: "Executive coaching elevates leadership, empowers high-level staff, & drives positive results. It maximizes potential, navigates the challenges, &  enhances performance.",
    image: homeExecutiveCoaching,
    slug: "/executive-coaching",
  },
  {
    title: "Corporate",
    desc: "Corporate mental wellness services focus on employee well-being, and tackling the  challenges, reducing stress, and promoting emotional resilience at work.",
    image: homeCorporate,
    slug: "/corporate",
  },
  {
    title: "Lifestyle Coaching",
    desc: "Lifestyle coaching empowers well-being, productivity, and balance. It encourages health, reduces stress, boosts motivation, and enhances performance.",
    image: homeLifestyleCoaching,
    slug: "/lifestyle-coaching",
  },
  {
    title: "Yoga",
    desc: "Yoga combines postures, breathing, meditation, and mindfulness for mental wellness. It enhances mental health by nurturing the mind-body connection.",
    image: homeYoga,
    slug: "/activities/yoga",
  },
  {
    title: "Meditation",
    desc: "Meditation fosters mental wellness by focusing the mind and reducing cluttered thoughts. It enhances clarity, relaxation, and self-awareness.",
    image: homeMeditation,
    slug: "/activities/meditation",
  },
  {
    title: "Musical Healing",
    desc: "Music healing addresses diverse needs through music. Therapists use musical interventions like listening, creating, singing, & playing instruments. ",
    image: homeMeditation,
    slug: "/services/musical-healing",
  },
  {
    title: "Internship",
    desc: "Unlock career opportunities & gain experience through our internship programs.  Explore placements that align with your academic  professional goals,  skills & opportunities.",
    image: homeInternship,
    slug: "/internship",
  },
  {
    title: "Self Care",
    desc: "Prioritize your well-being with our self-care solutions. We offer personalized self-care plans & resources to help you nurture your physical, mental, and emotional health. ",
    image: homeSelfcare,
    slug: "/self-care",
  },
];
export const objectives = [
  {
    name: "Safe",
    image: iconSafe,
  },
  {
    name: "Secure",
    image: iconSecure,
  },
  {
    name: "Effective",
    image: iconEffective,
  },
  {
    name: "Easy Access",
    image: iconEasyAccess,
  },
  {
    name: "Community",
    image: iconCommunity,
  },
];

export const whyChooseUs = [
  {
    title: "Experience",
    image: homeExperienceIcon,
    desc: "Experience world class services based on international standards for your health",
  },
  {
    title: "Commitment",
    desc: "We commit to providing personalized care tailored to your unique needs and support you at every step.",
    image: homeCommitmentIcon,
  },
  {
    title: "Facilities",
    desc: "Experience the convenience and comfort of our state-of-the-art facilities with wleness.",
    image: homeFacilitiesIcon,
  },
];

export const statistics = [
  {
    value: "24/7",
    title: "Online Support",
    suffix: "",
    background: "bg-primary-400",
  },
  {
    value: "100",
    title: "Doctors",
    suffix: "+",
    background: "bg-primary-50",
  },
  {
    value: "1",
    title: "Active Patients",
    suffix: "M+",
    background: "bg-primary-400",
  },
  {
    value: "5",
    title: "Interested",
    suffix: "M+",
    background: "bg-primary-50",
  },
];

// Life style coaching
export const lifecoching = [
  {
    title: "Clarity",
    image: one,
    desc: "Life coaching clarifies your goals, dreams, and aspirations. It helps you see a clear path forward and set achievable objectives. ",
  },
  {
    title: "Motivation",
    desc: "Feeling stuck or lacking motivation? A life coach can reignite your passion and keep you accountable for your aspirations.",
    image: two,
  },
  {
    title: "Confidence",
    desc: "Fear of failure? It's a common roadblock. Life coaching equips you with the tools to boldly face your fears & move forward.",

    image: three,
  },
  {
    title: "Overcoming Fear",
    desc: "Fear of failure? It's a common roadblock. Life coaching equips you with the tools to boldly face your fears & move forward.",
    image: four,
  },
];

export const wlenessLifeCoaching = [
  {
    name: "One to One Power Coaching",
    image: grp1,
    desc: "Our transformative approach offers tailored strategies and unwavering personal and professional growth support. With a dedicated life coach, unlock your fullest potential and achieve your goals – advancing your career, enhancing relationships, or overall life improvement.",
  },
  {
    name: "Empowerment Exchange",
    image: grp2,
    desc: "Explore the advantages of our Group Life Coaching offering. By joining our community of dedicated individuals, you'll receive expert guidance in pursuing personal growth. Achieve clarity, reach your goals, and experience a more enriching life journey with the help of our experienced coaches.",
  },
  {
    name: "360-degree evaluation",
    image: grp3,
    desc: "Our comprehensive approach examines all facets of your life, providing a clear roadmap for growth. Our expert coaches will assess your strengths, identify areas for improvement, & work with you to set & achieve meaningful goals. Elevate every aspect of your life.",
  },
];
