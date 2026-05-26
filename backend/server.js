app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY missing in Render environment",
      });
    }

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a garment manufacturing expert. Do not repeat the prompt. Analyze and answer professionally:\n\n${prompt}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      return res.status(500).json({
        error: data?.error?.message || "Gemini API failed",
      });
    }

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No AI response received";

    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({
      error: "AI generation failed",
      details: error.message,
    });
  }
});