import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

/* =====================================================
   PORT
===================================================== */

const PORT = process.env.PORT || 10000;

/* =====================================================
   RAZORPAY
===================================================== */

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* =====================================================
   GROQ AI
===================================================== */

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* =====================================================
   HEALTH CHECK
===================================================== */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FabricAI Backend Running Successfully 🚀",
  });
});

/* =====================================================
   CREATE PAYMENT ORDER
===================================================== */

app.post("/create-order", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const options = {
      amount: amount * 100,
      currency: currency || "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      order,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* =====================================================
   AI GENERATOR
===================================================== */

app.post("/generate-ai", async (req, res) => {
  try {
    const { prompt, type } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt missing",
      });
    }

    let systemPrompt = "";

    switch (type) {
      case "blog":
        systemPrompt =
          "You are an expert AI blog writer.";
        break;

      case "ads":
        systemPrompt =
          "You are an expert Facebook and Google ads copywriter.";
        break;

      case "email":
        systemPrompt =
          "You are an expert email marketing copywriter.";
        break;

      case "script":
        systemPrompt =
          "You are an expert video sales letter script writer.";
        break;

      case "product":
        systemPrompt =
          "You are an expert ecommerce product description writer.";
        break;

      case "landing":
        systemPrompt =
          "You are an expert landing page copywriter.";
        break;

      default:
        systemPrompt =
          "You are a professional AI marketing assistant.";
    }

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: prompt,
          },
        ],

        model: "llama-3.3-70b-versatile",

        temperature: 0.7,

        max_tokens: 2000,
      });

    const text =
      completion.choices?.[0]?.message?.content ||
      "No AI response generated";

    res.json({
      success: true,
      result: text,
    });
  } catch (error) {
    console.log("AI ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* =====================================================
   START SERVER
===================================================== */

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});