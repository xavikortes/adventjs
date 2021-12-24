// https://adventjs.dev/challenges/24

function checkIsSameTree(treeA, treeB) {
  if (treeA === null && treeB === null) return true
  if (treeA === null && treeB !== null) return false
  if (treeA !== null && treeB === null) return false
  if (treeA.value !== treeB.value) return false
  if (!checkIsSameTree(treeA.left, treeB.left)) return false
  if (!checkIsSameTree(treeA.right, treeB.right)) return false
  return true
}

module.exports = checkIsSameTree
