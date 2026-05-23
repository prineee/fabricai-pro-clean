const API_URL =
  "https://api.groq.com/openai/v1/chat/completions";

export async function generateAI(
  prompt: string,
  type: string
) {
  try {
    const systemPrompt = `
You are an advanced AI assistant.

Generate high quality ${type} content.
Make it professional, engaging, modern and marketing optimized.
`;

    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
      },

      body: JSON.stringify({
        model: "llama3-70b-8192",

        messages: [
          {
            role: "system",
            content: systemPrompt,
          },

          {
            role: "user",
            content: prompt,
          },
        ],

        temperature: 0.7,

        max_tokens: 2000,
      }),
    });

    const data = await response.json();

    return (
      data?.choices?.[0]?.message?.content ||
      "No AI response"
    );
  } catch (error) {
    console.log(error);

    return "AI generation failed";
  }
}