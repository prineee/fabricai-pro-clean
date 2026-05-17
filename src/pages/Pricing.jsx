import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            marginBottom: "20px",
          }}
        >
          Pricing Plans
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
          }}
        >
          Choose the perfect AI business plan
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Starter */}
        <div style={cardStyle}>
          <h2>Starter</h2>

          <h1 style={priceStyle}>
            ₹499
            <span style={smallText}>/month</span>
          </h1>

          <ul style={listStyle}>
            <li>✔ AI Chat Access</li>
            <li>✔ Basic CRM</li>
            <li>✔ Analytics Dashboard</li>
            <li>✔ Email Support</li>
          </ul>

          <Link to="/billing">
            <button style={buttonStyle}>
              Get Started
            </button>
          </Link>
        </div>

        {/* Pro */}
        <div
          style={{
            ...cardStyle,
            border: "2px solid #2563eb",
            transform: "scale(1.03)",
          }}
        >
          <div style={badgeStyle}>
            MOST POPULAR
          </div>

          <h2>Professional</h2>

          <h1 style={priceStyle}>
            ₹1499
            <span style={smallText}>/month</span>
          </h1>

          <ul style={listStyle}>
            <li>✔ Unlimited AI Usage</li>
            <li>✔ Full CRM + ERP</li>
            <li>✔ Affiliate System</li>
            <li>✔ Sales Analytics</li>
            <li>✔ Priority Support</li>
          </ul>

          <Link to="/billing">
            <button style={proButtonStyle}>
              Upgrade Now
            </button>
          </Link>
        </div>

        {/* Enterprise */}
        <div style={cardStyle}>
          <h2>Enterprise</h2>

          <h1 style={priceStyle}>
            ₹4999
            <span style={smallText}>/month</span>
          </h1>

          <ul style={listStyle}>
            <li>✔ White Label Platform</li>
            <li>✔ API Access</li>
            <li>✔ Custom AI Models</li>
            <li>✔ Dedicated Support</li>
            <li>✔ Unlimited Everything</li>
          </ul>

          <Link to="/billing">
            <button style={buttonStyle}>
              Contact Sales
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#111827",
  padding: "40px",
  borderRadius: "25px",
  border: "1px solid #1e293b",
  position: "relative",
};

const priceStyle = {
  fontSize: "52px",
  margin: "25px 0",
};

const smallText = {
  fontSize: "18px",
  color: "#94a3b8",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  lineHeight: "2.2",
  color: "#cbd5e1",
  marginBottom: "40px",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  background: "#2563eb",
  border: "none",
  borderRadius: "12px",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
};

const proButtonStyle = {
  ...buttonStyle,
  background: "#1d4ed8",
};

const badgeStyle = {
  position: "absolute",
  top: "-12px",
  right: "20px",
  background: "#2563eb",
  padding: "8px 14px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "bold",
};

export default Pricing;