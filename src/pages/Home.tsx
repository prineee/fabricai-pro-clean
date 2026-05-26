import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={pageStyle}>
      <nav style={navStyle}>
        <h1 style={brandStyle}>FabricAI Pro</h1>

        <div style={navLinksStyle}>
          <Link to="/pricing" style={navLinkStyle}>Pricing</Link>
          <Link to="/login" style={navLinkStyle}>Login</Link>
          <Link to="/register" style={primaryNavStyle}>Start Demo</Link>
        </div>
      </nav>

      <main>
        <section style={heroStyle}>
          <p style={eyebrowStyle}>AI fabric consumption ERP</p>

          <h2 style={heroTitleStyle}>
            Calculate fabric consumption, marker loss, costing, and production
            requirements with practical garment intelligence.
          </h2>

          <p style={heroTextStyle}>
            Built for garment factories that need faster style costing, better
            fabric planning, and clear production decisions before bulk cutting.
          </p>

          <div style={ctaRowStyle}>
            <Link to="/register" style={primaryButtonStyle}>
              Create Demo Account
            </Link>

            <Link to="/login" style={secondaryButtonStyle}>
              Login
            </Link>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Factory Modules</h2>

          <div style={gridStyle}>
            <FeatureCard
              title="Style Master"
              text="Store style number, buyer, fabric type, GSM, width, shrinkage, techpack, image, and marker details."
            />

            <FeatureCard
              title="Consumption Engine"
              text="Estimate fabric need using width, GSM, wastage, shrinkage, ratio, lay, and marker efficiency."
            />

            <FeatureCard
              title="AI Garment Analysis"
              text="Upload garment files and generate practical BOM, costing, cutting, and production notes."
            />

            <FeatureCard
              title="Billing"
              text="Allow demo users to test credits first, then upgrade using Razorpay payment plans."
            />
          </div>
        </section>

        <section style={ctaSectionStyle}>
          <h2 style={sectionTitleStyle}>
            Use it first inside your own factory.
          </h2>

          <p style={heroTextStyle}>
            Test with real styles for 2-3 months, compare predicted vs actual
            consumption, then improve the formulas before selling as SaaS.
          </p>

          <Link to="/register" style={primaryButtonStyle}>
            Start With 2 Demo Credits
          </Link>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div style={cardStyle}>
      <h3 style={cardTitleStyle}>{title}</h3>
      <p style={cardTextStyle}>{text}</p>
    </div>
  );
}

const pageStyle = {
  background: "#020617",
  minHeight: "100vh",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "22px 56px",
  borderBottom: "1px solid #1e293b",
};

const brandStyle = {
  fontSize: "30px",
  color: "#34d399",
  margin: 0,
};

const navLinksStyle = {
  display: "flex",
  gap: "18px",
  alignItems: "center",
};

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
};

const primaryNavStyle = {
  ...navLinkStyle,
  background: "#2563eb",
  padding: "11px 18px",
  borderRadius: "10px",
  fontWeight: 700,
};

const heroStyle = {
  padding: "90px 40px 80px",
  maxWidth: "1180px",
  margin: "0 auto",
};

const eyebrowStyle = {
  color: "#34d399",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0",
};

const heroTitleStyle = {
  fontSize: "58px",
  lineHeight: 1.08,
  maxWidth: "1050px",
  margin: "18px 0 24px",
};

const heroTextStyle = {
  color: "#cbd5e1",
  fontSize: "21px",
  lineHeight: 1.7,
  maxWidth: "860px",
};

const ctaRowStyle = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap" as const,
  marginTop: "36px",
};

const primaryButtonStyle = {
  background: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "12px",
  fontWeight: 700,
  display: "inline-block",
};

const secondaryButtonStyle = {
  color: "white",
  textDecoration: "none",
  padding: "16px 24px",
  borderRadius: "12px",
  border: "1px solid #334155",
  fontWeight: 700,
  display: "inline-block",
};

const sectionStyle = {
  padding: "40px 40px 80px",
  maxWidth: "1180px",
  margin: "0 auto",
};

const sectionTitleStyle = {
  fontSize: "38px",
  marginBottom: "28px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "#0f172a",
  padding: "26px",
  borderRadius: "16px",
  border: "1px solid #1e293b",
};

const cardTitleStyle = {
  fontSize: "24px",
  marginBottom: "12px",
};

const cardTextStyle = {
  color: "#cbd5e1",
  lineHeight: 1.7,
};

const ctaSectionStyle = {
  padding: "80px 40px 110px",
  maxWidth: "1180px",
  margin: "0 auto",
};