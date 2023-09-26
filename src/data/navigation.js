import {
  faBookBookmark,
  faClipboardList,
  faEnvelope,
  faGlobe,
  faHeartCircleCheck,
  faHome,
  faLocationDot,
  faPhone,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  JoinUsCampusAmbassador,
  JoinUsInternship,
  JoinUsPsychiatrist,
  JoinUsTherapist,
  iconFacebook,
  iconInstagram,
  iconLinkedin,
  iconTwitter,
  iconWhatsapp,
} from "../assets";
import {
  faFacebookSquare,
  faLinkedin,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// ================= Navigation Bar =================
// Services sub pages
export const serviceMenuPages = [
  {
    name: "Therapy",
    slug: "/services/therapy",
    subPages: [
      ["Couples Therapy", "/services/couples-therapy"],
      ["Stress", "/therapy/stress"],
      ["Depression", "/therapy/depression"],
      ["Anxiety", "/therapy/anxiety"],
      ["Anger", "/therapy/anger"],
      ["Panic Attack", "/therapy/panic-attack"],
      ["Bipolar Disorder", "/therapy/bipolar-disorder"],
      ["LGBTQ", "/therapy/lgbtq"],
      ["ADHD", "/therapy/adhd"],
      ["ODD", "/therapy/odd"],
      ["Paranoia", "/therapy/paranoia"],
      ["Conduct Disorder", "/therapy/conduct-disorder"],
    ],
  },
  {
    name: "Music Healing",
    slug: "/services/music-healing",
  },
  {
    name: "Executive Coaching",
    slug: "/executive-coaching",
  },
  {
    name: "Corporate Wellbeing",
    slug: "/corporate-wellbeing",
  },
  {
    name: "Life Coaching",
    slug: "/life-coaching",
  },
  {
    name: "Internship",
    slug: "/internship",
  },
  {
    name: "Yoga",
    slug: "/activities/yoga",
  },
  {
    name: "Meditation",
    slug: "/activities/meditation",
  },
];

// Activities sub pages
export const activitiesMenuPages = [
  {
    name: "Yoga",
    slug: "/activities/yoga",
  },
  {
    name: "Meditation",
    slug: "/activities/meditation",
  },
  {
    name: "Sadhna",
    slug: "/activities/sadhna",
  },
  {
    name: "Brain Exercise",
    slug: "/activities/brain-exercise",
  },
];

// Menu Pages
export const seldCareSubpages = [
  {
    name: "Selfcare Dashbaord",
    slug: "/user/dashboard",
  },
  {
    name: "Brain Exercise",
    slug: "/activities/brain-exercise",
  },
  {
    name: "Sadhna",
    slug: "/activities/sadhna",
  },
];

// Menu Pages
export const resourcesSubpages = [
  {
    name: "Blogs",
    slug: "/blogs",
  },
  // {
  //   name: "Videos",
  //   slug: "/videos",
  // },
  {
    name: "Community",
    slug: "/community",
  },
];

export const joinUsList = [
  {
    image: JoinUsTherapist,
    name: "Therapist",
    slug: "/join-therapist",
  },
  {
    image: JoinUsPsychiatrist,
    name: "Psychiatrist",
    slug: "/join-psychiatrist",
  },
  {
    image: JoinUsInternship,
    name: "Internship",
    slug: "/internship",
  },
  {
    image: JoinUsCampusAmbassador,
    name: "Campus Ambassador",
    slug: "/campus-ambassador",
  },
];

// ================= Footer Links =================
// Footer - Location
export const footerLocation = [
  [
    "Spring House, Plot 2, Sec 43, Golf Course Road, Gurgaon, 122002",
    "",
    faLocationDot,
  ],
  ["www.wleness.com", "https://wleness.com/", faGlobe],
  ["hello@wleness.com", "mailto:hello@wleness.com", faEnvelope],
  ["+91 8764387421", "tel:+918764387421", faPhone],
];

// Footer - About Wleness
export const footerAboutWleness = [
  ["About Us", "/about-us"],
  ["Contact Us", "/contact-us"],
  ["Career", "/career"],
  ["Join as Psychiatrist", "/join-psychiatrist"],
  ["Join as Therapist", "/join-therapist"],
  ["FAQ's", "/faqs"],
];

// Footer - Our Services
export const footerOurServices = [
  ["Therapy", "/services/therapy"],
  ["Music Healing", "/services/music-healing"],
  ["Executive Coaching", "/executive-coaching"],
  ["Corporate Wellbeing", "/corporate-wellbeing"],
  ["Life Coaching", "/life-coaching"],
  ["Internship", "/internship"],
  ["Yoga", "/activities/yoga"],
  // ["Meditation", "/activities/meditation"],
  // ["Internship", "/activities/internship"],
];

// Footer - Focus Areas
export const footerFocusAreas = [
  ["Couples Therapy", "/services/couples-therapy"],
  ["Stress", "/therapy/stress"],
  ["Depression", "/therapy/depression"],
  ["Anxiety", "/therapy/anxiety"],
  ["Anger Issues", "/therapy/anger"],
  ["Panic Attack", "/therapy/panic-attack"],
  ["Bipolar Disorder", "/therapy/bipolar-disorder"],
  // ["LGBTQ", "/therapy/lgbtq"],
  // ["ADHD", "/therapy/adhd"],
  // ["ODD", "/therapy/odd"],
  // ["Paranoia", "/therapy/paranoia"],
  // ["Conduct Disorder", "/therapy/conduct-disorder"],
];

// Footer - Our Experts
export const footerOurExperts = [
  ["Therapists", "/services/therapy"],
  // ["Psychiatrist", "/services/psychiatrist"],
  ["Couple Therapists", "/services/couples-therapy"],
  ["Coaches", "/coaches"],
];

// Footer social links
export const socialLinks = [
  [faSquareWhatsapp, "#"],
  [faSquareInstagram, "https://www.instagram.com/wleness/"],
  [faFacebookSquare, "http://facebook.com/profile.php?id=100094475627706"],
  [faSquareXTwitter, "http://twitter.com/wleness111"],
  [faLinkedin, "https://www.linkedin.com/company/wleness/"],
];

// ================= Admin Links =================
// Admin Side bar
export const adminSidebar = [
  ["Doctors", "/admin/doctors"],
  ["Queries", "/admin/queries"],
  ["Issue Category", "/admin/issue-category"],
  ["Issues", "/admin/therapy"],
  ["Users", "/admin/users"],
  ["Questions", "/admin/questions"],
  ["Blogs", "/admin/blogs"],
];

export const userDashboardLinks = [
  ["Home", "/user/dashboard", faHome],
  ["Profile", "/user/profile", faUser],
  // ["Self Care", "/self-care", faHeartCircleCheck],
  // ["Routine Care", "/user/routine-care", faBookBookmark],
  ["Routine Care", "/user/routine-care", faClipboardList],
  ["Community", "/community/chat", faUsers],
];
