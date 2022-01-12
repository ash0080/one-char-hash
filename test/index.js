const tap = require('tap')
const hash = require('../')

tap.test('single char string', async t => {
  t.not(hash('a'), hash('b'))
})


tap.test('2 chars string', async t=> {
  t.not(hash('ab'), hash('ba'))
})

tap.test('3 chars string', async t=> {
  t.not(hash('bbb'), hash('abc'))
  t.not(hash('abc'), hash('cba'))
})
