import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function EmailGenerator() {

  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateEmail = async () => {

    if (!topic) {
      alert("Please enter email topic");
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
          AI Email Generator
        </h1>

        <div style={cardStyle}>

          <textarea
            placeholder="Enter email topic..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            style={textareaStyle}
          />

          <button
            onClick={generateEmail}
            style={buttonStyle}
          >
            {loading ? "Generating..." : "Generate Email"}
          </button>

        </div>

        <div style={outputCard}>

          <h2 style={outputTitle}>
            AI Response
          </h2>

          <p style={outputText}>
            {output || "Generated email will appear here"}
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

const textareaStyle = {
  width: "100%",
  height: "220px",
  padding: "18px",
  borderRadius: "12px",
  border: "1px solid #334155",
  background: "#ffffff",
  color: "#000000",
  fontSize: "16px",
  marginBottom: "20px",
  resize: "none" as const,
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