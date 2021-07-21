class linkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    const headNode = new ListNode(value, this.head);
    this.head = headNode;
    this.length++
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let node = this.head;
    for(let i=0; i<index; i++) {
      node = node.next;
    }
    return node
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);
    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new ListNode(value, prev.next);;
    this.length++; 
  }

  deleteHead() {
    if (this.head == null) return null;
    this.head = this.head.next;
    this.length--;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return null;

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;
    
    prev.next = prev.next.next;
    this.length--;
  
  }


  print() {
    let output = '';
    let current = this.head;
    while(current) {
      output = `${output}${current.value} =-> `;
      current = current.next;
    }
    
    console.log(`list: ${output}null `)
    return `${output}null`;
  }
}

class ListNode {
  constructor(v, n) {
    this.value = v;
    this.next = n
  }
}

export default linkedList;
//module.exports = linkedList;
/* 
  const l = new linkedList();
  l.insertAtHead(40);
  l.insertAtHead(50);
  l.insertAtHead(600);
  l.insertAtIndex(1, 20);
  l.print()
  console.log('linkedList', l);
  console.log(l.getByIndex(1).value);
  console.log(l.getByIndex(1).next.value);
*/