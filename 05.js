// https://adventjs.dev/challenges/05

function daysToXmas(date) {
  const target = new Date('Dec 25, 2021')
  return Math.ceil((target.getTime() - date.getTime()) / (1_000 * 3_600 * 24))
}

module.exports = daysToXmas
