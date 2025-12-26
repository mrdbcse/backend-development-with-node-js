const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // check user exists
    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExistingUser) {
      console.log("User exists");
      res.status(400).json({
        status: false,
        message:
          "User already exists with same email or same username. Please try with a different email or username",
        data: null,
      });
    }

    // hash password for user registraion

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "USER",
    });

    await newUser.save();
    if (newUser) {
      res.status(201).json({
        status: true,
        message: "User rgistered successfully!",
        data: newUser,
      });
    } else {
      res.status(400).json({
        status: true,
        message: "Unable to register user! Please try again.",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Some error occured! Please try again",
      data: null,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      res
        .status(400)
        .json({ success: false, message: "User does not exists", data: null });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      res
        .status(400)
        .json({ success: false, message: "Invalid credentials", data: null });
    }

    const accessToken = jwt.sign();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: "Some problem occured! Please try again",
      data: null,
    });
  }
};

module.exports = { registerUser, loginUser };
