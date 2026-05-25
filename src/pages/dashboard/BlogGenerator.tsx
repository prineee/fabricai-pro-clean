import { useState } from "react";
import { generateAI } from "../../services/aiService";

const BlogGenerator = () => {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateBlog = async () => {
    if (!topic) return;

    setLoading(true);

    const prompt = `Write a detailed professional blog about ${topic}`;

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
      <h1>AI Blog Generator</h1>

      <input
        type="text"
        placeholder="Enter blog topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />

      <button
        onClick={generateBlog}
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
        {loading ? "Generating..." : "Generate Blog"}
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

export default BlogGenerator;