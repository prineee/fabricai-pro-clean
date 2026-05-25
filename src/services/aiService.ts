export async function generateAI(prompt: string) {
  try {
    const response = await fetch(
      "https://fabricai-pro-backend.onrender.com/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    const data = await response.json();

    return data.result;
  } catch (error) {
    console.log("CLIENT ERROR:", error);

    return "AI generation failed";
  }
}