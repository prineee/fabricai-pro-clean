export default async function handler(req, res) {

  // ALLOW ONLY POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {

    const prompt = req.body.prompt;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt missing"
      });
    }

    // GEMINI API REQUEST
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log(data);

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({
      result: text || "No AI response"
    });

  } catch (error) {

    console.log("SERVER ERROR:", error);

    return res.status(500).json({
      error: "AI generation failed"
    });
  }
}