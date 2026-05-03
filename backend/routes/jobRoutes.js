const {
  createJob,
  getJobStats,
  getAllJobs,
  deleteJob,
} = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/job", authMiddleware, createJob);

router.get("/job/stats", authMiddleware, getJobStats);

router.get("/job", authMiddleware, getAllJobs);

router.delete("/job/:id", authMiddleware, deleteJob);

module.exports = router;
