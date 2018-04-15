'use strict';

class stackNode {
  constructor(val) {
    if (!val) return new Error('expected value');
    this.val = val;
    this.next = null;
  }
};

class Stack {
  constructor(maxSize=1048) {
    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('Too big!');
    let node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    let temp = this.top;
    console.log(temp);
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp;    
  }

  peek() {
    return this.top;
  }
}