const API_KEY =
  import.meta.env
    .VITE_GROQ_API_KEY;

export async function generateAI(
  prompt: string,
  type: string
) {

  try {

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
          }),
        }
      );

    const data =
      await response.json();

    console.log(data);

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