const maxProfit = require("./08.js")
const { test, expect } = require("@jest/globals")

const prices = [
  { values: [39, 18, 29, 25, 34, 32, 5], result: 16 },
  { values: [10, 20, 30, 40, 50, 60, 70], result: 60 },
  { values: [18, 15, 12, 11, 9, 7], result: -1 },
  { values: [3, 3, 3, 3, 3], result: -1 },
]

test('Reto08', () => {
  for (let price of prices) {
    expect(maxProfit(price.values)).toBe(price.result)
  }
})
