// https://adventjs.dev/challenges/07

function contains(store, product) {
  if (typeof store === 'string') return store === product
  return Object.values(store).some(substore => contains(substore, product))
}

module.exports = contains
