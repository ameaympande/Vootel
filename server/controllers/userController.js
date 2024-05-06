const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const mongoose = require("mongoose");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 }).select("-password");

  if (!users?.length) {
    return res.status(400).json({ error: "No users found." });
  }

  res.json(users);
});

// @desc Search users by name or email
// @route GET /users/search?term=:term
// @access Private
const searchUsers = asyncHandler(async (req, res) => {
  const { term } = req.query;

  if (!term) {
    return res.status(400).json({ error: "Search term is required." });
  }

  const users = await User.find({
    $or: [
      { name: { $regex: term, $options: "i" } },
      { email: { $regex: term, $options: "i" } },
    ],
  })
    .sort({ createdAt: -1 })
    .select("-password");

  if (!users?.length) {
    return res
      .status(404)
      .json({ error: "No users found matching the search term." });
  }

  res.json(users);
});

module.exports = {
  getAllUsers,
  searchUsers,
};
