const t = require('tap')
const subject = require('./merge-two-sorted-linked-lists')

t.test('with given ordered lists of same length return right ordered list', t => {
  const list1 = [1, 2, 3]
  const list2 = [2, 4, 5]
  const expected = [1, 2, 2, 3, 4, 5]
  t.equal(
    subject.main('1\n3\n' + list1.join('\n') + '\n3\n' + list2.join('\n'))
    , expected.join(' ') + ' \n')
  t.end()
})
t.test('with given ordered lists of differen length return right ordered list', t => {
  const list1 = [1, 7]
  const list2 = [2, 4, 5]
  const expected = [1, 2, 4, 5, 7]
  t.equal(
    subject.main('1\n2\n' + list1.join('\n') + '\n3\n' + list2.join('\n'))
    , expected.join(' ') + ' \n')
  t.end()
})
