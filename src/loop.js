const { Grid } = require('../grid');
const { Canvas } = require('../canvas');
const AFPS = 100; // Absolute Frames Per Second
let maxFrames = 100000;

const loop = () => {
  const grid = new Grid(500, 700);
  const canvas = new Canval
  let clock = Date.now()
  let interval = Math.trunc(1000 / AFPS);

  const lpoop = () => {
    const current = Date.now();
    if ((current - clock) >= interval) {
      clock = current
      grid.render()
      if (maxFrames-- <= 0) return
    }

    setImmediate(lpoop)
  }

  // lpoop()
}

loop()