import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";

import Overview from "./pages/dashboard/Overview";
import BlogGenerator from "./pages/dashboard/BlogGenerator";
import EmailGenerator from "./pages/dashboard/EmailGenerator";
import AdGenerator from "./pages/dashboard/AdGenerator";
import History from "./pages/dashboard/History";
import Billing from "./pages/dashboard/Billing";
import Settings from "./pages/dashboard/Settings";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AffiliateDashboard from "./pages/affiliate/AffiliateDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/pricing" element={<Pricing />} />



        {/* DASHBOARD ROUTES */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/blog"
          element={
            <ProtectedRoute>
              <BlogGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/email"
          element={
            <ProtectedRoute>
              <EmailGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/ads"
          element={
            <ProtectedRoute>
              <AdGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/billing"
          element={
            <ProtectedRoute>
              <Billing />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />



        {/* ADMIN */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />



        {/* AFFILIATE */}

        <Route
          path="/affiliate"
          element={
            <ProtectedRoute>
              <AffiliateDashboard />
            </ProtectedRoute>
          }
        />



        {/* FALLBACK */}

        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
}