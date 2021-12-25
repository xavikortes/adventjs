const checkIsSameTree = require('./24.js');
const { test, expect } = require('@jest/globals');

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

const combinations = [
  {
    a: tree,
    b: tree,
    result: true,
  },
  {
    a: tree,
    b: tree2,
    result: false,
  },
  {
    a: tree2,
    b: tree2,
    result: true,
  },
];

test('Reto24', () => {
  for (let combination of combinations) {
    expect(checkIsSameTree(combination.a, combination.b)).toBe(combination.result);
  }
});
