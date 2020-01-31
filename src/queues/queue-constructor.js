const _Node = require('./node-constructor.js');

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }

  display(queue) {
    let currNode = queue.first;
    let catArr = [];
    console.log('this.first is', queue.first);
    while (currNode !== null) {
      console.log('value is', currNode.value);
      catArr.push(currNode.value);
      currNode = currNode.next;
    }
    return catArr;
  }
}
module.exports = Queue;