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

function loopDetection<T>(ll: LinkedList<T>): INode<T> | undefined {
    let fast = ll.head;
    let slow = ll.head;

    if (!fast || !slow) return undefined;

    while (fast.next) {
        fast = fast.next;

        if (fast.next && slow.next) {
            fast = fast.next;
            slow = slow.next;
        } else {
            return undefined;
        }

        if (fast === slow) break;
    }

    slow = ll.head;

    while (fast !== slow) {
        slow = slow!.next;
        fast = fast!.next;
    }

    return slow;
}

const ll = new LinkedList();

ll.head = new Node("a");
ll.head.next = new Node("b");
ll.head.next.next = new Node("c");
ll.head.next.next.next = new Node("d");
ll.head.next.next.next.next = new Node("e");
// ll.head.next.next.next.next.next = new Node(6);
ll.head.next.next.next.next.next = ll.head.next.next;

console.log(loopDetection(ll));

export {};
