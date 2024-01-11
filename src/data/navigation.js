import {
  faClipboardList,
  faEnvelope,
  faGlobe,
  faHome,
  faLocationDot,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  JoinUsCampusAmbassador,
  JoinUsInternship,
  JoinUsPsychiatrist,
  JoinUsTherapist,
} from "../assets";
import {
  faFacebookSquare,
  faLinkedin,
  faSquareInstagram,
  faSquareWhatsapp,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  ABOUT_US,
  ADHD,
  ALL_EXPERTS,
  ANGER_ISSUES,
  ANXIETY,
  BIPOLAR_DISORDER,
  BLOGS,
  BRAIN_EXERCISE,
  CAMPUS_AMBASSADOR,
  CAREER,
  COMMUNITY,
  CONDUCT_DISORDER,
  CONTACT_US,
  CORPORATE_WELLBEING,
  COUPLES_THERAPY,
  DEPRESSION,
  EXECUTIVE_COACHING,
  FAQ,
  INTERNSHIP,
  LGBTQ,
  LIFESTYLE_COACHING,
  MEDITATION,
  MUSICAL_HEALING,
  ODD,
  PANIC_ATTACKS,
  PARANOIA,
  PSYCHIATRIST_JOIN,
  SADHNA,
  STRESS,
  THERAPIST_JOIN,
  THERAPY,
  USER_DASHBOARD,
  USER_PROFILE,
  USER_ROUTINE_CARE,
  YOGA,
} from "./urls";

// ================= Navigation Bar =================
// Services sub pages
export const serviceMenuPages = [
  {
    name: "Therapy",
    slug: THERAPY,
    subPages: [
      ["Couples Therapy", COUPLES_THERAPY],
      ["Stress", STRESS],
      ["Depression", DEPRESSION],
      ["Anxiety", ANXIETY],
      ["Anger", ANGER_ISSUES],
      ["Panic Attack", PANIC_ATTACKS],
      ["Bipolar Disorder", BIPOLAR_DISORDER],
      ["LGBTQ", LGBTQ],
      ["ADHD", ADHD],
      ["ODD", ODD],
      ["Paranoia", PARANOIA],
      ["Conduct Disorder", CONDUCT_DISORDER],
    ],
  },
  {
    name: "Yoga",
    slug: YOGA,
  },
  {
    name: "Lifestyle Coaching",
    slug: LIFESTYLE_COACHING,
  },
  {
    name: "Executive Coaching",
    slug: EXECUTIVE_COACHING,
  },
  {
    name: "Corporate Wellbeing",
    slug: CORPORATE_WELLBEING,
  },
  {
    name: "Music Healing",
    slug: MUSICAL_HEALING,
  },
  {
    name: "Meditation",
    slug: MEDITATION,
  },
];

// Activities sub pages
export const activitiesMenuPages = [
  {
    name: "Yoga",
    slug: YOGA,
  },
  {
    name: "Meditation",
    slug: MEDITATION,
  },
  {
    name: "Sadhna",
    slug: SADHNA,
  },
  {
    name: "Brain Exercise",
    slug: BRAIN_EXERCISE,
  },
];

// Menu Pages
export const seldCareSubpages = [
  {
    name: "Selfcare Dashbaord",
    slug: USER_DASHBOARD,
  },
  {
    name: "Brain Exercise",
    slug: BRAIN_EXERCISE,
  },
  {
    name: "Sadhna",
    slug: SADHNA,
  },
];

// Menu Pages
export const resourcesSubpages = [
  {
    name: "Blogs",
    slug: BLOGS,
  },
  {
    name: "Community",
    slug: COMMUNITY,
  },
];

export const joinUsList = [
  {
    image: JoinUsTherapist,
    name: "Therapist",
    slug: THERAPIST_JOIN,
  },
  {
    image: JoinUsPsychiatrist,
    name: "Psychiatrist",
    slug: PSYCHIATRIST_JOIN,
  },
  {
    image: JoinUsInternship,
    name: "Internship",
    slug: INTERNSHIP,
  },
  {
    image: JoinUsCampusAmbassador,
    name: "Campus Ambassador",
    slug: CAMPUS_AMBASSADOR,
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
  ["+91 9147047488", "tel:+919147047488", faPhone],
];

// Footer - About Wleness
export const footerAboutWleness = [
  ["About Us", ABOUT_US],
  ["Contact Us", CONTACT_US],
  ["Career", CAREER],
  ["Join as Psychiatrist", PSYCHIATRIST_JOIN],
  ["Join as Therapist", THERAPIST_JOIN],
  ["FAQs", FAQ],
];

// Footer - Our Services
export const footerOurServices = [
  ["Therapy", THERAPY],
  ["Music Healing", MUSICAL_HEALING],
  ["Executive Coaching", EXECUTIVE_COACHING],
  ["Corporate Wellbeing", CORPORATE_WELLBEING],
  ["Lifestyle Coaching", LIFESTYLE_COACHING],
  ["Internship", INTERNSHIP],
  ["Yoga", YOGA],
];

// Footer - Focus Areas
export const footerFocusAreas = [
  ["Couples Therapy", COUPLES_THERAPY],
  ["Stress", STRESS],
  ["Depression", DEPRESSION],
  ["Anxiety", ANXIETY],
  ["Anger Issues", ANGER_ISSUES],
  ["Panic Attack", PANIC_ATTACKS],
  ["Bipolar Disorder", BIPOLAR_DISORDER],
  // ["LGBTQ", "/therapy/lgbtq"],
  // ["ADHD", "/therapy/adhd"],
  // ["ODD", "/therapy/odd"],
  // ["Paranoia", "/therapy/paranoia"],
  // ["Conduct Disorder", "/therapy/conduct-disorder"],
];

// Footer - Our Experts
export const footerOurExperts = [
  ["Therapists", ALL_EXPERTS],
  ["Psychiatrists", ""],
  ["Coaches", EXECUTIVE_COACHING],
];

// Footer social links
export const socialLinks = [
  [faSquareWhatsapp, "https://wa.me/919147047488"],
  [faSquareInstagram, "https://www.instagram.com/wleness/"],
  [faFacebookSquare, "http://facebook.com/profile.php?id=100094475627706"],
  [faSquareXTwitter, "http://twitter.com/wleness111"],
  [faLinkedin, "https://www.linkedin.com/company/wleness/"],
];

export const userDashboardLinks = [
  ["Home", USER_PROFILE, faHome, "_self"],
  // ["Profile", "/user/profile", faUser],
  // ["Self Care", "/user/dashboard", faHeartCircleCheck],
  // ["Routine Care", "/user/routine-care", faBookBookmark],
  ["Routine Care", USER_ROUTINE_CARE, faClipboardList, "_self"],
  ["Community", "https://community.wleness.com", faUsers, "_blank"],
];
