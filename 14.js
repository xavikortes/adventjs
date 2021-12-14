// https://adventjs.dev/challenges/14

function missingReindeer(ids) {
  const max = Math.max(...ids)
  for (let i = 0; i <= max; i++) {
    if (!ids.includes(i)) return i
  }
  return max + 1
  // return (ids.sort().find((item, idx) => item !== idx) ?? ids.length + 1) - 1
}

module.exports = missingReindeer
