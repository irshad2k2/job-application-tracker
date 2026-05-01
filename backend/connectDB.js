const { Sequelize } = require("sequelize");

const username = "postgres";
const password = "jat";
const host = "localhost";
const port = 5432;
const database = "jat";

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connectDB, sequelize };
