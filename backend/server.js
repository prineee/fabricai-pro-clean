import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FabricAI Pro backend is live",
  });
});

app.get("/api/generate", (req, res) => {
  res.json({
    success: true,
    message: "AI endpoint is working. Use POST request.",
  });
});

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY missing in backend environment",
      });
    }

    const response = await fetch(
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
                  text: `
You are FabricAI Pro, an expert garment manufacturing ERP assistant.

Do NOT repeat the user's prompt.

Give a professional garment manufacturing analysis.

User request:
${prompt}

Return only useful analysis with:
1. Garment category assumption
2. Fabric consumption considerations
3. BOM items
4. Costing considerations
5. Cutting and marker efficiency suggestions
6. Production risks
7. Factory action steps
`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        error: data?.error?.message || "Gemini API failed",
      });
    }

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No AI response received";

    return res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return res.status(500).json({
      error: "AI generation failed",
      details: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`FabricAI Pro backend running on port ${PORT}`);
});