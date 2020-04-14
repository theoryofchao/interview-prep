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

    findNode(data) {
        let current = this.head;

        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // O(n) implementation
    // Removes node that contains that value
    removeNode(data) {
        let current = this.head;
        let prev;

        // Only if specified data was the head
        if (current.data === data) {
            this.head = current.next;
        }
        
        while(current) {
            if (current.data === data) {
                prev.next = current.next;
                break;
            }
            prev = current;
            current = current.next;
        }
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
        let string = "";
        while(current) {
            string += (`${current.data} `);
            current = current.next;
        }
        console.log(string);
    }
}

let node1 = new LinkedListNode(1);
let node2 = new LinkedListNode(2);
let node3 = new LinkedListNode(3);
let testList = new SinglyLinkedList(node1);

testList.appendToHead(node2);
testList.appendToHead(node3);
testList.removeNode(1);
let tmpNode = testList.findNode(2);
console.log(tmpNode.data);
testList.printList();
console.log(testList.getLength());