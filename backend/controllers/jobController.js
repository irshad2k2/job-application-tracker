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

module.exports = {
  createJob,
};
