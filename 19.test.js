const learn = require('./19.js');
const { test, expect } = require('@jest/globals');

const courses = [
  {
    tiempo: 10,
    cursos: [2, 3, 8, 1, 4],
    result: [0, 2],
  },
  {
    tiempo: 15,
    cursos: [2, 10, 4, 1],
    result: [1, 2],
  },
  {
    tiempo: 25,
    cursos: [10, 15, 20, 5],
    result: [0, 1],
  },
  {
    tiempo: 8,
    cursos: [8, 2, 1],
    result: [1, 2],
  },
  {
    tiempo: 8,
    cursos: [8, 2, 1, 4, 3],
    result: [3, 4],
  },
  {
    tiempo: 4,
    cursos: [10, 14, 20],
    result: null,
  },
  {
    tiempo: 5,
    cursos: [5, 5, 5],
    result: null,
  },
];

test('Reto19', () => {
  for (let course of courses) {
    expect(learn(course.tiempo, course.cursos)).toStrictEqual(course.result);
  }
});
