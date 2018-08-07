import * as util from "util";

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
        return;
    }
}

function partition(
    ll: LinkedList<number>,
    p: number
): LinkedList<number> | undefined {
    const lessThanList = new LinkedList<number>();
    const greaterThanList = new LinkedList<number>();
    let current = ll.head;

    if (!current) return undefined;
    if (!current.next) return ll;

    while (current) {
        if (current.data < p) {
            lessThanList.addToTail(current.data);
        } else {
            greaterThanList.addToTail(current.data);
        }

        current = current.next;
    }

    if (!lessThanList) {
        return ll;
    } else {
        current = lessThanList.head;

        while (current!.next) {
            current = current!.next;
        }

        current!.next = greaterThanList.head;
    }

    return lessThanList;
}

const ll = new LinkedList<number>();
ll.addToTail(3);
ll.addToTail(5);
ll.addToTail(8);
ll.addToTail(5);
ll.addToTail(10);
ll.addToTail(2);
ll.addToTail(1);

console.log(
    util.inspect(partition(ll, 5), {
        showHidden: false,
        depth: null
    })
);

export {};
