import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Data
import { activities, brainExercise } from "./data";
import { issuesData } from "./data/issues";
// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DoctorSignup from "./pages/Authentication/DoctorSignup";
import TherapistJoiningForm from "./components/TherapistJoiningForm.jsx";
import PsychiatristJoiningForm from "./components/PsychiatristJoiningForm";
import ScrollToTop from "./components/icon/ScrollToTop";
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
import DoctorAppointment from "./pages/Experts/DoctorAppointment";
import Appointment from "./pages/Appointment";
import Faqs from "./pages/Faqs";
import Community from "./pages/Community";
import IssueSubPageLayout from "./pages/Issues/IssueSubPageLayout";
import Admin from "./pages/Admin";

function App() {
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
          path="/services/musical-therapy"
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
          path="/appointment"
          element={
            <Layout>
              <DoctorAppointment />
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
        {/* Issues Subpages */}
        {issuesData.map((value, index) => {
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
          path="/faqs"
          element={
            <Layout>
              <Faqs />
            </Layout>
          }
        />
        <Route
          path="/doctors-signup"
          element={
            <SignupLayout>
              <DoctorSignup />
            </SignupLayout>
          }
        />
        <Route
          path="/login"
          element={
            <SignupLayout>
              <Login />
            </SignupLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <SignupLayout>
              <SignUp />
            </SignupLayout>
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
          path="/join-therapist"
          element={
            <SignupLayout>
              <TherapistJoiningForm />
            </SignupLayout>
          }
        />
        <Route
          path="/join-psychiatrist"
          element={
            <SignupLayout>
              <PsychiatristJoiningForm />
            </SignupLayout>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <Layout>
              <Admin />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

function Layout({ children }) {
  // Check if the current path is /doctors-signup or /patient-signup to decide whether to render Navbar and Footer or not
  const isLoginPage = window.location.pathname === "/login";
  const isSignUpPage = window.location.pathname === "/signup";

  return (
    <div>
      {!isLoginPage && !isSignUpPage && <Navbar />}
      {children}
      {!isLoginPage && !isSignUpPage && <Footer />}
    </div>
  );
}

function SignupLayout({ children }) {
  // This layout is specifically for /doctors-signup page, without the Navbar and Footer
  return <div>{children}</div>;
}

export default App;
