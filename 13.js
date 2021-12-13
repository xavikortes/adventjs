// https://adventjs.dev/challenges/13

function wrapGifts(gifts) {
  if (!gifts.length) return []
  const maxLength = Math.max(...gifts.map(g => g.length)) + 2
  const wrappedGifts = gifts.map(g => `*${g}*`)
  return [
    '*'.repeat(maxLength),
    wrappedGifts,
    '*'.repeat(maxLength),
  ].flat()
}

module.exports = wrapGifts
