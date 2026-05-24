import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { generateAI } from "../../services/aiService";

export default function EmailGenerator() {

  const [subject, setSubject] = useState("");
  const [tone, setTone] = useState("");
  const [result, setResult] = useState("");

  async function handleGenerate() {

    const aiResult = await generateAI(
      `Write professional email.
       Subject: ${subject}
       Tone: ${tone}`
    );

    setResult(aiResult);
  }

  return (
    <DashboardLayout>

      <h1>AI Email Generator</h1>

      <input
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <input
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      />

      <button onClick={handleGenerate}>
        Generate Email
      </button>

      <pre>{result}</pre>

    </DashboardLayout>
  );
}