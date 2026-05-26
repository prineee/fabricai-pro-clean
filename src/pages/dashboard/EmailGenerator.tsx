import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";
import { useAuth } from "../../context/AuthContext";
import { checkAndDeductCredit } from "../../utils/creditSystem";

const EMAIL_TYPES = ["Professional", "Formal", "Friendly", "Urgent", "Follow-up"];

export default function EmailGenerator() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [topic, setTopic] = useState("");
  const [emailType, setEmailType] = useState("Professional");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    if (!user) return;
    setLoading(true);
    const creditResult = await checkAndDeductCredit(user.uid);
    if (!creditResult.allowed) {
      setResult(creditResult.reason);
      setLoading(false);
      return;
    }
    const prompt = `Write a ${emailType} email about: ${topic}`;
    const aiResult = await generateAI(prompt);
    setResult(String(aiResult));
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 18px",
    borderRadius: "12px",
    background: "#1e293b",
    border: "1px solid #334155",
    color: "#ffffff",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    marginBottom: "16px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#fef08a",
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "8px",
  };

  return (
    <DashboardLayout>
      {/* Back button */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          background: "transparent",
          border: "1px solid #334155",
          color: "#94a3b8",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "15px",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        ← Back to Dashboard
      </button>

      <h1 style={{ fontSize: "40px", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
        ✉️ AI Email Generator
      </h1>
      <p style={{ color: "#fef08a", fontSize: "16px", marginBottom: "32px" }}>
        Draft professional emails in seconds
      </p>

      <div style={{ maxWidth: "820px" }}>
        <label style={labelStyle}>Email Type</label>
        <select
          value={emailType}
          onChange={(e) => setEmailType(e.target.value)}
          style={inputStyle}
        >
          {EMAIL_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>

        <label style={labelStyle}>Email Topic / Context</label>
        <input
          type="text"
          placeholder="e.g. Follow up on bulk fabric order with supplier"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
          style={inputStyle}
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            padding: "14px 32px",
            background: loading ? "#1e40af" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate Email"}
        </button>

        {result && (
          <div style={{ marginTop: "32px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <h2 style={{ color: "#ffffff", fontSize: "20px", fontWeight: 700 }}>Result</h2>
              <button
                onClick={handleCopy}
                style={{
                  padding: "10px 22px",
                  background: copied ? "#065f46" : "#0f172a",
                  border: "1px solid #334155",
                  color: copied ? "#34d399" : "#94a3b8",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {copied ? "✅ Copied!" : "📋 Copy"}
              </button>
            </div>
            <div
              style={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: "16px",
                padding: "28px",
                color: "#e2e8f0",
                fontSize: "15px",
                lineHeight: "1.85",
                whiteSpace: "pre-wrap",
              }}
            >
              {result}
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
