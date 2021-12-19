// https://adventjs.dev/challenges/16

function decodeNumber(symbols) {
  const values = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  return [...symbols].map((item, index, symbols) => {
    const value = values[item]
    if (value >= (values[symbols[index + 1]] ?? 0)) {
      return value
    }
    return value * -1
  }).reduce((acc, item) => acc + item, 0)
}

module.exports = decodeNumber
