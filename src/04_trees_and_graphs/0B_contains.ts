interface IBSTNode<T> {
    data: T;
    left: IBSTNode<T> | undefined;
    right: IBSTNode<T> | undefined;
}

class BSTNode<T> {
    public data: T;
    public left: IBSTNode<T> | undefined = undefined;
    public right: IBSTNode<T> | undefined = undefined;

    public constructor(data: T) {
        this.data = data;
    }
}

function insertNode<T>(bstNode: IBSTNode<T>, data: T): void {
    if (data <= bstNode.data && bstNode.left) {
        insertNode(bstNode.left, data);
    } else if (data <= bstNode.data && !bstNode.left) {
        bstNode.left = new BSTNode(data);
    } else if (data > bstNode.data && bstNode.right) {
        insertNode(bstNode.right, data);
    } else {
        bstNode.right = new BSTNode(data);
    }
}

function findNode<T>(bstNode: IBSTNode<T>, value: T): BSTNode<T> | undefined {
    if (bstNode.data === value) {
        return bstNode;
    } else if (value <= bstNode.data && bstNode.left) {
        return findNode(bstNode.left, value);
    } else if (value > bstNode.data && bstNode.right) {
        return findNode(bstNode.right, value);
    } else {
        return undefined;
    }
}

const tree = new BSTNode(10);
insertNode(tree, 5);
insertNode(tree, 0);
insertNode(tree, -5);
insertNode(tree, 3);
insertNode(tree, 15);
insertNode(tree, 20);

console.log(findNode(tree, -1));

export {};
