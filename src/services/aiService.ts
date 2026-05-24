export async function generateAI(
  prompt: string,
  type: string
) {

  try {

    const response =
      await fetch(
        "/api/generate",
        {
          method: "POST",

          headers: {

            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            prompt,
            type,
          }),
        }
      );

    const data =
      await response.json();

    return data.output;

  } catch (error) {

    console.log(error);

    return "AI generation failed";
  }
}