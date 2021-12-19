const decodeNumber = require('./16.js');
const { test, expect } = require('@jest/globals');

const symbols = [
  {
    num: '...',
    result: 3,
  },
  {
    num: '.,',
    result: 4,
  },
  {
    num: ',.',
    result: 6,
  },
  {
    num: ',...',
    result: 8,
  },
  {
    num: '.........!',
    result: 107,
  },
  {
    num: '.;',
    result: 49,
  },
  {
    num: '..,',
    result: 5,
  },
  {
    num: '..,!',
    result: 95,
  },
  {
    num: '.;!',
    result: 49,
  },
  {
    num: '!!!',
    result: 300,
  },
  {
    num: ';!',
    result: 50,
  },
  {
    num: ';.W',
    result: NaN,
  },
];

test('Reto16', () => {
  for (let symbol of symbols) {
    expect(decodeNumber(symbol.num)).toBe(symbol.result);
  }
});
