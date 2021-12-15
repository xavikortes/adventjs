// https://adventjs.dev/challenges/15

function checkSledJump(heights) {
  if (heights.length < 3) return false
  const max = Math.max(...heights)
  const maxIdx = heights.findIndex(item => item === max)

  const ascHeights = heights.slice(0, maxIdx + 1)
  const descHeights = heights.slice(maxIdx)

  if (ascHeights.length <= 1) return false
  if (descHeights.length <= 1) return false

  const distinctAscHeights = [...new Set(ascHeights)]
  const distinctDescHeights = [...new Set(descHeights)]

  if (JSON.stringify(ascHeights) !== JSON.stringify(distinctAscHeights)) return false
  if (JSON.stringify(descHeights) !== JSON.stringify(distinctDescHeights)) return false

  if (JSON.stringify(ascHeights) !== JSON.stringify(ascHeights.sort())) return false
  if (JSON.stringify(descHeights) !== JSON.stringify(descHeights.sort((a, b) => b - a))) return false

  return true
}

module.exports = checkSledJump
