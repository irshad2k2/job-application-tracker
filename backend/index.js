const { connectDB } = require("./connectDB");
const UserModel = require("./models/UserModel");

const createUser = async () => {
  try {
    await connectDB();
    const user = await UserModel.createUser({
      firstName: "john",
      lastName: "doe",
      email: "example2@gmail.com",
      password: "12345678",
    });
    console.log("Created user with id:", user.id);
  } catch (error) {
    console.error(error);
  }
};

const countUser = async () => {
  try {
    await connectDB();
    const count = await UserModel.count();
    console.log("Total number of users:", count);
  } catch (error) {
    console.error(error);
  }
};

const getAllUsers = async () => {
  try {
    await connectDB();
    const users = await UserModel.findAll();
    console.log("All users:", users);
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  // await createUser()
  // await countUser()
  await getAllUsers();
})();
