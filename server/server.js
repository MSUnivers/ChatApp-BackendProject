const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const http = require("http");
const socket = require("socket.io")
const router = require("../server/routes/router");
const cors = require('cors')
const { corsOptions, ioCors } = require("../server/middleware/security");
const { getUser, getUserInRoom, addUser, removeUser } = require('./users')
const { mainErrorHandler } = require("../server/middleware/errorHandler");
/*Middlewares*/

app.use(cors(corsOptions));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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


/**Setup Socket io */
const server = http.createServer(app)
const io = socket(server);

io.on('connection', (socket) => {
  //admin generated message
  socket.on('join', ({ name, room }) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) socket.emit('error')
   
    //send a message for every one
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
    //send a message for every one besides the person he joined
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined` })
    socket.join(user.room);

  });
  socket.on('sendMessage', (message, cb) => {
    const user = getUser(socket.id)
    io.to(user.room).emit('message', { user: user.name, text: message });
    
    cb();
  })
  console.log('we have a new connection');
  socket.on('disconnected', () => {
    console.log('user had left');
  })
}
)

/**setup routes */

app.use(router)
/*Main Error Handler*/

app.use(mainErrorHandler);



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("server is running on port: " + port);
});
