const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

const createNewUser = async () => {
  try {
    const newUser = await User.create({
      name: "Acubee Aly",
      email: "aa@gmail.com",
      age: 40,
      isActive: false,
      tags: ["intern"],
    });

    console.log(`User created successfully with id ${newUser.id}`);
    console.log(newUser);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const getAllUsers = async () => {
  try {
    console.log("List of the users");
    const allUsers = await User.find({});
    console.log(allUsers);
  } catch (error) {
    console.log(error);
  }
};

const listOfAllActiveUsers = async () => {
  try {
    console.log("List of all active users");
    const res = await User.find({ isActive: true });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async () => {
  try {
    console.log("Get user by id");
    const res = await User.findById("693c23e8effb6b52104d1847");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

const deleteUserById = async () => {
  try {
    const res = await User.findByIdAndDelete("693c23e8effb6b52104d1847");
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async () => {
  try {
    const res = await User.findByIdAndUpdate(
      "693c25cb657457b50ef6ddd6",
      {
        $set: { name: "Carthick Ghawrae", email: "cg@email.com" },
        $push: { tags: "backend" },
      },
      { new: true }
    );
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

// createNewUser();
getAllUsers();
// listOfAllActiveUsers();
// getUserById();
// deleteUserById();
// updateUser();
