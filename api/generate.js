export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { prompt } = req.body;

    // Validate prompt
    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    // Call GROQ API
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      }
    );

    const data = await response.json();

    console.log("GROQ RESPONSE:", data);

    // Handle API errors
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Groq API failed",
      });
    }

    // Return AI result
    return res.status(200).json({
      result:
        data?.choices?.[0]?.message?.content ||
        "No AI response",
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

    return res.status(500).json({
      error: "AI generation failed",
    });
  }
}