const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
} = require("../controller/userController.js");

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/create-user", createUser);
router.put("/update-user/:id", updateUser);

module.exports = router;
