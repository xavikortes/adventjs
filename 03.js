// https://adventjs.dev/challenges/01

function isValid(letter) {
  return !/\(\)|\{|\[|\((?![a-zA-ZÀ-ÿ\u00f1\u00d1 ]*\))/g.test(letter)
}

module.exports = isValid
