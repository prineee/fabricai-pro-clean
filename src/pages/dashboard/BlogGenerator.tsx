import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import { generateAI } from "../../services/aiService";

export default function BlogGenerator() {

  const [topic, setTopic] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);

  async function generateBlog() {

    if (!topic) return;

    try {

      setLoading(true);

      const output = await generateAI(
        topic,
        "blog"
      );

      setResult(output);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }

  function copyText() {

    navigator.clipboard.writeText(result);

    alert("Copied");

  }

  function downloadTxt() {

    const blob = new Blob(
      [result],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "fabricai-blog.txt";

    a.click();

  }

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

      <div
        style={{
          background: "#0f172a",
          padding: "30px",
          borderRadius: "20px",
          border: "1px solid #1e293b",
        }}
      >

        <textarea
          placeholder="Enter blog topic"
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
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
          onClick={generateBlog}
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
              : "Generate Blog"
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

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "25px",
              }}
            >

              <button
                onClick={copyText}
                style={toolButton}
              >
                Copy
              </button>

              <button
                onClick={downloadTxt}
                style={toolButton}
              >
                Download TXT
              </button>

            </div>

            {result}

          </div>
        )
      }

    </DashboardLayout>
  );

}

const toolButton = {
  padding: "12px 20px",
  border: "none",
  borderRadius: "10px",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
};