export async function generateAI(prompt: string) {
  try {
    const baseUrl =
      import.meta.env.VITE_API_URL ||
      "https://fabricai-pro-backend.onrender.com";

    console.log("AI BACKEND URL:", baseUrl);

    const response = await fetch(`${baseUrl}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    console.log("AI SERVER DATA:", data);

    if (!response.ok) {
      return `AI generation failed: ${data.error || data.details || "Backend error"}`;
    }

    if (!data.result) {
      return "AI generation failed: Backend returned no result.";
    }

    if (data.result.trim() === prompt.trim()) {
      return "AI generation failed: Backend is only returning the prompt. Render backend code is still old or mock.";
    }

    return data.result;
  } catch (error: any) {
    console.error("AI CLIENT ERROR:", error);
    return `AI generation failed: ${error.message}`;
  }
}