import { Link } from "react-router-dom";

export default function DashboardLayout({ children }: any) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
      }}
    >
      <aside
        style={{
          width: "280px",
          background: "#0f172a",
          padding: "32px 28px",
          borderRight: "1px solid #1e293b",
          flexShrink: 0,
        }}
      >
        <h1
          style={{
            marginBottom: "42px",
            fontSize: "38px",
            color: "#34d399",
          }}
        >
          FabricAI
        </h1>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <SidebarLink to="/dashboard" label="Dashboard" />
          <SidebarLink to="/dashboard/workspace" label="AI Workspace" />
          <SidebarLink to="/dashboard/styles" label="Style Master" />
          <SidebarLink to="/dashboard/styles-list" label="Saved Styles" />
          <SidebarLink to="/dashboard/consumption" label="Consumption" />
          <SidebarLink to="/dashboard/blog" label="AI Notes" />
          <SidebarLink to="/dashboard/email" label="Email" />
          <SidebarLink to="/dashboard/ads" label="Quotation" />
          <SidebarLink to="/dashboard/history" label="History" />
          <SidebarLink to="/dashboard/billing" label="Billing" />
          <SidebarLink to="/dashboard/settings" label="Settings" />
        </nav>
      </aside>

      <main
        style={{
          flex: 1,
          padding: "40px",
          overflowX: "hidden",
        }}
      >
        {children}
      </main>
    </div>
  );
}

function SidebarLink({ to, label }: any) {
  return (
    <Link
      to={to}
      style={{
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        fontWeight: 600,
      }}
    >
      {label}
    </Link>
  );
}