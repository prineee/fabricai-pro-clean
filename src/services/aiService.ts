export async function generateAI(prompt: string) {

  try {

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    const data = await response.json();

    return data.result || "No AI response";

  } catch (error) {

    console.log(error);

    return "AI generation failed";
  }
}