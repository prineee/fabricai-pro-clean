const express = require("express");

const router = express.Router();

router.post("/webhook", async (req, res) => {
  const data = req.body;

  console.log("WarriorPlus Sale:", data);

  res.sendStatus(200);
});

module.exports = router;