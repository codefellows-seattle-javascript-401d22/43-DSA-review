'use strict';

class Queue {
  constructor() {
    this.next = null;
    this.first = null;
    this.length = 0;
  }

  enqueue(val) {
    this[this.length] = val;
    if(!this.next) this.next = 0;
    this.length++;
  }

  dequeue() {
    if(!this.next) this.next = 0;
    delete this[this.next];
    this.length--;
    this.next++;
  }
}

module.exports = {
  'Queue': Queue
};

// dequeue: increment next after pop
