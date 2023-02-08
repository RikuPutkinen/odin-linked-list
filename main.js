class LinkedList {
  constructor() {
    this.first = null;
  }

  append(value) {
    let node = new Node(value, null);
    if (this.first === null) this.first = node;
    else this.tail().nextNode = node;
  }
  
  prepend(value) {
    this.first = new Node(value, this.first);
  }
  
  size() {
    if (this.first === null) return 0;
    
    let i = 0;
    let current = this.first;
    while (current !== null) {
      current = current.nextNode;
      i++;
    }
    return i;
  }

  head() {
    return this.first;
  }

  tail() {
    let current = this.first;
    if (this.first === null) return;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (this.first === null) return;
    if (this.size() < index) return;
    let current = this.first;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current
  }
  
  pop() {
    if (this.first === null) return;
    let prev;
    let current = this.first;

    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    if (this.first === null) return false;
    let current = this.first;

    while (current !== null) {
      if (current.value === value) return true
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    if (this.first === null) return null;
    let current = this.first;
    let i = 0;
    while (current !== null) {
      if (current.value === value) return i;
      current = current.nextNode;
      i++
    }
    return null;
  }
  
  toString() {
    if (this.first === null) return "null";
    let str = "";
    let current = this.first;
    while (current !== null) {
      str += `( ${current.value} ) -> `;
      if (current.nextNode === null) str += "null";
      current = current.nextNode;
    }
    return str;
  }

  insertAt(value, index) {
    if (this.first === null) return;
    if (index < 0 || index > this.size()) return;

    let prev;
    let current = this.first;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.nextNode;
    }
    const newNode = new Node(value);
    prev.nextNode = newNode;
    newNode.nextNode = current;
  }

  removeAt(index) {
    if (this.first === null) return;
    if (index < 0 || index > this.size()) return;

    let prev;
    let current = this.first;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = current.nextNode;
  }
}

class Node {
  constructor(value=null, nextNode=null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const ll = new LinkedList();

ll.append('aaaaaa');
ll.append('bbbbb');
ll.prepend('cccccc');
console.log(ll.toString());
ll.insertAt('dddd', 2);
console.log(ll.toString());
ll.removeAt(1);
console.log(ll.toString());