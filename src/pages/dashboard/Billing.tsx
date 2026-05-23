import DashboardLayout from "../../layouts/DashboardLayout";

const plans = [

  {
    title: "FREE",
    price: "₹0",
    features: [
      "5 AI generations/day",
      "Basic AI Tools",
      "Community Support",
    ],
    button: "Current Plan",
    link: "",
  },

  {
    title: "PRO",
    price: "₹150/month",
    features: [
      "Unlimited AI generations",
      "Premium AI Models",
      "Export Features",
      "Priority Support",
    ],
    button: "Upgrade To PRO",

    link:
      "https://rzp.io/l/YOUR_PRO_LINK",
  },

  {
    title: "AGENCY",
    price: "₹399/month",
    features: [
      "Everything in PRO",
      "Commercial License",
      "Client Management",
      "Agency Dashboard",
    ],
    button:
      "Upgrade To AGENCY",

    link:
      "https://rzp.io/l/YOUR_AGENCY_LINK",
  },
];

export default function Billing() {

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "48px",
          marginBottom: "35px",
        }}
      >
        Billing & Plans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >

        {
          plans.map((plan) => (

            <div
              key={plan.title}
              style={{
                background: "#0f172a",
                padding: "35px",
                borderRadius: "20px",
                border:
                  "1px solid #1e293b",
              }}
            >

              <h2
                style={{
                  fontSize: "30px",
                }}
              >
                {plan.title}
              </h2>

              <h1
                style={{
                  fontSize: "44px",
                  margin: "20px 0",
                  color: "#3b82f6",
                }}
              >
                {plan.price}
              </h1>

              <div
                style={{
                  marginBottom: "30px",
                }}
              >

                {
                  plan.features.map(
                    (feature) => (

                      <p
                        key={feature}
                        style={{
                          marginBottom:
                            "14px",
                          color:
                            "#cbd5e1",
                        }}
                      >
                        ✅ {feature}
                      </p>
                    )
                  )
                }

              </div>

              {
                plan.link ? (

                  <a
                    href={plan.link}
                    target="_blank"
                  >

                    <button
                      style={{
                        width: "100%",
                        padding: "16px",
                        border: "none",
                        borderRadius:
                          "12px",
                        background:
                          "#2563eb",
                        color: "white",
                        fontSize:
                          "18px",
                        cursor:
                          "pointer",
                      }}
                    >
                      {plan.button}
                    </button>

                  </a>

                ) : (

                  <button
                    style={{
                      width: "100%",
                      padding: "16px",
                      border: "none",
                      borderRadius:
                        "12px",
                      background:
                        "#334155",
                      color: "white",
                      fontSize:
                        "18px",
                    }}
                  >
                    {plan.button}
                  </button>

                )
              }

            </div>

          ))
        }

      </div>

    </DashboardLayout>
  );
}