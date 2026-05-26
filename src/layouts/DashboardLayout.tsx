import { Link, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function DashboardLayout({ children }: any) {
  const location = useLocation();

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#020617", color: "white" }}>
      <aside
        style={{
          width: "280px",
          background: "#0f172a",
          padding: "32px 24px",
          borderRight: "1px solid #1e293b",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginBottom: "36px", fontSize: "34px", color: "#34d399", fontWeight: 800 }}>
          FabricAI
        </h1>

        <nav style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
          <SidebarLink to="/dashboard" label="🏠 Dashboard" currentPath={location.pathname} />

          <SectionLabel label="FACTORY" />
          <SidebarLink to="/dashboard/styles"       label="🎨 Style Master"  currentPath={location.pathname} />
          <SidebarLink to="/dashboard/styles-list"  label="📋 Saved Styles"  currentPath={location.pathname} />
          <SidebarLink to="/dashboard/consumption"  label="📐 Consumption"   currentPath={location.pathname} />

          <SectionLabel label="AI TOOLS" />
          <SidebarLink to="/dashboard/workspace" label="🤖 AI Workspace" currentPath={location.pathname} />
          <SidebarLink to="/dashboard/blog"      label="📝 AI Notes"     currentPath={location.pathname} />
          <SidebarLink to="/dashboard/email"     label="✉️ Email"        currentPath={location.pathname} />
          <SidebarLink to="/dashboard/ads"       label="💰 Quotation"    currentPath={location.pathname} />

          <SectionLabel label="ACCOUNT" />
          <SidebarLink to="/dashboard/history"  label="🕘 History"  currentPath={location.pathname} />
          <SidebarLink to="/dashboard/billing"  label="💳 Billing"  currentPath={location.pathname} />
          <SidebarLink to="/dashboard/settings" label="⚙️ Settings" currentPath={location.pathname} />
        </nav>

        <button
          onClick={handleLogout}
          style={{
            marginTop: "28px",
            padding: "13px 16px",
            background: "transparent",
            color: "#f87171",
            border: "1px solid #f87171",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          🚪 Logout
        </button>
      </aside>

      <main style={{ flex: 1, padding: "40px", overflowX: "hidden" }}>
        {children}
      </main>
    </div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <p
      style={{
        color: "#fef08a",
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.1em",
        marginTop: "18px",
        marginBottom: "4px",
        paddingLeft: "12px",
      }}
    >
      {label}
    </p>
  );
}

function SidebarLink({
  to,
  label,
  currentPath,
}: {
  to: string;
  label: string;
  currentPath: string;
}) {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      style={{
        color: isActive ? "#34d399" : "#cbd5e1",
        textDecoration: "none",
        fontSize: "15px",
        fontWeight: isActive ? 700 : 500,
        background: isActive ? "rgba(52,211,153,0.1)" : "transparent",
        padding: "9px 12px",
        borderRadius: "10px",
        borderLeft: isActive ? "3px solid #34d399" : "3px solid transparent",
        transition: "all 0.15s ease",
        display: "block",
      }}
    >
      {label}
    </Link>
  );
}
