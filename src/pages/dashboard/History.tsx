import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

const history = [
  { type: "Blog",  title: "AI Marketing Trends",         date: "Today" },
  { type: "Email", title: "Product Launch Campaign",      date: "Yesterday" },
  { type: "Ad",    title: "Fashion Brand Ad Copy",        date: "2 days ago" },
];

const TYPE_COLOR: Record<string, string> = {
  Blog:  "#3b82f6",
  Email: "#10b981",
  Ad:    "#f59e0b",
};

export default function History() {
  const navigate = useNavigate();

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

      <h1 style={{ fontSize: "42px", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
        🕘 AI History
      </h1>
      <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "32px" }}>
        Your recent AI-generated content
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
        {history.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#0f172a",
              borderRadius: "16px",
              padding: "24px 28px",
              border: "1px solid #1e293b",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span
                style={{
                  background: TYPE_COLOR[item.type] + "22",
                  color: TYPE_COLOR[item.type],
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: 700,
                  border: `1px solid ${TYPE_COLOR[item.type]}44`,
                  flexShrink: 0,
                }}
              >
                {item.type}
              </span>
              <h2 style={{ color: "#ffffff", fontSize: "17px", fontWeight: 600, margin: 0 }}>
                {item.title}
              </h2>
            </div>

            <div style={{ color: "#94a3b8", fontSize: "14px", flexShrink: 0, marginLeft: "16px" }}>
              {item.date}
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
