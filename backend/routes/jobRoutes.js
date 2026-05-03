const { createJob } = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/job", authMiddleware, createJob);

module.exports = router;
