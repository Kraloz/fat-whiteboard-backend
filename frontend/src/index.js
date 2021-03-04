import p5 from 'p5';
import { io } from "socket.io-client";
import { sketch } from "./sketch";

window.io = io('http://localhost:3000');
window.p5Instance = new p5(sketch, "sketch");