const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./lib/mongodb");
const leadRoutes = require("./routes/leads");
const adminRoutes = require("./routes/admin")

const app = express();

// ✅ THIS ALONE IS ENOUGH
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(express.json());

app.use("/admin", adminRoutes);

connectDB();
app.get("/test", (req, res) => {
    res.json({ ok: true });
  });

app.use("/api/leads", leadRoutes);

app.listen(5050, () => {
    console.log("✅ Server running on http://localhost:5050");
  });
  
