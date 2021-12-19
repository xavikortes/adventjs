// https://adventjs.dev/challenges/17

function countPackages(carriers, carrierID) {
  const carrier = carriers.find(carrier => carrier[0] === carrierID)
  return carrier[1] + carrier[2].map(teamMate => countPackages(carriers, teamMate)).reduce((acc, item) => acc + item, 0)
}

module.exports = countPackages
