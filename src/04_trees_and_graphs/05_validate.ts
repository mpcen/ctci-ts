// Validate BST: Implement a function to check if a binary tree is a binary search tree.

class Node {
    public data: number;
    public left: Node | undefined = undefined;
    public right: Node | undefined = undefined;

    public constructor(data: number) {
        this.data = data;
    }
}

function validateBST(
    node: Node | undefined,
    min: number = Number.MIN_SAFE_INTEGER,
    max: number = Number.MAX_SAFE_INTEGER
): boolean {
    if (!node) return true;

    if (node.data <= min || node.data > max) return false;

    return (
        validateBST(node.left, min, node.data) &&
        validateBST(node.right, node.data, max)
    );
}

const node = new Node(9);
node.left = new Node(4);
node.left.left = new Node(-1);
node.left.right = new Node(6);
node.right = new Node(14);
node.right.left = new Node(12);
node.right.right = new Node(20);

console.log(validateBST(node));

export {};
