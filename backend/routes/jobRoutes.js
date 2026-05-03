const { createJob, getJobStats } = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/job", authMiddleware, createJob);

router.get("/job/stats", authMiddleware, getJobStats);

module.exports = router;
