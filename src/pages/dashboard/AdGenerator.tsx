import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { generateAI } from "../../services/aiService";

export default function AdGenerator() {

  const [product, setProduct] =
    useState("");

  const [audience, setAudience] =
    useState("");

  const [result, setResult] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function generateAd() {

    if (!product || !audience)
      return;

    try {

      setLoading(true);

      const prompt = `
Create a high converting advertisement.

Product:
${product}

Audience:
${audience}

Include:
- headline
- benefits
- CTA
`;

      const output =
        await generateAI(
          prompt,
          "advertisement"
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
        style={titleStyle}
      >
        AI Ad Generator
      </h1>

      <div
        style={cardStyle}
      >

        <input
          placeholder="Product Name"
          value={product}
          onChange={(e) =>
            setProduct(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <input
          placeholder="Target Audience"
          value={audience}
          onChange={(e) =>
            setAudience(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <button
          onClick={generateAd}
          style={buttonStyle}
        >
          {
            loading
              ? "Generating..."
              : "Generate Ad Copy"
          }
        </button>

      </div>

      {
        result && (

          <div
            style={resultStyle}
          >
            {result}
          </div>

        )
      }

    </DashboardLayout>
  );
}

const titleStyle = {
  fontSize: "48px",
  marginBottom: "30px",
};

const cardStyle = {
  background: "#0f172a",
  padding: "35px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
};

const resultStyle = {
  marginTop: "30px",
  background: "#0f172a",
  padding: "35px",
  borderRadius: "20px",
  border: "1px solid #1e293b",
  whiteSpace: "pre-wrap" as const,
  lineHeight: "1.9",
};

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #334155",
  backgroundColor: "#ffffff",
  color: "#000000",
  WebkitTextFillColor:
    "#000000",
  caretColor: "#000000",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "16px 30px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontSize: "18px",
};