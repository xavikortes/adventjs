const fixFiles = require('./18.js');
const { test, expect } = require('@jest/globals');

const files = [
  {
    ficheros: ['photo', 'postcard', 'photo', 'photo', 'video'],
    result: ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video'],
  },
  {
    ficheros: ['file', 'file', 'file', 'game', 'game'],
    result: ['file', 'file(1)', 'file(2)', 'game', 'game(1)'],
  },
  {
    ficheros: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'],
    result: ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)'],
  },
];

test('Reto18', () => {
  for (let file of files) {
    expect(fixFiles(file.ficheros)).toStrictEqual(file.result);
  }
});
