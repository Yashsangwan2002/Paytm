const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/v1", rootRouter);

console.log("server is running!!");
app.listen(3000);