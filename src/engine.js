const { Vector } = require("./grid");

class Force {
  apply(object) {
    throw Error('not implemented');
  }
}

class Gravity extends Force {
  constructor(force = 9.8, direction = 180) {
    this.vector = new Vector(direction, force);
  }

  apply(object) {
    object.vector.add(this.vector);
  }
}

class Friction extends Force {}

class Inertia extends Force {
  constructor(frictionEnergyLoss = 0) {
    this.frictionEnergyLoss = frictionEnergyLoss;
  }

  apply(object) {

  }
}

// class Acceleration extends Force {
//   apply(object) {} 
// }


module.exports = {
  effects: [
    new Gravity(),
    new Inertia(),
  ]
}