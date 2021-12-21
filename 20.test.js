const pangram = require('./20.js');
const { test, expect } = require('@jest/globals');

const letters = [
  {
    carta: 'Extraño pan de col y kiwi se quemó bajo fugaz vaho',
    result: true,
  },
  {
    carta: 'Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!',
    result: true,
  },
  {
    carta: 'Esto es una frase larga pero no tiene todas las letras del abecedario',
    result: false,
  },
  {
    carta: 'De la a a la z, nos faltan letras',
    result: false,
  },
];

test('Reto20', () => {
  for (let letter of letters) {
    expect(pangram(letter.carta)).toBe(letter.result);
  }
});
