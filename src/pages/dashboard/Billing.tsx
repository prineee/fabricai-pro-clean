import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

declare global {
  interface Window { Razorpay: any; }
}

type Duration = "Monthly" | "3 Months" | "6 Months" | "Annual";

const PRO_PRICES: Record<Duration, { amount: number; label: string }> = {
  "Monthly":  { amount: 15000,  label: "₹150 / month" },
  "3 Months": { amount: 39900,  label: "₹399 / 3 months" },
  "6 Months": { amount: 74900,  label: "₹749 / 6 months" },
  "Annual":   { amount: 129900, label: "₹1299 / year" },
};

const AGENCY_PRICES: Record<Duration, { amount: number; label: string }> = {
  "Monthly":  { amount: 39900,  label: "₹399 / month" },
  "3 Months": { amount: 99900,  label: "₹999 / 3 months" },
  "6 Months": { amount: 179900, label: "₹1799 / 6 months" },
  "Annual":   { amount: 299900, label: "₹2999 / year" },
};

const DURATIONS: Duration[] = ["Monthly", "3 Months", "6 Months", "Annual"];

const RAZORPAY_KEY = "rzp_live_SngV5d3BGmZJ1p";

export default function Billing() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [proDuration, setProDuration] = useState<Duration>("Monthly");
  const [agencyDuration, setAgencyDuration] = useState<Duration>("Monthly");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  function openRazorpay(amount: number, description: string, plan: "PRO" | "AGENCY") {
    const options = {
      key: RAZORPAY_KEY,
      amount: String(amount),
      currency: "INR",
      name: "FabricAI Pro",
      description,
      image: "https://www.fabricaipro.com/logo.png",
      handler: async (response: any) => {
        if (!user) return;
        try {
          await updateDoc(doc(db, "users", user.uid), {
            plan,
            planActivatedAt: new Date().toISOString(),
            paymentId: response.razorpay_payment_id,
            dailyUsage: 0,
          });
          navigate("/dashboard");
        } catch {
          alert("Payment recorded but plan update failed. Contact support.");
        }
      },
      prefill: { name: user?.displayName || "FabricAI User", email: user?.email || "", contact: "9999999999" },
      notes: { address: "FabricAI SaaS Platform" },
      theme: { color: "#2563eb" },
    };
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 14px",
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "15px",
    marginBottom: "20px",
    outline: "none",
    cursor: "pointer",
  };

  return (
    <DashboardLayout>
      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background: "transparent",
          border: "1px solid #334155",
          color: "#94a3b8",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "15px",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Back to Dashboard
      </button>

      <a
        href="/pricing-usd"
        style={{
          display: "inline-block",
          color: "#34d399",
          fontSize: "15px",
          fontWeight: 700,
          textDecoration: "none",
          marginBottom: "28px",
        }}
      >
        🌍 Paying in USD? View international pricing →
      </a>

      <h1 style={{ fontSize: "44px", marginBottom: "35px", color: "#ffffff", fontWeight: 800 }}>
        Billing & Plans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "28px",
        }}
      >
        {/* FREE */}
        <div style={cardStyle}>
          <h2 style={planTitle}>FREE</h2>
          <h1 style={priceStyle}>₹0</h1>
          <p style={featureStyle}>✅ 5 AI generations/day</p>
          <p style={featureStyle}>✅ Blog Generator</p>
          <p style={featureStyle}>✅ Email Generator</p>
          <p style={featureStyle}>❌ Export Features</p>
          <div style={{ height: "52px" }} />
          <button style={disabledButton}>Current Plan</button>
        </div>

        {/* PRO */}
        <div style={{ ...cardStyle, border: "1px solid #2563eb" }}>
          <h2 style={{ ...planTitle, color: "#60a5fa" }}>PRO</h2>

          <label style={{ color: "#94a3b8", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}>
            Billing Duration
          </label>
          <select
            value={proDuration}
            onChange={(e) => setProDuration(e.target.value as Duration)}
            style={selectStyle}
          >
            {DURATIONS.map((d) => <option key={d}>{d}</option>)}
          </select>

          <h1 style={priceStyle}>{PRO_PRICES[proDuration].label}</h1>
          <p style={featureStyle}>✅ Unlimited AI</p>
          <p style={featureStyle}>✅ Premium Outputs</p>
          <p style={featureStyle}>✅ Download Exports</p>
          <p style={featureStyle}>✅ Priority Support</p>
          <button
            onClick={() => openRazorpay(PRO_PRICES[proDuration].amount, `PRO ${proDuration} Subscription`, "PRO")}
            style={upgradeButton}
          >
            Upgrade To PRO
          </button>
        </div>

        {/* AGENCY */}
        <div style={{ ...cardStyle, border: "1px solid #7c3aed" }}>
          <h2 style={{ ...planTitle, color: "#a78bfa" }}>AGENCY</h2>

          <label style={{ color: "#94a3b8", fontSize: "13px", fontWeight: 600, display: "block", marginBottom: "6px" }}>
            Billing Duration
          </label>
          <select
            value={agencyDuration}
            onChange={(e) => setAgencyDuration(e.target.value as Duration)}
            style={selectStyle}
          >
            {DURATIONS.map((d) => <option key={d}>{d}</option>)}
          </select>

          <h1 style={priceStyle}>{AGENCY_PRICES[agencyDuration].label}</h1>
          <p style={featureStyle}>✅ Unlimited AI</p>
          <p style={featureStyle}>✅ Agency Dashboard</p>
          <p style={featureStyle}>✅ Client Projects</p>
          <p style={featureStyle}>✅ Commercial License</p>
          <button
            onClick={() => openRazorpay(AGENCY_PRICES[agencyDuration].amount, `AGENCY ${agencyDuration} Subscription`, "AGENCY")}
            style={{ ...upgradeButton, background: "#7c3aed" }}
          >
            Upgrade To Agency
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#0f172a",
  padding: "32px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
  display: "flex",
  flexDirection: "column",
};

const planTitle: React.CSSProperties = {
  fontSize: "28px",
  marginBottom: "10px",
  color: "#ffffff",
  fontWeight: 800,
};

const priceStyle: React.CSSProperties = {
  fontSize: "36px",
  color: "#3b82f6",
  marginBottom: "20px",
  fontWeight: 700,
};

const featureStyle: React.CSSProperties = {
  color: "#cbd5e1",
  marginBottom: "12px",
  fontSize: "15px",
};

const disabledButton: React.CSSProperties = {
  width: "100%",
  padding: "15px",
  background: "#1e293b",
  color: "#94a3b8",
  border: "none",
  borderRadius: "12px",
  fontSize: "16px",
  marginTop: "auto",
  cursor: "default",
};

const upgradeButton: React.CSSProperties = {
  width: "100%",
  padding: "15px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
  marginTop: "auto",
};
