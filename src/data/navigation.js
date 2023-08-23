import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
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
      ["Stress", "/therapy/stress"],
      ["Depression", "/therapy/depression"],
      ["Panic Attacks", "/therapy/panic-attack"],
      ["Anxiety", "/therapy/anxiety"],
      ["Bipolar Disorder", "/therapy/bipolar-disorder"],
      ["Schizophrenia", "/therapy/schizophrenia"],
      ["Paranoia", "/therapy/paranoia"],
      ["ADHD", "/therapy/adhd"],
      ["ODD", "/therapy/odd"],
      ["Contact Disorder", "/therapy/contact-disorder"],
    ],
  },
  {
    name: "Couples Therapy",
    slug: "/services/couples-therapy",
  },
  {
    name: "Musical Therapy",
    slug: "/services/musical-therapy",
  },
  {
    name: "Our Psychiatrist",
    slug: "/services/psychiatrist",
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
export const menuPages = [
  {
    name: "Corporate",
    slug: "/corporate",
  },
  {
    name: "Faqs",
    slug: "/faqs",
  },
  {
    name: "Avatar",
    slug: "/avatar",
  },
  {
    name: "Doctor Dashboard",
    slug: "/doctor/dashboard",
  },
  {
    name: "User Dashboard",
    slug: "/user/dashboard",
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
  ["Musical Thearpy", "/services/musical-therapy"],
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
