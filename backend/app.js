const express = require("express");
const { user } = require("./models");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  console.log("Creating a user", req.body);
  try {
    const User = await user.addUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    return res.json(User);
  } catch (error) {
    console.log(error);
    return res.status(422).json(error);
  }
});

module.exports = app;
