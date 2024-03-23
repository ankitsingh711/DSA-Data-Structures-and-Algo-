class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add the Linkedlist at the last of list
    append(data) {
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to add the Linkedlist at the beginning of list

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Method to delete a node by value

    delete(data) {
        if(!this.head) {
            return;
        }

        if(this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next) {
            if(current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    //Method to print the LL

    print() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    //Method to find the length of the linked list

    length() {
        let count = 0;
        let current = this.head;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }

    //Method to add a node at a specific position

    insertAt(position, data) {
        if( position < 0 || position > this.lenght()) {
            return false;
        }
        if(position===0) {
            this.prepend(data)
            return true;
        }
        const newNode = new Node(data);
        let curr = this.head;
        let count = 0;
        while(count < position - 1) {
            curr = curr.next;
            count++;
        }
        newNode.next = curr.next;
        curr = curr.next;
        return true;
    }

    //Method to search a node by value
    search(value) {
        let current = this.head;
        while(current) {
            if(current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    //Method to reverse the linked list

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while(current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    //Method to find the middle of the linked List

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // Method to find if the linked list has a cycle

    isCycle() {
        if(!head || !this.head.next) {
            return false;
        }

        let slow = this.head;
        let fast = head.next;

        while(slow !== fast) {
            if(!fast || !fast.next) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }

        return true;
    }

}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(4);
myList.prepend(5);
myList.append(3)
console.log(myList.length())
