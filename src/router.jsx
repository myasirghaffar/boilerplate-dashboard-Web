import { Routes, Route } from "react-router-dom";
import AppLayout from "./global/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UnauthorizedPage from "./pages/Unauthor";
import AuthGuard from "./components/AuthGuard";
import AuthRedirect from "./utils/AuthRedirect";
import NotFound from "./pages/NotFound";
import WebsiteLayout from "./layouts/WebsiteLayout";
import WebsiteHome from "./pages/website/home";
import WebsiteAbout from "./pages/website/about";
import WebsiteContact from "./pages/website/contact";
import NotificationsScreen from "./pages/commanPages/notificationsScreen";
import SharedChat from "./pages/commanPages/chat";
import SharedProfile from "./pages/commanPages/profile";

import AdminDashboard from "./pages/adminRole/dashboard";
import AgencyDashboard from "./pages/agencyRole/dashboard";
import CompanyDashboard from "./pages/companyRole/dashboard";
import RecruiterDashboard from "./pages/recruiterRole/dashboard";

const AppRouter = () => {
  return (
    <Routes>
      {/* Website routes */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<WebsiteHome />} />
        <Route path="/about" element={<WebsiteAbout />} />
        <Route path="/contact" element={<WebsiteContact />} />
      </Route>

      {/* Authentication routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<AuthRedirect />} />

      {/* Unauthorized page */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Admin dashboard routes */}
      <Route
        path="/admin"
        element={
          <AuthGuard>
            <AppLayout />
          </AuthGuard>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="chat" element={<SharedChat />} />
        <Route path="notifications" element={<NotificationsScreen />} />
      </Route>

      {/* Agency dashboard routes */}
      <Route
        path="/agency"
        element={
          <AuthGuard>
            <AppLayout />
          </AuthGuard>
        }
      >
        <Route index element={<AgencyDashboard />} />
        <Route path="dashboard" element={<AgencyDashboard />} />
        <Route path="chat" element={<SharedChat />} />
        <Route path="profile" element={<SharedProfile />} />
        <Route path="notifications" element={<NotificationsScreen />} />
      </Route>

      {/* Company dashboard routes */}
      <Route
        path="/company"
        element={
          <AuthGuard>
            <AppLayout />
          </AuthGuard>
        }
      >
        <Route index element={<CompanyDashboard />} />
        <Route path="dashboard" element={<CompanyDashboard />} />
        <Route path="chat" element={<SharedChat />} />
        <Route path="profile" element={<SharedProfile />} />
        <Route path="notifications" element={<NotificationsScreen />} />
      </Route>

      {/* Recruiter dashboard routes */}
      <Route
        path="/recruiter"
        element={
          <AuthGuard>
            <AppLayout />
          </AuthGuard>
        }
      >
        <Route index element={<RecruiterDashboard />} />
        <Route path="dashboard" element={<RecruiterDashboard />} />
        <Route path="chat" element={<SharedChat />} />
        <Route path="profile" element={<SharedProfile />} />
        <Route path="notifications" element={<NotificationsScreen />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
