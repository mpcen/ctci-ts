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

        if (!current) return undefined;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }
}

function intersection<T>(
    ll1: LinkedList<T>,
    ll2: LinkedList<T>
): undefined | INode<T> {
    let current1 = ll1.head;
    let current2 = ll2.head;
    let greater: INode<T> | undefined;
    let smaller: INode<T> | undefined;
    let diff: number;
    let count1: number = 1;
    let count2: number = 1;

    if (!current1 || !current2) return undefined;

    while (current1.next) {
        count1++;
        current1 = current1.next;
    }

    while (current2.next) {
        count2++;
        current2 = current2.next;
    }

    if (current1 !== current2) return undefined;

    diff = count1 - count2;

    greater = diff > 0 ? ll1.head : ll2.head;
    smaller = greater === ll1.head ? ll2.head : ll1.head;

    while (diff > 0) {
        if (greater === smaller) return greater;
        greater = greater!.next;
        diff--;
    }

    while (greater !== smaller) {
        greater = greater!.next;
        smaller = smaller!.next;
    }

    return greater;
}

const sameNode = new Node("d");
const ll1 = new LinkedList<string>();
ll1.head = new Node("a");
ll1.head.next = new Node("b");
ll1.head.next.next = new Node("c");
ll1.head.next.next.next = sameNode;

const ll2 = new LinkedList<string>();
ll2.head = new Node("l");
ll2.head.next = new Node("m");
ll2.head.next.next = sameNode;

console.log(intersection(ll1, ll2));

export {};
