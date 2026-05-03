const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const authMiddleware = require("./middleware/authMiddleware");

app.get("/home", authMiddleware, (req, res) => {
  res.send(`Welcome User ${req.user.email}`);
});

module.exports = app;
