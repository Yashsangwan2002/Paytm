// backend/api/index.js
const express = require('express');
const userRouter = require("./user");
const router = express.Router();
const accountRouter= require("./accounts.js")
router.use("/user", userRouter);
router.use("/account",accountRouter);

module.exports = router;