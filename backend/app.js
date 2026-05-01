const { sequelize } = require("./connectDB");

sequelize
  .sync({ alter: true })
  .then(() => console.log("DB synced"))
  .catch((err) => console.error(err));
