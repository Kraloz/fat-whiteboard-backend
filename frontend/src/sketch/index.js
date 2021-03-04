export const sketch = (p) => {

  const BRUSH_SIZE = 20;
  let lastX, lastY;

  const clearCanvas = () => {
    p.background(0)
  }

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(0);

    const button = p.createButton('❌');
    button.position(p.width - 39, 19);
    button.mousePressed(clearCanvas);
  };

  p.draw = () => {
    p.noStroke();
    const d = p.dist(lastX, lastY, p.mouseX, p.mouseY);
    if (p.mouseIsPressed) {
      for (let i = 0; i <= d; i++) {
        const nX = p.lerp(lastX, p.mouseX, i / d);
        const nY = p.lerp(lastY, p.mouseY, i / d);
        p.ellipse(nX, nY, BRUSH_SIZE, BRUSH_SIZE);
      }
      p.fill(255);
      p.ellipse(p.mouseX, p.mouseY, BRUSH_SIZE, BRUSH_SIZE);
    }

    lastX = p.mouseX;
    lastY = p.mouseY;
  }
}