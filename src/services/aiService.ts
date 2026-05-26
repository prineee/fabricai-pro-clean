export async function generateAI(prompt: string) {
  try {
    const baseUrl =
      import.meta.env.VITE_API_URL ||
      "https://fabricai-pro-backend.onrender.com";

    const response = await fetch(`${baseUrl}/api/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const text = await response.text();

    let data: any = {};

    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(text || "Server returned invalid response");
    }

    if (!response.ok) {
      throw new Error(data.error || data.details || "AI request failed");
    }

    return data.result || "No AI response received";
  } catch (error: any) {
    console.error("AI CLIENT ERROR:", error);

    return `AI generation failed: ${
      error?.message || "Please check backend API and AI key"
    }`;
  }
}