const isValid = require("./03.js")
const { test, expect } = require("@jest/globals")

const ejemplos = [
  { letter: "bici coche (balón) bici coche peluche", valid: true },
  { letter: "bici coche (balón bici coche", valid: false },
  { letter: "(muñeca) consola bici", valid: true },
  { letter: "peluche (bici [coche) bici coche balón", valid: false },
  { letter: "(peluche {) bici", valid: false },
  { letter: "() bici", valid: false },
  { letter: "(a() bici (a)", valid: false },
  { letter: "(a) (b) (c)", valid: true },
]

test('Reto03', () => {
  for (let ejemplo of ejemplos) {
    expect(isValid(ejemplo.letter)).toBe(ejemplo.valid)
  }
})
