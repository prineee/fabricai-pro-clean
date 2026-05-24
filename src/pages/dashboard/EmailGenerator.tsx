import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function EmailGenerator() {

  const [subject, setSubject] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleGenerate() {

    setLoading(true);

    const aiResult = await generateAI(
      `Write a professional email.
       Subject: ${subject}
       Tone: ${tone}`
    );

    setResult(aiResult);

    setLoading(false);
  }

  return (
    <DashboardLayout>

      <h1 style={titleStyle}>
        AI Email Generator
      </h1>

      <div style={cardStyle}>

        <input
          type="text"
          placeholder="Email subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleGenerate}
          style={buttonStyle}
        >
          {loading ? "Generating..." : "Generate Email"}
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