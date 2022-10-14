'use strict'

function SinglyLinkedListNode (data, next = null) {
  this.data = data
  this.next = next
}

function SinglyLinkedList (head = null, tail = null) {
  this.head = head
  this.tail = tail

  this.insertNode = (data) => {
    const node = new SinglyLinkedListNode(data)
    if (this.head == null) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  }

  return this
}

module.exports = { SinglyLinkedListNode, SinglyLinkedList }
