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

io.sockets.on('connection', (socket) => {
  console.log('Client connected: ' + socket.id);

  socket.on('mouse', (data) => {
    socket.broadcast.emit('mouse', data);
  });

  socket.on('clear', (data) => {
    socket.broadcast.emit('clear');
  });

  socket.on('disconnect', () => console.log('Client has disconnected'));
});