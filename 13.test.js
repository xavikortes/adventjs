const wrapGifts = require('./13.js');
const { test, expect } = require('@jest/globals');

const gifts = [
  {
    regalos: ["📷", "⚽️"],
    result: [
      '****',
      '*📷*',
      '*⚽️*',
      '****',
    ],
  },
  {
    regalos: ["🏈🎸", "🎮🧸"],
    result: [
      '******',
      '*🏈🎸*',
      '*🎮🧸*',
      '******',
    ],
  },
  {
    regalos: ["📷"],
    result: [
      '****',
      '*📷*',
      '****',
    ],
  },
  {
    regalos: [],
    result: [],
  },
];

test('Reto13', () => {
  for (let gift of gifts) {
    expect(wrapGifts(gift.regalos)).toStrictEqual(gift.result);
  }
});
