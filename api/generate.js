export default async function handler(req, res) {

  // ALLOW POST ONLY
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt missing",
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization:
            `Bearer ${process.env.GROQ_API_KEY}`,
        },

        body: JSON.stringify({
          model: "llama3-70b-8192",

          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],

          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    return res.status(200).json({
      text:
        data?.choices?.[0]?.message?.content
        ||
        "No AI response",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      error: "AI generation failed",
    });
  }
}