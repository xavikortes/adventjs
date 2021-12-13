const daysToXmas = require("./05.js")
const { test, expect } = require("@jest/globals")

const fechas = [
  { date: new Date('Dec 1, 2021'), days: 24 },
  { date: new Date('Dec 24, 2021 00:00:01'), days: 1 },
  { date: new Date('Dec 24, 2021 23:59:59'), days: 1 },
  { date: new Date("December 20, 2021 03:24:00"), days: 5 },
]

test('Reto05', () => {
  for (let fecha of fechas) {
    expect(daysToXmas(fecha.date)).toBe(fecha.days)
  }
})
