interface INode<T> {
    data: T;
    next?: INode<T>;
}

class Node<T> {
    public data: T;
    public next: INode<T> | undefined;

    public constructor(data: T, next?: INode<T>) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList<T> {
    public head?: INode<T>;

    public addToTail(value: T): void {
        const node: INode<T> = new Node(value);
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

function removeDupsWithBuffer<T>(ll: LinkedList<T>): LinkedList<T> | undefined {
    const set = new Set<T>();
    let currentNode: INode<T> | undefined = ll.head;
    let prevNode: INode<T> | undefined = undefined;

    if (!currentNode) {
        return undefined;
    }

    while (currentNode) {
        if (!set.has(currentNode.data)) {
            set.add(currentNode.data);
            prevNode = currentNode;
            currentNode = currentNode.next;
        } else {
            prevNode!.next = currentNode.next;
            currentNode = currentNode.next;
        }
    }

    return ll;
}

const ll = new LinkedList<string>();
ll.addToTail("a");
ll.addToTail("a");
ll.addToTail("a");
ll.addToTail("b");
ll.addToTail("b");
ll.addToTail("a");
ll.addToTail("a");
ll.addToTail("b");

removeDupsWithBuffer<string>(ll);

console.log(ll);

export {};
