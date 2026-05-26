import { Link } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function Overview() {
  return (
    <DashboardLayout>
      <section style={heroStyle}>
        <p style={eyebrowStyle}>Factory command center</p>
        <h1 style={titleStyle}>FabricAI Pro Dashboard</h1>
        <p style={subtitleStyle}>
          Track style development, estimate fabric consumption, analyze uploaded
          techpacks, and prepare production decisions from one place.
        </p>
      </section>

      <div style={statsGridStyle}>
        <MetricCard title="Active Styles" value="24" note="Live samples and bulk orders" />
        <MetricCard title="Marker Efficiency" value="87%" note="Current planning average" />
        <MetricCard title="Fabric Stock" value="12T" note="Across usable rolls" />
        <MetricCard title="Demo Credits" value="2" note="For new registered users" />
      </div>

      <div style={actionGridStyle}>
        <ActionCard
          title="AI Garment Analysis"
          text="Upload garment images, sketches, PDFs, or techpack files and generate production notes."
          to="/dashboard/workspace"
          button="Open AI Workspace"
        />

        <ActionCard
          title="Style Master"
          text="Create style records with buyer, fabric, GSM, width, shrinkage, image, and marker details."
          to="/dashboard/styles"
          button="Create Style"
        />

        <ActionCard
          title="Consumption Calculator"
          text="Calculate fabric requirement using width, GSM, shrinkage, wastage, and size ratio inputs."
          to="/dashboard/consumption"
          button="Calculate Consumption"
        />

        <ActionCard
          title="Choose Your Plan"
          text="Upgrade demo users to paid FabricAI Pro plans through Razorpay checkout."
          to="/dashboard/billing"
          button="View Plans"
        />
      </div>
    </DashboardLayout>
  );
}

function MetricCard({
  title,
  value,
  note,
}: {
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div style={metricCardStyle}>
      <p style={metricTitleStyle}>{title}</p>
      <h2 style={metricValueStyle}>{value}</h2>
      <p style={metricNoteStyle}>{note}</p>
    </div>
  );
}

function ActionCard({
  title,
  text,
  to,
  button,
}: {
  title: string;
  text: string;
  to: string;
  button: string;
}) {
  return (
    <div style={actionCardStyle}>
      <h2 style={actionTitleStyle}>{title}</h2>
      <p style={actionTextStyle}>{text}</p>
      <Link to={to} style={buttonStyle}>
        {button}
      </Link>
    </div>
  );
}

const heroStyle = {
  marginBottom: "28px",
};

const eyebrowStyle = {
  color: "#34d399",
  fontSize: "15px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  letterSpacing: "0",
};

const titleStyle = {
  fontSize: "44px",
  margin: "10px 0 14px",
};

const subtitleStyle = {
  color: "#cbd5e1",
  fontSize: "18px",
  lineHeight: 1.7,
  maxWidth: "900px",
};

const statsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
  marginBottom: "28px",
};

const metricCardStyle = {
  background: "#0f172a",
  borderRadius: "16px",
  padding: "24px",
  border: "1px solid #1e293b",
};

const metricTitleStyle = {
  color: "#94a3b8",
  margin: 0,
};

const metricValueStyle = {
  fontSize: "38px",
  margin: "14px 0 8px",
};

const metricNoteStyle = {
  color: "#94a3b8",
  margin: 0,
};

const actionGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "20px",
};

const actionCardStyle = {
  background: "#0f172a",
  borderRadius: "16px",
  border: "1px solid #1e293b",
  padding: "26px",
};

const actionTitleStyle = {
  fontSize: "24px",
  marginBottom: "12px",
};

const actionTextStyle = {
  color: "#cbd5e1",
  lineHeight: 1.7,
  minHeight: "88px",
};

const buttonStyle = {
  display: "inline-block",
  background: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "13px 18px",
  borderRadius: "10px",
  fontWeight: 700,
};