import LinkedList from './utils';

describe('#insertAtHead', () => {
  test('it inserts at the top', () => {
     const newLinkList = new LinkedList();
     newLinkList.insertAtHead(40)
     const oldHead = newLinkList.head;
     newLinkList.insertAtHead(60);
     expect(newLinkList.head.value).toBe(60);
     expect(newLinkList.head.next).toBe(oldHead);
     expect(newLinkList.length).toBe(2);
  })
}); 

describe('#getByIndex', () => {
  describe('with negavite value', () => {
    test('it should return null', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(45);
      expect(newLinkList.getByIndex(-1)).toBeNull()
    });
  });
  describe('with larger than list length', () => {
    test('it should return null', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(40);
      expect(newLinkList.getByIndex(5)).toBeNull()
    })
  })
  describe('with good value', () => {
    test('it should return the value at index', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(10);
      newLinkList.insertAtHead(20);
      newLinkList.insertAtHead(30);
      newLinkList.insertAtHead(40);
      newLinkList.insertAtHead(50);
      expect(newLinkList.getByIndex(2).value).toBe(30);
    })
  })
})

describe('#insertAtIndex', () => {
  describe('with index greated than list length', () => {
    test('it should not insert a node', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(10);
      newLinkList.insertAtHead(20);
      newLinkList.insertAtHead(30);
      expect(newLinkList.length).toBe(3);
      newLinkList.insertAtIndex(9, 200);
      expect(newLinkList.length).toBe(3);
      expect(newLinkList.getByIndex(2).value).toBe(10);
      expect(newLinkList.getByIndex(3)).toBeNull();
     
    })
  });

  describe('with index less than zero', () => {
    test('it should not insert a node', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(10);
      newLinkList.insertAtHead(20);
      newLinkList.insertAtHead(30);
      expect(newLinkList.length).toBe(3);
      newLinkList.insertAtIndex(-2, 200);
      expect(newLinkList.length).toBe(3);
      expect(newLinkList.getByIndex(0).value).toBe(30);
     
    })
  });

  describe('with a good index', () => {
    test('it should add a node in the right index', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(10);
      newLinkList.insertAtHead(20);
      newLinkList.insertAtHead(30);
      expect(newLinkList.length).toBe(3);

      newLinkList.insertAtIndex(2, 200);

      expect(newLinkList.length).toBe(4);
      expect(newLinkList.getByIndex(2).value).toBe(200);
    })
  })
  
  describe('with index of zero', () => {
    test('it should add a node at the head', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(10);
      newLinkList.insertAtHead(20);
      newLinkList.insertAtHead(30);

      expect(newLinkList.length).toBe(3);
      newLinkList.insertAtIndex(0, 200)

      expect(newLinkList.length).toBe(4);
      expect(newLinkList.head.value).toBe(200);
      expect(newLinkList.head.next.value).toBe(30);
    })
  })

});

describe('#deleteHead', () => {
  describe('when list is empty', () => {
    test('should do nothing', () => {
      const newLinkList = new LinkedList();
      expect(newLinkList.length).toBe(0);
      newLinkList.deleteHead();
      expect(newLinkList.length).toBe(0);
    });
  })
  describe('when list is NOT empty', () => {
    test('should remove the head of the list', () => {
      const newLinkList = new LinkedList();
      newLinkList.insertAtHead(10);
      newLinkList.insertAtHead(20);
      newLinkList.insertAtHead(30);
      expect(newLinkList.length).toBe(3);
      expect(newLinkList.getByIndex(0).value).toBe(30)

      newLinkList.deleteHead();
      expect(newLinkList.length).toBe(2);
      expect(newLinkList.getByIndex(0).value).toBe(20)
      
    });
  });
});

describe('#deleteAtIndex', () => {
  test('should remove the node and shorten the list length by 1', () => {
    const newLinkList = new LinkedList();
    newLinkList.insertAtHead(10);
    newLinkList.insertAtHead(20);
    newLinkList.insertAtHead(30);
    expect(newLinkList.length).toBe(3);
    expect(newLinkList.getByIndex(1).value).toBe(20)

    newLinkList.deleteAtIndex(1);
    expect(newLinkList.length).toBe(2);
    expect(newLinkList.getByIndex(1).value).toBe(10);

    newLinkList.deleteAtIndex(-10);
    expect(newLinkList.length).toBe(2);

    newLinkList.deleteAtIndex(10);
    expect(newLinkList.length).toBe(2);

    const emptyLinkedList = new LinkedList();
    expect(emptyLinkedList.deleteAtIndex(2)).toBeNull();
  })
})

describe('#print', () => {
  test('output', () => {
    const newLinkList = new LinkedList();
    newLinkList.insertAtHead(10);
    newLinkList.insertAtHead(20);
    newLinkList.insertAtHead(30);
    expect(newLinkList.print()).toBe('30 =-> 20 =-> 10 =-> null')
  })
})