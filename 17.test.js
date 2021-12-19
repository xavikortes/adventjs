const countPackages = require('./17.js');
const { test, expect } = require('@jest/globals');

const carriers = [
  {
    transportistas: [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []]
    ],
    idTransportista: 'dapelu',
    result: 9,
  },
  {
    transportistas: [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []]
    ],
    idTransportista: 'camila',
    result: 15,
  },
];

test('Reto17', () => {
  for (let carrier of carriers) {
    expect(countPackages(carrier.transportistas, carrier.idTransportista)).toBe(carrier.result);
  }
});
