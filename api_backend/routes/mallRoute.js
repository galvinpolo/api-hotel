const express = require("express");
const {
  getMalls,
  getMallById,
  createMall,
} = require("../controller/mallController.js");

const router = express.Router();

router.get("/malls", getMalls);
router.get("/malls/:id", getMallById);
router.post("/create-mall", createMall);

module.exports = router;
