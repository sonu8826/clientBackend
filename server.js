const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./lib/mongodb");
const leadRoutes = require("./routes/leads");
const adminRoutes = require("./routes/admin");

const app = express();

// ✅ CORS MUST BE FIRST
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://godigitally.netlify.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json());

connectDB();

app.use("/admin", adminRoutes);
app.use("/api/leads", leadRoutes);

app.get("/test", (req, res) => {
  res.json({ ok: true });
});

app.listen(5050, () => {
  console.log("✅ Server running on port 5050");
});
