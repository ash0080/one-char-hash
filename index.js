const sum = (str) => {
  return str.split()
            .reduce((acc, char) => {
              return acc + char.charCodeAt(0)
            }, 0)
}

const join = (a, b) => {
  return parseInt('0x' + a.toString(16) + b.toString(16))
}

const hash = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }
  const len = str.length
  return String.fromCodePoint(join(sum(str), len) % 0x10FFFF)
}

module.exports = hash
