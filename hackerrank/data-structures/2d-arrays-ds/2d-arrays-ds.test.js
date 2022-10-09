const t = require('tap')
const subject = require('./2d-arrays-ds')

t.test('when sumHourglass should sum only hourglass positions', t => {
  const arr =
   [[1, 1, 1, 0],
     [0, 1, 0, 0],
     [1, 1, 1, 1],
     [0, 0, 0, 0]]

  t.equal(subject.sumHourglass(0, 0, arr), 7)
  t.equal(subject.sumHourglass(1, 1, arr), 2)

  t.end()
})

t.test('when main should return max hourglass sum', t => {
  t.equal(subject.main('1 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 1 1'), '2')
  t.end()
})
