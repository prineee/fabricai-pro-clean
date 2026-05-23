import DashboardLayout from "../../layouts/DashboardLayout";

export default function Billing() {
  return (
    <DashboardLayout>
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        Billing & Plans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        <PlanCard
          title="FREE"
          price="₹0"
          features={[
            "5 AI generations/day",
            "Basic dashboard",
            "Limited features",
          ]}
          button="Current Plan"
        />

        <PlanCard
          title="PRO"
          price="₹150/mo"
          features={[
            "Unlimited AI generations",
            "Export tools",
            "Premium AI",
            "History access",
          ]}
          button="Upgrade"
        />

        <PlanCard
          title="AGENCY"
          price="₹399/mo"
          features={[
            "Everything in PRO",
            "White label",
            "Client management",
            "Commercial rights",
          ]}
          button="Upgrade"
        />
      </div>
    </DashboardLayout>
  );
}

function PlanCard({
  title,
  price,
  features,
  button,
}: any) {
  return (
    <div
      style={{
        background: "#0f172a",
        borderRadius: "20px",
        padding: "35px",
        border: "1px solid #1e293b",
      }}
    >
      <h2>{title}</h2>

      <h1
        style={{
          fontSize: "48px",
          margin: "20px 0",
        }}
      >
        {price}
      </h1>

      <div>
        {features.map((feature: string) => (
          <p key={feature}>
            ✓ {feature}
          </p>
        ))}
      </div>

      <button
        style={{
          marginTop: "30px",
          width: "100%",
          padding: "16px",
          border: "none",
          borderRadius: "12px",
          background: "#2563eb",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        {button}
      </button>
    </div>
  );
}