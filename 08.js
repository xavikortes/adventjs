// https://adventjs.dev/challenges/08

function maxProfit(prices) {
  const profit = Math.max(
    ...prices.map(
      (buy, idx) => prices.slice(idx + 1).map(
        sell => sell - buy
      )
    ).flat()
  )
  return profit > 0 ? profit : -1
}

module.exports = maxProfit
