// https://adventjs.dev/challenges/11

function shouldBuyFidelity(times) {
  const ticketPrice = 12;
  const fidelityPrice = 250;
  const fidelityDiscount = 0.75;
  const singleTickets = ticketPrice * times;
  const fidelityTickets = new Array(times)
    .fill(null)
    .map((_, idx) => ticketPrice * fidelityDiscount ** (idx + 1));
  const fidelityTotal =
    fidelityPrice + fidelityTickets.reduce((acc, item) => acc + item, 0);
  return fidelityTotal < singleTickets;
}

module.exports = shouldBuyFidelity
