// Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.

class Node<T> {
    public data: T;
    public left: Node<T> | undefined = undefined;
    public right: Node<T> | undefined = undefined;

    public constructor(data: T) {
        this.data = data;
    }
}

function checkBalanced<T>(node: Node<T>): number {
    if (!node) return 0;

    const heightLeft: number = checkBalanced(node.left!);
    const heightRight: number = checkBalanced(node.right!);

    if (heightLeft === -1) return -1;
    if (heightRight === -1) return -1;
    if (Math.abs(heightLeft - heightRight) > 1) return -1;

    return Math.max(heightLeft, heightRight) + 1;
}

// case 1 - true, 3
// const node = new Node(4);
// node.left = new Node(5);
// node.left.left = new Node(8);
// node.left.right = new Node(6);
// node.right = new Node(7);
// node.right.right = new Node(9);
// node.right.left = new Node(2);

// case 2 - false, -1
const node = new Node(3);
node.left = new Node(1);
node.left.left = new Node(0);
node.left.right = new Node(2);
node.right = new Node(5);

node.right.left = new Node(4);
node.right.left.right = new Node(6);

console.log(checkBalanced(node) !== -1);

export {};
