import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

export default function BlogGenerator() {
  const [prompt, setPrompt] = useState("");

  const [result, setResult] = useState("");

  const generate = async () => {
    setResult("Generating AI blog...");
  };

  return (
    <DashboardLayout>
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        AI Blog Generator
      </h1>

      <textarea
        placeholder="Enter blog topic..."
        value={prompt}
        onChange={(e) =>
          setPrompt(e.target.value)
        }
        style={{
          width: "100%",
          height: "180px",
          borderRadius: "20px",
          padding: "20px",
          background: "#0f172a",
          color: "white",
          border: "1px solid #334155",
          marginBottom: "20px",
          fontSize: "18px",
        }}
      />

      <button
        onClick={generate}
        style={{
          padding: "16px 30px",
          borderRadius: "12px",
          border: "none",
          background: "#2563eb",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Generate Blog
      </button>

      <div
        style={{
          marginTop: "30px",
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
          minHeight: "250px",
        }}
      >
        {result}
      </div>
    </DashboardLayout>
  );
}