import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (_req, res) => {
  res.send("FabricAI Pro Backend is Running");
});

app.get("/api/generate", (_req, res) => {
  res.json({
    success: true,
    message: "AI API is working with Groq route enabled",
  });
});

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required",
      });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "GROQ_API_KEY is missing in Render Environment",
      });
    }

    const finalPrompt = `
You are FabricAI Pro, an expert garment manufacturing assistant.

Do not repeat the user's prompt.

Analyze the garment request and return practical factory guidance.

User request:
${prompt}

Return the answer in this format:

1. Garment Category Assumption
2. Fabric Consumption Considerations
3. BOM Items
4. Costing Considerations
5. Cutting and Marker Efficiency Suggestions
6. Production Risks
7. Factory Action Steps
`;

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          max_tokens: 1500,
          messages: [
            {
              role: "system",
              content:
                "You are FabricAI Pro, a practical garment manufacturing ERP assistant.",
            },
            {
              role: "user",
              content: finalPrompt,
            },
          ],
          temperature: 0.4,
        }),
      }
    );

    const groqData = await groqResponse.json();

    if (!groqResponse.ok) {
      return res.status(500).json({
        success: false,
        error:
          groqData?.error?.message ||
          "Groq API request failed",
      });
    }

    const result =
      groqData?.choices?.[0]?.message?.content ||
      "No Groq response received";

    return res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Groq backend error:", error);

    return res.status(500).json({
      success: false,
      error: "AI generation failed",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    `GROQ_API_KEY: ${process.env.GROQ_API_KEY ? "SET ✓" : "MISSING ✗ — AI generation will fail"}`
  );
});