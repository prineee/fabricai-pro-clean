app.post("/api/payment/create-order", async (req, res) => {

  try {

    const { amount, plan } = req.body;

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: plan,
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (error) {

    console.log("PAYMENT ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});