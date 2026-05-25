import { useState } from "react";
import { generateAI } from "../../services/aiService";

const AdGenerator = () => {
  const [product, setProduct] = useState("");
  const [audience, setAudience] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAd = async () => {
    if (!product || !audience) return;

    setLoading(true);

    const prompt = `Write a high converting advertisement for ${product} targeting ${audience}`;

    const aiResult = await generateAI(prompt);

    setResult(String(aiResult));

    setLoading(false);
  };

  return (
    <div
      style={{
        padding: "30px",
        color: "white",
      }}
    >
      <h1>AI Ad Generator</h1>

      <input
        type="text"
        placeholder="Enter product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />

      <input
        type="text"
        placeholder="Target audience"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />

      <button
        onClick={generateAd}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Ad"}
      </button>

      <div
        style={{
          marginTop: "30px",
          whiteSpace: "pre-wrap",
          lineHeight: "1.8",
        }}
      >
        {result}
      </div>
    </div>
  );
};

export default AdGenerator;