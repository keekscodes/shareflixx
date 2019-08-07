const express = require("express");
const app = express();
var server = require("http").createServer(app);
const io = require("socket.io")(server);
const axios = require("axios");

// const socket = new WebSocket('ws:localhost:8080');

// Define middleware here
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var initialMessage = [{
  name: "Bot",
  message: "Please type below to talk to your friends in the chat"
}];

// Define API routes here
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/messages", (req, res) => {
  res.json(initialMessage);
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  initialMessage.push(req.body);
  res.json(initialMessage);
  res.status(200).end();

});
io.sockets.on("connection", function (socket) {
  socket.on("username", function (username) {
    socket.username = username;
    io.emit("is_online", '🔵 <i>' + socket.username + ' join the chat..</i>');
  });

  socket.on("disconnect", function (username) {
    io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
  });

  socket.on('chat_message', function (message) {
    io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
  });
});

server.listen(8080, function () {
  console.log("listening on port 8080");
});
