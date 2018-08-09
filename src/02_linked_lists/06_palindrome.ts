interface INode<T> {
    data: T;
    next?: INode<T>;
}

class Node<T> {
    public data: T;
    public next?: INode<T>;

    public constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    public head?: INode<T>;

    public addToTail(data: T): void {
        const node = new Node(data);
        let current = this.head;

        if (!current) {
            this.head = node;
            return;
        }

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }
}

function palindrome<T>(ll: LinkedList<T>): boolean {
    const stack: T[] = [];
    let count = 0;
    let fast = ll.head;
    let slow = ll.head;

    if (!fast || !slow) return true;

    while (fast && slow) {
        stack.push(slow.data);
        fast = fast.next;
        count++;

        if (fast) {
            fast = fast.next;
            count++;
        }
        slow = slow.next;
    }

    if (count % 2 !== 0) stack.pop();

    while (slow) {
        if (slow.data !== stack.pop()) {
            return false;
        }

        slow = slow.next;
    }

    return true;
}

const ll = new LinkedList<string>();
ll.addToTail("a");
ll.addToTail("b");
ll.addToTail("b");
ll.addToTail("a");

console.log(palindrome(ll));

export {};
