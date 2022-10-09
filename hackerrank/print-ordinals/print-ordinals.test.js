const t = require('tap')
const algo = require('./print-ordinals')

t.test('when 1 return 1st', t => {
  t.equal(algo.main('1'), '1st')
  t.end()
})
t.test('when 2 return 2dn', t => {
  t.equal(algo.main('2'), '2nd')
  t.end()
})
t.test('when 3 return 3rd', t => {
  t.equal(algo.main('3'), '3rd')
  t.end()
})
t.test('when 11 return 11th', t => {
  t.equal(algo.main('11'), '11th')
  t.end()
})
t.test('when 12 return 12th', t => {
  t.equal(algo.main('12'), '12th')
  t.end()
})
t.test('when 13 return 13th', t => {
  t.equal(algo.main('13'), '13th')
  t.end()
})
t.test('when 100 return 100th', t => {
  t.equal(algo.main('100'), '100th')
  t.end()
})
t.test('when 101 return 101st', t => {
  t.equal(algo.main('101'), '101st')
  t.end()
})
t.test('when 111 return 111th', t => {
  t.equal(algo.main('111'), '111th')
  t.end()
})
