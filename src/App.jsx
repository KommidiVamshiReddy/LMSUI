import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// 🧭 Public layout components
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// 🌍 Public pages
import Home from "./pages/Home.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BecomeMentorPage from "./pages/BecomeMentorPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import OtpVerifyPage from "./pages/OtpVerifyPage.jsx";

// 🔐 Forgot password flow
import ForgotPasswordPage from "./pages/forgotPasswordFlow/ForgotPasswordPage.jsx";
import ResetOtpVerifyPage from "./pages/forgotPasswordFlow/ResetOtpVerifyPage.jsx";
import ResetPasswordPage from "./pages/forgotPasswordFlow/ResetPasswordPage.jsx";

// 🎓 Learner dashboard layout + pages
import LearnerLayout from "./layouts/LearnerLayout.jsx";
import DashboardHome from "./pages/LearnerDashBoard/DashboardHome.jsx";
import MyCourses from "./pages/LearnerDashBoard/MyCourses.jsx";
import CourseDetails from "./pages/LearnerDashBoard/CourseDetails.jsx";
import Assignments from "./pages/LearnerDashBoard/Assignments.jsx";
import MyProfile from "./pages/LearnerDashBoard/MyProfile.jsx";
import Settings from "./pages/LearnerDashBoard/Settings.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* 🌍 Public pages (with Header + Footer) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <Header />
              <CoursesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/courses/:slug"
          element={
            <>
              <Header />
              <CourseDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/become-mentor"
          element={
            <>
              <Header />
              <BecomeMentorPage />
              <Footer />
            </>
          }
        />

        {/* 🔑 Auth + Forgot Password Flow */}
        <Route
          path="/login"
          element={
            <>
              <Header />
              <LoginPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Header />
              <SignupPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/verify-otp"
          element={
            <>
              <Header />
              <OtpVerifyPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <>
              <Header />
              <ForgotPasswordPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/reset-otp-verify"
          element={
            <>
              <Header />
              <ResetOtpVerifyPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/reset-password"
          element={
            <>
              <Header />
              <ResetPasswordPage />
              <Footer />
            </>
          }
        />

        {/* 🎓 Learner dashboard (NO Header/Footer — uses LearnerLayout) */}
        <Route path="/dashboard" element={<LearnerLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* 🧭 Redirects & Fallback */}
        <Route path="/start" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
