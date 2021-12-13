// https://adventjs.dev/challenges/04

function createXmasTree(height) {
  let tree = ''
  const max = ((height - 1) * 2) + 1
  let current = 0
  
  while (current < height) {
    const asteriks = current * 2 + 1
    const line = ''.padStart(asteriks, '*').padStart((max + asteriks) / 2, '_').padEnd(max, '_')
    tree += line + '\n'
    current++
  }
  
  tree += '#'.padStart((max + 1) / 2, '_').padEnd(max, '_') + '\n'
  tree += '#'.padStart((max + 1) / 2, '_').padEnd(max, '_')
  
  return tree
}

module.exports = createXmasTree
