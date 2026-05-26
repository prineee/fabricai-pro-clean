import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

export default function Overview() {
  return (
    <DashboardLayout>
      <section style={{ marginBottom: "30px" }}>
        <p style={eyebrowStyle}>Factory command center</p>

        <h1 style={titleStyle}>FabricAI Pro Dashboard</h1>

        <p style={subtitleStyle}>
          Track style development, estimate fabric consumption, analyze garment
          images, and prepare production decisions from one place.
        </p>
      </section>

      <div style={statsGridStyle}>
        <Metric title="Active Styles" value="24" note="Live samples and orders" />
        <Metric title="Marker Efficiency" value="87%" note="Planning average" />
        <Metric title="Fabric Stock" value="12T" note="Usable fabric rolls" />
        <Metric title="Demo Credits" value="2" note="For new users" />
      </div>

      <div style={actionGridStyle}>
        <Action
          title="AI Garment Analysis"
          text="Upload garment image or techpack and generate BOM, costing, cutting, and production notes."
          to="/dashboard/workspace"
          button="Open AI Workspace"
        />

        <Action
          title="Style Master"
          text="Create style records with buyer, fabric, GSM, width, shrinkage, and image details."
          to="/dashboard/styles"
          button="Create Style"
        />

        <Action
          title="Consumption Calculator"
          text="Calculate fabric requirement using width, GSM, shrinkage, wastage, and order quantity."
          to="/dashboard/consumption"
          button="Calculate Consumption"
        />

        <Action
          title="Choose Your Plan"
          text="Upgrade demo users to paid FabricAI Pro plans."
          to="/dashboard/billing"
          button="View Plans"
        />
      </div>
    </DashboardLayout>
  );
}

function Metric({ title, value, note }: any) {
  return (
    <div style={cardStyle}>
      <p style={{ color: "#94a3b8", margin: 0 }}>{title}</p>
      <h2 style={{ fontSize: "40px", margin: "14px 0 8px" }}>{value}</h2>
      <p style={{ color: "#94a3b8", margin: 0 }}>{note}</p>
    </div>
  );
}

function Action({ title, text, to, button }: any) {
  return (
    <div style={cardStyle}>
      <h2 style={{ fontSize: "24px", marginBottom: "12px" }}>{title}</h2>
      <p style={{ color: "#cbd5e1", lineHeight: 1.7, minHeight: "90px" }}>
        {text}
      </p>
      <Link style={buttonStyle} to={to}>
        {button}
      </Link>
    </div>
  );
}

const eyebrowStyle = {
  color: "#34d399",
  fontSize: "15px",
  fontWeight: 700,
  textTransform: "uppercase" as const,
};

const titleStyle = {
  fontSize: "46px",
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

const actionGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "#0f172a",
  borderRadius: "16px",
  padding: "26px",
  border: "1px solid #1e293b",
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