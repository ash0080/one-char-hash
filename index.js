const sum = (str) => {
  return str.split('')
            .reduce((acc, char) => {
              return acc + char.charCodeAt(0)
            }, 0)
}

const join = (a, b, c) => {
  return parseInt('0x' + a.toString(16) + b.toString(16) + c.toString(16))
}

const oneDemensionFeature = (str) => {
  const st = str.replace('/\s/g', '')
  if (st.length <= 1) {
    return 0
  }
  let vector = BigInt(0)
  for (let i = 1; i < st.length; i++) {
    vector = (vector << 1n) + (st[i] > st[i - 1]
                             ? 1n
                             : 0n)
  }
  return vector
}

const hash = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string')
  }
  const len = str.length
  return String.fromCodePoint(join(sum(str), oneDemensionFeature(str), len) % 0x10FFFF)
}

module.exports = hash

