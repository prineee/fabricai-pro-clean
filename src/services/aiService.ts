export const generateAI = async (prompt: string) => {
  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
      }),
    });

    const text = await response.text();

    console.log("RAW RESPONSE:", text);

    try {
      const data = JSON.parse(text);

      return data.result || JSON.stringify(data);
    } catch {
      return text;
    }
  } catch (error) {
    console.error("CLIENT ERROR:", error);

    return "AI generation failed";
  }
};