// https://adventjs.dev/challenges/25

function canMouseEat(direction, game) {
  const [rowIdx, colIdx] = game.map((row, idx) => {
    if (row.includes('m')) return [idx, row.indexOf('m')]
    return false
  }).filter(Boolean)[0]

  const moves = {
    'up': game?.[rowIdx - 1]?.[colIdx],
    'down': game?.[rowIdx + 1]?.[colIdx],
    'left': game?.[rowIdx]?.[colIdx - 1],
    'right': game?.[rowIdx]?.[colIdx + 1],
  }

  return moves[direction] === '*'
}

module.exports = canMouseEat
