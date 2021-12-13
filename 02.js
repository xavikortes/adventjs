// https://adventjs.dev/challenges/01

function listGifts(letter) {
  return letter
    .split(' ')
    .filter(Boolean)
    .filter(gift => !gift.startsWith('_'))
    .reduce((accum, item) => ({ ...accum, [item]: (accum[item] ?? 0) + 1 }), {})
}

module.exports = listGifts
