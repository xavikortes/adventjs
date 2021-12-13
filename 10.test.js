const getCoins = require('./10.js');
const { test, expect } = require('@jest/globals');

const coins = [
  {
    total: 51,
    result: [1, 0, 0, 0, 0, 1],
  },
  {
    total: 3,
    result: [1, 1, 0, 0, 0, 0],
  },
  {
    total: 5,
    result: [0, 0, 1, 0, 0, 0],
  },
  {
    total: 16,
    result: [1, 0, 1, 1, 0, 0],
  },
  {
    total: 100,
    result: [0, 0, 0, 0, 0, 2],
  },
];

test('Reto10', () => {
  for (let coin of coins) {
    expect(getCoins(coin.total)).toStrictEqual(coin.result);
  }
});
