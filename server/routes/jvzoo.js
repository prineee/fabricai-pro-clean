const express = require("express");

const router = express.Router();

router.post("/webhook", async (req, res) => {
  const data = req.body;

  console.log("JVZoo Sale:", data);

  res.sendStatus(200);
});

module.exports = router;