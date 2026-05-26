export async function generateAI(prompt: string) {
  const baseUrl =
    import.meta.env.VITE_API_URL ||
    "https://fabricai-pro-backend.onrender.com";

  console.log("AI BACKEND URL:", baseUrl);

  let response: Response;

  try {
    const controller = new AbortController();
    // Render free tier can take up to 50s to cold-start; give it 60s
    const timeout = setTimeout(() => controller.abort(), 60000);

    response = await fetch(`${baseUrl}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
      signal: controller.signal,
    });

    clearTimeout(timeout);
  } catch (error: any) {
    if (error.name === "AbortError") {
      return (
        "AI generation failed: The backend is still waking up (Render free tier can take ~30 seconds). " +
        "Please wait a moment and try again."
      );
    }
    console.error("AI CLIENT ERROR:", error);
    return (
      "AI generation failed: Could not reach the backend. " +
      "If this is your first request, the server may be waking up — please wait ~30 seconds and retry."
    );
  }

  let data: any;

  try {
    data = await response.json();
  } catch {
    return "AI generation failed: Backend returned an unreadable response.";
  }

  console.log("AI SERVER DATA:", data);

  if (!response.ok) {
    return `AI generation failed: ${data.error || data.details || "Backend error"}`;
  }

  if (!data.result) {
    return "AI generation failed: Backend returned no result.";
  }

  if (data.result.trim() === prompt.trim()) {
    return "AI generation failed: Backend is only returning the prompt. Render backend code may still be old or mock.";
  }

  return data.result;
}
