import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function BlogGenerator() {

  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleGenerate() {

    if (!topic) return;

    setLoading(true);

    const aiResult = await generateAI(
      `Write a professional SEO optimized blog about ${topic}`
    );

    setResult(aiResult);

    setLoading(false);
  }

  return (
    <DashboardLayout>

      <h1 style={titleStyle}>
        AI Blog Generator
      </h1>

      <div style={cardStyle}>

        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter blog topic..."
          style={inputStyle}
        />

        <button
          onClick={handleGenerate}
          style={buttonStyle}
        >
          {loading ? "Generating..." : "Generate Blog"}
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
  height: "220px",
  padding: "20px",
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