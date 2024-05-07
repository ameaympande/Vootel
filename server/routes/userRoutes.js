const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/").get(userController.getAllUsers);
router.get("/search", userController.getAllUsers);

module.exports = router;
