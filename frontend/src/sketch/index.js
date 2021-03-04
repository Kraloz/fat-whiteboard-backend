// export const sketch = (p) => {

//   const BRUSH_SIZE = 20;

//   const clearCanvas = () => {
//     p.background(0);
//   };

//   paintAndSend = (...args) => {
//     p.line(...args);
//     sendMouse(...args);
//   };

//   const sendMouse = (mouseCoords) => {
    
//   };


//   p.setup = () => {
//     p.createCanvas(400, 400);
//     p.background(0);

//     const button = p.createButton('❌');
//     button.position(p.width - 39, 19);
//     button.mousePressed(clearCanvas);
//   };

//   p.mouseDragged = () => {
//     p.stroke(255);
//     p.strokeWeight(BRUSH_SIZE);
//     paintAndSend({
//       x: p.mouseX,
//       y: p.mouseY,
//       pX: p.pmouseX,
//       pY: p.pmouseY
//     });
//   }
// }