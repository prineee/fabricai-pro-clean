import DashboardLayout from "../../layouts/DashboardLayout";

import StatCard from "../../components/StatCard";

export default function Overview() {
  return (
    <DashboardLayout>
      <h1
        style={{
          fontSize: "50px",
          marginBottom: "30px",
        }}
      >
        Welcome Back 👋
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <StatCard
          title="AI Generations"
          value="12,430"
        />

        <StatCard
          title="Saved Projects"
          value="248"
        />

        <StatCard
          title="Current Plan"
          value="PRO"
        />

        <StatCard
          title="Affiliate Earnings"
          value="₹24,500"
        />
      </div>
    </DashboardLayout>
  );
}