const canMouseEat = require('./25.js');
const { test, expect } = require('@jest/globals');

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

const combinations = [
  {
    room: room,
    direction: 'up',
    result: false,
  },
  {
    room: room,
    direction: 'down',
    result: true,
  },
  {
    room: room,
    direction: 'left',
    result: false,
  },
  {
    room: room,
    direction: 'right',
    result: false,
  },
  {
    room: room2,
    direction: 'up',
    result: false,
  },
  {
    room: room2,
    direction: 'down',
    result: false,
  },
  {
    room: room2,
    direction: 'left',
    result: false,
  },
  {
    room: room2,
    direction: 'right',
    result: true,
  },
];

test('Reto25', () => {
  for (let combination of combinations) {
    expect(canMouseEat(combination.direction, combination.room)).toBe(combination.result);
  }
});
