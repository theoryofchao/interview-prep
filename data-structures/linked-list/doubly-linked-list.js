class ListNode {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setPrev(node) {
        this.prev = node;
    }

    getPrev() {
        return this.prev;
    }

    setNext(node) {
        this.next = node;
    }

    getNext() {
        return this.next;
    }
}

class DoublyLinkedList {
    constructor(node) {
        this.head = node || null;
    }

    addToTail(node) {
        let current = this.head;

        // Only if the List is empty
        if (!current) this.head = node;

        while (current.next) {
            current = current.next;
        }

        node.setPrev(current);
        current.setNext(node);
    }

    deleteNode(value) {
        let prev = null;
        let current = this.head;

        // If no head element
        if (!current) {
            console.log("List is empty")
            return;
        }

        while(current.getValue() !== value) {
            prev = current;
            current = current.getNext();
        }

        // Element found
        if(current) {
            

            let next = current.getNext();

            if (current === this.head) {
                this.head = next;
            }

            if (prev) {
                prev.setNext(next);
            }
            
            if (next) {
                next.setPrev(prev);
            }
        } else {
            console.log("No such element found");
        }
    }

    printList() {
        let current = this.head;

        if (!current) console.log("List is empty.")

        let listString = "";
        
        while(current) {
            listString += `${current.getValue()} `;
            current = current.getNext();
        }

        console.log(listString);
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

const testList = new DoublyLinkedList(node1);
testList.addToTail(node3);
testList.addToTail(node2);
testList.addToTail(node4);
testList.deleteNode(1);

testList.printList();