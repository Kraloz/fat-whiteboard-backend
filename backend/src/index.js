import express from "express";
import { Server as SocketIoServer } from "socket.io";

const app = express();

const server = app.listen(3000, () =>
  console.log("🔥 server is listening on port 3000!")
);

const io = new SocketIoServer(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("xd", (msg) => {
    if (!msg) return;

    msg();
  });

});