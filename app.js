const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/Ares";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connect....");
});

app.use(express.json())

const alienRouter = require("./routers/aliens");
app.use('/aliens', alienRouter)

app.listen(4201, () => {
  console.log("server starting...");
});
