// https://adventjs.dev/challenges/12

function getMinJump(obstacles) {
  let jump = 1
  let iter = 0
  const max = Math.max(...obstacles)
  while (true) {
    iter += jump
    if (iter > max + 1) {
      return jump
    }
    if (obstacles.includes(iter)) {
      jump++
      iter = 0
    }
  }
}

module.exports = getMinJump
