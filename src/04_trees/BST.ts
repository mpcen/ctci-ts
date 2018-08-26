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

export {};

const bst = new BSTNode(10);
insertNode(bst, 0);
insertNode(bst, 12);
insertNode(bst, -1);
insertNode(bst, 4);
insertNode(bst, 11);
insertNode(bst, 20);
