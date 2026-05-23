import DashboardLayout from "../../layouts/DashboardLayout";



export default function AdminDashboard() {

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Admin Dashboard
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
          title="Total Users"
          value="1,245"
        />

        <StatCard
          title="Revenue"
          value="₹84,500"
        />

        <StatCard
          title="Subscriptions"
          value="324"
        />

        <StatCard
          title="AI Generations"
          value="52,140"
        />

      </div>

    </DashboardLayout>
  );
}



function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {

  return (
    <div
      style={{
        background: "#0f172a",
        padding: "30px",
        borderRadius: "20px",
        border: "1px solid #1e293b",
      }}
    >

      <h3
        style={{
          color: "#94a3b8",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>



      <h1
        style={{
          fontSize: "38px",
        }}
      >
        {value}
      </h1>

    </div>
  );
}