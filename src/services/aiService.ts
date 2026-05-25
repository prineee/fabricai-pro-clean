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

    if (!response.ok) {
      return data.error || "AI request failed";
    }

    return data.result || "No AI response";
  } catch (error) {
    console.error("CLIENT ERROR:", error);
    return "AI generation failed";
  }
};