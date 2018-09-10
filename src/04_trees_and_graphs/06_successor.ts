// Write an algorithm to find the "next" node (i .e ., in-order successor ) of a given node in a
// binary search tree. You may assume that each node has a link to its parent.

class Node {
    public data: number;
    public left: Node | undefined = undefined;
    public right: Node | undefined = undefined;

    public constructor(data: number) {
        this.data = data;
    }
}

function BSTSuccessor(tree: Node | undefined, target: Node): Node | undefined {
    if (target.data > tree!.data) {
        tree = tree!.right;
        while (tree!.left) {
            tree = tree!.left;
        }
        return tree;
    } else {
        let store = tree;
        while (tree !== target) {
            if (target.data > tree!.data) {
                tree = tree!.right;
            } else {
                store = tree;
                tree = tree!.left;
            }
        }
        return store;
    }
}

function minTree(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1
): Node | undefined {
    if (start > end) return undefined;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = minTree(arr, start, mid - 1);
    node.right = minTree(arr, mid + 1, end);
    return node;
}

const bst = minTree([1, 2, 3, 4, 5, 6, 7]);
console.log(BSTSuccessor(bst, bst!.left!.left!));
export {};
