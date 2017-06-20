// Setup basic express server
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 3000;
var SimplePeer = require("simple-peer");

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

// Routing
app.use(express.static(__dirname + "/public"));

// Change bg color socket

// io.on is the on connection main event
// inside of it we can specify other event handlers and we
// can emit events to the particular connected client (socket.emit)
// or to all clients (io.emit)

io.on("connection", socket => {
  socket.on("ready", () => {
    console.log("video ready to play");
  });

  socket.on("play", () => {
    console.log("playing video somewhere");
    socket.broadcast.emit("play");
  });

  socket.on("pause", () => {
    console.log("paused video somewhere");
    socket.broadcast.emit("pause");
  });

  socket.on("load", () => {
    console.log("loaded video somewhere");
    socket.broadcast.emit("load");
  });
});


