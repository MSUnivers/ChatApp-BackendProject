const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const { mainErrorHandler } = require("./middleware/errorHandler");
/*Middlewares*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/** Routes */
app.get("/", (req, res, next) => {
  res.send("Test");
});
/*SETUP DATABASE*/
mongoose.connect(process.env.DB_URL);

mongoose.connection.on("error", (err) => {
  console.log("connection err: ", err.message);
});
mongoose.connection.once("open", () => {
  console.log("connection established successfully!");
});
/*Main Error Handler*/
app.use(mainErrorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running on port: " + port);
});
