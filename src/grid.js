const toRadians = a => a * (Math.PI / 180);
const toDegrees = a => a * (180 / Math.PI);

class Vector {
  constructor(rotation, force) {
    rotation = rotation % 360
    const verticalOrientation = (rotation % 180) === 0
      ? 0
      : (rotation < 180) ? 1 : -1;
    const horizontalOrientation = ((rotation + 270) % 180) === 0
      ? 0
      : (((rotation + 90) % 360) < 180) ? 1 : -1;

    this.rotation = rotation;
    this.force = force;
    this.verticalOrientation = verticalOrientation;
    this.horizontalOrientation = horizontalOrientation;
    const alpha = toRadians(Math.abs(90 - rotation % 180));
    this.horizontalForce = Math.abs(horizontalOrientation * force * Math.sin(alpha));
    this.verticalForce = Math.abs(verticalOrientation * force * Math.cos(alpha));
    // this.alpha = alpha;
  }

  add(vector) {
    const { horizontalForce, verticalForce, horizontalOrientation, verticalOrientation } = vector;
    const hrForce =
      this.horizontalForce * this.horizontalOrientation + horizontalOrientation * horizontalForce;
    const vrForce =
      this.verticalForce * this.verticalOrientation + verticalForce * verticalOrientation;
    const hrOrientation = hrForce >= 0 ? 1 : -1;
    const vrOrientation = vrForce >= 0 ? 1 : -1;
    const force = Math.sqrt(vrForce ** 2 + hrForce ** 2);
    const alpha = Math.abs(toDegrees(Math.asin(hrForce/force)));
    const rotation = 180 - vrOrientation * 90 - hrOrientation * vrOrientation * alpha;

    return new Vector(isNaN(rotation) ? 0 : rotation, force);
  }
}

class Coordinates {
  x = 0
  y = 0

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/**
 * π----π
 * ------
 * ------
 * π----π
 */

/**
 * Upper left corner coordinates start
 */

const shapes = {
  RECTANGLE: 'rectangle',
};

class Square {
  coordinates = new Coordinates(0,0);
  shape = shapes.RECTANGLE;
  vertices = []
  fillStyle = '';

  constructor(coordinates, { width, height, fillStyle }) {
    this.coordinates = coordinates;
    this.width = width;
    this.height = height;
    this.fillStyle = fillStyle;
  }
}

class Grid {
  sorted = [];
  store = new Map();
  width = 0
  height = 0

  constructor (width, height) {
    this.width = width
    this.height = height
  }

  isOnGrid(x,y) {
    return x >= 0 && x < this.width
      && y >= 0 && y < this.height
  }

  put(object, coordinates) {
    const { x, y } = coordinates;
    const key = `${x}-${y}`

    if (this.store.has(key)) {
      throw Error(`Object duplicate: ${key}`);
    }

    this.store.set(key, object);
  }

  remove() {

  }

  get() {

  }

  getById() {

  }

  hasCollision(objA, ojbB) {

  }
}

module.exports = {
  Grid,
  Vector,
}