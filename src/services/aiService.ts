const API_KEY =
  import.meta.env
    .VITE_GROQ_API_KEY;

export async function generateAI(
  prompt: string,
  type: string
) {

  try {

    if (!API_KEY) {

      console.error(
        "Missing Groq API Key"
      );

      return "Groq API key missing";
    }

    const response =
      await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${API_KEY}`,
          },

          body: JSON.stringify({

            model:
              "llama3-70b-8192",

            messages: [

              {
                role: "system",

                content:
                  `You are a professional ${type} AI assistant.`,
              },

              {
                role: "user",

                content: prompt,
              },
            ],

            temperature: 0.7,
            max_tokens: 1200,
          }),
        }
      );

    const data =
      await response.json();

    console.log(
      "GROQ RESPONSE:",
      data
    );

    if (data.error) {

      return (
        "Groq Error: " +
        data.error.message
      );
    }

    return (
      data?.choices?.[0]
        ?.message?.content ||

      "No AI response"
    );

  } catch (error) {

    console.log(error);

    return "AI generation failed";
  }
}