import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Data
import { activities, brainExercise } from "./data";
import { therapiesData } from "./data/issues";
import useToken from "./utils/useToken";
// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/icon/ScrollToTop";
import SignupLayout from "./components/layout/SignupLayout";
import DashboardLayout from "./components/layout/DashboardLayout";
// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Experts from "./pages/Experts";
import Issues from "./pages/Issues";
import Internship from "./pages/Internship";
import Activities from "./pages/Activities";
import Blogs from "./pages/Blogs";
import ActivityLayout from "./pages/Activities/ActivityLayout";
import BrainExercise from "./pages/Activities/BrainExercise";
import CouplesTherapy from "./pages/Services/CouplesTherapy";
import MusicalTherapy from "./pages/Services/MusicalTherapy";
import Avatar from "./components/layout/Avatar";
import ActivitySubPageLayout from "./pages/Activities/ActivitySubPageLayout";
import CampusAmbassador from "./pages/CampusAmbassador";
import Psychiatrist from "./pages/Services/Psychiatrist";
import Therapy from "./pages/Services/Therapy";
import ExpertsDetails from "./pages/Experts/ExpertsDetails";
import SignUp from "./pages/Authentication/SignUp";
import Login from "./pages/Authentication/Login";
import Appointment from "./pages/Appointment";
import Faqs from "./pages/Faqs";
import Community from "./pages/Community";
import IssueSubPageLayout from "./pages/Issues/IssueSubPageLayout";
import DoctorDashboard from "./pages/Dashboard/DoctorDashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import Corporate from "./pages/Corporate";
import Calendly from "./components/Calendly";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy";
import TermsAndConditions from "./pages/Policies/TermsAndConditions";
// import Selfcare from "./pages/Dashboard/Selfcare";
import ContactUs from "./pages/ContactUs";
import LifeCoching from "./pages/coching/LifeCoching";
import ExecutiveCoaching from "./pages/Coaches";
import RoutineCare from "./pages/Dashboard/RoutineCare";
import DoctorSignup from "./pages/Authentication/DoctorSignup";
import TherapistJoining from "./pages/JoinUs/TherapistJoining";
import PsychiatristJoining from "./pages/JoinUs/PsychiatristJoining";
import Chatbox from "./pages/Dashboard/Chatbox";
import Profile from "./pages/Dashboard/Profile";
import Chat from "./pages/Community/Chat";
import BlogDetails from "./pages/Blogs/BlogDetails";
import Cancellation from "./pages/Policies/Cancellation";
import StudentsPolicy from "./pages/Policies/StudentsPolicy";
import ExpertProfile from "./pages/Experts/ExpertProfile";
import Gauth from "./pages/Authentication/Gauth";
import FacebookAuth from "./pages/Authentication/FacebookAuth";
import Career from "./pages/Career";
import Consent from "./pages/Policies/Consent";
import { coachesData } from "./data/coach";
import CoachSubpage from "./pages/Coaches/CoachSubpage";
import TabSwitcher from "./components/SwitchTab";
import ExpertsLogin from "./pages/Authentication/ExpertsLogin";
import ForgotPassword from "./pages/Authentication/Forget";
import UserProfile from "./pages/Dashboard/UserProfile";
import Error404 from "./components/Error404";
import UserDashboardLayout from "./components/layout/UserDashboardLayout";
import DoctorsPayment from "./pages/Dashboard/DoctorsPayment";
import UserDashboardHistory from "./components/UserDashboardHistory";
import MusicalHealingTracks from "./pages/Services/MusicalHealingTracks";
import axios from "axios";
import xmlFile from "/sitemap.xml";
import robotsFile from "/robots.txt";
import MainAssessment from "./pages/Assessment";
import AssessmentQuestions from "./pages/Assessment/AssessmentQuestions";
import AssessmentResult from "./pages/Assessment/AssessmentResult";
import Success from "./components/RedirectPages/Success";
import { lifestyleCoaches } from "./data/life-coaching";

