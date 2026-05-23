import { useEffect, useState } from "react";
import { getCurrency } from "../utils/currency";
import { plans } from "../config/plans";

export default function PricingSwitcher() {
  const [region, setRegion] =
    useState<"india" | "international">("international");

  useEffect(() => {
    const loadCurrency = async () => {
      const result = await getCurrency();
      setRegion(result.locale as any);
    };

    loadCurrency();
  }, []);

  const currentPlans = plans[region];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(300px,1fr))",
        gap: "30px",
      }}
    >
      {Object.entries(currentPlans).map(([name, plan]) => (
        <div
          key={name}
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <h2>{name}</h2>

          <h1>
            {region === "india" ? "₹" : "$"}
            {plan.monthly}/mo
          </h1>

          <p>
            3 Months:
            {region === "india" ? " ₹" : " $"}
            {plan.quarterly}
          </p>

          <p>
            Annual:
            {region === "india" ? " ₹" : " $"}
            {plan.yearly}
          </p>

          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "#2563eb",
              border: "none",
              borderRadius: "10px",
              color: "white",
              marginTop: "20px",
            }}
          >
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  );
}