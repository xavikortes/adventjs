// https://adventjs.dev/challenges/21

function canCarry(capacity, trips) {
  const entregas = {}
  trips.forEach(trip => {
    const [regalos, ptoRecogida, ptoEntrega] = trip
    entregas[ptoRecogida] = (entregas[ptoRecogida] ?? 0) + regalos
    entregas[ptoEntrega] = (entregas[ptoEntrega] ?? 0) - regalos
  })
  let carried = 0
  for (let i = 0; i < Math.max(...Object.keys(entregas)); i++) {
    const pto = entregas[i]
    if (!pto) continue
    carried += pto
    if (carried > capacity) return false
  }
  return true
}

module.exports = canCarry
