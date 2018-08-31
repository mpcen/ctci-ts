// Given a sorted (increasing order) array with unique integer elements, write an algo-
// rithm to create a binary search tree with minimal height.

interface IBSTNode {
    data: number;
    left: IBSTNode | undefined;
    right: IBSTNode | undefined;
}

class BSTNode {
    public data: number;
    public left: IBSTNode | undefined = undefined;
    public right: IBSTNode | undefined = undefined;

    public constructor(data: number) {
        this.data = data;
    }
}

function minTree(
    items: number[],
    start: number = 0,
    end: number = items.length - 1
): BSTNode | undefined {
    if (start > end) return undefined;
    const mid = Math.floor((start + end) / 2);
    const node = new BSTNode(items[mid]);
    node.left = minTree(items, start, mid - 1);
    node.right = minTree(items, mid + 1, end);

    return node;
}

export {};

console.log(minTree([1, 2, 3, 4, 5, 6]));
