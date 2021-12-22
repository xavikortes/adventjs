// https://adventjs.dev/challenges/22

function countDecorations(bigTree) {
  if (!bigTree) return 0
  return bigTree.value + countDecorations(bigTree.left) + countDecorations(bigTree.right)
}

module.exports = countDecorations
