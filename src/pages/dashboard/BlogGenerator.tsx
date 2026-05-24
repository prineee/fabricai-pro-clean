import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function BlogGenerator() {

  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  async function handleGenerate() {

    const aiResult = await generateAI(
      `Write detailed blog about ${topic}`
    );

    setResult(aiResult);
  }

  return (
    <DashboardLayout>

      <h1>AI Blog Generator</h1>

      <textarea
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={handleGenerate}>
        Generate Blog
      </button>

      <pre>{result}</pre>

    </DashboardLayout>
  );
}