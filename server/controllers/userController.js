const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const mongoose = require("mongoose");

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const { term } = req.query;

  if (term) {
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

    return res.json(users);
  }

  const users = await User.find().sort({ createdAt: -1 }).select("-password");

  if (!users?.length) {
    return res.status(400).json({ error: "No users found." });
  }

  res.json(users);
});

module.exports = {
  getAllUsers,
};
