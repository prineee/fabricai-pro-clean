import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { analyzeGarment } from "../services/openai";

export default function Workspace() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];

    if (!selected) return;

    setFile(selected);
    setResult("");
  }

  async function processAI() {
    if (!file) {
      alert("Please upload a garment image first");
      return;
    }

    try {
      setLoading(true);
      setResult("");

      const imageUrl = URL.createObjectURL(file);
      const img = new Image();

      img.onload = async () => {
        const response = await analyzeGarment(
          file.name,
          img.width,
          img.height
        );

        setResult(response);
        setLoading(false);
      };

      img.onerror = async () => {
        const response = await analyzeGarment(file.name, 0, 0);

        setResult(response);
        setLoading(false);
      };

      img.src = imageUrl;
    } catch (error: any) {
      setResult("AI generation failed: " + error.message);
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div style={pageStyle}>
        <div style={leftCard}>
          <h1 style={titleStyle}>AI Garment Analysis</h1>

          <p style={textStyle}>
            Upload a garment image or techpack and FabricAI Pro will generate
            practical production, costing, BOM, cutting, and marker notes.
          </p>

          <label style={uploadBox}>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={handleFile}
              style={{ display: "none" }}
            />

            <div style={uploadIcon}>+</div>

            <h2 style={uploadTitle}>Choose File</h2>

            <p style={textStyle}>
              Image, sketch, PDF, or production file
            </p>
          </label>

          {file && (
            <div style={selectedBox}>
              <h3 style={{ margin: 0 }}>{file.name}</h3>
              <p style={{ color: "#475569" }}>
                {(file.size / 1024 / 1024).toFixed(2)} MB selected
              </p>

              <button onClick={processAI} style={buttonStyle}>
                {loading ? "Processing..." : "Process AI"}
              </button>
            </div>
          )}
        </div>

        <div style={rightCard}>
          <h1 style={titleStyle}>AI Response</h1>

          {!result && !loading && (
            <p style={textStyle}>
              Upload a garment file and click Process AI. The analysis will
              appear here.
            </p>
          )}

          {loading && (
            <p style={loadingStyle}>
              FabricAI is analyzing your garment file...
            </p>
          )}

          {result && (
            <pre style={resultStyle}>
              {result}
            </pre>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

const pageStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
  gap: "28px",
};

const leftCard = {
  background: "#ffffff",
  color: "#020617",
  borderRadius: "18px",
  padding: "30px",
  border: "1px solid #e2e8f0",
};

const rightCard = {
  background: "#ffffff",
  color: "#020617",
  borderRadius: "18px",
  padding: "30px",
  border: "1px solid #e2e8f0",
};

const titleStyle = {
  fontSize: "36px",
  marginBottom: "12px",
  color: "#020617",
};

const textStyle = {
  color: "#475569",
  fontSize: "17px",
  lineHeight: 1.7,
};

const uploadBox = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  minHeight: "280px",
  border: "2px dashed #cbd5e1",
  borderRadius: "18px",
  marginTop: "28px",
  cursor: "pointer",
  textAlign: "center" as const,
};

const uploadIcon = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  background: "#dcfce7",
  color: "#047857",
  fontSize: "48px",
  lineHeight: "64px",
  fontWeight: 700,
};

const uploadTitle = {
  fontSize: "30px",
  marginBottom: "4px",
};

const selectedBox = {
  marginTop: "22px",
  padding: "22px",
  borderRadius: "16px",
  background: "#ecfdf5",
  border: "1px solid #86efac",
};

const buttonStyle = {
  width: "100%",
  marginTop: "16px",
  padding: "16px",
  background: "#047857",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "18px",
  fontWeight: 700,
  cursor: "pointer",
};

const loadingStyle = {
  color: "#047857",
  fontSize: "18px",
  fontWeight: 700,
};

const resultStyle = {
  whiteSpace: "pre-wrap" as const,
  color: "#020617",
  background: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "14px",
  padding: "22px",
  lineHeight: 1.8,
  fontSize: "16px",
};