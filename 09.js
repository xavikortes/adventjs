// https://adventjs.dev/challenges/09

function groupBy(collection, it) {
  const fn = item => typeof it === 'string' ? item[it] : it(item)
  
  return collection.reduce(
    (accum, item) => {
      const key = fn(item)
      return { ...accum, [key]: [...(accum[key] ?? []), item] }
    }, {}
  )
}

module.exports = groupBy
