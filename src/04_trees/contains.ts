interface IBSTNode<T> {
    data: T;
    left: IBSTNode<T> | undefined;
    right: IBSTNode<T> | undefined;
}

class BSTNode<T> {
    public data: T;
    public left: IBSTNode<T> | undefined;
    public right: IBSTNode<T> | undefined;

    public constructor(data: T) {
        this.data = data;
    }
}

function addNode<T>(bstNode: IBSTNode<T>, data: T): void {
    if (data <= bstNode.data && bstNode.left) {
        addNode(bstNode.left, data);
    } else if (data <= bstNode.data && !bstNode.left) {
        bstNode.left = new BSTNode(data);
    } else if (data > bstNode.data && bstNode.right) {
        addNode(bstNode.right, data);
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
addNode(tree, 5);
addNode(tree, 0);
addNode(tree, -5);
addNode(tree, 3);
addNode(tree, 15);
addNode(tree, 20);

console.log(findNode(tree, -1));

export {};
