const express = require("express");
const port = process.env.PORT || 8080;
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


app.post("/messages", (req, res) => {
  console.log(req.body);
  const {name, message} = req.body;

  const messages = {
    name,
    message
  }
  io.emit("message", messages)
  res.json(messages);
  res.status(200).end();

});
io.on("connection", socket => {
  console.log("New client connected");

  socket.on("username", (username) => {
    return console.log("Connected as username:", username)
  });

  socket.on("message", body => {
    console.log(body);
    socket.broadcast.emit("message", {
      body: body.body,
      from: body.from
    })
  })
  
  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, function () {
  console.log("listening on port 8080");
});
