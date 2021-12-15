const checkSledJump = require('./15.js');
const { test, expect } = require('@jest/globals');

const jumps = [
  {
    salto: [1, 2, 3, 2, 1],
    result: true,
  },
  {
    salto: [0, 1, 0],
    result: true,
  },
  {
    salto: [0, 3, 2, 1],
    result: true,
  },
  {
    salto: [0, 1000, 1],
    result: true,
  },
  {
    salto: [2, 4, 4, 6, 2],
    result: false,
  },
  {
    salto: [1, 2, 3],
    result: false,
  },
  {
    salto: [1, 2, 3, 2, 1, 2, 3],
    result: false,
  },
];

test('Reto15', () => {
  for (let jump of jumps) {
    expect(checkSledJump(jump.salto)).toBe(jump.result);
  }
});
