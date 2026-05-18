import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

/* -------------------------- */
/* RAZORPAY INSTANCE */
/* -------------------------- */

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* -------------------------- */
/* HOME ROUTE */
/* -------------------------- */

app.get("/", (req, res) => {
  res.send("FabricAI Backend Running");
});

/* -------------------------- */
/* PAYMENT ROUTE */
/* -------------------------- */

app.post("/api/payment/create-order", async (req, res) => {

  try {

    console.log("PAYMENT REQUEST RECEIVED");

    const { amount, plan } = req.body;

    console.log("Amount:", amount);
    console.log("Plan:", plan);

    const options = {
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    console.log("ORDER CREATED:", order);

    res.status(200).json(order);

  } catch (error) {

    console.log("RAZORPAY ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* -------------------------- */
/* SERVER */
/* -------------------------- */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});