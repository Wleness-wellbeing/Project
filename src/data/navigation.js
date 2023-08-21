import {
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
      ["Stress", "/issues/stress"],
      ["Depression", "/issues/depression"],
      ["Panic Attacks", "/issues/panic-attack"],
      ["Anxiety", "/issues/anxiety"],
      ["Bipolar Disorder", "/issues/bipolar-disorder"],
      ["Schizophrenia", "/issues/schizophrenia"],
      ["Paranoia", "/issues/paranoia"],
      ["ADHD", "/issues/adhd"],
      ["ODD", "/issues/odd"],
      ["Contact Disorder", "/issues/contact-disorder"],
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

// ================= Footer Links =================
// Footer Explore Menu
export const footerExplore = [
  ["About Us", "/about-us"],
  ["Therapists", "/therapists"],
  ["Issues", "/issues"],
  ["Career", "/career"],
  ["Activities", "/activities"],
];

// Footer Quick Links
export const footerQuickLinks = [
  ["Contact Us", "/contact-us"],
  ["Blogs", "/blogs"],
  ["FAQ's", "/faqs"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
];

// Footer Frequent Issues
export const footerFrequentIssues = [
  ["Depression", "/issues/depression"],
  ["Anxiety", "/issues/anxiety"],
  ["ADHD", "/issues/adhd"],
  ["Panic Attacks", "/issues/panic-attack"],
  ["Biopolar Disorder", "/issues/biopolar-disorder"],
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
  ["Issues", "/admin/issues"],
  ["Users", "/admin/users"],
  ["Questions", "/admin/questions"],
  ["Blogs", "/admin/blogs"],
];