function App() {
  const { token, removeToken, setToken } = useToken();
  // Disable right click on website
  function handleContextMenu(e) {
    e.preventDefault(); // prevents the default right-click menu from appearing
  }
  // add the event listener to the component's root element
  const rootElement = document.getElementById("root");
  // rootElement.addEventListener("contextmenu", handleContextMenu);

  // Serve xml file
  axios.get(xmlFile, {
    "Content-Type": "application/xml; charset=utf-8",
  });

  // Serve robots.txt file
  axios.get(robotsFile, {
    "Content-Type": "application/text; charset=utf-8",
  });

  // Activity Subpages Routing - Yoga, Meditation, Sadhna
  const activitiesMenu = activities.map((value, index) => {
    return (
      <Route
        key={index}
        path={value.slug}
        element={
          <Layout>
            <ActivityLayout
              name={value.name}
              header={value.header}
              activities={value.activities}
              blogs={value.blogs}
            />
          </Layout>
        }
      />
    );
  });

  // Activity Subpages Routing - Yoga subpages
  const activitiesInnerSubpages = activities.map((value) => {
    const innerSubPages = value.activities.types.map((key, i) => {
      return (
        <Route
          key={i}
          path={key.slug}
          element={
            <Layout>
              <ActivitySubPageLayout data={key.sections} />
            </Layout>
          }
        />
      );
    });

    return innerSubPages;
  });

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/assessment"
          element={
            <Layout>
              <MainAssessment />
            </Layout>
          }
        />
        <Route
          path="/assessment/:slug"
          element={
            <Layout>
              <AssessmentQuestions />
            </Layout>
          }
        />
        <Route
          path="/assessment/result"
          element={
            <Layout>
              <AssessmentResult />
            </Layout>
          }
        />

        <Route
          path="/avatar"
          element={
            <Layout>
              <Avatar />
            </Layout>
          }
        />

        <Route
          path="/gauth"
          element={
            <Layout>
              <Gauth />
            </Layout>
          }
        />

        <Route
          path="/facebook"
          element={
            <Layout>
              <FacebookAuth />
            </Layout>
          }
        />

        <Route
          path="/services/psychiatrist"
          element={
            <Layout>
              <Psychiatrist />
            </Layout>
          }
        />
        <Route
          path="/services/therapy"
          element={
            <Layout>
              <Therapy />
            </Layout>
          }
        />
        <Route
          path="/services/couples-therapy"
          element={
            <Layout>
              <CouplesTherapy />
            </Layout>
          }
        />
        <Route
          path="/services/music-healing"
          element={
            <Layout>
              <MusicalTherapy />
            </Layout>
          }
        />
        <Route
          path="/services/music-healing/tracks"
          element={
            <Layout>
              <MusicalHealingTracks token={token} />
            </Layout>
          }
        />
        <Route
          path="/community"
          element={
            <Layout>
              <Community />
            </Layout>
          }
        />
        <Route
          path="/calendly"
          element={
            <Layout>
              <Calendly />
            </Layout>
          }
        />
        <Route
          path="/experts"
          element={
            <Layout>
              <Experts />
            </Layout>
          }
        />
        <Route
          path="/tab-switch"
          element={
            <Layout>
              <TabSwitcher />
            </Layout>
          }
        />
        <Route
          path="/experts/all"
          element={
            <Layout>
              <ExpertsDetails />
            </Layout>
          }
        />
        <Route
          path="/experts/profile/:slug"
          element={
            <Layout>
              <ExpertProfile />
            </Layout>
          }
        />
        <Route
          path="/experts/booking/:slug"
          element={
            <Layout>
              <Appointment />
            </Layout>
          }
        />
        <Route
          path="/success"
          element={
            <Layout>
              <Success />
            </Layout>
          }
        />
        <Route
          path="/issues"
          element={
            <Layout>
              <Issues />
            </Layout>
          }
        />
        <Route
          path="/calendly"
          element={
            <Layout>
              <Calendly />
            </Layout>
          }
        />

        {/* Therapies Subpages */}
        {therapiesData.map((value, index) => {
          return (
            <Route
              key={index}
              path={value.slug}
              element={
                <Layout>
                  <IssueSubPageLayout
                    header={value.header}
                    symptoms={value.symptoms}
                    doctors={value.doctors}
                    quote={value.quote}
                  />
                </Layout>
              }
            />
          );
        })}
        <Route
          path="/internship"
          element={
            <Layout>
              <Internship />
            </Layout>
          }
        />
        <Route
          path="/activities"
          element={
            <Layout>
              <Activities />
            </Layout>
          }
        />
        {/* <Route
          path="/activities/yoga"
          element={
            <Layout>
              <ActivityCards />
            </Layout>
          }
        /> */}
        {/* Activity Subpages - Yoga, Meditation, Sadhna */}
        {activitiesMenu}
        {/* Inner pages of yoga, meditation and sadhna */}
        {activitiesInnerSubpages}
        <Route
          path={brainExercise.slug}
          element={
            <Layout>
              <BrainExercise />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Layout>
              <BlogDetails />
            </Layout>
          }
        />
        <Route
          path="/faqs"
          element={
            <Layout>
              <Faqs />
            </Layout>
          }
        />
        <Route
          path="/experts-login"
          element={
            <SignupLayout>
              <ExpertsLogin setToken={setToken} token={token} />
            </SignupLayout>
          }
        />
        <Route
          path="/doctor/dashboard"
          element={
            <DashboardLayout token={token}>
              <DoctorDashboard token={token} />
            </DashboardLayout>
          }
        />
        <Route
          path="/doctor/payment"
          element={
            <DashboardLayout token={token}>
              <DoctorsPayment token={token} />
            </DashboardLayout>
          }
        />
        <Route
          path="/login"
          element={
            <SignupLayout>
              <Login setToken={setToken} token={token} />
            </SignupLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <SignupLayout>
              <ForgotPassword setToken={setToken} token={token} />
            </SignupLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <SignupLayout>
              <SignUp setToken={setToken} token={token} />
            </SignupLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <SignupLayout>
              <ForgotPassword />
            </SignupLayout>
          }
        />
        <Route
          path="/user/profile"
          element={
            <UserDashboardLayout token={token}>
              <UserProfile token={token} />
            </UserDashboardLayout>
          }
        />
        <Route
          path="/user/profile"
          element={
            <UserDashboardLayout token={token}>
              <UserProfile token={token} />
            </UserDashboardLayout>
          }
        />
        <Route
          path="/user/dashboard"
          element={
            <UserDashboardLayout token={token}>
              <UserDashboard token={token} />
            </UserDashboardLayout>
          }
        />
        <Route
          path="/user/history"
          element={
            <UserDashboardLayout token={token}>
              <UserDashboardHistory token={token} />
            </UserDashboardLayout>
          }
        />

        <Route path="*" element={<Error404 />} />
        <Route
          path="/community/chat"
          element={
            <DashboardLayout>
              <Chat token={token} />
            </DashboardLayout>
          }
        />
        <Route
          path="/user/routine-care"
          element={
            <DashboardLayout>
              <RoutineCare token={token} />
            </DashboardLayout>
          }
        />
        <Route
          path="/campus-ambassador"
          element={
            <Layout>
              <CampusAmbassador />
            </Layout>
          }
        />
        <Route
          path="/corporate-wellbeing"
          element={
            <Layout>
              <Corporate />
            </Layout>
          }
        />
        <Route
          path="/join-therapist"
          element={
            <Layout>
              <TherapistJoining />
            </Layout>
          }
        />
        <Route
          path="/join-psychiatrist"
          element={
            <Layout>
              <PsychiatristJoining />
            </Layout>
          }
        />
        <Route
          path="/chatbox"
          element={
            <SignupLayout>
              <Chatbox />
            </SignupLayout>
          }
        />

        {/* Policies Pages */}
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/students-policy"
          element={
            <Layout>
              <StudentsPolicy />
            </Layout>
          }
        />
        <Route
          path="/cancellation"
          element={
            <Layout>
              <Cancellation />
            </Layout>
          }
        />
        <Route
          path="/consent"
          element={
            <Layout>
              <Consent />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
        <Route
          path="/career"
          element={
            <Layout>
              <Career />
            </Layout>
          }
        />
        <Route
          path="/life-coaching"
          element={
            <Layout>
              <LifeCoching />
            </Layout>
          }
        />
        <Route
          path="/executive-coaching"
          element={
            <Layout>
              <ExecutiveCoaching />
            </Layout>
          }
        />
        {coachesData.map((value, i) => {
          return (
            <Route
              key={i}
              path={value.slug}
              element={
                <Layout>
                  <CoachSubpage data={value} />
                </Layout>
              }
            />
          );
        })}
        {lifestyleCoaches.map((value, i) => {
          return (
            <Route
              key={i}
              path={value.slug}
              element={
                <Layout>
                  <CoachSubpage data={value} />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default App;
