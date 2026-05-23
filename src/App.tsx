import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Overview from "./pages/dashboard/Overview";
import BlogGenerator from "./pages/dashboard/BlogGenerator";
import AdGenerator from "./pages/dashboard/AdGenerator";
import EmailGenerator from "./pages/dashboard/EmailGenerator";
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

        {/* PUBLIC */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD */}

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
          path="/dashboard/ad"
          element={
            <ProtectedRoute>
              <AdGenerator />
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

      </Routes>
    </BrowserRouter>
  );
}