import React from "react";

export default function Pricing() {
  const containerStyle: React.CSSProperties = {
    background: "#020617",
    minHeight: "100vh",
    color: "white",
    padding: "60px 20px",
    fontFamily: "Arial",
  };

  const titleStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "64px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const subtitleStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "24px",
    color: "#cbd5e1",
    marginBottom: "60px",
  };

  const pricingWrapper: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  };

  const cardStyle: React.CSSProperties = {
    background: "#0f172a",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid #1e293b",
    width: "320px",
    position: "relative",
    transition: "0.3s",
  };

  const proCardStyle: React.CSSProperties = {
    ...cardStyle,
    border: "2px solid #2563eb",
    transform: "scale(1.03)",
  };

  const badgeStyle: React.CSSProperties = {
    position: "absolute",
    top: "-15px",
    right: "20px",
    background: "#2563eb",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px",
    borderRadius: "12px",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "30px",
  };

  const featureStyle: React.CSSProperties = {
    marginBottom: "14px",
    color: "#cbd5e1",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Choose Your Plan</h1>

      <p style={subtitleStyle}>
        Unlock premium AI tools for your business
      </p>

      <div style={pricingWrapper}>
        {/* STARTER */}
        <div style={cardStyle}>
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Starter
          </h2>

          <h1
            style={{
              fontSize: "64px",
              marginBottom: "10px",
            }}
          >
            ₹50
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "30px",
            }}
          >
            per month
          </p>

          <div style={featureStyle}>✅ 50 AI generations</div>
          <div style={featureStyle}>✅ Blog Generator</div>
          <div style={featureStyle}>✅ Ad Generator</div>
          <div style={featureStyle}>✅ Email Generator</div>

          <button style={buttonStyle}>Get Started</button>
        </div>

        {/* PRO */}
        <div style={proCardStyle}>
          <div style={badgeStyle}>MOST POPULAR</div>

          <h2
            style={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Pro
          </h2>

          <h1
            style={{
              fontSize: "64px",
              marginBottom: "10px",
            }}
          >
            ₹299
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "30px",
            }}
          >
            per month
          </p>

          <div style={featureStyle}>✅ Unlimited AI generations</div>
          <div style={featureStyle}>✅ Landing Page Generator</div>
          <div style={featureStyle}>✅ Product Description Generator</div>
          <div style={featureStyle}>✅ Priority Support</div>

          <button style={buttonStyle}>Upgrade To Pro</button>
        </div>

        {/* AGENCY */}
        <div style={cardStyle}>
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Agency
          </h2>

          <h1
            style={{
              fontSize: "64px",
              marginBottom: "10px",
            }}
          >
            ₹999
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "30px",
            }}
          >
            per month
          </p>

          <div style={featureStyle}>✅ White Label Rights</div>
          <div style={featureStyle}>✅ Unlimited Everything</div>
          <div style={featureStyle}>✅ Team Access</div>
          <div style={featureStyle}>✅ Agency Dashboard</div>

          <button style={buttonStyle}>Get Agency</button>
        </div>
      </div>
    </div>
  );
}