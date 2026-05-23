import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { generateAI } from "../../services/aiService";

export default function EmailGenerator() {

  const [prompt, setPrompt] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  async function generateEmail() {

    if (!prompt) return;

    try {

      setLoading(true);

      const output = await generateAI(
        prompt,
        "email"
      );

      setResult(output);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  return (
    <DashboardLayout>

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "30px",
        }}
      >
        AI Email Generator
      </h1>

      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
        }}
      >

        <textarea
          placeholder="Write email prompt"
          value={prompt}
          onChange={(e) =>
            setPrompt(e.target.value)
          }
          style={{
            width: "100%",
            minHeight: "180px",
            padding: "20px",
            borderRadius: "12px",
            background: "#ffffff",
            color: "#000000",
            border: "1px solid #334155",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          onClick={generateEmail}
          style={{
            marginTop: "20px",
            padding: "16px 30px",
            borderRadius: "12px",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          {
            loading
              ? "Generating..."
              : "Generate Email"
          }
        </button>

      </div>

      {
        result && (
          <div
            style={{
              marginTop: "30px",
              background: "#0f172a",
              padding: "35px",
              borderRadius: "20px",
              border: "1px solid #1e293b",
              whiteSpace: "pre-wrap",
              lineHeight: "1.9",
            }}
          >
            {result}
          </div>
        )
      }

    </DashboardLayout>
  );

}