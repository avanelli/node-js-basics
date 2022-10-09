const t = require('tap')
const subject = require('./sparse-array')

t.test('with given lists return right counts', t => {
  const strings = 'a\na\nb\nc'
  const queries = 'a\nb\nc\nx'
  t.equal(subject.main('4\n' + strings + '\n4\n' + queries), '2\n1\n1\n0')
  t.end()
})
