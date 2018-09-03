class BSTNode<T> {
    public data: T;
    public left: BSTNode<T> | undefined = undefined;
    public right: BSTNode<T> | undefined = undefined;

    public constructor(data: T) {
        this.data = data;
    }
}

function insertNode<T>(bstNode: BSTNode<T>, data: T): void {
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

function validate(
    bstNode: BSTNode<number>,
    min: number | undefined = undefined,
    max: number | undefined = undefined
): boolean {
    if (max && bstNode.data > max) return false;
    if (min && bstNode.data < min) return false;
    if (bstNode.left && !validate(bstNode.left, min, bstNode.data)) {
        return false;
    }
    if (bstNode.right && !validate(bstNode.right, bstNode.data, max)) {
        return false;
    }

    return true;
}

const tree = new BSTNode(10);
insertNode(tree, 0);
insertNode(tree, -1);
insertNode(tree, 4);
insertNode(tree, 12);
insertNode(tree, 11);
insertNode(tree, 20);
insertNode(tree, 17);
insertNode(tree, 99);

tree!.left!.left!.right = new BSTNode(15);

console.log(validate(tree));

export {};
