import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import crypto from "crypto";
import { Groq } from "groq-sdk";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.get("/", (req, res) => {
  res.send("FabricAI Backend Running");
});





/*
========================
AI CHAT
========================
*/

app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
        model: "llama3-8b-8192",
      });

    res.json({
      reply:
        completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "AI request failed",
    });
  }
});





/*
========================
RAZORPAY CREATE ORDER
========================
*/

app.post(
  "/api/payment/create-order",
  async (req, res) => {
    try {
      const options = {
        amount: 499 * 100,
        currency: "INR",
        receipt:
          "receipt_" + Date.now(),
      };

      const order =
        await razorpay.orders.create(
          options
        );

      res.json(order);
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: "Order creation failed",
      });
    }
  }
);





/*
========================
VERIFY PAYMENT
========================
*/

app.post(
  "/api/payment/verify-payment",
  async (req, res) => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      } = req.body;

      const body =
        razorpay_order_id +
        "|" +
        razorpay_payment_id;

      const expectedSignature =
        crypto
          .createHmac(
            "sha256",
            process.env
              .RAZORPAY_KEY_SECRET
          )
          .update(body.toString())
          .digest("hex");

      if (
        expectedSignature ===
        razorpay_signature
      ) {
        return res.json({
          success: true,
        });
      }

      return res.status(400).json({
        success: false,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: "Verification failed",
      });
    }
  }
);





const PORT =
  process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});