const { DOUBLE } = require("sequelize");
const db = require("../models");

const user = db.user;
describe("signUp test suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });
  test("Should add user", async () => {
    const user = await db.user.create({
      firstName: "john",
      lastName: "doe",
      email: "example2@gmail.com",
      password: "12345678",
    });
    expect(user.id).toBe(1);
  });
});
