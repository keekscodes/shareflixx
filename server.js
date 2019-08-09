const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
var server = require("http").createServer(app);
const io = require("socket.io")(server);

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

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

io.on("connection", socket => {
  console.log("New client connected");

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
    })
  })
  
  socket.on("disconnect", (username) => socket.username ? socket.broadcast.emit("username", '🔴' + socket.username + ' left the chat..') : "");
});

server.listen(port, function () {
  console.log("listening on port:", port);
});
