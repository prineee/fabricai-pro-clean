import { useState } from "react";

export default function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAI = async (type) => {
    try {
      if (!prompt) {
        alert("Please enter your prompt");
        return;
      }

      setLoading(true);

      setGeneratedContent("Generating AI Content...");

      const response = await fetch(
        "https://fabricai-backend.onrender.com/generate-ai",
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

      console.log(data);

      if (data.success) {
        setGeneratedContent(data.result);
      } else {
        alert(data.error || "AI Generation Failed");
      }
    } catch (error) {
      console.log(error);

      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const copyContent = () => {
    navigator.clipboard.writeText(generatedContent);

    alert("Copied Successfully");
  };

  const downloadContent = () => {
    const blob = new Blob([generatedContent], {
      type: "text/plain",
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "fabricai-content.txt";

    a.click();
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#020617",
        color: "white",
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
            fontSize: "34px",
            fontWeight: "bold",
            marginBottom: "40px",
            color: "#3b82f6",
          }}
        >
          FabricAI
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <button style={sidebarBtn}>Dashboard</button>

          <button style={sidebarBtn}>AI Writer</button>

          <button style={sidebarBtn}>Blog Generator</button>

          <button style={sidebarBtn}>Ad Generator</button>

          <button style={sidebarBtn}>Email Generator</button>

          <button style={sidebarBtn}>Landing Pages</button>

          <button style={sidebarBtn}>Saved Content</button>

          <button style={sidebarBtn}>Billing</button>

          <button style={sidebarBtn}>Settings</button>

          <button style={sidebarBtn}>Logout</button>
        </div>

        <div
          style={{
            marginTop: "60px",
            background: "#2563eb",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>PRO PLAN</h2>

          <p style={{ marginBottom: "20px" }}>
            Unlimited AI generations
          </p>

          <button
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Upgrade
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "54px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          FabricAI Pro Dashboard
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "24px",
            marginBottom: "40px",
          }}
        >
          Generate business content instantly using AI
        </p>

        {/* TOP CARDS */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div style={cardStyle}>
            <h3>Total Generations</h3>
            <h1>12,480</h1>
          </div>

          <div style={cardStyle}>
            <h3>Saved Projects</h3>
            <h1>348</h1>
          </div>

          <div style={cardStyle}>
            <h3>Pro Plan</h3>
            <h1>ACTIVE</h1>
          </div>

          <div style={cardStyle}>
            <h3>Affiliate Earnings</h3>
            <h1>₹24,500</h1>
          </div>
        </div>

        {/* AI GENERATOR */}

        <div style={sectionStyle}>
          <h2 style={{ marginBottom: "20px", fontSize: "34px" }}>
            AI Content Generator
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your business, product, or content idea..."
            style={{
              width: "100%",
              height: "180px",
              borderRadius: "18px",
              border: "1px solid #334155",
              background: "#020617",
              color: "white",
              padding: "20px",
              fontSize: "20px",
              marginBottom: "25px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            <button
              style={generatorBtn}
              onClick={() => generateAI("blog")}
            >
              AI Blog Generator
            </button>

            <button
              style={generatorBtn}
              onClick={() => generateAI("ads")}
            >
              AI Ad Generator
            </button>

            <button
              style={generatorBtn}
              onClick={() => generateAI("email")}
            >
              AI Email Generator
            </button>

            <button
              style={generatorBtn}
              onClick={() => generateAI("script")}
            >
              AI Script Generator
            </button>

            <button
              style={generatorBtn}
              onClick={() => generateAI("product")}
            >
              AI Product Description
            </button>

            <button
              style={generatorBtn}
              onClick={() => generateAI("landing")}
            >
              AI Landing Page Generator
            </button>
          </div>
        </div>

        {/* GENERATED CONTENT */}

        <div style={sectionStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ fontSize: "34px" }}>Generated Content</h2>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={smallBtn} onClick={copyContent}>
                Copy
              </button>

              <button style={smallBtn} onClick={downloadContent}>
                Download
              </button>
            </div>
          </div>

          <div
            style={{
              background: "#020617",
              borderRadius: "20px",
              padding: "30px",
              minHeight: "300px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            {loading
              ? "Generating AI Content..."
              : generatedContent || "Your AI generated content will appear here."}
          </div>
        </div>

        {/* HISTORY */}

        <div style={sectionStyle}>
          <h2 style={{ marginBottom: "25px", fontSize: "34px" }}>
            Recent AI History
          </h2>

          <div style={historyCard}>
            Facebook Ads for Fitness Product
          </div>

          <div style={historyCard}>
            AI Blog about Digital Marketing
          </div>

          <div style={historyCard}>
            Email Campaign for SaaS Product
          </div>

          <div style={historyCard}>
            Landing Page for AI Startup
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   STYLES
========================= */

const sidebarBtn = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "18px",
  textAlign: "left",
  cursor: "pointer",
};

const cardStyle = {
  background: "#081028",
  padding: "30px",
  borderRadius: "24px",
};

const sectionStyle = {
  background: "#081028",
  padding: "30px",
  borderRadius: "24px",
  marginBottom: "35px",
};

const generatorBtn = {
  background: "#2563eb",
  border: "none",
  color: "white",
  padding: "18px",
  borderRadius: "16px",
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: "bold",
};

const smallBtn = {
  background: "#2563eb",
  border: "none",
  color: "white",
  padding: "14px 24px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "bold",
};

const historyCard = {
  background: "#020617",
  padding: "20px",
  borderRadius: "16px",
  marginBottom: "15px",
};