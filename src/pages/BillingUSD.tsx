import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

declare global {
  interface Window {
    Razorpay: any;
  }
}

function getPricing(plan: string, period: string) {
  const prices: any = {
    pro: {
      monthly:  { monthly: 9,  total: 9,   save: 0,   savePct: 0  },
      "3months":{ monthly: 8,  total: 24,  save: 3,   savePct: 11 },
      "6months":{ monthly: 7,  total: 42,  save: 12,  savePct: 22 },
      annual:   { monthly: 5,  total: 60,  save: 48,  savePct: 44 },
    },
    agency: {
      monthly:  { monthly: 25, total: 25,  save: 0,   savePct: 0  },
      "3months":{ monthly: 22, total: 66,  save: 9,   savePct: 12 },
      "6months":{ monthly: 19, total: 114, save: 36,  savePct: 24 },
      annual:   { monthly: 14, total: 168, save: 132, savePct: 44 },
    },
  };
  return prices[plan][period];
}

const PERIOD_LABEL: any = {
  monthly:  "Monthly",
  "3months":"3 Months",
  "6months":"6 Months",
  annual:   "Annual",
};

export default function BillingUSD() {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, period } = (location.state as any) || { plan: "PRO", period: "monthly" };
  const [payMethod, setPayMethod] = useState("razorpay");

  const pricing = getPricing(plan.toLowerCase(), period);
  const planColor = plan === "PRO" ? "#34d399" : "#7c3aed";
  const planTextColor = plan === "PRO" ? "#020617" : "#ffffff";

  const features = plan === "PRO"
    ? ["Unlimited AI generations", "Full Style Master (unlimited styles)", "Export & download reports", "Buyer quotation generator", "Priority email support"]
    : ["Everything in PRO", "Multiple factory accounts (up to 10)", "Commercial resell license", "Dedicated account manager", "Custom onboarding session"];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  function openRazorpay() {
    if (!window.Razorpay) {
      alert("Payment system loading. Please try again in a moment.");
      return;
    }
    const inrAmount = pricing.total * 84 * 100;
    const options = {
      key: "rzp_live_SngV5d3BGmZJ1p",
      amount: String(inrAmount),
      currency: "INR",
      name: "FabricAI Pro",
      description: plan + " Plan - " + PERIOD_LABEL[period],
      image: "https://www.fabricaipro.com/logo.png",
      handler: function (response: any) {
        alert(
          "✅ Payment Successful!\n" +
          "Payment ID: " + response.razorpay_payment_id + "\n" +
          "Your " + plan + " plan is now active.\n" +
          "Check your email for confirmation."
        );
        navigate("/dashboard");
      },
      prefill: { name: "FabricAI User", email: "customer@example.com" },
      theme: { color: "#34d399" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  function handlePay() {
    if (payMethod === "razorpay") {
      openRazorpay();
    } else if (payMethod === "paypal") {
      alert("PayPal payment instructions:\n\nSend $" + pricing.total + " to payments@fabricaipro.com\nInclude your email address in the note.\nYour account will be activated within 1 hour.");
    } else {
      alert("Stripe integration coming soon.\nPlease use Razorpay or PayPal for now.");
    }
  }

  return (
    <div style={{ background: "#020617", minHeight: "100vh", color: "#ffffff", fontFamily: "Arial, sans-serif" }}>

      {/* TOP BAR */}
      <div style={{ background: "#0f172a", borderBottom: "1px solid #1e293b", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: "#34d399", fontWeight: 900, fontSize: "24px" }}>FabricAI Pro</div>
        <div style={{ color: "#94a3b8", fontSize: "15px" }}>🔒 Secure Checkout</div>
        <Link to="/pricing-usd" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "15px" }}>← Change Plan</Link>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "40px", maxWidth: "1000px", margin: "60px auto", padding: "0 40px" }}>

        {/* LEFT: Order Summary */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "20px", padding: "32px" }}>
          <h2 style={{ color: "#fef08a", fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>Order Summary</h2>

          <span style={{ background: planColor, color: planTextColor, padding: "6px 16px", borderRadius: "20px", fontWeight: 900, fontSize: "14px" }}>
            {plan}
          </span>

          <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, margin: "16px 0 4px" }}>
            FabricAI Pro {plan}
          </p>
          <p style={{ color: "#94a3b8", fontSize: "15px", margin: "0 0 20px" }}>
            {PERIOD_LABEL[period]} billing
          </p>

          <div style={{ height: "1px", background: "#1e293b", marginBottom: "20px" }} />

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ color: "#94a3b8", fontSize: "15px" }}>Per month rate:</span>
            <span style={{ color: "#e2e8f0", fontSize: "15px" }}>${pricing.monthly}/mo</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ color: "#94a3b8", fontSize: "15px" }}>Billing period:</span>
            <span style={{ color: "#e2e8f0", fontSize: "15px" }}>{PERIOD_LABEL[period]}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{ color: "#fef08a", fontSize: "17px", fontWeight: 700 }}>Total charged today:</span>
            <span style={{ color: "#fef08a", fontSize: "20px", fontWeight: 900 }}>${pricing.total}</span>
          </div>

          {pricing.save > 0 && (
            <div style={{ background: "rgba(52,211,153,0.1)", border: "1px solid #34d399", borderRadius: "12px", padding: "14px 18px", marginBottom: "16px" }}>
              <span style={{ color: "#34d399", fontWeight: 700, fontSize: "14px" }}>
                🎉 You save ${pricing.save} ({pricing.savePct}% off) vs monthly billing
              </span>
            </div>
          )}

          <div style={{ height: "1px", background: "#1e293b", margin: "16px 0" }} />

          <p style={{ color: "#fef08a", fontSize: "13px", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            INCLUDED:
          </p>
          {features.map((f, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <span style={{ color: "#34d399", flexShrink: 0 }}>✅</span>
              <span style={{ color: "#cbd5e1", fontSize: "14px" }}>{f}</span>
            </div>
          ))}

          <div style={{ background: "rgba(254,240,138,0.1)", border: "1px solid rgba(254,240,138,0.25)", borderRadius: "10px", padding: "12px 16px", marginTop: "20px", textAlign: "center" }}>
            <span style={{ color: "#fef08a", fontSize: "13px" }}>
              🛡️ 7-Day Money Back Guarantee | No questions asked
            </span>
          </div>
        </div>

        {/* RIGHT: Payment Options */}
        <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "20px", padding: "32px" }}>
          <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, marginBottom: "24px" }}>Choose Payment Method</h2>

          {[
            { id: "razorpay", icon: "💳", name: "Razorpay", sub: "Cards, UPI, NetBanking, Wallets" },
            { id: "paypal",   icon: "🅿️", name: "PayPal",   sub: "Pay with your PayPal account"  },
            { id: "stripe",   icon: "💰", name: "Stripe",   sub: "Visa, Mastercard, Amex"         },
          ].map((m) => (
            <div key={m.id} onClick={() => setPayMethod(m.id)}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "16px 20px", borderRadius: "12px",
                cursor: "pointer", marginBottom: "12px",
                border: payMethod === m.id ? "2px solid #34d399" : "1px solid #334155",
                background: payMethod === m.id ? "rgba(52,211,153,0.05)" : "#020617",
              }}
            >
              <span style={{ fontSize: "24px" }}>{m.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px" }}>{m.name}</div>
                <div style={{ color: "#94a3b8", fontSize: "13px" }}>{m.sub}</div>
              </div>
              <span style={{ color: payMethod === m.id ? "#34d399" : "#334155", fontSize: "20px" }}>
                {payMethod === m.id ? "●" : "○"}
              </span>
            </div>
          ))}

          <div style={{ background: "rgba(254,240,138,0.08)", border: "1px solid rgba(254,240,138,0.2)", borderRadius: "14px", padding: "20px 24px", margin: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#94a3b8", fontSize: "16px" }}>Total Today</span>
            <span style={{ color: "#fef08a", fontSize: "32px", fontWeight: 900 }}>${pricing.total}</span>
          </div>

          <button onClick={handlePay}
            style={{ width: "100%", background: "#34d399", color: "#020617", border: "none", padding: "20px", fontSize: "20px", fontWeight: 900, borderRadius: "14px", cursor: "pointer", marginBottom: "14px" }}
          >
            Pay ${pricing.total} Securely →
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "16px 0" }}>
            <div style={{ flex: 1, height: "1px", background: "#1e293b" }} />
            <span style={{ color: "#475569", fontSize: "13px" }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "#1e293b" }} />
          </div>

          <button
            onClick={() => alert("Redirecting to WarriorPlus/JVZoo checkout.\nUse your affiliate link for tracked sales.")}
            style={{ width: "100%", background: "#ff6b35", color: "white", border: "none", padding: "16px", fontSize: "17px", fontWeight: 700, borderRadius: "12px", cursor: "pointer" }}
          >
            Pay via WarriorPlus / JVZoo
          </button>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
            {["🔒 SSL Secure","✅ 7-Day Guarantee","🌍 Worldwide"].map((b, i) => (
              <span key={i} style={{ color: "#475569", fontSize: "13px" }}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
