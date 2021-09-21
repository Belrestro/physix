class Shape {
  x = 0;
  y = 0;
}
class Circle extends Shape {
  
}

class Rectangle extends Shape {
  width = 0;
  height = 0;
  color = 'black';

  constructor({ x, y, width, height, color }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


class Canvas {
  background = 'white';

  constructor(id) {
    this.htmlCanvas = document.getElementById(id);
    this.ctx = this.htmlCanvas.getContext('2d');
  }

  draw(x,y, shape) {

  }

  reset() {
    const { ctx } = this;
    ctx.fillStyle = this.background;
    ctx.fillRect(0, 0, this.width, this.height);
  }
}

module.exports = {
  Shape,
  Canvas,
}