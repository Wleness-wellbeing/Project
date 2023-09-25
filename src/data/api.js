// const URI = "https://api.wleness.com/";
const URI = "http://127.0.0.1:5000/";

// ============= API Endpoints =============
// Authentication
export const SIGNUP_USER_URI = URI + "signup-user";
export const LOGIN_USER_URI = URI + "login-user";
export const LOGOUT_USER_URI = URI + "logout-user";
export const USER_PROFILE_URI = URI + "user-profile";

// Leads
export const REQUEST_CALLBACK_URI = URI + "request-callback";

// Experts
export const EXPERTS_URI = URI + "get-experts";

// Blogs
export const BLOGS_URI = URI + "get-blogs";
export const SINGLE_BLOG_URI = URI + "blog";

// Joining Forms
export const APPOINTMENT_BOOK_URI = URI + "book-appointment";
export const CORPORATE_JOIN_URI = URI + "join-corporate";
export const THERAPIST_JOIN_URI = URI + "join-therapist";
export const PSYCHIATRIST_JOIN_URI = URI + "join-psychiatrist";
