const groupBy = require('./09.js');
const { test, expect } = require('@jest/globals');

const collections = [
  {
    tuplas: [[6.1, 4.2, 6.3], Math.floor],
    result: { 6: [6.1, 6.3], 4: [4.2] },
  },
  {
    tuplas: [['one', 'two', 'three'], 'length'],
    result: { 3: ['one', 'two'], 5: ['three'] },
  },
  {
    tuplas: [[{ age: 23 }, { age: 24 }], 'age'],
    result: { 23: [{ age: 23 }], 24: [{ age: 24 }] },
  },
  {
    tuplas: [
      [1397639141184, 1363223700000],
      (timestamp) => new Date(timestamp).getFullYear(),
    ],
    result: { 2013: [1363223700000], 2014: [1397639141184] },
  },
  {
    tuplas: [
      [
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
      ],
      'rating',
    ],
    result: {
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    },
  },
];

test('Reto09', () => {
  for (let collection of collections) {
    expect(groupBy(...collection.tuplas)).toStrictEqual(collection.result);
  }
});
