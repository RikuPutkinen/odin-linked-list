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

  //at(index)
  //pop()
  //contains(value)
  //find(value)
  //toString()
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
console.log(ll);
console.log(ll.head());
console.log(ll.first.nextNode);
console.log(ll.first.nextNode.nextNode);
console.log(ll.size());
console.log('tail:',ll.tail());