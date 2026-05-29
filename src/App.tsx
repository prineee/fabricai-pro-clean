import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyEmail from "./pages/VerifyEmail";

import ProtectedRoute from "./components/ProtectedRoute";

import Overview from "./pages/dashboard/Overview";
import Workspace from "./pages/Workspace";
import StyleMaster from "./pages/StyleMaster";
import StylesList from "./pages/StylesList";
import ConsumptionCalculator from "./pages/ConsumptionCalculator";

import AffiliateLanding from "./pages/AffiliateLanding";
import AffiliateAssets from "./pages/AffiliateAssets";
import PricingUSD from "./pages/PricingUSD";
import BillingUSD from "./pages/BillingUSD";
import SalesPage from "./pages/SalesPage";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import EarningsDisclaimer from "./pages/EarningsDisclaimer";
import AffiliateTerms from "./pages/AffiliateTerms";
import CancellationPolicy from "./pages/CancellationPolicy";
import Support from "./pages/Support";
import BlogGenerator from "./pages/dashboard/BlogGenerator";
import EmailGenerator from "./pages/dashboard/EmailGenerator";
import AdGenerator from "./pages/dashboard/AdGenerator";
import Billing from "./pages/dashboard/Billing";
import History from "./pages/dashboard/History";
import Settings from "./pages/dashboard/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Overview />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/workspace"
          element={
            <ProtectedRoute>
              <Workspace />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/styles"
          element={
            <ProtectedRoute>
              <StyleMaster />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/styles-list"
          element={
            <ProtectedRoute>
              <StylesList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/consumption"
          element={
            <ProtectedRoute>
              <ConsumptionCalculator />
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
          path="/dashboard/billing"
          element={
            <ProtectedRoute>
              <Billing />
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
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route path="/affiliates" element={<AffiliateLanding />} />
        <Route path="/affiliate-assets" element={<AffiliateAssets />} />
        <Route path="/pricing-usd" element={<PricingUSD />} />
        <Route path="/billing-usd" element={<BillingUSD />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/earnings-disclaimer" element={<EarningsDisclaimer />} />
        <Route path="/affiliate-terms" element={<AffiliateTerms />} />
        <Route path="/support" element={<Support />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}