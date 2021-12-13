const contains = require("./07.js")
const { test, expect } = require("@jest/globals")

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta'
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

const busquedas = [
  { objetos: [almacen, 'camiseta'], result: true },
  { objetos: [otroAlmacen, 'gameboy'], result: false },
]

test('Reto07', () => {
  for (let busqueda of busquedas) {
    expect(contains(...busqueda.objetos)).toBe(busqueda.result)
  }
})
