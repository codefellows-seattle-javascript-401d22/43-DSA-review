'use strict';

class ListNode {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  prepend(val) {
    let newNode = new ListNode(val);
    newNode.next = this.root;
    this.root = newNode;
  }

  append(val) {
    let newNode = new ListNode(val);
    let currentNode = this.root;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  find(index) {
    let i = 0;
    let currentNode = this.root;
    while (currentNode.next !== null) {
      if (i === index) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
      i++;
    }
  }
}

module.exports = { 
  'LinkedList': LinkedList, 
  'ListNode': ListNode
}

// append, prepend. head(front) tail(end)