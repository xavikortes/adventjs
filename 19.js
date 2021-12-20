// https://adventjs.dev/challenges/19

function learn(time, courses) {
  let max = 0
  let res = null

  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const sum = courses[i] + courses[j]
      if (sum === time) return [i, j]
      if (sum > max && sum <= time) {
        max = sum
        res = [i, j]
      }
    }
  }
  return res
}

module.exports = learn
