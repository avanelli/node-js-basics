'use strict'
/**
 * https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem
 */

const { SinglyLinkedList } = require('../util/singlyLinkedList')

/**
 * @param {string} testData
 */
const main = (testData) => {
  const lList1 = new SinglyLinkedList()
  const lList2 = new SinglyLinkedList()
  let res = ''

  testData = testData.split(/\r?\n|\r/)
  const iterator = testData[Symbol.iterator]()
  const numTests = parseInt(iterator.next().value)
  for (let i = 0; i < numTests; i++) {
    let numLinkedL1 = parseInt(iterator.next().value)
    for (const row of iterator) {
      console.log(row)
      lList1.insertNode(parseInt(row))
      if (--numLinkedL1 === 0) break
    }

    let numLinkedL2 = parseInt(iterator.next().value)
    for (const row of iterator) {
      console.log(row)
      lList2.insertNode(parseInt(row))
      if (--numLinkedL2 === 0) break
    }
    res += printLinkedList(solve(lList1.head, lList2.head)) + '\n'
  }
  return res
}

/**
 * @param {require('../util/singlyLinkedList').SinglyLinkedListNode} head1
 * @param {require('../util/singlyLinkedList').SinglyLinkedListNode} head2
 */
const solve = (head1, head2) => {
  let node1 = head1
  let node2 = head2
  const linkedListRes = new SinglyLinkedList()

  let choosenNode = 0
  while (node1 != null || node2 != null) {
    if (node1 === null) { // we have only secondo node
      choosenNode = 2
    } else if (node2 === null) { // we have only first node
      choosenNode = 1
    } else { // we have both
      if (node1.data <= node2.data) {
        choosenNode = 1
      } else {
        choosenNode = 2
      }
    }
    if (choosenNode === 1) {
      linkedListRes.insertNode(node1.data)
      node1 = node1.next
    } else {
      linkedListRes.insertNode(node2.data)
      node2 = node2.next
    }
  }
  return linkedListRes.head
}

/**
 * @param {require('../util/singlyLinkedList').SinglyLinkedListNode} head1
 */
const printLinkedList = (node) => {
  let res = ''
  while (node != null) {
    res += node.data + ' '
    node = node.next
  }
  return res
}

module.exports = { main }
