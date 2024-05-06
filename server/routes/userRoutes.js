const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);

router.route("/search").get(userController.searchUsers);

module.exports = router;
