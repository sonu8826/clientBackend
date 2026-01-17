const express = require("express");
const Lead = require("../models/Lead");
const auth = require("../middleware/auth");
const router = express.Router();

// Save form data
router.post("/", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});


// Fetch all leads (admin panel)
router.get("/", async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

module.exports = router;
