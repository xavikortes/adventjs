// https://adventjs.dev/challenges/23

function canReconfigure(from, to) {
  if (from.length !== to.length) return false
  if ([...new Set([...from])].length !== [...new Set([...to])].length) return false
  return true
}

module.exports = canReconfigure
