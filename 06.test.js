const sumPairs = require("./06.js")
const { test, expect } = require("@jest/globals")

const parejas = [
  { pair: [[3, 5, 7, 2], 10], result: [3, 7] },
  { pair: [[-3, -2, 7, -5], 10], result: null },
  { pair: [[2, 2, 3, 1], 4], result: [2, 2] },
  { pair: [[6, 7, 1, 2], 8], result: [6, 2] },
  { pair: [[0, 2, 2, 3, -1, 1, 5], 6], result: [1, 5] },
]

test('Reto06', () => {
  for (let pareja of parejas) {
    expect(sumPairs(...pareja.pair)).toStrictEqual(pareja.result)
  }
})
