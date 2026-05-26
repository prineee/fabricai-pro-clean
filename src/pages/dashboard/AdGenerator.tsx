import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";
import { useAuth } from "../../context/AuthContext";
import { checkAndDeductCredit } from "../../utils/creditSystem";

const DOCUMENT_TYPES = [
  "Buyer Quotation",
  "Export Offer Sheet",
  "Price List",
  "Sales Pitch",
];

export default function AdGenerator() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [docType, setDocType] = useState("Buyer Quotation");
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!product.trim() || !audience.trim()) return;
    if (!user) return;
    setLoading(true);
    const creditResult = await checkAndDeductCredit(user.uid);
    if (!creditResult.allowed) {
      setResult(creditResult.reason);
      setLoading(false);
      return;
    }
    const prompt = `Create a ${docType} for the product: "${product}", targeting: "${audience}". Make it professional and suitable for garment manufacturing / export.`;
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
        💰 AI Quotation Generator
      </h1>
      <p style={{ color: "#fef08a", fontSize: "16px", marginBottom: "32px" }}>
        Generate trade documents and quotations instantly
      </p>

      <div style={{ maxWidth: "820px" }}>
        <label style={labelStyle}>Document Type</label>
        <select
          value={docType}
          onChange={(e) => setDocType(e.target.value)}
          style={inputStyle}
        >
          {DOCUMENT_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>

        <label style={labelStyle}>Product / Garment</label>
        <input
          type="text"
          placeholder="e.g. 100% Cotton Round-Neck T-Shirt, 180 GSM"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Target Buyer / Market</label>
        <input
          type="text"
          placeholder="e.g. UK fashion retailer, MOQ 500 pcs"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
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
          {loading ? "Generating..." : `Generate ${docType}`}
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
