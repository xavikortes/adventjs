// https://adventjs.dev/challenges/10

function getCoins(change) {
  const values = [50, 20, 10, 5, 2, 1]
  let currentChange = change
  return values.map(value => {
    if (!currentChange) return 0
    const res = Math.floor(currentChange / value)
    currentChange = currentChange % value
    return res
  }).reverse()
}

module.exports = getCoins
