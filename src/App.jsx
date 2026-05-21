import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./pages/signup";
import LandingPage from "./pages/LandingPage";
import Billing from "./pages/Billing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PAGE */}
        <Route path="/" element={<LandingPage />} />

        {/* BILLING */}
        <Route path="/billing" element={<Billing />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
        {/* LEGAL */}
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/refund-policy"
          element={<RefundPolicy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

      </Routes>
    </BrowserRouter>
  );
}