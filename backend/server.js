import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FabricAI Pro Backend is Running");
});

app.get("/api/generate", (req, res) => {
  res.json({
    success: true,
    message: "AI API is working",
  });
});

app.post("/api/generate", (req, res) => {
  const { prompt } = req.body;

  res.json({
    success: true,
    result:
      "Backend is connected successfully. Gemini will be enabled after server stability is confirmed. Prompt received: " +
      prompt,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});