const canCarry = require('./21.js');
const { test, expect } = require('@jest/globals');

const trips = [
  {
    capacidad: 4,
    viaje: [[2, 5, 8], [3, 6, 10]],
    result: false,
  },
  {
    capacidad: 3,
    viaje: [[1, 1, 5], [2, 2, 10]],
    result: true,
  },
  {
    capacidad: 3,
    viaje: [[2, 1, 5],[3, 5, 7]],
    result: true,
  },
  {
    capacidad: 4,
    viaje: [[2, 3, 8],[2, 5, 7]],
    result: true,
  },
  {
    capacidad: 1,
    viaje: [[2, 3, 8]],
    result: false,
  },
  {
    capacidad: 2,
    viaje: [[1, 2, 4], [2, 3, 8]],
    result: false,
  },
];

test('Reto21', () => {
  for (let trip of trips) {
    expect(canCarry(trip.capacidad, trip.viaje)).toBe(trip.result);
  }
});
