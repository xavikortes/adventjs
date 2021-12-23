const canReconfigure = require('./23.js');
const { test, expect } = require('@jest/globals');

const configs = [
  {
    from: 'BAL',
    to: 'LIB',
    result: true,
  },
  {
    from: 'CON',
    to: 'JUU',
    result: false,
  },
  {
    from: 'MMM',
    to: 'MID',
    result: false,
  },
  {
    from: 'AA',
    to: 'MID',
    result: false,
  },
];

test('Reto23', () => {
  for (let config of configs) {
    expect(canReconfigure(config.from, config.to)).toBe(config.result);
  }
});
