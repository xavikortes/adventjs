const countDecorations = require('./22.js');
const { test, expect } = require('@jest/globals');

const bigTrees = [
  {
    arbol: {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      }
    },
    result: 6,
  },
  {
    arbol: {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null
        },
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    },
    result: 28,
  },
];

test('Reto22', () => {
  for (let bigTree of bigTrees) {
    expect(countDecorations(bigTree.arbol)).toBe(bigTree.result);
  }
});
