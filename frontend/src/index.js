import { io } from "socket.io-client";

const socketClient = io('http://localhost:3000');
window.io = socketClient;