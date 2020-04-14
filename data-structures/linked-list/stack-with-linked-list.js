class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setValue(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setNext(node) {
        this.next = node;
    }

    getNext() {
        return this.next;
    }
}

class StackList {
    constructor(node) {
        this.head = node || null;
    }

    push(node) {
        if (!this.head) {
            this.head = node;
            return this.head;
        } else {
            node.setNext(this.head);
            this.head = node;
            return this.head;
        }
    }

    pop() {
        if (!this.head) {
            console.log("Nothing to pop");
            return;
        } else {
            this.head = this.head.getNext();
            return this.head;
        }
    }

    printStack() {
        let current = this.head;
        let stackString = "";

        while (current) {
            stackString += `${current.getValue()} `;
            current = current.getNext();
        }
        console.log(stackString);
    }
}


const testStack = new StackList();
testStack.printStack();
const node1 = new ListNode(1);
const node2 = new ListNode(2);
testStack.push(node2);
testStack.pop();
testStack.pop();    //Nothing to pop
testStack.push(node1);
testStack.printStack();