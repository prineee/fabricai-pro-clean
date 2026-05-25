export const generateAI = async (prompt: string): Promise<string> => {
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

    return JSON.stringify(data);
  } catch (error) {
    console.error(error);
    return "AI generation failed";
  }
};