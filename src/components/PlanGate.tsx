import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { usePlan } from "../hooks/usePlan";

interface PlanGateProps {
  requiredPlan: "PRO" | "AGENCY";
  children: ReactNode;
}

export default function PlanGate({ requiredPlan, children }: PlanGateProps) {
  const { plan, loading } = usePlan();

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "60px" }}>
        <p style={{ color: "#94a3b8", fontSize: "16px" }}>Checking plan...</p>
      </div>
    );
  }

  const hasAccess =
    requiredPlan === "PRO"
      ? plan === "PRO" || plan === "AGENCY"
      : plan === "AGENCY";

  if (!hasAccess) {
    return (
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "24px",
            padding: "56px 48px",
            textAlign: "center",
            maxWidth: "480px",
            width: "100%",
          }}
        >
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>🔒</div>
          <h2 style={{ color: "#ffffff", fontSize: "26px", fontWeight: 800, marginBottom: "12px" }}>
            This feature requires {requiredPlan} Plan
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "16px", marginBottom: "36px", lineHeight: 1.6 }}>
            Upgrade your plan to unlock this feature
          </p>
          <Link
            to="/dashboard/billing"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "white",
              padding: "15px 36px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            Upgrade Now →
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
