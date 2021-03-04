import p5 from 'p5';
import { io } from "socket.io-client";
// import { sketch } from "./sketch";

const socket = io('http://localhost:3000');

window.socket = socket;

const sketch = (p) => {

  const BRUSH_SIZE = 20;

  const clearCanvas = (shouldEmit = true) => {
    if (shouldEmit) socket.emit('clear');
    p.background(0);
  };

  const paintBrush = ({ x, y, pX, pY }) => {
    p.stroke(255);
    p.strokeWeight(BRUSH_SIZE);
    p.line(x, y, pX, pY);
  }

  const sendMouse = (mouseCoords) => {
    socket.emit('mouse', mouseCoords);
  };

  const paintAndSend = (mouseCoords) => {
    paintBrush(mouseCoords);
    sendMouse(mouseCoords);
  };

  const createClearButton = () => {
    const button = p.createButton('❌');
    button.position(p.width - 39, 19);
    button.mousePressed(clearCanvas());
  };

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(0);
    createClearButton();
  };

  p.mouseDragged = () => {
    paintAndSend({
      x: p.mouseX,
      y: p.mouseY,
      pX: p.pmouseX,
      pY: p.pmouseY
    });
  }


  socket.on('clear', () => {
    clearCanvas(false);
  });

  socket.on('mouse', (data) => {
    paintBrush(data);
  });
}

window.p5Instance = new p5(sketch, "sketch");