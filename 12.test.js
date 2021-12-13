const getMinJump = require('./12.js');
const { test, expect } = require('@jest/globals');

const obstacles = [
  {
    obstaculos: [5, 3, 6, 7, 9],
    result: 4,
  },
  {
    obstaculos: [2, 4, 6, 8, 10],
    result: 7,
  },
  {
    obstaculos: [1, 2, 3, 5],
    result: 4,
  },
  {
    obstaculos: [3, 7, 5],
    result: 2,
  },
  {
    obstaculos: [9, 5, 1],
    result: 2,
  },
];

test('Reto12', () => {
  for (let obstacle of obstacles) {
    expect(getMinJump(obstacle.obstaculos)).toBe(obstacle.result);
  }
});
