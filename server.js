const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
var server = require("http").createServer(app);
const io = require("socket.io")(server);
var path = require("path");

// Define middleware here
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/", (req, res) => {
  res.send("hello world");
});

  // io.on("connection", socket => {
  //   socket.on("room", room => {
  //     socket.join(room);
  //     socket.in("abc").broadcast.emit("messages", "abc");
  //   })
  // });



io.on("connection", socket => {
  console.log("New client connected");
  console.log(socket.handshake);
  
  socket.on("username", (username) => {
    
    socket.username = username;
    socket.broadcast.emit("username", '🔵' + socket.username + ' joined the chat..');
  });
  
  socket.on("message", body => {
    console.log(body);
    socket.broadcast.emit("message", {
      body: body.body,
      from: body.from,
      time: body.time
    });
  });
  
    socket.on("room", (room) => {
      socket.join(room);
      socket.in("abc").emit("messages", "abc");
    })
  
  socket.on("disconnect", (username) => socket.username ? socket.broadcast.emit("username", '🔴' + socket.username + ' left the chat..') : "");
});
// io.sockets.in("abc").emit('messages', "waddup peeps");

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
server.listen(port, function () {
  console.log("listening on port:", port);
});
