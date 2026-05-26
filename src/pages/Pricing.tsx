import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Choose Your Plan</h1>

      <p style={subtitleStyle}>
        Start with demo credits, then upgrade when the factory workflow is useful.
      </p>

      <div style={pricingWrapper}>
        <PricingCard
          title="Free Demo"
          price="Rs. 0"
          features={[
            "2 AI demo credits",
            "Dashboard access",
            "Consumption calculator trial",
            "Style master preview",
          ]}
        />

        <PricingCard
          title="Pro"
          price="Rs. 150 / month"
          featured
          features={[
            "Unlimited AI analysis",
            "Style and techpack workflow",
            "Fabric consumption tools",
            "Priority support",
          ]}
        />

        <PricingCard
          title="Agency"
          price="Rs. 399 / month"
          features={[
            "Everything in Pro",
            "Client project workflow",
            "Advanced exports",
            "Commercial usage",
          ]}
        />
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  featured,
}: {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div style={featured ? proCardStyle : cardStyle}>
      {featured && <div style={badgeStyle}>MOST POPULAR</div>}

      <h2 style={planTitleStyle}>{title}</h2>
      <h3 style={priceStyle}>{price}</h3>

      {features.map((feature) => (
        <div key={feature} style={featureStyle}>
          {feature}
        </div>
      ))}

      <Link to="/register" style={buttonStyle}>
        Get Started
      </Link>
    </div>
  );
}

const containerStyle = {
  background: "#020617",
  minHeight: "100vh",
  color: "white",
  padding: "60px 20px",
  fontFamily: "Arial, sans-serif",
};

const titleStyle = {
  textAlign: "center" as const,
  fontSize: "54px",
  fontWeight: "bold",
  marginBottom: "16px",
};

const subtitleStyle = {
  textAlign: "center" as const,
  fontSize: "20px",
  color: "#cbd5e1",
  marginBottom: "54px",
};

const pricingWrapper = {
  display: "flex",
  justifyContent: "center",
  gap: "28px",
  flexWrap: "wrap" as const,
};

const cardStyle = {
  background: "#0f172a",
  padding: "34px",
  borderRadius: "18px",
  border: "1px solid #1e293b",
  width: "320px",
  position: "relative" as const,
};

const proCardStyle = {
  ...cardStyle,
  border: "2px solid #2563eb",
};

const badgeStyle = {
  position: "absolute" as const,
  top: "-15px",
  right: "20px",
  background: "#2563eb",
  padding: "8px 16px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: "bold",
};

const planTitleStyle = {
  fontSize: "32px",
  marginBottom: "18px",
};

const priceStyle = {
  fontSize: "38px",
  color: "#34d399",
  marginBottom: "28px",
};

const featureStyle = {
  marginBottom: "14px",
  color: "#cbd5e1",
  fontSize: "16px",
};

const buttonStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  padding: "15px",
  borderRadius: "12px",
  background: "#2563eb",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center" as const,
  textDecoration: "none",
  marginTop: "28px",
};