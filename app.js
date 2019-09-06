const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;

//Initiate our app
const app = express();
var server = require("http").createServer(app);
const io = require("socket.io")(server);

const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;

//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'passport-tutorial', cookie: {maxAge: 120000}, resave: false, saveUninitialized: false}));

if (!isProduction) {
  app.use(errorHandler());
}

//Configure Mongoose
mongoose.connect('mongodb://user:sharefliXX2019@ds219078.mlab.com:19078/heroku_ck5c5l5m', {useNewUrlParser: true});
mongoose.set('debug', true);

//Models & routes
require('./models/Users');
require('./config/passport');
var routes = require('./routes');
// may need to check here and try to separate the routes instead of having it bundled up.
app.use("/", routes);


io.on("connection", socket => {
  console.log("New client connected");
  // console.log(socket.handshake);

  socket.on("username", (username) => {
    socket.username = username;
    // io.sockets.emit() can give you access to all clients within that socket. so this will be useful to create a "Users in room" feature
    socket.broadcast.emit("username", '🔵' + socket.username + ' joined the chat..');
  });

  socket.on("message", body => {
    // console.log(body);
    socket.broadcast.emit("message", {
      body: body.body,
      from: body.from,
      time: body.time
    });
  });

  socket.on("create", (room) => {
    // console.log(id);
    console.log(room);
    socket.join(room);
    socket.in("abc").emit("messages", "abc");
  });

  socket.on("disconnect", (username) => socket.username ? socket.broadcast.emit("username", '🔴' + socket.username + ' left the chat..') : "");
});

//Error handlers & middlewares
// if(!isProduction) {
//   app.use((err, req, res, next) => {
//     res.status(err.status || 500);

//     res.json({
//       errors: {
//         message: err.message,
//         error: err,
//       },
//     });
//   });
// }

app.use((err, req, res, next) => {
  res.status(err.status || 200);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

server.listen(port, () => console.log('Server running on http://localhost:3001/'));
