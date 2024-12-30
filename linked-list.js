class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    add(value) {
        let newNode = {
            value: value,
            next: null
        };

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log(list);
//list.print(); // Output: 1 2 3