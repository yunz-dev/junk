class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    this.length++;
    const newNode = new Node(value);
    if (this.length === 1) {
      this.top = newNode;
    } else {
      this.top.next = newNode;
    }
    this.top = newNode;
    if (this.length == 1) {
      this.bottom = newNode;
    }
    return newNode;
  }
  pop() {
    this.length -= 1;
    let curr = this.bottom;
    for (let i = 1; i < this.length; i++) {
      curr = curr.next;
    }
    curr.next = null;
    this.top = curr;
    return (curr);
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("Discord");
myStack.push("Udemy");
myStack.push("Google");
for (let i = 0; i < 3; i++) {
  console.log(myStack.peek());
  myStack.pop();
}
console.log(myStack.peek());

//Discord
//Udemy
//google
