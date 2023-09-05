import {
  faClipboardList,
  faEnvelope,
  faGlobe,
  faHeartCircleCheck,
  faHome,
  faLocationDot,
  faPhone,
  faRightFromBracket,
  faUser,
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
      ["ADHD", "/therapy/adhd"],
      ["ODD", "/therapy/odd"],
      ["Panic Attacks", "/therapy/panic-attack"],
      ["Bipolar Disorder", "/therapy/bipolar-disorder"],
      ["Schizophrenia", "/therapy/schizophrenia"],
      ["Paranoia", "/therapy/paranoia"],
      ["Conduct Disorder", "/therapy/conduct-disorder"],
    ],
  },
  {
    name: "Musical Healing",
    slug: "/services/musical-healing",
  },
  {
    name: "Our Experts",
    slug: "/experts",
  },
  {
    name: "Executive Coaching",
    slug: "/executive-coaching",
  },
  {
    name: "Corporate",
    slug: "/corporate",
  },
  {
    name: "Lifestyle Coaching",
    slug: "/lifestyle-coaching",
  },
  {
    name: "Yoga",
    slug: "/activities/yoga",
  },
  {
    name: "Meditation",
    slug: "/activities/meditation",
  },
  {
    name: "Musical Healing",
    slug: "/services/musical-healing",
  },
  {
    name: "Internship",
    slug: "/internship",
  },
  {
    name: "Self Care",
    slug: "/self-care",
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
  {
    name: "Videos",
    slug: "/videos",
  },
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
  ["FAQ's", "/faqs"],
];

// Footer - Our Services
export const footerOurServices = [
  ["Therapy", "/services/therapy"],
  ["Executive Coaching", "/executive-coaching"],
  ["Corporate", "/corporate"],
  ["Couple Therapy", "/services/couples-therapy"],
  ["Meditation", "/activities/meditation"],
  ["Yoga", "/activities/yoga"],
  ["Musical Healing", "/services/musical-healing"],
];

// Footer - Focus Areas
export const footerFocusAreas = [
  ["Depression", "/therapy/depression"],
  ["Anxiety", "/therapy/anxiety"],
  ["Stress", "/therapy/stress"],
  ["Panic Attack", "/therapy/panic-attack"],
  ["Bipolar Disorder", "/therapy/bipolar-disorder"],
  ["Relationship", "/therapy/relationship"],
  ["Anger Issues", "/therapy/anger-issues"],
];

// Footer - Our Experts
export const footerOurExperts = [
  ["Therapist", "/services/therapy"],
  ["Psychiatrist", "/services/psychiatrist"],
  ["Couple Therapist", "/services/couples-therapy"],
  ["Coaches", "/coaches"],
];

// Footer social links
export const socialLinks = [
  [iconWhatsapp, "#"],
  [iconInstagram, "https://www.instagram.com/wleness/"],
  [iconFacebook, "http://facebook.com/profile.php?id=100094475627706"],
  [iconTwitter, "http://twitter.com/wleness111"],
  [iconLinkedin, "https://www.linkedin.com/company/wleness/"],
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
  ["Profile", "/profile", faUser],
  ["Self Care", "/self-care", faHeartCircleCheck],
  ["Routine Care", "/routine-care", faClipboardList],
  // ["Logout", "/logout", faRightFromBracket],
];
