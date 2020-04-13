class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setData(data) {
        this.data = data;
    }

    setNext(node) {
        this.next = node;
    }
}

class SinglyLinkedList {
    constructor(node) {
        this.head = node || null;
    }

    appendToHead(node) {
        node.next = this.head;
        this.head = node;
    }

    removeHead() {
        this.head = this.head.next;
    }

    // O(n) implementation
    // Removes node that contains that value
    removeNode(data) {

    }

    // O(n) implementation that traverses the list
    // Can get O(1) if we track that count while adding or removing nodes
    getLength() {
        let count = 0;
        let current = this.head;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }

    printList() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let firstNode = new LinkedListNode(1);
let secondNode = new LinkedListNode(2);
let testList = new SinglyLinkedList(firstNode);

testList.appendToHead(secondNode);
testList.printList();
console.log(testList.getLength());