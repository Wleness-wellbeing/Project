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
import ExecutiveCoaching from "./pages/coching/ExecutiveCoaching";
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
import MeditationCheckout from "./pages/Appointment/MeditationCheckout";
import Saloni from "./pages/Coaches/Saloni";
import Anju from "./pages/Coaches/Anju";
import Andrea from "./pages/Coaches/Andrea";
import YogaCheckout from "./pages/Appointment/YogaCheckout";
import SadhnaCheckout from "./pages/Appointment/SadhnaCheckout";
import Career from "./pages/Career";
import Consent from "./pages/Policies/Consent";

function App() {
  const { token, removeToken, setToken } = useToken();
  // Disable right click on website
  // function handleContextMenu(e) {
  //   e.preventDefault(); // prevents the default right-click menu from appearing
  // }
  // // add the event listener to the component's root element
  // const rootElement = document.getElementById("root");
  // rootElement.addEventListener("contextmenu", handleContextMenu);

  // Activity Subpages Routing - Yoga, Meditation, Sadhna
  const activitiesMenu = activities.map((value, index) => {
    return (
      <Route
        key={index}
        path={value.slug}
        element={
          <Layout>
            <ActivityLayout
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
          path="/appointment/checkout"
          element={
            <Layout>
              <Appointment />
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
          path="/saloni"
          element={
            <Layout>
              <Saloni />
            </Layout>
          }
        />
        <Route
          path="/anju"
          element={
            <Layout>
              <Anju />
            </Layout>
          }
        />
        <Route
          path="/andrea"
          element={
            <Layout>
              <Andrea />
            </Layout>
          }
        />
        <Route
          path="/meditation-checkout"
          element={
            <Layout>
              <MeditationCheckout />
            </Layout>
          }
        />
        <Route
          path="/yoga-checkout"
          element={
            <Layout>
              <YogaCheckout />
            </Layout>
          }
        />
        <Route
          path="/sadhna-checkout"
          element={
            <Layout>
              <SadhnaCheckout />
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
        {/* {!token && token !== "" && token !== undefined ? (
          <>
            <Route
              path="/login"
              element={
                <SignupLayout>
                  <Login setToken={setToken} />
                </SignupLayout>
              }
            />
            <Route
              path="/signup"
              element={
                <SignupLayout>
                  <SignUp setToken={setToken} />
                </SignupLayout>
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/user/dashboard"
              element={
                <DashboardLayout>
                  <UserDashboard token={token} setToken={setToken} />
                </DashboardLayout>
              }
            />

            <Route
              path="/user/profile"
              element={
                <DashboardLayout>
                  <Profile token={token} />
                </DashboardLayout>
              }
            />
            <Route
              path="/community/chat"
              element={
                <DashboardLayout>
                  <Chat />
                </DashboardLayout>
              }
            />
            <Route
              path="/user/routine-care"
              element={
                <DashboardLayout>
                  <RoutineCare />
                </DashboardLayout>
              }
            />
          </>
        )} */}
        <Route
          path="/login"
          element={
            <SignupLayout>
              <Login setToken={setToken} token={token} />
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
          path="/user/dashboard"
          element={
            <DashboardLayout>
              <UserDashboard token={token} setToken={setToken} />
            </DashboardLayout>
          }
        />

        <Route
          path="/user/profile"
          element={
            <DashboardLayout>
              <Profile token={token} />
            </DashboardLayout>
          }
        />
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
          path="/doctor/dashboard"
          element={
            <DashboardLayout>
              <DoctorDashboard />
            </DashboardLayout>
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
