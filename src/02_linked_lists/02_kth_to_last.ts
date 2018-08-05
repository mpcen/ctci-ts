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
        let currentNode = this.head;

        if (!currentNode) {
            this.head = node;
            return;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }
}

function kthToLast<T>(ll: LinkedList<T>, k: number): T | undefined {
    let p1 = ll.head;
    let p2 = ll.head;
    let count = 0;

    if (!p1) return undefined;

    while (p1.next && count !== k) {
        p1 = p1.next;
        count++;
    }

    while (p1.next) {
        p1 = p1.next;
        p2 = p2!.next;
    }

    if (count !== k) return undefined;
    return p2!.data;
}

const ll1 = new LinkedList<string>();
ll1.addToTail("a");
ll1.addToTail("b");
ll1.addToTail("c");

console.log(kthToLast(ll1, 1));

export {};
