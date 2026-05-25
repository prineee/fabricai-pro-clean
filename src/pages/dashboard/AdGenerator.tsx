import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function AdGenerator() {

  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAd = async () => {

    if (!product || !audience) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const result = await generateAI(prompt);

    setOutput(result);

    setLoading(false);
  };

  return (
    <DashboardLayout>

      <div style={containerStyle}>

        <h1 style={titleStyle}>
          AI Ad Generator
        </h1>

        <div style={cardStyle}>

          <input
            type="text"
            placeholder="Enter product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Target audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={generateAd}
            style={buttonStyle}
          >
            {loading ? "Generating..." : "Generate Ad Copy"}
          </button>

        </div>

        <div style={outputCard}>

          <h2 style={outputTitle}>
            AI Response
          </h2>

          <p style={outputText}>
            {output || "Generated advertisement will appear here"}
          </p>

        </div>

      </div>

    </DashboardLayout>
  );
}

const containerStyle = {
  padding: "20px",
};

const titleStyle = {
  fontSize: "42px",
  color: "white",
  marginBottom: "30px",
};

const cardStyle = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
  marginBottom: "25px",
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#ffffff",
  color: "#000000",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "14px 28px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "16px",
  cursor: "pointer",
};

const outputCard = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
};

const outputTitle = {
  color: "white",
  marginBottom: "20px",
};

const outputText = {
  color: "#e2e8f0",
  whiteSpace: "pre-wrap" as const,
  lineHeight: "1.8",
};