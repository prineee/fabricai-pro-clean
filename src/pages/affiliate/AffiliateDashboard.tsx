import DashboardLayout from "../../layouts/DashboardLayout";



export default function AffiliateDashboard() {

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Affiliate Center
      </h1>



      <div
        style={{
          background: "#0f172a",
          padding: "35px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
          marginBottom: "30px",
        }}
      >

        <h2>Your Referral Link</h2>

        <div
          style={{
            marginTop: "20px",
            background: "#020617",
            padding: "18px",
            borderRadius: "12px",
            color: "#38bdf8",
            overflowX: "auto",
          }}
        >
          https://fabricaipro.com/?ref=affiliate123
        </div>

      </div>



      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >

        <Card
          title="Clicks"
          value="12,540"
        />

        <Card
          title="Sales"
          value="542"
        />

        <Card
          title="Commission"
          value="₹74,800"
        />

      </div>

    </DashboardLayout>
  );
}



function Card({
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