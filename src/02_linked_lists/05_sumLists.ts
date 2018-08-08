import * as util from "util";

interface INode<T> {
    data: T;
    next?: Node<T>;
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

function sumLists(
    lla: LinkedList<number>,
    llb: LinkedList<number>
): LinkedList<number> {
    const sumList = new LinkedList<number>();
    let carry = 0;
    let pA = lla.head;
    let pB = llb.head;
    let sum = 0;

    while (pA && pB) {
        sum = pA.data + pB.data + carry;

        if (sum > 10) {
            sum = sum - 10;
            carry = 1;
        } else {
            carry = 0;
        }

        sumList.addToTail(sum);
        pA = pA.next;
        pB = pB.next;
    }

    if (pA || pB) {
        let p = pA || pB;

        while (p) {
            sum = p.data + carry;

            if (sum >= 10) {
                sum = sum - 10;
                carry = 1;
            } else {
                carry = 0;
            }

            sumList.addToTail(sum);
            p = p.next;
        }
    }

    if (carry > 0) sumList.addToTail(carry);

    return sumList;
}

const lla = new LinkedList<number>();
lla.addToTail(0);
lla.addToTail(9);
lla.addToTail(9);

const llb = new LinkedList<number>();
llb.addToTail(1);
llb.addToTail(9);
llb.addToTail(9);
llb.addToTail(9);

console.log(
    util.inspect(sumLists(lla, llb), {
        showHidden: false,
        depth: null
    })
);

export {};
