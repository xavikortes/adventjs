// https://adventjs.dev/challenges/18

function fixFiles(files) {
  const cache = {}
  return files.map(file => {
    if (file in cache) {
      cache[file] += 1
      return `${file}(${cache[file]})`
    }
    cache[file] = 0
    return file
  })
}

module.exports = fixFiles
