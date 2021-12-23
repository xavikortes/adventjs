// https://adventjs.dev/challenges/23

function canReconfigure(from, to) {
  if (from.length !== to.length) return false
  if (from.length !== [...new Set([...from])].length) return false
  if (to.length !== [...new Set([...to])].length) return false
  return true
}

module.exports = canReconfigure
