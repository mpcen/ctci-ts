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

    if (!currentNode) return undefined;

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

function removeDupsWithoutBuffer<T>(
    ll: LinkedList<T>
): LinkedList<T> | undefined {
    let currentNode = ll.head;
    let fast = ll.head;
    let slow = ll.head;

    if (!currentNode) return undefined;

    while (currentNode) {
        fast = fast!.next;

        while (fast) {
            if (currentNode.data === fast.data) {
                slow!.next = fast.next;
            } else {
                slow = fast;
            }
            fast = fast.next;
        }
        currentNode = currentNode.next;
        fast = currentNode;
        slow = currentNode;
    }

    return ll;
}

const ll1 = new LinkedList<string>();
ll1.addToTail("a");
ll1.addToTail("a");
ll1.addToTail("a");
ll1.addToTail("b");
ll1.addToTail("c");
ll1.addToTail("b");
ll1.addToTail("a");
ll1.addToTail("a");
ll1.addToTail("b");

removeDupsWithBuffer<string>(ll1);
console.log(ll1);
console.log("----");

const ll2 = new LinkedList<string>();
ll2.addToTail("a");
ll2.addToTail("a");
ll2.addToTail("a");
ll2.addToTail("b");
ll2.addToTail("b");
ll2.addToTail("a");
ll2.addToTail("c");
ll2.addToTail("a");
ll2.addToTail("b");
removeDupsWithoutBuffer<string>(ll2);

console.log(ll2);

export {};
