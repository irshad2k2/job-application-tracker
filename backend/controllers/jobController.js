const { where } = require("sequelize");
const { JobApplication } = require("../models");
const createJob = async (req, res) => {
  try {
    const {
      company,
      role,
      description,
      ctc,
      location,
      status,
      appliedDate,
      notes,
    } = req.body;

    const job = await JobApplication.create({
      userId: req.user.userId,
      company,
      role,
      description,
      ctc,
      location,
      status,
      appliedDate,
      notes,
    });
    return res.status(201).json(job);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const getJobStats = async (req, res) => {
  try {
    const jobs = await JobApplication.findAll({
      where: { userId: req.user.userId },
      attributes: ["status"],
    });

    const stats = {
      APPLIED: 0,
      INTERVIEW: 0,
      OFFER: 0,
      REJECTED: 0,
    };

    jobs.forEach((j) => {
      if (j.status === "APPLIED") stats.APPLIED += 1;
      if (j.status === "INTERVIEW") stats.INTERVIEW += 1;
      if (j.status === "OFFER") stats.OFFER += 1;
      if (j.status === "REJECTED") stats.REJECTED += 1;
    });

    return res.status(200).json(stats);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createJob,
  getJobStats,
};
