const listGifts = require("./02.js")
const { test, expect } = require("@jest/globals")

const carta = 'bici coche balón _playstation bici coche peluche'

test('Reto02', () => {
  expect(listGifts(carta)).toStrictEqual({
    bici: 2,
    coche: 2,
    'balón': 1,
    peluche: 1,
  })
})
