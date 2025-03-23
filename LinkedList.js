import { Node } from "./Node.js";

export class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }


    prepend(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }


    at(index) {
        if (index < 0 || index >= this.size) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }


    pop() {
        if (this.size === 0) return;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
        let current = this.head;
        for (let i = 0; i < this.size - 2; i++) {
            current = current.next;
        }

        current.next = null;
        this.tail = current;
        this.size--;
    }


    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }

        return false;
    }


    find(value) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) return index;
            index++;
            current = current.next;
        }

        return -1;
    }

    toString() {
        let current = this.head;
        let string = '';
        while (current !== null) {
            if (current.next === null) {
                string += `( ${current.value} ) -> null`;
            } else {
                string += `( ${current.value} ) -> `;
            }
            current = current.next;
        }
        return string;
    }


    insertAt(value, index) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            const newNode = new Node(value);
            newNode.next = this.head;
            this.head = newNode;
            if (this.size === 0) {
                this.tail = newNode;
            }
            this.size++;
            return;
        }

        if (index === this.size) {
            const newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }


    removeAt(index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            this.head = this.head.next;  //If there is only one node in the list the head will be equal null as (this.head = this.head.next), and this.head.next = null
            this.size--;
            if (this.size === 0) this.tail = null;
            return;
        }

        if (index === this.size - 1) {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
            this.size--;
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
    }


}