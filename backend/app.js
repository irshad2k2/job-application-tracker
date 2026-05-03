const express = require("express");
const app = express();
const jobRoutes = require("./routes/jobRoutes");

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const authMiddleware = require("./middleware/authMiddleware");

app.use("/api", jobRoutes);

module.exports = app;
