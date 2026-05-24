import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function AdGenerator() {

  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleGenerate() {

    setLoading(true);

    const aiResult = await generateAI(
      `Create high converting advertisement copy.
       Product: ${product}
       Audience: ${audience}`
    );

    setResult(aiResult);

    setLoading(false);
  }

  return (
    <DashboardLayout>

      <h1 style={titleStyle}>
        AI Ad Generator
      </h1>

      <div style={cardStyle}>

        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Target Audience"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleGenerate}
          style={buttonStyle}
        >
          {loading ? "Generating..." : "Generate Ad Copy"}
        </button>

      </div>

      <div style={resultCard}>
        <pre style={resultStyle}>
          {result || "No AI response"}
        </pre>
      </div>

    </DashboardLayout>
  );
}

const titleStyle = {
  fontSize: "52px",
  marginBottom: "30px",
};

const cardStyle = {
  background: "#0f172a",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
};

const inputStyle = {
  width: "100%",
  padding: "18px",
  background: "#ffffff",
  color: "#000000",
  border: "1px solid #334155",
  borderRadius: "12px",
  fontSize: "16px",
  marginBottom: "20px",
  outline: "none",
};

const buttonStyle = {
  padding: "16px 28px",
  background: "#2563eb",
  color: "#ffffff",
  border: "none",
  borderRadius: "12px",
  fontSize: "16px",
  cursor: "pointer",
};

const resultCard = {
  marginTop: "30px",
  background: "#0f172a",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
};

const resultStyle = {
  whiteSpace: "pre-wrap" as const,
  color: "#ffffff",
  lineHeight: "1.8",
};