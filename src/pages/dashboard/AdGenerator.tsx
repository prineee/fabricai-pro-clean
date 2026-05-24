import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function AdGenerator() {

  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState("");

  async function handleGenerate() {

    const aiResult = await generateAI(
      `Create ad copy.
       Product: ${product}
       Audience: ${audience}`
    );

    setResult(aiResult);
  }

  return (
    <DashboardLayout>

      <h1>AI Ad Generator</h1>

      <input
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />

      <input
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      />

      <button onClick={handleGenerate}>
        Generate Ad
      </button>

      <pre>{result}</pre>

    </DashboardLayout>
  );
}