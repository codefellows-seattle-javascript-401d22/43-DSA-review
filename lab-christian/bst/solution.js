'use strict';

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(val) {
    if (val <= this.val) {
      if (!this.left) this.left = new BST(val)
      else this.left.insert(val);
    } else if (val > this.value) {
      if (!this.right) this.right = new BST(val)
      else this.right.insert(val);
    }
  }

  find(val) {
    if (this.value === val) return true;
    if (val < this.value) {
      if (!this.left) return false
      else return this.left.find(val);
    } else if (val > this.value) {
      if (!this.right) return false
      else return this.right.find(val);
    }
  }
}