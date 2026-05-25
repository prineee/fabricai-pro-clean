export async function generateAI(prompt: string) {
  try {
    const response = await fetch("http://localhost:5000/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    return data.result;
  } catch (error) {
    console.log(error);

    return "AI generation failed";
  }
}