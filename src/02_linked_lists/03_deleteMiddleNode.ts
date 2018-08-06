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

function deleteMiddleNode<T>(node: INode<T>): void | undefined {
    let p1 = node;
    let p2 = node;

    if (!p1 || !p1.next) return undefined;

    p1 = p1.next;
    p2.data = p1.data;
    p2.next = p1.next;
}

const ll = new LinkedList();
ll.addToTail("a");
ll.addToTail("b");
ll.addToTail("c");
ll.addToTail("d");

deleteMiddleNode(ll.head!.next!);

console.log(ll);

export {};
