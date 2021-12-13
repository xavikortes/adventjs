const shouldBuyFidelity = require('./11.js');
const { test, expect } = require('@jest/globals');

const tickets = [
  {
    times: 1,
    result: false,
  },
  {
    times: 100,
    result: true,
  },
];

test('Reto11', () => {
  for (let ticket of tickets) {
    expect(shouldBuyFidelity(ticket.times)).toStrictEqual(ticket.result);
  }
});
