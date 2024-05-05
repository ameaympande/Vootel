const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password is required." });
  }
  const user = await User.findOne({ email }).lean().exec();

  if (!user) {
    return res
      .status(404)
      .json({ error: "User not found, please create a new account." });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });

  res.json({
    message: "Login success",
    token: token,
    userId: user._id,
    name: user.name,
  });
});

const signUp = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and Password is required." });
  }

  try {
    const existingUser = await User.findOne({ email }).lean().exec();

    if (existingUser) {
      return res.status(400).json({ error: `${email} already exist.` });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, name });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error occurred during sign-up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = {
  login,
  signUp,
};
