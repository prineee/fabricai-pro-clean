import { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const generateAI = async (type: string) => {
    if (!prompt) {
      alert("Please enter prompt");
      return;
    }

    setGeneratedText("Generating AI Content...");

    try {
      const response = await fetch(
        "https://fabricaipro-backend.onrender.com/api/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            type,
          }),
        }
      );

      const data = await response.json();

      setGeneratedText(data.result);
    } catch (error) {
      setGeneratedText("AI Generation Failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* SIDEBAR */}

      <div
        style={{
          width: "260px",
          background: "#081028",
          padding: "30px 20px",
          borderRight: "1px solid #1e293b",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "40px",
          }}
        >
          FabricAI
        </h1>

        {[
          "Dashboard",
          "AI Writer",
          "Blog Generator",
          "Ad Generator",
          "Email Generator",
          "Landing Pages",
          "Saved Content",
          "Billing",
          "Settings",
          "Logout",
        ].map((item) => (
          <div
            key={item}
            style={{
              padding: "14px",
              marginBottom: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              background:
                item === "Dashboard"
                  ? "#2563eb"
                  : "transparent",
            }}
          >
            {item}
          </div>
        ))}

        {/* PLAN */}

        <div
          style={{
            marginTop: "40px",
            background: "#2563eb",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h3>PRO PLAN</h3>

          <p
            style={{
              color: "#dbeafe",
            }}
          >
            Unlimited AI generations
          </p>

          <button
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              background: "white",
              color: "#2563eb",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Upgrade
          </button>
        </div>
      </div>

      {/* MAIN */}

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        {/* TOP */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "48px",
                marginBottom: "10px",
              }}
            >
              Welcome Back 👋
            </h1>

            <p
              style={{
                color: "#94a3b8",
              }}
            >
              Generate high-converting AI content instantly
            </p>
          </div>

          <div
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#2563eb",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            N
          </div>
        </div>

        {/* STATS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {[
            {
              title: "Total Generations",
              value: "12,480",
            },
            {
              title: "Saved Projects",
              value: "348",
            },
            {
              title: "Pro Plan",
              value: "ACTIVE",
            },
            {
              title: "Affiliate Earnings",
              value: "₹24,500",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <p
                style={{
                  color: "#94a3b8",
                  marginBottom: "15px",
                }}
              >
                {card.title}
              </p>

              <h2
                style={{
                  fontSize: "34px",
                }}
              >
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        {/* AI GENERATOR */}

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            AI Content Generator
          </h2>

          <textarea
            placeholder="Describe your business, product, or content idea..."
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
            style={{
              width: "100%",
              height: "140px",
              background: "#020617",
              border: "1px solid #334155",
              borderRadius: "14px",
              padding: "20px",
              color: "white",
              fontSize: "18px",
              marginBottom: "20px",
              resize: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "15px",
            }}
          >
            {[
              "AI Blog Generator",
              "AI Ad Generator",
              "AI Email Generator",
              "AI Script Generator",
              "AI Product Description",
              "AI Landing Page Generator",
            ].map((btn) => (
              <button
                key={btn}
                onClick={() => generateAI(btn)}
                style={{
                  padding: "16px",
                  background: "#2563eb",
                  border: "none",
                  borderRadius: "12px",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        {/* OUTPUT */}

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h2>Generated Content</h2>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                style={smallBtn}
                onClick={() =>
                  navigator.clipboard.writeText(
                    generatedText
                  )
                }
              >
                Copy
              </button>

              <button style={smallBtn}>
                Download
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#020617",
              minHeight: "250px",
              borderRadius: "14px",
              padding: "20px",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
            }}
          >
            {generatedText ||
              "Your AI generated content will appear here."}
          </div>
        </div>

        {/* HISTORY */}

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Recent AI History
          </h2>

          {[
            "Facebook Ads for Fitness Product",
            "AI Blog about Digital Marketing",
            "Email Campaign for SaaS Product",
            "Landing Page for AI Startup",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#020617",
                padding: "18px",
                borderRadius: "12px",
                marginBottom: "12px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const smallBtn = {
  padding: "12px 20px",
  background: "#2563eb",
  border: "none",
  borderRadius: "10px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};