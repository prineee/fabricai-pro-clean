import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.send("FabricAI Pro Backend is Running");
});

app.get("/api/generate", (req, res) => {
  res.json({
    success: true,
    message: "AI API is working with Gemini route enabled",
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

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        success: false,
        error: "GEMINI_API_KEY is missing in Render Environment",
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

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: finalPrompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const geminiData = await geminiResponse.json();

    if (!geminiResponse.ok) {
      return res.status(500).json({
        success: false,
        error:
          geminiData?.error?.message ||
          "Gemini API request failed",
      });
    }

    const result =
      geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No Gemini response received";

    return res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("Gemini backend error:", error);

    return res.status(500).json({
      success: false,
      error: "AI generation failed",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});