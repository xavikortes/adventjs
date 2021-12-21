// https://adventjs.dev/challenges/20

function pangram(letter) {
  const all = [...'abcdefghijklmnopqrstuvwxyz']
  const normalized = letter.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  let res = true
  
  all.forEach(char => {
    if (!normalized.includes(char)) res = false
  })
  if (res) return letter.includes('ñ')

  return res
}

module.exports = pangram
