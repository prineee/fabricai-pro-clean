const express = require("express");
const Stripe = require("stripe");

const router = express.Router();

const stripe = Stripe(process.env.STRIPE_SECRET);

router.post("/checkout", async (req, res) => {
  try {
    const { amount } = req.body;

    const session =
      await stripe.checkout.sessions.create({
        payment_method_types: ["card"],

        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "FabricAI Pro",
              },
              unit_amount: amount * 100,
            },

            quantity: 1,
          },
        ],

        mode: "payment",

        success_url:
          "https://fabricaipro.com/success",

        cancel_url:
          "https://fabricaipro.com/cancel",
      });

    res.json({
      url: session.url,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;