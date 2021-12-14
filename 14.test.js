const missingReindeer = require('./14.js');
const { test, expect } = require('@jest/globals');

const reindeers = [
  {
    renos: [0, 2, 3],
    result: 1,
  },
  {
    renos: [5, 6, 1, 2, 3, 7, 0],
    result: 4,
  },
  {
    renos: [0, 1],
    result: 2,
  },
  {
    renos: [3, 0, 1],
    result: 2,
  },
  {
    renos: [9, 2, 3, 5, 6, 4, 7, 0, 1],
    result: 8,
  },
  {
    renos: [0],
    result: 1,
  },
];

test('Reto14', () => {
  for (let reindeer of reindeers) {
    expect(missingReindeer(reindeer.renos)).toBe(reindeer.result);
  }
});
