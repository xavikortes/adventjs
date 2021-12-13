// https://adventjs.dev/challenges/06

function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) return [numbers[i], numbers[j]]
    }
  }
  return null
}

module.exports = sumPairs
