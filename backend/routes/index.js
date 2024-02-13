// backend/api/index.js
const express = require('express');
const userRouter = require("./user");
const router = express.Router();
const accoutRouter= require("./accounts.js")
router.use("/user", userRouter);
router.use("/account",accoutRouter);

module.exports = router;