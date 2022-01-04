const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoute = require('./routes/usersRoute');

const { mainErrorHandler } = require("./middleware/errorHandler");


/** MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', usersRoute);



/** ROUTES */
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


/** SETUP DATABASE */
mongoose.connect(process.env.DB_URL);

mongoose.connection.on("error", (err) => {
  console.log("connection err: ", err.message);
});
mongoose.connection.once("open", () => {
  console.log("connection established successfully!");
});


/** MAIN ERROR HANDLER */
app.use(mainErrorHandler);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running on port: " + port);
});
