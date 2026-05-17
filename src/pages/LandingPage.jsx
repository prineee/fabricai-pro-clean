import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #222",
        }}
      >
        <h2>FabricAI Pro</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/login" style={linkStyle}>
            Login
          </Link>

          <Link to="/register" style={linkStyle}>
            Register
          </Link>

          <Link to="/billing" style={linkStyle}>
            Pricing
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          AI Business Suite
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#aaa",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          Launch AI powered automation, CRM, ERP, marketing and analytics
          platform for businesses.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link to="/register">
            <button style={buttonStyle}>Start Free Trial</button>
          </Link>

          <Link to="/billing">
            <button style={buttonStyle}>View Pricing</button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          padding: "40px",
        }}
      >
        <div style={cardStyle}>
          <h2>AI Chat</h2>
          <p>Powerful business AI assistant using Groq AI.</p>
        </div>

        <div style={cardStyle}>
          <h2>CRM System</h2>
          <p>Manage customers, leads and sales pipeline.</p>
        </div>

        <div style={cardStyle}>
          <h2>ERP Dashboard</h2>
          <p>Inventory, finance and operations management.</p>
        </div>

        <div style={cardStyle}>
          <h2>Analytics</h2>
          <p>Real-time business insights and reporting.</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          borderTop: "1px solid #222",
          marginTop: "50px",
          color: "#888",
        }}
      >
        © 2026 FabricAI Pro. All rights reserved.
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "18px",
};

const buttonStyle = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "15px 30px",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "18px",
};

const cardStyle = {
  background: "#111",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid #222",
};

export default LandingPage;